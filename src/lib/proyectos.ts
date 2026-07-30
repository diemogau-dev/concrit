/**
 * Data de la página /proyectos.
 *
 * Dos bloques editables sin tocar componentes:
 *  • `queConstruimos` — los tipos de obra que hacemos.
 *  • `obrasEntregadas` — galería de obras terminadas.
 *
 * ── Cómo cargar las fotos reales ─────────────────────────────────────────
 * Hoy las rutas apuntan a placeholders sólidos en tono concreto. Para poner
 * la foto real, sobrescribí el archivo en /public/assets manteniendo el mismo
 * nombre. Si preferís otro nombre, cambiá el `img` de acá y listo.
 *
 * Para sumar una obra a la galería, copiá un objeto de `obrasEntregadas`,
 * cambiale `img`, `caption` y `lugar`, y agregá la foto a /public/assets.
 * La grilla se acomoda sola: no hay un número fijo de obras.
 */

export type TipoObra = {
  slug: string;
  nombre: string;
  img: string;
  alt: string;
  /** Descripción corta, una o dos líneas. */
  descripcion: string;
};

export type ObraEntregada = {
  slug: string;
  img: string;
  alt: string;
  /** Bajada que se muestra debajo de la foto. */
  caption: string;
  /** Zona o localidad. Se muestra arriba del caption. */
  lugar: string;
  /**
   * Medidas reales de la foto, sólo para el pop-up de ampliación.
   * Si no se cargan se usan 900x700. Con una foto de otra proporción el
   * pop-up la muestra completa igual, así que es opcional.
   */
  w?: number;
  h?: number;
};

export const queConstruimos: TipoObra[] = [
  {
    slug: "obradores",
    nombre: "Obradores",
    img: "/assets/obra-obrador.jpg",
    alt: "Obrador prefabricado de concreto CONCRIT montado en obra",
    descripcion:
      "Oficina técnica, vestuario y comedor de obra listos en semanas. Se montan al principio del cronograma y se desarman para llevarlos a la obra siguiente.",
  },
  {
    slug: "galpones",
    nombre: "Galpones",
    img: "/assets/obra-galpon.jpg",
    alt: "Galpón de concreto prefabricado CONCRIT con estructura de pilares y placas",
    descripcion:
      "Luz libre para maquinaria, camión y acopio. Pilares y placas de planta, con la cubierta montada por el mismo equipo que levanta la estructura.",
  },
  {
    slug: "depositos",
    nombre: "Depósitos",
    img: "/assets/obra-deposito.jpg",
    alt: "Depósito de concreto macizo CONCRIT para almacenamiento e insumos",
    descripcion:
      "Concreto macizo para guardar insumo, herramienta y mercadería. No lo carcome la termita, no lo hincha la humedad y no se abre de un empujón.",
  },
  {
    slug: "casas",
    nombre: "Casas prefabricadas",
    img: "/assets/obra-casa.jpg",
    alt: "Casa prefabricada de concreto macizo CONCRIT terminada y lista para habitar",
    descripcion:
      "De 1, 2 y 3 habitaciones, entregadas llave en mano. Material noble de verdad, con precio cerrado y pago en cuotas a través de loteadoras aliadas.",
  },
];

export const obrasEntregadas: ObraEntregada[] = [
  {
    slug: "obra-01",
    img: "/assets/proyecto-01.jpg",
    alt: "Obra de concreto prefabricado CONCRIT entregada en el Chaco paraguayo",
    lugar: "Villa Hayes",
    caption: "Obrador de dos módulos, montado en tres semanas",
  },
  {
    slug: "obra-02",
    img: "/assets/proyecto-02.jpg",
    alt: "Galpón prefabricado de concreto CONCRIT entregado a una empresa constructora",
    lugar: "Benjamín Aceval",
    caption: "Galpón para acopio y maquinaria pesada",
  },
  {
    slug: "obra-03",
    img: "/assets/proyecto-03.jpg",
    alt: "Casa prefabricada de concreto CONCRIT entregada llave en mano",
    lugar: "Chaco central",
    caption: "Casa de dos habitaciones, entregada llave en mano",
  },
  {
    slug: "obra-04",
    img: "/assets/proyecto-04.jpg",
    alt: "Depósito de concreto macizo CONCRIT en una estancia ganadera",
    lugar: "Ruta 9, Km 120",
    caption: "Depósito de insumos para estancia ganadera",
  },
  {
    slug: "obra-05",
    img: "/assets/proyecto-05.jpg",
    alt: "Vivienda para personal de campo construida con prefabricados CONCRIT",
    lugar: "Presidente Hayes",
    caption: "Vivienda para el personal de campo",
  },
  {
    slug: "obra-06",
    img: "/assets/proyecto-06.jpg",
    alt: "Vestuario y comedor de obra prefabricados CONCRIT",
    lugar: "Asunción, zona industrial",
    caption: "Vestuario y comedor para frente de obra",
  },
  {
    slug: "obra-07",
    img: "/assets/proyecto-07.jpg",
    alt: "Galpón de concreto prefabricado CONCRIT ampliado con módulos nuevos",
    lugar: "Concepción",
    caption: "Galpón ampliado con módulos nuevos sobre el mismo sistema",
  },
  {
    slug: "obra-08",
    img: "/assets/proyecto-08.jpg",
    alt: "Conjunto de casas prefabricadas de concreto CONCRIT en un loteo",
    lugar: "Loteo en Villa Hayes",
    caption: "Conjunto de viviendas entregadas para un loteo",
  },
];
