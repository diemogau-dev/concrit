/**
 * Arma hojas de contactos de las fotos crudas de fotos/ para poder revisarlas
 * de a muchas en vez de abrirlas una por una.
 *
 *   npm run fotos
 *
 * Deja en fotos/_hojas/:
 *   hoja-01.jpg, hoja-02.jpg …   grillas de 20 fotos numeradas
 *   indice.txt                   número → archivo, con medidas y peso
 *
 * Las hojas son material de trabajo: no se publican ni se versionan.
 */
import sharp from "sharp";
import { mkdir, readdir, stat, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, extname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(__dirname, "..", "fotos");
const SALIDA = join(RAIZ, "_hojas");

const SOPORTADAS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);
// El iPhone guarda HEIC por defecto y sharp no lo abre sin libheif.
const NO_SOPORTADAS = new Set([".heic", ".heif"]);

// Grilla de la hoja de contactos.
const COLS = 4;
const FILAS = 5;
const CELDA_W = 340;
const IMG_H = 250;
const ETIQUETA_H = 28;
const CELDA_H = IMG_H + ETIQUETA_H;
const POR_HOJA = COLS * FILAS;

/** Lista recursiva de imágenes, salteando la carpeta de hojas. */
async function listarFotos(dir) {
  const entradas = await readdir(dir, { withFileTypes: true });
  const fotos = [];
  const descartadas = [];

  for (const e of entradas.sort((a, b) => a.name.localeCompare(b.name))) {
    const ruta = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "_hojas") continue;
      const sub = await listarFotos(ruta);
      fotos.push(...sub.fotos);
      descartadas.push(...sub.descartadas);
      continue;
    }
    const ext = extname(e.name).toLowerCase();
    if (SOPORTADAS.has(ext)) fotos.push(ruta);
    else if (NO_SOPORTADAS.has(ext)) descartadas.push(ruta);
  }
  return { fotos, descartadas };
}

/** Escapa lo que va dentro del SVG de la etiqueta. */
function escaparXml(s) {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c],
  );
}

/** Recorta el nombre para que entre en la etiqueta de la celda. */
function acortar(texto, max = 38) {
  return texto.length <= max ? texto : `…${texto.slice(-(max - 1))}`;
}

async function main() {
  let listado;
  try {
    listado = await listarFotos(RAIZ);
  } catch {
    console.error(`No existe la carpeta ${RAIZ}. Creala y subí ahí las fotos.`);
    process.exitCode = 1;
    return;
  }

  const { fotos, descartadas } = listado;

  if (descartadas.length) {
    console.warn(
      `\n⚠ ${descartadas.length} archivo(s) en HEIC/HEIF que no se pueden abrir.`,
    );
    console.warn("  Exportalos como JPG y volvé a subirlos:");
    for (const d of descartadas.slice(0, 10)) {
      console.warn(`  · ${relative(RAIZ, d)}`);
    }
    if (descartadas.length > 10) console.warn(`  · … y ${descartadas.length - 10} más`);
    console.warn("");
  }

  if (!fotos.length) {
    console.log("No hay fotos para revisar todavía en fotos/.");
    return;
  }

  await rm(SALIDA, { recursive: true, force: true });
  await mkdir(SALIDA, { recursive: true });

  const indice = [];
  const hojas = Math.ceil(fotos.length / POR_HOJA);

  for (let h = 0; h < hojas; h++) {
    const tanda = fotos.slice(h * POR_HOJA, (h + 1) * POR_HOJA);
    const capas = [];

    for (let i = 0; i < tanda.length; i++) {
      const ruta = tanda[i];
      const n = h * POR_HOJA + i + 1;
      const nombre = relative(RAIZ, ruta);
      const col = i % COLS;
      const fila = Math.floor(i / COLS);

      let meta;
      let thumb;
      try {
        const img = sharp(ruta).rotate(); // respeta la orientación EXIF
        meta = await img.metadata();
        thumb = await img
          .resize({
            width: CELDA_W - 8,
            height: IMG_H - 8,
            fit: "contain",
            background: { r: 24, g: 23, b: 20 },
          })
          .jpeg({ quality: 78 })
          .toBuffer();
      } catch (err) {
        console.warn(`No se pudo leer ${nombre}: ${err.message}`);
        continue;
      }

      const tamano = (await stat(ruta)).size;
      indice.push(
        `${String(n).padStart(3, "0")}  ${nombre}  ${meta.width}x${meta.height}  ${(
          tamano / 1024 / 1024
        ).toFixed(2)} MB`,
      );

      capas.push({
        input: thumb,
        left: col * CELDA_W + 4,
        top: fila * CELDA_H + 4,
      });

      const etiqueta = `<svg width="${CELDA_W}" height="${ETIQUETA_H}">
        <rect width="100%" height="100%" fill="#201F1C"/>
        <text x="8" y="19" font-family="DejaVu Sans, Arial, sans-serif" font-size="15" font-weight="bold" fill="#8F9260">${n}</text>
        <text x="${n > 99 ? 40 : n > 9 ? 32 : 24}" y="19" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#C9C6BE">${escaparXml(
          acortar(nombre),
        )}</text>
      </svg>`;

      capas.push({
        input: Buffer.from(etiqueta),
        left: col * CELDA_W,
        top: fila * CELDA_H + IMG_H,
      });
    }

    const hoja = join(SALIDA, `hoja-${String(h + 1).padStart(2, "0")}.jpg`);
    await sharp({
      create: {
        width: COLS * CELDA_W,
        height: FILAS * CELDA_H,
        channels: 3,
        background: { r: 32, g: 31, b: 28 },
      },
    })
      .composite(capas)
      .jpeg({ quality: 80 })
      .toFile(hoja);

    console.log(`→ ${relative(RAIZ, hoja)}  (${tanda.length} fotos)`);
  }

  await writeFile(
    join(SALIDA, "indice.txt"),
    `${fotos.length} fotos en ${hojas} hoja(s)\n\n${indice.join("\n")}\n`,
    "utf8",
  );

  console.log(`\n${fotos.length} fotos listas para revisar en fotos/_hojas/.`);
}

await main();
