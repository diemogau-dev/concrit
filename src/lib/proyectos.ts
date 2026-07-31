/**
 * Data de la página /proyectos.
 *
 * Una sola lista de categorías. Las que son tipo de obra llevan `tarjeta` y
 * aparecen además en "Qué construimos"; las que no (interiores) viven sólo en
 * la galería. Así las tarjetas y las pestañas nunca se desincronizan.
 *
 * ── Cómo cargar más fotos ────────────────────────────────────────────────
 * Agregá entradas al array `fotos` de la categoría y dejá el archivo en
 * public/assets con el nombre `galeria-<categoria>-NN.jpg`. La grilla se
 * acomoda sola: no hay un número fijo de fotos por categoría.
 *
 * La curaduría de qué foto va en cada lugar está en scripts/publicar-fotos.mjs.
 *
 * En la galería NO van nombres de obra ni localidades: se muestra el tipo de
 * construcción y las fotos. El `alt` es sólo para accesibilidad y SEO.
 */

export type FotoObra = {
  img: string;
  alt: string;
  /** Medidas reales, sólo para el pop-up de ampliación. Default 1200x900. */
  w?: number;
  h?: number;
};

export type CategoriaObra = {
  /** Id de la pestaña de la galería. */
  id: string;
  /** Plural, como se muestra: "Obradores". */
  nombre: string;
  /**
   * Presente sólo en los tipos de obra: es lo que se muestra en la sección
   * "Qué construimos". Las categorías sin tarjeta viven sólo en la galería.
   */
  tarjeta?: {
    img: string;
    alt: string;
    descripcion: string;
  };
  fotos: FotoObra[];
};

/** Arma las entradas de galería de una categoría con el nombre correlativo. */
function galeria(slug: string, alt: string, cantidad: number): FotoObra[] {
  return Array.from({ length: cantidad }, (_, i) => ({
    img: `/assets/galeria-${slug}-${String(i + 1).padStart(2, "0")}.jpg`,
    alt,
  }));
}

export const categorias: CategoriaObra[] = [
  {
    id: "obradores",
    nombre: "Obradores",
    tarjeta: {
      img: "/assets/obra-obrador.jpg",
      alt: "Obrador prefabricado de concreto CONCRIT terminado y en uso",
      descripcion:
        "Oficina técnica, vestuario y comedor de obra listos en semanas. Se montan al principio del cronograma y se desarman para llevarlos a la obra siguiente.",
    },
    fotos: galeria(
      "obradores",
      "Obrador prefabricado de concreto macizo CONCRIT entregado en Paraguay",
      8,
    ),
  },
  {
    id: "casas",
    nombre: "Casas",
    tarjeta: {
      img: "/assets/obra-casa.jpg",
      alt: "Casa prefabricada de concreto macizo CONCRIT terminada y lista para habitar",
      descripcion:
        "De 1, 2 y 3 habitaciones, entregadas llave en mano. Material noble de verdad, con precio cerrado y pago en cuotas a través de loteadoras aliadas.",
    },
    fotos: galeria(
      "casas",
      "Casa prefabricada de concreto macizo CONCRIT entregada llave en mano",
      6,
    ),
  },
  {
    id: "galpones",
    nombre: "Galpones",
    tarjeta: {
      img: "/assets/obra-galpon.jpg",
      alt: "Galpón de concreto prefabricado CONCRIT visto desde el aire",
      descripcion:
        "Luz libre para maquinaria, camión y acopio. Pilares y placas de planta, con la cubierta montada por el mismo equipo que levanta la estructura.",
    },
    fotos: galeria(
      "galpones",
      "Galpón prefabricado de concreto macizo CONCRIT entregado en Paraguay",
      6,
    ),
  },
  {
    id: "depositos",
    nombre: "Depósitos",
    tarjeta: {
      img: "/assets/obra-deposito.jpg",
      alt: "Depósito de concreto macizo CONCRIT para almacenamiento e insumos",
      descripcion:
        "Concreto macizo para guardar insumo, herramienta y mercadería. No lo carcome la termita, no lo hincha la humedad y no se abre de un empujón.",
    },
    fotos: galeria(
      "depositos",
      "Depósito de concreto macizo prefabricado CONCRIT entregado en Paraguay",
      3,
    ),
  },
  {
    // Sin tarjeta: no es un tipo de obra, es la prueba de que entregamos
    // terminado. Va sólo en la galería.
    id: "interiores",
    nombre: "Interiores terminados",
    fotos: galeria(
      "interiores",
      "Interior terminado de una construcción prefabricada CONCRIT entregada llave en mano",
      8,
    ),
  },
];

/** Los cuatro tipos de obra, para la sección "Qué construimos". */
export const tiposDeObra = categorias.filter((c) => c.tarjeta);

/** Fotos de fábrica y equipo trabajando, para el bloque de proceso. */
export const proceso: FotoObra[] = [
  {
    img: "/assets/proceso-montaje.jpg",
    alt: "Equipo de CONCRIT montando placas de concreto macizo en obra",
  },
  {
    img: "/assets/proceso-tanque.jpg",
    alt: "Montaje de un tanque australiano de concreto CONCRIT en el campo",
  },
  {
    img: "/assets/proceso-izaje.jpg",
    alt: "Izaje de una pieza de concreto prefabricado CONCRIT con excavadora",
  },
  {
    img: "/assets/proceso-pintura.jpg",
    alt: "Terminación interior de una obra prefabricada CONCRIT",
  },
];
