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
 * max      alternativa a w/h: no recorta nada, sólo limita el lado más largo.
 *          Es lo que usa la galería de obras, que muestra la foto entera.
 */
const MAP = [
  // ── HOME ────────────────────────────────────────────────────────────
  // Hero: la única foto a color fuerte del sitio. Atardecer con el cerro
  // atrás y cielo abierto a la izquierda, que es donde se apoya el texto.
  { src: "d1fe31ee-1648-4c94-8394-682be3ac0620.jpeg", out: "hero-obrador.jpg", w: 1600, h: 900 },

  // Tarjetas de rubros.
  // Campo: la fila de bebederos en la estancia, con el agua adentro.
  { src: "a4356916-4ae5-44eb-a88c-da155a6a404d.jpeg", out: "campo-bebedero.jpg", w: 1200, h: 750 },
  // Obra: el mismo obrador terminado que abre /proyectos.
  { src: "2dd05cbf-caf2-48d3-917b-b13ccea1b0bc.jpeg", out: "obra-blanco.jpg", w: 1200, h: 750 },
  { src: "8a42b7d4-fcc4-4492-9c25-a705581a51a8.jpeg", out: "v-hogar.jpg", w: 1200, h: 750 },

  // Sistema constructivo: la unión y los cuatro pasos, de la planta a la llave
  { src: "b8548e59-3115-4c05-b004-579e7b7d39fa.jpeg", out: "sistema-union.jpg", w: 900, h: 1100 },
  { src: "5e223f39-77cc-484e-9cb0-48f165b6b066.jpeg", out: "sistema-01-placas.jpg", w: 900, h: 600 },
  { src: "7b70b42a-dffa-43ae-afed-eb20362e7f04.jpeg", out: "sistema-02-paredes.jpg", w: 900, h: 600 },
  { src: "fc3428d0-7062-48b8-a648-be9aaf4420c6.jpeg", out: "sistema-03-techo.jpg", w: 900, h: 600, pos: "top" },
  // Paso 4: otro obrador terminado, para no repetir el del hero de /proyectos.
  { src: "f8444090-2cc7-4810-9f8f-6c88a2560d8a.jpeg", out: "sistema-04-obrador.jpg", w: 900, h: 600 },

  // ── /productos ──────────────────────────────────────────────────────
  // Hero del catálogo: los postes recién desmoldados, apilados en planta. Es
  // la foto más "fábrica" que tenemos y en blanco y negro se lee como textura.
  { src: "IMG_3750.jpeg", out: "hero-productos.jpg", w: 1600, h: 900 },

  // Catálogo tipo tienda: todas las fotos van cuadradas (1:1) para que ninguna
  // ficha salga con la pieza cortada y la grilla se lea pareja. Cada producto
  // puede llevar hasta tres, que en la ficha pasan como carrusel.
  //
  // Campo y ganadería
  { src: "55e6bd15-5b15-4d20-ac89-c94c828ba5f1.jpeg", out: "producto-bebedero-01.jpg", w: 1000, h: 1000, pos: "attention" },
  { src: "f2a16691-e26e-47a0-82d3-501aa039ba9f.jpeg", out: "producto-bebedero-02.jpg", w: 1000, h: 1000 },
  { src: "0da3ee75-8281-4689-a4a9-026d400a1675.jpeg", out: "producto-bebedero-03.jpg", w: 1000, h: 1000 },
  { src: "b1b3fcba-8be9-4eae-bf8b-24c7150c5127.jpeg", out: "producto-comedero-01.jpg", w: 1000, h: 1000 },
  { src: "b7d5c08b-9268-4f4d-aeb2-8c9105c8731e.jpeg", out: "producto-comedero-02.jpg", w: 776, h: 776 },
  { src: "IMG_3750.jpeg", out: "producto-postes-01.jpg", w: 1000, h: 1000 },
  { src: "IMG_3751.jpeg", out: "producto-postes-02.jpg", w: 1000, h: 1000 },
  { src: "c4715667-23dd-4bfa-86e6-0f1d80ffd6d2.jpeg", out: "producto-postes-03.jpg", w: 1000, h: 1000 },
  // Tanque australiano: primero el armado con placas, terminado y en uso.
  { src: "c60c7779-08cd-42c3-a2c4-324732577a10.JPG", out: "producto-tanque-01.jpg", w: 1000, h: 1000, pos: "attention" },
  { src: "68dc357f-999f-4dd1-b510-af3938fe7291.jpeg", out: "producto-tanque-02.jpg", w: 1000, h: 1000 },
  { src: "IMG_3534.jpeg", out: "producto-tanque-03.jpg", w: 1000, h: 1000 },

  // Construcción y arquitectura
  { src: "5e223f39-77cc-484e-9cb0-48f165b6b066.jpeg", out: "producto-placas-01.jpg", w: 900, h: 900 },
  { src: "b8548e59-3115-4c05-b004-579e7b7d39fa.jpeg", out: "producto-placas-02.jpg", w: 1000, h: 1000 },
  { src: "5b479a53-60a5-421b-83e6-091256b36c75.jpeg", out: "producto-placas-03.jpg", w: 1000, h: 1000 },
  // Camineros: sendas de placa por jardín y quinta (incluye el proyecto del
  // damero con la moto atrás).
  { src: "IMG_3757.jpeg", out: "producto-caminero-01.jpg", w: 1000, h: 1000 },
  { src: "IMG_3752.jpeg", out: "producto-caminero-02.jpg", w: 1000, h: 1000 },
  { src: "IMG_3753.jpeg", out: "producto-caminero-03.jpg", w: 1000, h: 1000 },
  // Veredas: la senda pública, derecha de punta a punta.
  { src: "IMG_3755.jpeg", out: "producto-vereda-01.jpg", w: 1000, h: 1000 },
  { src: "IMG_3754.jpeg", out: "producto-vereda-02.jpg", w: 1000, h: 1000 },
  { src: "2d255e04-a39f-4c92-b3c7-c4a396a3062b.jpeg", out: "producto-vereda-03.jpg", w: 722, h: 722 },
  // Baldosas: una foto por diseño, porque el diseño es el producto.
  { src: "819eef82-7a57-4886-83ba-65a702aab105.jpeg", out: "producto-baldosa-01.jpg", w: 1000, h: 1000 },
  { src: "e4850513-aa31-444d-83aa-bebc8df6d0a5.jpeg", out: "producto-baldosa-02.jpg", w: 1000, h: 1000 },
  { src: "d6338505-1ee9-414c-9047-38234de5d6cd.jpeg", out: "producto-piso-ecologico.jpg", w: 998, h: 998 },
  // Paver de concreto: la colocación y el patio terminado.
  { src: "tipos-de-paver-de-concreto-1.jpg", out: "producto-paver-01.jpg", w: 433, h: 433, pos: "attention" },
  { src: "paver-de-concreto-5.jpg", out: "producto-paver-02.jpg", w: 667, h: 667, pos: "attention" },
  // Viga / tirante de concreto: la pieza sola y la carga de viguetas.
  { src: "IMG_3855.jpeg", out: "producto-viga-01.jpg", w: 1000, h: 1000 },
  { src: "IMG_3854.jpeg", out: "producto-viga-02.jpg", w: 1000, h: 1000 },
  { src: "IMG_3856.jpeg", out: "producto-viga-03.jpg", w: 1000, h: 1000 },

  // Vial e infraestructura
  { src: "3919c3d4-ed47-424f-adb5-f28cc7dedfe1.jpeg", out: "producto-caja-registro-01.jpg", w: 1000, h: 1000, pos: "attention" },
  { src: "5b8076fd-106c-4358-bee5-c877070a51a0.jpeg", out: "producto-caja-registro-02.jpg", w: 960, h: 960 },
  { src: "b04d451b-4c10-40f3-bca4-5112a1a2d7b6.jpeg", out: "producto-caja-registro-03.jpg", w: 1000, h: 1000, pos: "attention" },
  { src: "8c193067-3c6c-418f-82ca-9db23bd2acb8.jpeg", out: "producto-caja-electrica-01.jpg", w: 1000, h: 1000, pos: "attention" },
  // Tapa de registro: producto aparte, no una foto de la caja.
  { src: "tapa de registro.webp", out: "producto-tapa-registro-01.jpg", w: 600, h: 600 },
  { src: "cordon de vereda.jpeg", out: "producto-cordon-vereda-01.jpg", w: 514, h: 514 },
  { src: "IMG_3850.WEBP", out: "producto-alcantarilla-tubular-01.jpg", w: 800, h: 800 },
  { src: "IMG_3851.JPG", out: "producto-alcantarilla-tubular-02.jpg", w: 413, h: 413 },
  { src: "725a7560-c925-4b62-af31-8157512cc70b.JPG", out: "producto-alcantarilla-tubular-03.jpg", w: 502, h: 502, pos: "centre" },
  { src: "IMG_3849.jpeg", out: "producto-alcantarilla-celular-01.jpg", w: 600, h: 600 },

  // ── /proyectos ──────────────────────────────────────────────────────
  // Hero propio: otro obrador, largo y con la galería en fuga. Va en blanco y
  // negro, así que se elige por volumen y luz, no por color.
  { src: "IMG_3641.jpeg", out: "hero-proyectos.jpg", w: 1280, h: 720, pos: "top" },

  // Tarjetas de los cuatro tipos de obra
  { src: "6a855dd2-b203-4052-9c5c-27058c4365ce.jpeg", out: "obra-obrador.jpg", w: 1000, h: 750 },
  { src: "bee883ad-6b74-4a9a-b317-db1587ed25f9.jpeg", out: "obra-casa.jpg", w: 1000, h: 750 },
  { src: "50a8fe7d-0f83-4c64-9828-c60624d76693.jpeg", out: "obra-deposito.jpg", w: 1000, h: 750 },
  { src: "d5f27cb5-4377-4c6b-8f54-223ccb46b738.jpeg", out: "obra-galpon.jpg", w: 1000, h: 750 },

  // ── Fábrica y equipo: el bloque de proceso ──────────────────────────
  { src: "b0c57c36-c981-4ec9-bb7d-4507e6c97cfd.jpeg", out: "proceso-montaje.jpg", w: 1200, h: 900 },
  // Máquina propia: la excavadora bajando un anillo de concreto en obra.
  { src: "725a7560-c925-4b62-af31-8157512cc70b.JPG", out: "proceso-maquina.jpg", w: 1200, h: 900 },
  { src: "cd203541-bd98-45b6-96d4-93da2a7c1154.jpeg", out: "proceso-pintura.jpg", w: 1200, h: 900, pos: "attention" },
  { src: "IMG_3534.jpeg", out: "proceso-tanque.jpg", w: 1200, h: 900 },
  { src: "da569478-c0d0-44ec-92e3-a1aadbd12892.jpeg", out: "proceso-aerea.jpg", w: 1600, h: 900 },
];

