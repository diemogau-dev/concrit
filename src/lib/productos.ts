/**
 * Catálogo de productos de CONCRIT.
 *
 * Este archivo es el único lugar donde se edita el catálogo: agregar un
 * producto, cambiar el detalle técnico, apuntar a una foto nueva o cargar un
 * precio se hace acá, sin tocar ningún componente.
 *
 * ── Cómo editar ──────────────────────────────────────────────────────────
 * • `img`      ruta dentro de /public. Hoy apunta a un placeholder sólido en
 *              tono concreto. Para poner la foto real, sobrescribí el archivo
 *              manteniendo el mismo nombre (no hace falta tocar código).
 * • `detalle`  2 o 3 líneas de detalle técnico. Texto libre.
 * • `precio`   OPCIONAL. Mientras esté vacío (o sin la clave) la card muestra
 *              sólo el botón de WhatsApp. Si algún día se completa, ej:
 *              precio: "Gs. 850.000", la card lo muestra automáticamente.
 * • `articulo` artículo para el mensaje de WhatsApp: "del bebedero",
 *              "de las baldosas". Por defecto "del".
 * • `waMensaje` OPCIONAL. Mensaje propio de WhatsApp para ese producto, en vez
 *              del armado automático. El texto sale igual de `WA_MESSAGES`
 *              (config.ts): los mensajes siguen centralizados en un solo lugar.
 */

import { WA_MESSAGES, type WaArticulo } from "./config";

export type Producto = {
  /** Slug estable: sirve de key de React y de ancla si hiciera falta. */
  slug: string;
  nombre: string;
  /**
   * Ruta de la imagen dentro de /public. Si falta, la card muestra un panel
   * tipográfico de marca en vez de la foto: queda prolijo mientras no haya
   * una foto buena de ese producto.
   */
  img?: string;
  /** Texto alternativo (SEO local + accesibilidad). */
  alt: string;
  /** Detalle técnico, 2 o 3 líneas. */
  detalle: string;
  /** Precio. Vacío o ausente = la card muestra sólo el botón de consulta. */
  precio?: string;
  /** Artículo para el mensaje precargado de WhatsApp. Default: "del". */
  articulo?: WaArticulo;
  /** Mensaje de WhatsApp propio (viene de WA_MESSAGES en config.ts). */
  waMensaje?: string;
  /** Texto del botón. Default: "Consultar precio por WhatsApp". */
  ctaText?: string;
  /** Chips de variantes/medidas que se listan debajo del detalle. */
  variantes?: string[];
  /** Marca la card como familia de producto (ocupa 2 columnas). */
  destacado?: boolean;
};

export type SeccionProducto = {
  /** Ancla de la sección: se usa en los chips de navegación de /productos. */
  id: string;
  /** Número que se muestra al lado del nombre. */
  n: string;
  /** Nombre de la sección: va en el chip de navegación y en el encabezado. */
  nombre: string;
  productos: Producto[];
};

