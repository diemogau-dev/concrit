/**
 * Catálogo de productos de CONCRIT.
 *
 * Este archivo es el único lugar donde se edita el catálogo: agregar un
 * producto, cambiar la descripción, apuntar a una foto nueva o cargar un
 * precio se hace acá, sin tocar ningún componente.
 *
 * ── Cómo editar ──────────────────────────────────────────────────────────
 * • `fotos`    una a tres fotos por producto. En la ficha se pasan como
 *              carrusel y se amplían al hacer click. Se recortan cuadradas en
 *              scripts/publicar-fotos.mjs, así ninguna pieza sale cortada.
 *              Lista vacía = la ficha muestra el panel de marca "foto en
 *              camino", que queda prolijo hasta que haya una foto buena.
 * • `detalle`  la única descripción de la ficha: foto, título, `detalle` y
 *              botón, nada más — no hay chips de variantes ni de medidas.
 *              Apuntá a 3 renglones (unas 150-170 letras): ahí es donde se
 *              cuentan las medidas, diseños o variantes de ese producto, para
 *              que todas las fichas queden del mismo alto. El resto se
 *              conversa por WhatsApp.
 * • `precio`   OPCIONAL. Mientras esté vacío (o sin la clave) la ficha muestra
 *              sólo el botón. Si algún día se completa, ej: precio:
 *              "Gs. 850.000", la ficha lo muestra automáticamente.
 * • `articulo` artículo para el mensaje de WhatsApp: "del bebedero",
 *              "de las baldosas". Por defecto "del".
 * • `waMensaje` OPCIONAL. Mensaje propio de WhatsApp para ese producto, en vez
 *              del armado automático. El texto sale igual de `WA_MESSAGES`
 *              (config.ts): los mensajes siguen centralizados en un solo lugar.
 */

import { WA_MESSAGES, type WaArticulo } from "./config";

export type FotoProducto = {
  src: string;
  /** Texto alternativo (SEO local + accesibilidad). */
  alt: string;
};

export type Producto = {
  /** Slug estable: sirve de key de React y de ancla si hiciera falta. */
  slug: string;
  nombre: string;
  /** De una a tres fotos. Vacío = panel de marca "foto en camino". */
  fotos: FotoProducto[];
  /** Descripción corta: dos renglones. */
  detalle: string;
  /** Precio. Vacío o ausente = la ficha muestra sólo el botón. */
  precio?: string;
  /** Artículo para el mensaje precargado de WhatsApp. Default: "del". */
  articulo?: WaArticulo;
  /** Mensaje de WhatsApp propio (viene de WA_MESSAGES en config.ts). */
  waMensaje?: string;
  /** Texto del botón. Default: "Comprar por WhatsApp". */
  ctaText?: string;
};

