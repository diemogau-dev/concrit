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
 * • `detalle`  descripción corta: dos renglones, no más. Es una tienda, no
 *              una ficha técnica — el resto se conversa por WhatsApp.
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
  /** Chips de variantes/medidas que se listan debajo de la descripción. */
  variantes?: string[];
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
          "Batea maciza con borde reforzado y tapón de descarga. Se apoya en el terreno y no se toca más.",
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
          "Bordes redondeados, sin filos que lastimen. Pesa lo suficiente para que el animal no lo mueva.",
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
          "Premoldeados con armadura interna y perforaciones hechas. No los come la termita ni se pudren.",
        articulo: "de los",
        variantes: ["Esquineros", "Intermedios"],
      },
      {
        slug: "tanques-australianos",
        nombre: "Tanque australiano",
        fotos: [
          {
            src: "/assets/producto-tanque-01.jpg",
            alt: "Tanque australiano de concreto CONCRIT para reserva de agua en el campo",
          },
          {
            src: "/assets/producto-tanque-02.jpg",
            alt: "Tanque australiano de concreto CONCRIT terminado y en uso",
          },
          {
            src: "/assets/producto-tanque-03.jpg",
            alt: "Montaje de un tanque australiano de concreto CONCRIT con placas",
          },
        ],
        detalle:
          "Reserva de agua para el rodeo. No se abolla ni se oxida como la chapa y se arma en el lugar.",
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
          "Macizas y a escuadra, con una cara texturada para muro y una lisa para vereda o fachada.",
        articulo: "de las",
        waMensaje: WA_MESSAGES.placas,
        ctaText: "Consultar medida y precio",
        variantes: [
          "Cuadradas",
          "Rectangulares",
          "Con caída para techo",
          "Dinteles",
          "Medida a pedido",
        ],
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
          "Premoldeadas con armadura calculada, para techos y entrepisos. Se izan y se apoyan en el día.",
        articulo: "de las",
        variantes: ["Vigas", "Tirantes", "Viguetas"],
      },
      {
        slug: "camineros",
        nombre: "Camineros",
        fotos: [
          {
            src: "/assets/producto-caminero-01.jpg",
            alt: "Caminero de placas de concreto CONCRIT en un parque",
          },
          {
            src: "/assets/producto-caminero-02.jpg",
            alt: "Caminero de placas de concreto CONCRIT recién colocado",
          },
          {
            src: "/assets/producto-caminero-03.jpg",
            alt: "Caminero de acceso hecho con placas de concreto CONCRIT",
          },
        ],
        detalle:
          "Sendas de placa lisa para patio, quinta y acceso. Se colocan sobre el terreno, sin hormigonar.",
        articulo: "de los",
      },
      {
        slug: "veredas",
        nombre: "Veredas",
        fotos: [
          {
            src: "/assets/producto-vereda-01.jpg",
            alt: "Vereda de placas de concreto CONCRIT con canto rodado",
          },
          {
            src: "/assets/producto-vereda-02.jpg",
            alt: "Vereda de placas de concreto CONCRIT terminada",
          },
          {
            src: "/assets/producto-vereda-03.jpg",
            alt: "Vereda de concreto CONCRIT sobre el frente de una obra",
          },
        ],
        detalle:
          "Vereda pareja y derecha de punta a punta, con la cara lisa a la vista. Se camina el mismo día.",
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
          {
            src: "/assets/producto-baldosa-03.jpg",
            alt: "Piso terminado con baldosas de concreto CONCRIT",
          },
        ],
        detalle:
          "Tres diseños de cara vista para vereda, patio y galería. Antideslizante y de junta pareja.",
        articulo: "de las",
        variantes: ["Diseño ondas", "Diseño rombos", "Diseño liso"],
      },
      {
        slug: "bloques",
        nombre: "Bloques de concreto",
        // Sin foto todavía: la ficha muestra el panel de marca.
        fotos: [],
        detalle:
          "El bloque que reemplaza al ladrillo: medida pareja, junta fina y muro derecho sin revoque grueso.",
        articulo: "de los",
        variantes: ["Varias medidas"],
      },
      {
        slug: "piso-ecologico",
        nombre: "Piso ecológico",
        fotos: [
          {
            src: "/assets/producto-piso-ecologico.jpg",
            alt: "Piso ecológico de concreto CONCRIT con celdas para césped",
          },
        ],
        detalle:
          "Bloque calado que deja pasar el agua. Se rellena con césped o piedra y queda firme para pisar.",
        articulo: "del",
        variantes: ["Estacionamientos", "Accesos", "Playones"],
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
          "Para agua y desagüe, en las medidas de loteo y vivienda. Cuerpo macizo y tapa incluida.",
        articulo: "de las",
        variantes: ["Agua", "Desagüe", "Con tapa"],
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
          "Cámaras de paso para tendido subterráneo, con las entradas de caño previstas y tapa registrable.",
        articulo: "de las",
      },
      {
        slug: "cordon-vereda",
        nombre: "Cordón de vereda",
        // Sin foto todavía: la ficha muestra el panel de marca.
        fotos: [],
        detalle:
          "Premoldeado en tramos parejos: la línea queda derecha y se coloca en el día, sin encofrado.",
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
          "Caños para cruce de camino y canal de desagüe. Junta encastrada y varios diámetros.",
        articulo: "de las",
        variantes: ["Varios diámetros"],
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
          "Sección rectangular para cuando el caudal no entra en un caño o la tapada es baja.",
        articulo: "de las",
        variantes: ["Medida según proyecto"],
      },
    ],
  },
];
