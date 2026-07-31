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
  ["Obrador terminado con pilares metálicos pintados", 1200, 1024],
  ["Caminero de placas de concreto con canto rodado", 1132, 1200],
  ["Casa prefabricada terminada", 900, 1200],
  ["Equipo de CONCRIT montando placas de concreto en obra", 1024, 768],
  ["Galpón de concreto prefabricado por dentro", 900, 1200],
  ["Interior terminado de una obra entregada llave en mano", 1200, 900],
  ["Obrador prefabricado visto de frente", 1200, 1092],
  ["Montaje de un tanque australiano de concreto en el campo", 1170, 848],
  ["Casa prefabricada con frente vidriado", 900, 1200],
  ["Corrales de placas de concreto en obra", 1200, 900],
  ["Living terminado de una casa prefabricada", 1200, 900],
  ["Galpón de concreto prefabricado visto desde el aire", 1200, 900],
  ["Caminero largo de placas de concreto", 1138, 1200],
  ["Obrador prefabricado al atardecer", 1200, 900],
  ["Alisado del piso en una obra de CONCRIT", 900, 1200],
  ["Casa prefabricada de concreto entregada", 900, 1200],
  ["Retícula de pilares vista desde el aire", 900, 1200],
  ["Pasillo interior terminado", 675, 1200],
  ["Obrador prefabricado con galería", 1200, 900],
  ["Pozo con brocal de concreto CONCRIT", 1200, 900],
  ["Obrador prefabricado con vereda", 1200, 900],
  ["Caminero de baldosas de concreto en damero", 1141, 1200],
  ["Depósito de concreto prefabricado por dentro", 900, 1200],
  ["Paredes de placas de concreto armándose en obra", 900, 1200],
  ["Casa prefabricada sobre el pasto", 839, 1200],
  ["Pintura de terminación en una obra de CONCRIT", 1200, 675],
  ["Obrador prefabricado con galería y pilares", 1089, 1200],
  ["Vereda de placas de concreto", 900, 1200],
  ["Interior terminado de una construcción prefabricada", 900, 1200],
  ["Montaje del techo sobre muros de concreto macizo", 1169, 870],
  ["Casa prefabricada de concreto terminada", 1200, 989],
  ["Corral de manejo de concreto prefabricado", 1200, 900],
  ["Obrador prefabricado blanco", 1200, 900],
  ["Galpón de concreto prefabricado de gran luz", 900, 1200],
  ["Sanitarios terminados en una obra entregada", 1200, 903],
  ["Obrador prefabricado con la galería abierta", 906, 1200],
  ["Obra de concreto prefabricado vista desde el aire", 1200, 900],
  ["Casa prefabricada al atardecer", 900, 1200],
  ["Muros de concreto cerrados, con los vanos abiertos", 1200, 900],
  ["Habitación terminada de una casa prefabricada", 1200, 900],
  ["Obrador prefabricado en uso", 1200, 900],
  ["Caminero de acceso en placas de concreto", 677, 1200],
  ["Casa prefabricada con galería", 1169, 863],
  ["Colocación de una alcantarilla de concreto", 502, 1032],
  ["Obrador prefabricado entregado", 1200, 900],
  ["Interior terminado de una obra llave en mano", 900, 1200],
  ["Obrador prefabricado al atardecer", 839, 1200],
  ["Vereda de baldosas de concreto con canto rodado", 1136, 1200],
  ["Depósito prefabricado con el piso terminado", 900, 1200],
  ["Aguada de estancia con bebederos de concreto", 900, 1200],
  ["Obrador prefabricado terminado", 1170, 858],
  ["Interior terminado de una construcción prefabricada", 900, 1200],
  ["Obrador prefabricado con vereda", 900, 1200],
  ["Caminero hecho con la cara lisa de la placa", 1144, 1200],
  ["Casa prefabricada de concreto terminada", 1032, 774],
  ["Galería exterior de una obra prefabricada", 900, 1200],
  ["Obrador prefabricado con el cerro atrás", 1200, 900],
  ["Interior terminado de una obra entregada", 900, 1200],
  ["Terminaciones interiores en una obra de CONCRIT", 1200, 900],
  ["Casa prefabricada entregada", 1200, 900],
  ["Caminero de placas de concreto en el jardín", 1139, 1200],
  ["Muro y vereda de placas de concreto", 900, 1200],
  ["Terminación interior de una obra prefabricada", 900, 1200],
  ["Obrador prefabricado con galería", 1170, 845],
  ["Sanitario terminado en una obra entregada", 900, 1200],
  ["Aguada con bebederos de concreto en el campo", 900, 1200],
  ["Obrador prefabricado largo", 1169, 860],
  ["Obrador prefabricado terminado y pintado", 1200, 903],
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
    img: "/assets/proceso-piso.jpg",
    alt: "Alisado del piso de una obra prefabricada CONCRIT",
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