export type SeccionProducto = {
  /** Ancla de la sección: la usa el menú lateral del catálogo. */
  id: string;
  /** Número que se muestra al lado del nombre. */
  n: string;
  /** Nombre de la sección: va en el menú y en el encabezado. */
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
        fotos: [
          {
            src: "/assets/producto-bebedero-01.jpg",
            alt: "Bebedero de concreto macizo CONCRIT para ganado",
          },
          {
            src: "/assets/producto-bebedero-02.jpg",
            alt: "Bebedero de concreto CONCRIT visto de frente, con el fondo en caída al desagüe",
          },
          {
            src: "/assets/producto-bebedero-03.jpg",
            alt: "Bebederos de concreto CONCRIT instalados en la aguada de una estancia",
          },
        ],
        detalle:
          "Batea maciza con borde reforzado y tapón de descarga para vaciar y limpiar sin bomba. Se apoya en el terreno nivelado y no se toca más.",
        articulo: "del",
      },
      {
        slug: "comederos",
        nombre: "Comedero de concreto",
        fotos: [
          {
            src: "/assets/producto-comedero-01.jpg",
            alt: "Comedero de concreto macizo CONCRIT para ganado vacuno",
          },
          {
            src: "/assets/producto-comedero-02.jpg",
            alt: "Comederos de concreto CONCRIT alineados en el corral",
          },
        ],
        detalle:
          "Bordes redondeados, sin filos que lastimen. Pesa lo suficiente para que el animal no lo mueva ni lo dé vuelta a empujones.",
        articulo: "del",
      },
      {
        slug: "postes-tejido",
        nombre: "Postes para tejido",
        fotos: [
          {
            src: "/assets/producto-postes-01.jpg",
            alt: "Postes de concreto CONCRIT apilados en la fábrica",
          },
          {
            src: "/assets/producto-postes-02.jpg",
            alt: "Postes de concreto CONCRIT con el tejido perimetral colocado",
          },
          {
            src: "/assets/producto-postes-03.jpg",
            alt: "Alambrado sobre postes de concreto CONCRIT en el campo",
          },
        ],
        detalle:
          "Premoldeados con armadura interna, esquineros e intermedios, con las perforaciones ya hechas. No los come la termita ni se pudren enterrados.",
        articulo: "de los",
      },
      {
        slug: "tanques-australianos",
        nombre: "Tanque australiano",
        fotos: [
          {
            src: "/assets/producto-tanque-01.jpg",
            alt: "Tanque australiano armado con placas de concreto CONCRIT, terminado y en uso en una estancia",
          },
          {
            src: "/assets/producto-tanque-02.jpg",
            alt: "Tanque australiano de concreto CONCRIT visto por dentro",
          },
          {
            src: "/assets/producto-tanque-03.jpg",
            alt: "Montaje de un tanque australiano de concreto CONCRIT con placas",
          },
        ],
        detalle:
          "Se arma con placas en el lugar, en el diámetro que necesites y con montaje incluido. No se abolla ni se oxida como la chapa.",
        articulo: "del",
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
        fotos: [
          {
            src: "/assets/producto-placas-01.jpg",
            alt: "Placas de concreto macizo CONCRIT apiladas, listas para despachar",
          },
          {
            src: "/assets/producto-placas-02.jpg",
            alt: "Detalle del canto de una placa de concreto macizo CONCRIT",
          },
          {
            src: "/assets/producto-placas-03.jpg",
            alt: "Muros levantados con placas de concreto macizo CONCRIT",
          },
        ],
        detalle:
          "Macizas y a escuadra: cuadradas, rectangulares o con caída para techo, en la medida que necesites. Una cara texturada para muro y una lisa para vereda o fachada.",
        articulo: "de las",
        waMensaje: WA_MESSAGES.placas,
        ctaText: "Cotizar",
      },
      {
        slug: "vigas",
        nombre: "Vigas y tirantes",
        fotos: [
          {
            src: "/assets/producto-viga-01.jpg",
            alt: "Viga de concreto premoldeada CONCRIT",
          },
          {
            src: "/assets/producto-viga-02.jpg",
            alt: "Tirante de concreto premoldeado CONCRIT",
          },
          {
            src: "/assets/producto-viga-03.jpg",
            alt: "Viguetas de concreto CONCRIT apiladas en el pallet",
          },
        ],
        detalle:
          "Vigas, tirantes y viguetas premoldeados con armadura calculada, para techos y entrepisos. Se izan y se apoyan en el día, sin encofrar.",
        articulo: "de las",
      },
      {
        slug: "camineros",
        nombre: "Camineros",
        fotos: [
          {
            src: "/assets/producto-caminero-01.jpg",
            alt: "Caminero de placas de concreto CONCRIT en el acceso a una casa",
          },
          {
            src: "/assets/producto-caminero-02.jpg",
            alt: "Caminero de placas de concreto CONCRIT con canto rodado en un jardín",
          },
          {
            src: "/assets/producto-caminero-03.jpg",
            alt: "Caminero de placas de concreto CONCRIT en damero sobre el patio de una casa",
          },
        ],
        detalle:
          "Sendas de placa lisa para patio, quinta y acceso. Se colocan directo sobre el terreno nivelado, sin hormigonar ni esperar fragüe.",
        articulo: "de los",
      },
      {
        slug: "veredas",
        nombre: "Veredas",
        fotos: [
          {
            src: "/assets/producto-vereda-01.jpg",
            alt: "Vereda de placas de concreto CONCRIT en un parque",
          },
          {
            src: "/assets/producto-vereda-02.jpg",
            alt: "Vereda de placas de concreto CONCRIT recién colocada",
          },
          {
            src: "/assets/producto-vereda-03.jpg",
            alt: "Vereda de placas de concreto CONCRIT sobre el frente de una obra",
          },
        ],
        detalle:
          "Vereda pareja y derecha de punta a punta, con la cara lisa a la vista y la junta prolija. Se camina el mismo día de colocada.",
        articulo: "de las",
      },
      {
        slug: "baldosas",
        nombre: "Baldosas de concreto",
        fotos: [
          {
            src: "/assets/producto-baldosa-01.jpg",
            alt: "Baldosa de concreto CONCRIT con diseño de ondas",
          },
          {
            src: "/assets/producto-baldosa-02.jpg",
            alt: "Baldosa de concreto CONCRIT con diseño romboidal",
          },
        ],
        detalle:
          "Dos diseños de cara vista, ondas y rombos, para vereda, patio y galería. Antideslizante y de junta pareja en toda la superficie.",
        articulo: "de las",
      },
      {
        slug: "paver",
        nombre: "Paver de concreto",
        fotos: [
          {
            src: "/assets/producto-paver-01.jpg",
            alt: "Colocación de pavers de concreto CONCRIT sobre base de arena",
          },
          {
            src: "/assets/producto-paver-02.jpg",
            alt: "Patio terminado con pavers de concreto CONCRIT",
          },
        ],
        detalle:
          "El adoquín que reemplaza al piso vertido, para patios, accesos y estacionamientos. Se encastra sobre arena, aguanta el tránsito y se levanta para reparar.",
        articulo: "de los",
      },
      {
        slug: "piso-ecologico",
        nombre: "Piso ecológico",
        fotos: [
          {
            src: "/assets/producto-piso-ecologico-01.jpg",
            alt: "Piso ecológico de concreto CONCRIT con celdas para césped",
          },
          {
            src: "/assets/producto-piso-ecologico-02.jpg",
            alt: "Piso ecológico de concreto CONCRIT apilado en pallet, listo para despachar",
          },
        ],
        detalle:
          "Bloque calado que deja pasar el agua al terreno. Se rellena con césped o piedra y queda firme para estacionamientos, accesos y playones.",
        articulo: "del",
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
        fotos: [
          {
            src: "/assets/producto-caja-registro-01.jpg",
            alt: "Cajas de registro de concreto CONCRIT para agua y desagüe",
          },
          {
            src: "/assets/producto-caja-registro-02.jpg",
            alt: "Caja de registro de concreto CONCRIT colocada con su tapa",
          },
          {
            src: "/assets/producto-caja-registro-03.jpg",
            alt: "Cajas de registro de concreto CONCRIT listas para entregar",
          },
        ],
        detalle:
          "Para agua y desagüe, en las medidas de loteo y vivienda. Cuerpo macizo con tapa de concreto incluida, lista para colocar.",
        articulo: "de las",
      },
      {
        slug: "tapa-registro",
        nombre: "Tapa de registro 40x40",
        fotos: [
          {
            src: "/assets/producto-tapa-registro-01.jpg",
            alt: "Tapa de registro de concreto CONCRIT de 40x40",
          },
        ],
        detalle:
          "Tapa maciza de 40x40 con agarre central. Repuesto directo para cámaras y registros existentes, sin cambiar el conjunto completo.",
        articulo: "de la",
      },
      {
        slug: "cajas-electricas",
        nombre: "Cajas para sistema eléctrico",
        fotos: [
          {
            src: "/assets/producto-caja-electrica-01.jpg",
            alt: "Caja de concreto CONCRIT para sistema eléctrico subterráneo",
          },
        ],
        detalle:
          "Cámaras de paso para tendido eléctrico subterráneo, con las entradas de caño previstas. Concreto macizo que protege el cable y tapa registrable para inspección.",
        articulo: "de las",
      },
      {
        slug: "cordon-vereda",
        nombre: "Cordón de vereda",
        fotos: [
          {
            src: "/assets/producto-cordon-vereda-01.jpg",
            alt: "Cordón de vereda premoldeado de concreto CONCRIT",
          },
        ],
        detalle:
          "Premoldeado en tramos parejos, la línea queda derecha de punta a punta. Se coloca en el día, sin encofrado, y el canto no se despostilla con el roce de la rueda.",
        articulo: "del",
      },
      {
        slug: "alcantarillas-tubulares",
        nombre: "Alcantarillas tubulares",
        fotos: [
          {
            src: "/assets/producto-alcantarilla-tubular-01.jpg",
            alt: "Caño de concreto CONCRIT para alcantarilla tubular",
          },
          {
            src: "/assets/producto-alcantarilla-tubular-02.jpg",
            alt: "Caños de concreto CONCRIT apilados en la fábrica",
          },
          {
            src: "/assets/producto-alcantarilla-tubular-03.jpg",
            alt: "Colocación de un caño de concreto CONCRIT con excavadora",
          },
        ],
        detalle:
          "Caños para cruce de camino y canal de desagüe, en varios diámetros. Junta encastrada para que el agua no socave el relleno.",
        articulo: "de las",
      },
      {
        slug: "alcantarillas-celulares",
        nombre: "Alcantarillas celulares",
        fotos: [
          {
            src: "/assets/producto-alcantarilla-celular-01.jpg",
            alt: "Alcantarilla celular de concreto CONCRIT de sección rectangular",
          },
        ],
        detalle:
          "Sección rectangular para cuando el caudal no entra en un caño o la tapada es baja. Medida y luz según cada proyecto.",
        articulo: "de las",
      },
    ],
  },
];
