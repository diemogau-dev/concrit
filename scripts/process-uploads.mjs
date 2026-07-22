/**
 * Procesa las fotos reales subidas en uploads-raw/ y las coloca en
 * public/assets/ con el nombre que espera el sitio. Reorienta según EXIF,
 * recomprime (mozjpeg) y descarta metadata (incluye GPS de las fotos de
 * celular) antes de publicar.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW = join(__dirname, "..", "uploads-raw");
const OUT = join(__dirname, "..", "public", "assets");

const MAP = [
  { src: "IMG_3640.jpg", out: "hero-obrador.jpg", maxWidth: 1920 },
  { src: "IMG_3526.jpg", out: "campo-bebedero.jpg", maxWidth: 1400 },
  { src: "IMG_3632.jpg", out: "obra-blanco.jpg", maxWidth: 1400 },
  { src: "IMG_3630.JPG", out: "v-hogar.jpg", maxWidth: 1400 },
  { src: "IMG_3521.jpg", out: "sistema-union.jpg", maxWidth: 1400 },
  { src: "IMG_3529.jpg", out: "sistema-pilares.jpg", maxWidth: 1400 },
  { src: "IMG_3530.jpg", out: "sistema-placas.jpg", maxWidth: 1400 },
  { src: "IMG_3531.jpg", out: "sistema-muros.jpg", maxWidth: 1400 },
  { src: "IMG_3533.jpg", out: "sistema-techo.jpg", maxWidth: 1400 },
];

await mkdir(OUT, { recursive: true });

for (const { src, out, maxWidth } of MAP) {
  const input = join(RAW, src);
  const output = join(OUT, out);
  const img = sharp(input).rotate(); // aplica orientación EXIF y la descarta
  const meta = await img.metadata();

  const pipeline =
    meta.width && meta.width > maxWidth
      ? img.resize({ width: maxWidth })
      : img;

  await pipeline
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  console.log(`${src} → ${out}`);
}

console.log("Fotos reales publicadas en public/assets/.");
