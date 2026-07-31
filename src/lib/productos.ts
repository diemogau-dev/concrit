/**
 * Catálogo de productos de CONCRIT.
 *
 * Este archivo es el único lugar donde se edita el catálogo: agregar un
 * producto, cambiar la descripción, apuntar a una foto nueva o cargar un
 * precio se hace acá, sin tocar ningún componente.
 *
 * ── Cómo editar ──────────────────────────────────────────────────────────
 * • `img`      ruta dentro de /public. Las fotos se recortan cuadradas en
 *              scripts/publicar-fotos.mjs: la ficha las muestra 1:1 y así
 *              ninguna pieza sale cortada.
 * • `imgs`     OPCIONAL. Fotos extra (variantes, diseños). La ficha las
 *              muestra como miniaturas abajo de la foto principal.
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

export type Producto = {
  /** Slug estable: sirve de key de React y de ancla si hiciera falta. */
  slug: string;
  nombre: string;
  /**
   * Ruta de la imagen dentro de /public. Si falta, la ficha muestra un panel
   * tipográfico de marca en vez de la foto: queda prolijo mientras no haya
   * una foto buena de esa pieza.
   */
  img?: string;
  /** Fotos extra: diseños o variantes que hay que mostrar sí o sí. */
  imgs?: { src: string; alt: string }[];
  /** Texto alternativo (SEO local + accesibilidad). */
  alt: string;
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
        img: "/assets/producto-bebedero.jpg",
        alt: "Bebedero de concreto macizo CONCRIT para ganado",
        detalle:
          "Batea maciza con borde reforzado y tapón de descarga. Se apoya en el terreno y no se toca más.",
        articulo: "del",
      },
      {
        slug: "comederos",
        nombre: "Comedero de concreto",
        img: "/assets/producto-comedero.jpg",
        alt: "Comedero de concreto macizo CONCRIT para ganado vacuno",
        detalle:
          "Bordes redondeados, sin filos que lastimen. Pesa lo suficiente para que el animal no lo mueva.",
        articulo: "del",
      },
      {
        slug: "postes-tejido",
        nombre: "Postes para tejido",
        img: "/assets/producto-postes.jpg",
        alt: "Postes de concreto CONCRIT para alambrado y tejido perimetral",
        detalle:
          "Premoldeados con armadura interna y perforaciones hechas. No los come la termita ni se pudren.",
        articulo: "de los",
        variantes: ["Esquineros", "Intermedios"],
      },
      {
        slug: "tanques-australianos",
        nombre: "Tanque australiano",
        img: "/assets/producto-tanque.jpg",
        alt: "Tanque australiano de concreto CONCRIT para reserva de agua en el campo",
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
        img: "/assets/producto-placas.jpg",
        imgs: [
          {
            src: "/assets/producto-placa-cara-lisa.jpg",
            alt: "Caminero hecho con la cara lisa de la placa de concreto CONCRIT",
          },
        ],
        alt: "Placas de concreto macizo CONCRIT apiladas, listas para despachar",
        detalle:
          "Macizas y a escuadra, con una cara texturada para muro y una lisa para vereda o fachada.",
        articulo: "de las",
        waMensaje: WA_MESSAGES.placas,
        ctaText: "Consultar medida y precio",
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
        img: "/assets/producto-piso-ecologico.jpg",
        alt: "Piso ecológico de concreto CONCRIT con celdas para césped",
        detalle:
          "Bloque calado que deja pasar el agua. Se rellena con césped o piedra y queda firme para pisar.",
        articulo: "del",
        variantes: ["Estacionamientos", "Accesos", "Playones"],
      },
      {
        slug: "baldosas",
        nombre: "Baldosas de concreto",
        img: "/assets/producto-baldosa-01.jpg",
        imgs: [
          {
            src: "/assets/producto-baldosa-02.jpg",
            alt: "Baldosa de concreto CONCRIT con diseño romboidal",
          },
          {
            src: "/assets/producto-baldosa-03.jpg",
            alt: "Vereda terminada con baldosas de concreto CONCRIT",
          },
        ],
        alt: "Baldosa de concreto CONCRIT con diseño de ondas",
        detalle:
          "Tres diseños de cara vista para vereda, patio y galería. Antideslizante y de junta pareja.",
        articulo: "de las",
        variantes: ["Diseño ondas", "Diseño rombos", "Diseño liso"],
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
          "Para agua y desagüe, en las medidas de loteo y vivienda. Cuerpo macizo y tapa incluida.",
        articulo: "de las",
        variantes: ["Agua", "Desagüe", "Con tapa"],
      },
      {
        slug: "cajas-electricas",
        nombre: "Cajas para sistema eléctrico",
        img: "/assets/producto-caja-electrica.jpg",
        alt: "Caja de concreto CONCRIT para sistema eléctrico subterráneo",
        detalle:
          "Cámaras de paso para tendido subterráneo, con las entradas de caño previstas y tapa registrable.",
        articulo: "de las",
      },
      {
        slug: "cordon-vereda",
        nombre: "Cordón de vereda",
        img: "/assets/producto-cordon-vereda.jpg",
        alt: "Cordón de vereda premoldeado de concreto CONCRIT",
        detalle:
          "Premoldeado en tramos parejos: la línea queda derecha y se coloca en el día, sin encofrado.",
        articulo: "del",
      },
      {
        slug: "alcantarillas-tubulares",
        nombre: "Alcantarillas tubulares",
        img: "/assets/producto-alcantarilla-tubular.jpg",
        alt: "Alcantarillas tubulares de concreto CONCRIT para cruce de camino rural",
        detalle:
          "Caños para cruce de camino y canal de desagüe. Junta encastrada y varios diámetros.",
        articulo: "de las",
        variantes: ["Varios diámetros"],
      },
      {
        slug: "alcantarillas-celulares",
        nombre: "Alcantarillas celulares",
        img: "/assets/producto-alcantarilla-celular.jpg",
        alt: "Alcantarilla celular de concreto CONCRIT de sección rectangular",
        detalle:
          "Sección rectangular para cuando el caudal no entra en un caño o la tapada es baja.",
        articulo: "de las",
        variantes: ["Medida según proyecto"],
      },
    ],
  },
];