export const secciones: SeccionProducto[] = [
  // ───────────────────────────────────────────────────────────────
  {
    id: "campo",
    n: "01",
    nombre: "Campo y ganadería",
    productos: [
      {
        slug: "bebederos",
        nombre: "Bebedero de concreto",
        img: "/assets/producto-bebedero.jpg",
        alt: "Bebedero de concreto macizo CONCRIT para ganado",
        detalle:
          "Concreto macizo vibrado, con paredes de espesor parejo y borde reforzado donde el animal apoya. Fondo con caída al desagüe para vaciar y limpiar sin bomba. Se entrega con el tapón de descarga colocado y va apoyado directo sobre el terreno nivelado.",
        articulo: "del",
      },
      {
        slug: "comederos",
        nombre: "Comedero de concreto",
        img: "/assets/producto-comedero.jpg",
        alt: "Comedero de concreto macizo CONCRIT para ganado vacuno",
        detalle:
          "Batea maciza de bordes redondeados, sin filos que lastimen al animal. Peso propio suficiente para que no se mueva ni se dé vuelta a empujones. Se limpia con manguera y aguanta ración, sal y suplemento sin picarse.",
        articulo: "del",
      },
      {
        slug: "postes-tejido",
        nombre: "Postes para tejido",
        img: "/assets/producto-postes.jpg",
        alt: "Postes de concreto CONCRIT para alambrado y tejido perimetral",
        detalle:
          "Premoldeados con armadura interna, en las alturas habituales de tejido y alambrado. No los come la termita, no se pudren enterrados y no piden curado ni pintura. Vienen con las perforaciones ya hechas para pasar el alambre.",
        articulo: "de los",
        variantes: ["Esquineros", "Intermedios", "Con perforaciones"],
      },
      {
        slug: "tanques-australianos",
        nombre: "Tanque australiano",
        img: "/assets/producto-tanque.jpg",
        alt: "Tanque australiano de concreto CONCRIT para reserva de agua en el campo",
        detalle:
          "Reserva de agua en concreto, para aguada permanente de rodeo. Pared maciza que no se abolla ni se oxida como la chapa, y que mantiene el agua más fresca en pleno verano chaqueño. Se arma en el lugar y queda listo para conectar a molino o bomba.",
        articulo: "del",
        variantes: ["Varios diámetros", "Montaje incluido"],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    id: "construccion",
    n: "02",
    nombre: "Construcción y arquitectura",
    productos: [
      {
        slug: "placas",
        nombre: "Placas de concreto",
        img: "/assets/producto-placas.jpg",
        alt: "Familia de placas de concreto macizo CONCRIT en distintas medidas",
        detalle:
          "No es un solo producto: es una familia. Fabricamos placas cuadradas y rectangulares, con caída para techo, tirantes y dinteles, en las medidas que pide cada obra. Todas macizas, a escuadra y con las aberturas previstas desde el molde.",
        articulo: "de las",
        waMensaje: WA_MESSAGES.placas,
        ctaText: "Consultar medida y precio",
        destacado: true,
        variantes: [
          "Cuadradas",
          "Rectangulares",
          "Con caída para techo",
          "Tirantes",
          "Dinteles",
          "Medida a pedido",
        ],
      },
      {
        slug: "piso-ecologico",
        nombre: "Piso ecológico",
        // Sin foto todavía: la card muestra el panel de marca.
        alt: "Piso ecológico de concreto CONCRIT con celdas para césped",
        detalle:
          "Bloque calado que deja pasar el agua al terreno en vez de mandarla toda al desagüe. Las celdas se rellenan con césped o con piedra, así que la superficie queda firme para pisar y estacionar sin convertirse en una plancha de cemento. Ideal para estacionamientos, accesos y playones.",
        articulo: "del",
      },
      {
        slug: "baldosas",
        nombre: "Baldosas de concreto",
        img: "/assets/producto-baldosas.jpg",
        alt: "Baldosas de concreto CONCRIT en tres diseños para vereda y patio",
        detalle:
          "Tres diseños de cara vista para vereda, patio y galería. Espesor de tránsito peatonal, con superficie antideslizante que no se pone jabonosa cuando llueve. Salen del mismo molde una tras otra, así que la junta cierra pareja en toda la superficie.",
        articulo: "de las",
        variantes: ["Diseño 1", "Diseño 2", "Diseño 3"],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────
  {
    id: "vial",
    n: "03",
    nombre: "Vial e infraestructura",
    productos: [
      {
        slug: "cajas-registro",
        nombre: "Cajas de registro",
        img: "/assets/producto-caja-registro.jpg",
        alt: "Cajas de registro de concreto CONCRIT para agua y desagüe",
        detalle:
          "Para agua y para desagüe, en las medidas habituales de loteo y vivienda. Cuerpo macizo que aguanta el relleno y el tránsito sin abrirse, con tapa de concreto incluida. Llegan listas para colocar: no hay que encofrar ni esperar fragüe en el pozo.",
        articulo: "de las",
        variantes: ["Agua", "Desagüe", "Con tapa"],
      },
      {
        slug: "cajas-electricas",
        nombre: "Cajas para sistema eléctrico",
        img: "/assets/producto-caja-electrica.jpg",
        alt: "Caja de concreto CONCRIT para sistema eléctrico subterráneo",
        detalle:
          "Cámaras de paso para tendido eléctrico subterráneo, con las entradas de caño previstas. Concreto macizo que protege el cable del pisón y de la excavadora, y tapa que se levanta para inspección sin romper nada alrededor.",
        articulo: "de las",
      },
      {
        slug: "cordon-vereda",
        nombre: "Cordón de vereda",
        // Sin foto todavía: la card muestra el panel de marca.
        alt: "Cordón de vereda premoldeado de concreto CONCRIT",
        detalle:
          "Premoldeado en tramos parejos, así la línea de vereda queda derecha de punta a punta. Se coloca en el día, sin encofrado ni corte de calle prolongado. Canto vivo que no se despostilla con el roce de la rueda.",
        articulo: "del",
      },
      {
        slug: "alcantarillas-tubulares",
        nombre: "Alcantarillas tubulares",
        img: "/assets/producto-alcantarilla-tubular.jpg",
        alt: "Alcantarillas tubulares de concreto CONCRIT para cruce de camino rural",
        detalle:
          "Caños de concreto para cruce de camino, entrada de estancia y canal de desagüe. Se fabrican en varios diámetros y se colocan con la junta encastrada para que el agua no socave el relleno. Aguantan el paso de camión cargado sin deformarse.",
        articulo: "de las",
        variantes: ["Varios diámetros"],
      },
      {
        slug: "alcantarillas-celulares",
        nombre: "Alcantarillas celulares",
        img: "/assets/producto-alcantarilla-celular.jpg",
        alt: "Alcantarilla celular de concreto CONCRIT de sección rectangular",
        detalle:
          "Sección rectangular para cuando el caudal no entra en un caño o la tapada es baja. Se arma con módulos premoldeados que encastran entre sí, así que el cruce se habilita en días y no en meses. Medidas de luz y altura según el proyecto.",
        articulo: "de las",
        variantes: ["Medida según proyecto"],
      },
    ],
  },
];

/**
 * Argumento de venta de las placas: un lado liso y un lado texturado.
 * Vive acá para poder ajustar el copy sin entrar al componente.
 */
export const placasDosCaras = {
  eyebrow: "Dos caras, dos usos",
  titulo: "Un lado liso y un lado texturado. La misma placa sirve para dos cosas.",
  cuerpo:
    "Nuestras placas salen del molde con una cara texturada y una cara lisa. La texturada es la que trabaja de muro. La lisa es la que se ve: con esa misma placa hacés camineros de patio, veredas y revestimiento de fachada, sin comprar otro material ni contratar otro rubro.",
  caras: [
    {
      label: "Cara texturada",
      body: "La que cierra el muro. Agarra el revoque y la pintura sin tratamiento previo.",
    },
    {
      label: "Cara lisa",
      body: "La que queda a la vista. Camineros de patio, veredas y fachadas revestidas, listas del molde.",
    },
  ],
  usos: ["Camineros de patio", "Veredas", "Revestimiento de fachada"],
} as const;