/**
 * Galería de obras entregadas (/proyectos).
 *
 * Es un carrusel único, sin categorías: obradores, casas, galpones, depósitos,
 * tanques, camineros, veredas, interiores, terminaciones y gente trabajando,
 * mezclados a propósito para que se vea el volumen de obra y no un catálogo.
 * Acá NO van fotos de producto suelto: para eso está /productos.
 *
 * Se publican sin recorte (`max`): en el visor grande la foto se ve entera
 * sobre fondo oscuro, como en una galería de hotel, y la miniatura recorta.
 * Para sumar o sacar una foto: agregá o borrá una línea de esta lista.
 */
const GALERIA = [
  "2dd05cbf-caf2-48d3-917b-b13ccea1b0bc.jpeg", // obrador terminado, pilares colorados
  "IMG_3752.jpeg", // caminero de placas con canto rodado
  "0e2266d5-7dd4-4203-95ce-78b849c4743b.jpeg", // casa terminada
  "b0c57c36-c981-4ec9-bb7d-4507e6c97cfd.jpeg", // equipo montando placas
  "62eefd70-188a-41d2-a13c-292974bf92c7.jpeg", // galpón por dentro
  "77b61943-2428-42af-805a-be459a9d3f58.jpeg", // interior terminado
  "087d9cc5-a287-4d51-972f-2a076c2a87d3.jpeg", // obrador de frente
  "095ee07c-54a0-4855-8c3e-b30890a8fe7d.jpeg", // galpón con frente colorado y techo a dos aguas
  "IMG_3534.jpeg", // montaje de tanque australiano
  "a4abfe06-9e4e-4e33-95ed-fca70afb05db.jpeg", // casa con frente vidriado
  "28495a63-c256-4404-b856-6d4f6a5f216f.jpeg", // corrales de placas en obra
  "b0efb909-d31d-4e7f-87d8-47c9e9078bc9.jpeg", // living terminado
  "d5f27cb5-4377-4c6b-8f54-223ccb46b738.jpeg", // galpón desde el aire
  "8cbb7efa-0308-4d45-aa0c-82500b34abf7.jpeg", // obrador al atardecer
  "ec9dd00e-2561-42de-97c5-2876a7fea4bb.jpeg", // alisado de piso
  "28a56a9e-fdc4-487e-a258-c6550c37dcf2.jpeg", // depósito de concreto sobre el playón de grava
  "6af58b9b-2375-41c0-89aa-d1adf1e220b0.jpeg", // casa entregada
  "41b5fca3-6a78-413d-b033-ae0086031ae1.jpeg", // retícula de pilares desde el aire
  "ca57881b-c4ad-40f7-8ca0-c66b59800179.jpeg", // pasillo interior terminado
  "22d7a2a1-de5f-4c92-a671-f362e3b985b9.jpeg", // obrador con galería
  "e1a8b5e5-667f-4f48-afff-7130fe248eb7.jpeg", // pozo con brocal de concreto
  "9cd3f184-1415-4972-983c-880f12931b11.jpeg", // obrador con vereda verde
  "IMG_3753.jpeg", // caminero de baldosas en damero
  "2d6812c5-d135-4905-964f-a3776fe42526.jpeg", // oficina de obrador terminada y amoblada
  "bc1f84a9-74de-4124-9fc7-20dbe59718a4.jpeg", // depósito por dentro
  "7b70b42a-dffa-43ae-afed-eb20362e7f04.jpeg", // paredes armándose
  "9a90e483-6fc8-4b49-b717-d5f9d967b48c.jpeg", // casa sobre el pasto
  "cd203541-bd98-45b6-96d4-93da2a7c1154.jpeg", // pintura de terminación
  "4d4b4dde-fa6b-48de-8b40-6959d7392566.jpeg", // obrador con galería y pilares
  "15a7e2c3-2b83-4150-b655-fb7bfb70f0bf.jpeg", // interior terminado
  "IMG_3533.jpeg", // techo montándose
  "47421e82-55ad-45f8-a866-f36a62c7ef31.jpeg", // obrador iluminado de noche
  "e6fff89c-4b77-4170-a303-927480c903c2.jpeg", // casa terminada
  "5ae2502f-1e11-4061-8205-34e97bbfbb36.jpeg", // corral de manejo
  "b4d8f22a-af44-42c0-b447-3c741377df36.jpeg", // obrador blanco
  "ee57ea95-27db-4ba8-9c7f-ddb105cac915.jpeg", // galpón grande
  "cc95f690-962c-41d2-b00e-e5edeb8cfc4f.jpeg", // sanitarios terminados
  "IMG_3631.jpeg", // obrador con galería abierta
  "da569478-c0d0-44ec-92e3-a1aadbd12892.jpeg", // obra desde el aire
  "7cfb0171-e9ce-4855-af09-d321a87d5795.jpeg", // obrador con la galería de acceso terminada
  "763a484c-ac3b-4d96-8361-4e079eb44e35.jpeg", // casa al atardecer
  "5b479a53-60a5-421b-83e6-091256b36c75.jpeg", // muros cerrados, vanos abiertos
  "babb646d-ddd2-4d2e-92ce-a2676e0f6630.jpeg", // habitación terminada
  "6a855dd2-b203-4052-9c5c-27058c4365ce.jpeg", // obrador en uso
  "IMG_3535.jpeg", // casa con galería
  "6d412bf1-4271-4a9a-92e7-ee96757a4c95.jpeg", // colocación de alcantarilla
  "df26ec0c-d71e-48e9-a355-d7a8177807e9.jpeg", // obrador entregado
  "a75e6863-6563-4769-b2ec-6b0f2a07c6b0.jpeg", // obrador largo al atardecer
  "5c446a8c-3aa5-4c7c-83db-1595490dd462.jpeg", // interior terminado
  "50a8fe7d-0f83-4c64-9828-c60624d76693.jpeg", // depósito con piso verde
  "IMG_3632.jpeg", // obrador terminado
  "e3ae434c-5b50-47fc-acd9-4362742ed055.jpeg", // interior terminado
  "6433e84a-1195-4cd9-a9f1-9f4411874759.jpeg", // obrador con vereda verde
  "IMG_3757.jpeg", // caminero de placas cara lisa
  "b5f99c39-3172-4afa-8555-58bae329dbc4.jpeg", // casa terminada
  "af43ee8c-523a-47e6-b56b-68c345e676f9.jpeg", // casa prefabricada entre los árboles
  "37bedfb4-524f-4184-b569-5c7994d35c96.jpeg", // galería exterior
  "a00bc0e8-930c-46a0-a7b3-ec917669bc73.jpeg", // interior terminado
  "3b1db3e0-dfae-4d4b-9aa1-5ed0dc9e78c8.jpeg", // terminaciones por dentro
  "bee883ad-6b74-4a9a-b317-db1587ed25f9.jpeg", // casa entregada
  "68e1c4a7-857c-4c88-8b55-8e036643392c.jpeg", // muro y vereda de placas
  "9bd7e62d-0556-4c04-851c-a31d89e1f8d4.jpeg", // terminación interior
  "IMG_3640.jpeg", // obrador con galería
  "dd2e96ee-aecf-471b-959f-58d78ca17cc9.jpeg", // muros de un galpón levantándose en obra
  "df4bb2bf-2d58-4556-bc5d-542c8649106e.jpeg", // sanitario terminado
  "28676838-9009-4494-85bd-55c8442ca027.jpeg", // aguada con bebederos
  "f8444090-2cc7-4810-9f8f-6c88a2560d8a.jpeg", // obrador terminado
];

const GALERIA_MAP = GALERIA.map((src, i) => ({
  src,
  out: `galeria-${String(i + 1).padStart(2, "0")}.jpg`,
  max: 1200,
}));

await mkdir(OUT, { recursive: true });

let ok = 0;
const faltan = [];

for (const { src, out, w, h, pos, max } of [...MAP, ...GALERIA_MAP]) {
  const input = join(RAW, src);
  if (!existsSync(input)) {
    faltan.push(src);
    continue;
  }

  const img = sharp(input).rotate(); // aplica orientación EXIF y la descarta

  // Modo `max`: no se recorta, sólo se limita el lado más largo. Es el de la
  // galería, donde la foto se ve entera sobre fondo oscuro.
  if (max) {
    await img
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(join(OUT, out));
    console.log(`${out}  ←  ${src}`);
    ok++;
    continue;
  }

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
