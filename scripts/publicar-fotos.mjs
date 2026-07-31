/**
 * Publica las fotos elegidas de fotos/ en public/assets/ con el nombre que
 * espera cada lugar del sitio.
 *
 *   npm run publicar-fotos
 *
 * Qué hace con cada una: aplica la orientación EXIF y la descarta (junto con
 * el GPS de las fotos de celular), recorta al encuadre que pide el lugar donde
 * va, recomprime con mozjpeg y la deja en public/assets/.
 *
 * Nunca agranda una foto más allá de su tamaño original: si la fuente es chica,
 * se baja el objetivo manteniendo la proporción del encuadre.
 *
 * El mapeo de abajo es la curaduría: qué foto va en qué lugar. Para cambiar una
 * elección, cambiá el `src` de esa línea y volvé a correr el script.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW = join(__dirname, "..", "fotos");
const OUT = join(__dirname, "..", "public", "assets");

/**
 * src      archivo dentro de fotos/
 * out      nombre final en public/assets/
 * w, h     encuadre objetivo (proporción). No se agranda más allá del original.
 * pos      de dónde recortar cuando hay que sacrificar borde: centre (default),
 *          top, bottom, left, right, attention (busca la zona con más detalle)
 */
const MAP = [
  // ── HOME ────────────────────────────────────────────────────────────
  // Hero: la única foto a color fuerte del sitio. Atardecer con el cerro
  // atrás y cielo abierto a la izquierda, que es donde se apoya el texto.
  { src: "d1fe31ee-1648-4c94-8394-682be3ac0620.jpeg", out: "hero-obrador.jpg", w: 1600, h: 900 },

  // Tarjetas de rubros
  { src: "b7d5c08b-9268-4f4d-aeb2-8c9105c8731e.jpeg", out: "campo-bebedero.jpg", w: 1200, h: 750 },
  { src: "b4d8f22a-af44-42c0-b447-3c741377df36.jpeg", out: "obra-blanco.jpg", w: 1200, h: 750 },
  { src: "8a42b7d4-fcc4-4492-9c25-a705581a51a8.jpeg", out: "v-hogar.jpg", w: 1200, h: 750 },

  // Sistema constructivo: la unión y los cuatro pasos de obra
  { src: "b8548e59-3115-4c05-b004-579e7b7d39fa.jpeg", out: "sistema-union.jpg", w: 900, h: 1100 },
  { src: "41b5fca3-6a78-413d-b033-ae0086031ae1.jpeg", out: "sistema-pilares.jpg", w: 900, h: 600, pos: "bottom" },
  { src: "fc3428d0-7062-48b8-a648-be9aaf4420c6.jpeg", out: "sistema-placas.jpg", w: 900, h: 600 },
  { src: "5b479a53-60a5-421b-83e6-091256b36c75.jpeg", out: "sistema-muros.jpg", w: 900, h: 600 },
  { src: "IMG_3533.jpeg", out: "sistema-techo.jpg", w: 900, h: 600 },

  // ── /productos ──────────────────────────────────────────────────────
  { src: "55e6bd15-5b15-4d20-ac89-c94c828ba5f1.jpeg", out: "producto-bebedero.jpg", w: 1000, h: 750, pos: "attention" },
  { src: "b7d5c08b-9268-4f4d-aeb2-8c9105c8731e.jpeg", out: "producto-comedero.jpg", w: 1000, h: 750 },
  { src: "IMG_3751.jpeg", out: "producto-postes.jpg", w: 1000, h: 750, pos: "attention" },
  { src: "a8c9f003-d36b-4c04-80d9-74e229a85153.jpeg", out: "producto-tanque.jpg", w: 1000, h: 750 },
  // Familia de placas: bloque ancho, va la foto de producción con volumen.
  { src: "5e223f39-77cc-484e-9cb0-48f165b6b066.jpeg", out: "producto-placas.jpg", w: 1400, h: 900 },
  { src: "819eef82-7a57-4886-83ba-65a702aab105.jpeg", out: "producto-baldosas.jpg", w: 1000, h: 750 },
  { src: "3919c3d4-ed47-424f-adb5-f28cc7dedfe1.jpeg", out: "producto-caja-registro.jpg", w: 1000, h: 750, pos: "attention" },
  { src: "8c193067-3c6c-418f-82ca-9db23bd2acb8.jpeg", out: "producto-caja-electrica.jpg", w: 1000, h: 750, pos: "attention" },
  { src: "c964ef38-4328-4bd2-badb-e7515654be77.jpeg", out: "producto-alcantarilla-tubular.jpg", w: 1000, h: 750, pos: "attention" },
  { src: "IMG_3849.jpeg", out: "producto-alcantarilla-celular.jpg", w: 800, h: 600 },
  // Cara lisa de la placa: caminero terminado, el argumento de venta del bloque.
  { src: "IMG_3757.jpeg", out: "producto-placa-cara-lisa.jpg", w: 1200, h: 900 },

  // ── /proyectos ──────────────────────────────────────────────────────
  // Hero propio, otro atardecer distinto al de la home.
  { src: "a75e6863-6563-4769-b2ec-6b0f2a07c6b0.jpeg", out: "hero-proyectos.jpg", w: 1280, h: 720 },

  // Tarjetas de los cuatro tipos de obra
  { src: "6a855dd2-b203-4052-9c5c-27058c4365ce.jpeg", out: "obra-obrador.jpg", w: 1000, h: 750 },
  { src: "bee883ad-6b74-4a9a-b317-db1587ed25f9.jpeg", out: "obra-casa.jpg", w: 1000, h: 750 },
  { src: "50a8fe7d-0f83-4c64-9828-c60624d76693.jpeg", out: "obra-deposito.jpg", w: 1000, h: 750 },
  { src: "d5f27cb5-4377-4c6b-8f54-223ccb46b738.jpeg", out: "obra-galpon.jpg", w: 1000, h: 750 },

  // Galería · Obradores
  { src: "087d9cc5-a287-4d51-972f-2a076c2a87d3.jpeg", out: "galeria-obradores-01.jpg", w: 1200, h: 900 },
  { src: "22d7a2a1-de5f-4c92-a671-f362e3b985b9.jpeg", out: "galeria-obradores-02.jpg", w: 1200, h: 900 },
  { src: "2dd05cbf-caf2-48d3-917b-b13ccea1b0bc.jpeg", out: "galeria-obradores-03.jpg", w: 1200, h: 900 },
  { src: "6433e84a-1195-4cd9-a9f1-9f4411874759.jpeg", out: "galeria-obradores-04.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "8cbb7efa-0308-4d45-aa0c-82500b34abf7.jpeg", out: "galeria-obradores-05.jpg", w: 1200, h: 900 },
  { src: "df26ec0c-d71e-48e9-a355-d7a8177807e9.jpeg", out: "galeria-obradores-06.jpg", w: 1200, h: 900 },
  { src: "IMG_3641.jpeg", out: "galeria-obradores-07.jpg", w: 1200, h: 900 },
  { src: "IMG_3535.jpeg", out: "galeria-obradores-08.jpg", w: 1200, h: 900 },

  // Galería · Casas
  { src: "0e2266d5-7dd4-4203-95ce-78b849c4743b.jpeg", out: "galeria-casas-01.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "6af58b9b-2375-41c0-89aa-d1adf1e220b0.jpeg", out: "galeria-casas-02.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "9a90e483-6fc8-4b49-b717-d5f9d967b48c.jpeg", out: "galeria-casas-03.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "a4abfe06-9e4e-4e33-95ed-fca70afb05db.jpeg", out: "galeria-casas-04.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "b5f99c39-3172-4afa-8555-58bae329dbc4.jpeg", out: "galeria-casas-05.jpg", w: 1200, h: 900 },
  { src: "e6fff89c-4b77-4170-a303-927480c903c2.jpeg", out: "galeria-casas-06.jpg", w: 1200, h: 900 },

  // Galería · Galpones
  { src: "095ee07c-54a0-4855-8c3e-b30890a8fe7d.jpeg", out: "galeria-galpones-01.jpg", w: 1200, h: 900 },
  { src: "15b5706a-5f2e-48ee-bc3c-c6a83550e740.jpeg", out: "galeria-galpones-02.jpg", w: 1200, h: 900 },
  { src: "62eefd70-188a-41d2-a13c-292974bf92c7.jpeg", out: "galeria-galpones-03.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "b2898b3d-a030-4787-8db0-7863d6aea171.jpeg", out: "galeria-galpones-04.jpg", w: 1200, h: 900 },
  { src: "ee57ea95-27db-4ba8-9c7f-ddb105cac915.jpeg", out: "galeria-galpones-05.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "13754305-7b01-463e-be7d-ec9d1378080f.jpeg", out: "galeria-galpones-06.jpg", w: 1200, h: 900, pos: "attention" },

  // Galería · Depósitos
  { src: "28a56a9e-fdc4-487e-a258-c6550c37dcf2.jpeg", out: "galeria-depositos-01.jpg", w: 1200, h: 900 },
  { src: "bc1f84a9-74de-4124-9fc7-20dbe59718a4.jpeg", out: "galeria-depositos-02.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "a965a269-f057-44d8-817e-a6eb203391a0.jpeg", out: "galeria-depositos-03.jpg", w: 1200, h: 900 },

  // Galería · Interiores terminados (el argumento de llave en mano)
  { src: "77b61943-2428-42af-805a-be459a9d3f58.jpeg", out: "galeria-interiores-01.jpg", w: 1200, h: 900 },
  { src: "b0efb909-d31d-4e7f-87d8-47c9e9078bc9.jpeg", out: "galeria-interiores-02.jpg", w: 1200, h: 900 },
  { src: "babb646d-ddd2-4d2e-92ce-a2676e0f6630.jpeg", out: "galeria-interiores-03.jpg", w: 1200, h: 900 },
  { src: "e3ae434c-5b50-47fc-acd9-4362742ed055.jpeg", out: "galeria-interiores-04.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "a00bc0e8-930c-46a0-a7b3-ec917669bc73.jpeg", out: "galeria-interiores-05.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "15a7e2c3-2b83-4150-b655-fb7bfb70f0bf.jpeg", out: "galeria-interiores-06.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "ca57881b-c4ad-40f7-8ca0-c66b59800179.jpeg", out: "galeria-interiores-07.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "5c446a8c-3aa5-4c7c-83db-1595490dd462.jpeg", out: "galeria-interiores-08.jpg", w: 1200, h: 900, pos: "attention" },

  // ── Fábrica y equipo: el bloque de proceso ──────────────────────────
  { src: "b0c57c36-c981-4ec9-bb7d-4507e6c97cfd.jpeg", out: "proceso-montaje.jpg", w: 1200, h: 900 },
  { src: "ec9dd00e-2561-42de-97c5-2876a7fea4bb.jpeg", out: "proceso-piso.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "cd203541-bd98-45b6-96d4-93da2a7c1154.jpeg", out: "proceso-pintura.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "IMG_3534.jpeg", out: "proceso-tanque.jpg", w: 1200, h: 900 },
  { src: "725a7560-c925-4b62-af31-8157512cc70b.jpeg", out: "proceso-izaje.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "da569478-c0d0-44ec-92e3-a1aadbd12892.jpeg", out: "proceso-aerea.jpg", w: 1600, h: 900 },
];

await mkdir(OUT, { recursive: true });

let ok = 0;
const faltan = [];

for (const { src, out, w, h, pos } of MAP) {
  const input = join(RAW, src);
  if (!existsSync(input)) {
    faltan.push(src);
    continue;
  }

  const img = sharp(input).rotate(); // aplica orientación EXIF y la descarta
  const meta = await img.metadata();

  // No agrandar: si la fuente no da, se baja el objetivo manteniendo el encuadre.
  const escala = Math.min(1, meta.width / w, meta.height / h);
  const anchoFinal = Math.round(w * escala);
  const altoFinal = Math.round(h * escala);

  await img
    .resize({
      width: anchoFinal,
      height: altoFinal,
      fit: "cover",
      position: pos ?? "centre",
    })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(join(OUT, out));

  const aviso = escala < 1 ? `  (la fuente daba para ${anchoFinal}x${altoFinal})` : "";
  console.log(`${out}  ←  ${src}${aviso}`);
  ok++;
}

if (faltan.length) {
  console.warn(`\n⚠ No se encontraron ${faltan.length} archivo(s):`);
  for (const f of faltan) console.warn(`  · ${f}`);
}

console.log(`\n${ok} fotos publicadas en public/assets/.`);
