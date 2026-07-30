/**
 * Genera placeholders sólidos en tonos de concreto para /public/assets/.
 * Reemplazá estos archivos por las fotos reales (mismo nombre) cuando estén.
 * Las imágenes llevan filtro grayscale en el sitio, así que el tono final es gris.
 *
 * Por defecto NO pisa archivos existentes, así se puede correr sin miedo a
 * borrar una foto real ya cargada. Para regenerar todo desde cero:
 *   node scripts/generate-placeholders.mjs --force
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const FORCE = process.argv.includes("--force");

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets");

// tono de concreto (warm gray). El sitio lo desatura con grayscale(1).
const CONCRETE = { r: 137, g: 133, b: 124 }; // #898578
const CONCRETE_DARK = { r: 43, g: 42, b: 38 }; // #2B2A26 (hero, va con overlay)

const slots = [
  { name: "hero-obrador.jpg", w: 1600, h: 900, bg: CONCRETE_DARK },
  { name: "campo-bebedero.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "obra-blanco.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "v-hogar.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "sistema-union.jpg", w: 900, h: 1100, bg: CONCRETE_DARK },
  { name: "sistema-pilares.jpg", w: 900, h: 560, bg: CONCRETE },
  { name: "sistema-placas.jpg", w: 900, h: 560, bg: CONCRETE },
  { name: "sistema-muros.jpg", w: 900, h: 560, bg: CONCRETE },
  { name: "sistema-techo.jpg", w: 900, h: 560, bg: CONCRETE },

  // Catálogo (/productos) — las rutas viven en src/lib/productos.ts
  { name: "producto-bebedero.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-comedero.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-postes.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-tanque.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-placas.jpg", w: 1200, h: 720, bg: CONCRETE },
  { name: "producto-piso-ecologico.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-baldosas.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-caja-registro.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-caja-electrica.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-cordon.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-alcantarilla-tubular.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-alcantarilla-celular.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "producto-placa-cara-lisa.jpg", w: 1200, h: 900, bg: CONCRETE },

  // Proyectos (/proyectos) — las rutas viven en src/lib/proyectos.ts
  { name: "obra-obrador.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "obra-galpon.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "obra-deposito.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "obra-casa.jpg", w: 900, h: 640, bg: CONCRETE },
  { name: "proyecto-01.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-02.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-03.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-04.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-05.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-06.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-07.jpg", w: 900, h: 700, bg: CONCRETE },
  { name: "proyecto-08.jpg", w: 900, h: 700, bg: CONCRETE },
];

async function makeSolid({ name, w, h, bg }) {
  const dest = join(OUT, name);
  if (!FORCE && existsSync(dest)) {
    console.log("·", name, "ya existe, se deja como está");
    return;
  }
  await sharp({
    create: { width: w, height: h, channels: 3, background: bg },
  })
    .jpeg({ quality: 82 })
    .toFile(dest);
  console.log("→", name, `${w}x${h}`);
}

async function makeOg() {
  const dest = join(OUT, "og-image.jpg");
  if (!FORCE && existsSync(dest)) {
    console.log("· og-image.jpg ya existe, se deja como está");
    return;
  }
  const w = 1200;
  const h = 630;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#201F1C"/>
    <rect x="120" y="300" width="150" height="10" fill="#5C5F3C"/>
    <text x="120" y="270" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="900" letter-spacing="4" fill="#EDEBE5">CONCRIT</text>
    <text x="122" y="360" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" letter-spacing="3" fill="#F2F1ED">SE INSTALA UNA VEZ. Y QUEDA PARA SIEMPRE.</text>
    <text x="122" y="410" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#918D84">Prefabricados de concreto macizo &#183; Ruta 9, Villa Hayes &#183; Paraguay</text>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile(dest);
  console.log("→ og-image.jpg 1200x630");
}

await mkdir(OUT, { recursive: true });
for (const s of slots) await makeSolid(s);
await makeOg();
console.log("Placeholders listos.");
