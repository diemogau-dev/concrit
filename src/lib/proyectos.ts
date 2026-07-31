/**
 * Data de la página /proyectos.
 *
 * Dos cosas viven acá:
 *  · `tiposDeObra`  las cuatro tarjetas de "Qué construimos".
 *  · `galeriaObras` el carrusel de obras entregadas.
 *
 * ── Cómo cargar más fotos a la galería ───────────────────────────────────
 * Agregá el archivo a la lista `GALERIA` de scripts/publicar-fotos.mjs, corré
 * `npm run publicar-fotos` y sumá acá una línea con su descripción y medidas.
 * El carrusel se acomoda solo: no hay un número fijo de fotos.
 *
 * En la galería NO van nombres de obra, localidades ni epígrafes: es un
 * carrusel de fotos y nada más. El `alt` existe sólo para accesibilidad y SEO.
 */

export type FotoObra = {
  img: string;
  alt: string;
  /** Medidas reales, para reservar el espacio y para el pop-up. */
  w: number;
  h: number;
};

export type TipoDeObra = {
  id: string;
  /** Plural, como se muestra: "Obradores". */
  nombre: string;
  img: string;
  alt: string;
  descripcion: string;
};

export const tiposDeObra: TipoDeObra[] = [
  {
    id: "obradores",
    nombre: "Obradores",
    img: "/assets/obra-obrador.jpg",
    alt: "Obrador prefabricado de concreto CONCRIT terminado y en uso",
    descripcion:
      "Oficina técnica, vestuario y comedor de obra listos en semanas. Se montan al principio del cronograma y se desarman para llevarlos a la obra siguiente.",
  },
  {
    id: "casas",
    nombre: "Casas",
    img: "/assets/obra-casa.jpg",
    alt: "Casa prefabricada de concreto macizo CONCRIT terminada y lista para habitar",
    descripcion:
      "De 1, 2 y 3 habitaciones, entregadas llave en mano. Material noble de verdad, con precio cerrado y pago en cuotas a través de loteadoras y entidades financieras aliadas.",
  },
  {
    id: "galpones",
    nombre: "Galpones",
    img: "/assets/obra-galpon.jpg",
    alt: "Galpón de concreto prefabricado CONCRIT visto desde el aire",
    descripcion:
      "Luz libre para maquinaria, camión y acopio. Pilares metálicos y placas de concreto salidos de nuestra planta, con la cubierta montada por el mismo equipo que levanta la estructura.",
  },
  {
    id: "depositos",
    nombre: "Depósitos",
    img: "/assets/obra-deposito.jpg",
    alt: "Depósito de concreto macizo CONCRIT para almacenamiento e insumos",
    descripcion:
      "Concreto macizo para guardar insumo, herramienta y mercadería. No lo carcome la termita, no lo hincha la humedad y no se abre de un empujón.",
  },
];

/**
 * Galería de obras entregadas. El orden es el del carrusel y está mezclado a
 * propósito: obradores, casas, galpones, camineros, interiores y el equipo
 * trabajando, alternados, para que se lea el volumen de obra y no un catálogo.
 *
 * `qué` es la descripción corta de la foto; se usa sólo para armar el alt.
 */
