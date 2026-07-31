/**
 * Data de la página /proyectos.
 *
 * Los cuatro tipos de obra y la galería salen de la MISMA lista: cada categoría
 * tiene la foto y la descripción que van en la tarjeta de "Qué construimos", y
 * el array `fotos` que alimenta la galería de obras entregadas.
 *
 * ── Cómo cargar las fotos reales ─────────────────────────────────────────
 * Las rutas ya están escritas y apuntan a placeholders sólidos. Para publicar
 * una foto real, sobrescribí el archivo en /public/assets manteniendo el mismo
 * nombre. No hace falta tocar código.
 *
 *   Tarjeta del tipo de obra   obra-obrador.jpg, obra-casa.jpg, …
 *   Galería                    galeria-obradores-01.jpg, -02.jpg, …
 *
 * Para sumar más fotos a una categoría, agregá objetos al array `fotos` y dejá
 * los archivos en /public/assets. La grilla se acomoda sola: no hay un número
 * fijo de fotos por categoría.
 *
 * En la galería NO van nombres de obra ni localidades: se muestra el tipo de
 * construcción y las fotos. El `alt` es sólo para accesibilidad y SEO.
 */

export type FotoObra = {
  img: string;
  alt: string;
  /** Medidas reales, sólo para el pop-up de ampliación. Default 1400x1050. */
  w?: number;
  h?: number;
};

export type CategoriaObra = {
  /** Id de la pestaña de la galería. */
  id: string;
  /** Plural, como se muestra: "Obradores". */
  nombre: string;
  /** Foto de la tarjeta en "Qué construimos". */
  img: string;
  alt: string;
  /** Descripción corta de la tarjeta. */
  descripcion: string;
  /** Fotos de obras entregadas de este tipo. */
  fotos: FotoObra[];
};

/** Genera las entradas de galería de una categoría con el nombre correlativo. */
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
    img: "/assets/obra-obrador.jpg",
    alt: "Obrador prefabricado de concreto CONCRIT montado en obra",
    descripcion:
      "Oficina técnica, vestuario y comedor de obra listos en semanas. Se montan al principio del cronograma y se desarman para llevarlos a la obra siguiente.",
    fotos: galeria(
      "obradores",
      "Obrador prefabricado de concreto macizo CONCRIT entregado en Paraguay",
      8,
    ),
  },
  {
    id: "casas",
    nombre: "Casas",
    img: "/assets/obra-casa.jpg",
    alt: "Casa prefabricada de concreto macizo CONCRIT terminada y lista para habitar",
    descripcion:
      "De 1, 2 y 3 habitaciones, entregadas llave en mano. Material noble de verdad, con precio cerrado y pago en cuotas a través de loteadoras aliadas.",
    fotos: galeria(
      "casas",
      "Casa prefabricada de concreto macizo CONCRIT entregada llave en mano",
      8,
    ),
  },
  {
    id: "depositos",
    nombre: "Depósitos",
    img: "/assets/obra-deposito.jpg",
    alt: "Depósito de concreto macizo CONCRIT para almacenamiento e insumos",
    descripcion:
      "Concreto macizo para guardar insumo, herramienta y mercadería. No lo carcome la termita, no lo hincha la humedad y no se abre de un empujón.",
    fotos: galeria(
      "depositos",
      "Depósito de concreto macizo prefabricado CONCRIT entregado en Paraguay",
      8,
    ),
  },
  {
    id: "galpones",
    nombre: "Galpones",
    img: "/assets/obra-galpon.jpg",
    alt: "Galpón de concreto prefabricado CONCRIT con estructura de pilares y placas",
    descripcion:
      "Luz libre para maquinaria, camión y acopio. Pilares y placas de planta, con la cubierta montada por el mismo equipo que levanta la estructura.",
    fotos: galeria(
      "galpones",
      "Galpón prefabricado de concreto macizo CONCRIT entregado en Paraguay",
      8,
    ),
  },
];

/** Total de fotos cargadas en la galería, para el contador de la sección. */
export const totalFotosGaleria = categorias.reduce(
  (n, c) => n + c.fotos.length,
  0,
);