const FOTOS: [nombre: string, w: number, h: number][] = [
  ["Obrador terminado, pilares metálicos pintados", 1200, 1024],
  ["Caminero de placas con canto rodado", 1132, 1200],
  ["Casa terminada", 900, 1200],
  ["Equipo montando placas", 1024, 768],
  ["Galpón por dentro", 900, 1200],
  ["Interior terminado", 1200, 900],
  ["Obrador de frente", 1200, 1092],
  ["Galpón con frente colorado y techo a dos aguas", 576, 418],
  ["Montaje de tanque australiano", 1170, 848],
  ["Casa con frente vidriado", 900, 1200],
  ["Corrales de placas en obra", 1200, 900],
  ["Living terminado", 1200, 900],
  ["Galpón desde el aire", 1200, 900],
  ["Obrador al atardecer", 1200, 900],
  ["Alisado de piso", 900, 1200],
  ["Depósito de concreto sobre el playón de grava", 750, 542],
  ["Casa entregada", 900, 1200],
  ["Retícula de pilares desde el aire", 900, 1200],
  ["Pasillo interior terminado", 675, 1200],
  ["Obrador con galería", 1200, 900],
  ["Pozo con brocal de concreto", 1200, 900],
  ["Obrador con vereda verde", 1200, 900],
  ["Caminero de baldosas en damero", 1141, 1200],
  ["Oficina de obrador terminada y amoblada", 900, 1200],
  ["Depósito por dentro", 900, 1200],
  ["Paredes armándose", 900, 1200],
  ["Casa sobre el pasto", 839, 1200],
  ["Pintura de terminación", 1200, 675],
  ["Obrador con galería y pilares", 1089, 1200],
  ["Interior terminado", 900, 1200],
  ["Techo montándose", 1169, 870],
  ["Obrador iluminado de noche", 1200, 900],
  ["Casa terminada", 1200, 989],
  ["Corral de manejo", 1200, 900],
  ["Obrador blanco", 1200, 900],
  ["Galpón grande", 900, 1200],
  ["Sanitarios terminados", 1200, 903],
  ["Obrador con galería abierta", 906, 1200],
  ["Obra desde el aire", 1200, 900],
  ["Obrador con la galería de acceso terminada", 1200, 841],
  ["Casa al atardecer", 900, 1200],
  ["Muros cerrados, vanos abiertos", 1200, 900],
  ["Habitación terminada", 1200, 900],
  ["Obrador en uso", 1200, 900],
  ["Casa con galería", 1169, 863],
  ["Colocación de alcantarilla", 502, 1032],
  ["Obrador entregado", 1200, 900],
  ["Obrador largo al atardecer", 1200, 900],
  ["Interior terminado", 900, 1200],
  ["Depósito con piso verde", 900, 1200],
  ["Obrador terminado", 1170, 858],
  ["Interior terminado", 900, 1200],
  ["Obrador con vereda verde", 900, 1200],
  ["Caminero de placas cara lisa", 1144, 1200],
  ["Casa terminada", 1032, 774],
  ["Casa prefabricada entre los árboles", 1200, 903],
  ["Galería exterior", 900, 1200],
  ["Interior terminado", 900, 1200],
  ["Terminaciones por dentro", 1200, 900],
  ["Casa entregada", 1200, 900],
  ["Muro y vereda de placas", 900, 1200],
  ["Terminación interior", 900, 1200],
  ["Obrador con galería", 1170, 845],
  ["Muros de un galpón levantándose en obra", 900, 1200],
  ["Sanitario terminado", 900, 1200],
  ["Aguada con bebederos", 900, 1200],
  ["Obrador terminado", 1200, 903],
];

export const galeriaObras: FotoObra[] = FOTOS.map(([nombre, w, h], i) => ({
  img: `/assets/galeria-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `${nombre} · Obra de CONCRIT en Paraguay`,
  w,
  h,
}));

/** Fotos de fábrica y equipo trabajando, para el bloque de proceso. */
export const proceso: FotoObra[] = [
  {
    img: "/assets/proceso-montaje.jpg",
    alt: "Equipo de CONCRIT montando placas de concreto macizo en obra",
    w: 1024,
    h: 768,
  },
  {
    img: "/assets/proceso-tanque.jpg",
    alt: "Montaje de un tanque australiano de concreto CONCRIT en el campo",
    w: 1131,
    h: 848,
  },
  {
    img: "/assets/proceso-maquina.jpg",
    alt: "Excavadora propia de CONCRIT bajando un anillo de concreto en obra",
    w: 1200,
    h: 900,
  },
  {
    img: "/assets/proceso-pintura.jpg",
    alt: "Terminación interior de una obra prefabricada CONCRIT",
    w: 1200,
    h: 900,
  },
];
