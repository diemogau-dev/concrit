/**
 * Configuración central del sitio CONCRIT.
 *
 * Único lugar donde viven el número de WhatsApp, los mensajes precargados
 * y los datos de contacto. Cambiar el número/mail/links es una sola edición
 * acá — nunca hardcodear estos valores en los componentes.
 */

// ─────────────────────────────────────────────────────────────
// WhatsApp — el único CTA del sitio. Todos los caminos terminan acá.
// ─────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "595981625546";
export const WHATSAPP_DISPLAY = "+595 981 625546";
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Mensajes precargados según de dónde sale el click (segmentación en el chat). */
export const WA_MESSAGES = {
  general: "Hola CONCRIT, quiero solicitar un presupuesto",
  representante: "Hola CONCRIT, quiero hablar con un representante",
  campo: "Hola CONCRIT, quiero consultar por la línea Campo (ganadería)",
  obra: "Hola CONCRIT, quiero consultar por la línea Obra (obradores y galpones)",
  hogar: "Hola CONCRIT, quiero consultar por la línea Hogar (vivienda)",
  presupuestoObra: "Hola CONCRIT, quiero un presupuesto para una obra",
  placas:
    "Hola CONCRIT, quiero consultar medida y precio de las placas de concreto",
} as const;

/**
 * Artículo que antecede al nombre del producto en el mensaje precargado.
 * Va en la data de cada producto (`src/lib/productos.ts`) para que la frase
 * quede bien escrita: "precio del bebedero", "precio de las baldosas".
 */
export type WaArticulo = "del" | "de la" | "de los" | "de las";

/**
 * Mensaje de compra por producto: es el que dispara el botón del catálogo.
 * Ej: waMensajeProducto("Bebedero de concreto")
 *     → "Hola CONCRIT, quiero comprar el Bebedero de concreto"
 */
export function waMensajeProducto(
  producto: string,
  articulo: WaArticulo = "del",
): string {
  const el = { del: "el", "de la": "la", "de los": "los", "de las": "las" }[
    articulo
  ];
  return `Hola CONCRIT, quiero comprar ${el} ${producto}`;
}

/**
 * Mensaje de consulta por una obra terminada de la galería.
 * Ej: waMensajeProyecto("Galpón de 400 m² en Benjamín Aceval")
 */
export function waMensajeProyecto(proyecto: string): string {
  return `Hola CONCRIT, vi el proyecto "${proyecto}" y quiero algo parecido`;
}

/** Construye un link de WhatsApp con el mensaje URL-encodeado en ?text=. */
export function waLink(message: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

/** Links de WhatsApp ya armados por segmento. */
export const wa = {
  general: waLink(WA_MESSAGES.general),
  representante: waLink(WA_MESSAGES.representante),
  campo: waLink(WA_MESSAGES.campo),
  obra: waLink(WA_MESSAGES.obra),
  hogar: waLink(WA_MESSAGES.hogar),
  presupuestoObra: waLink(WA_MESSAGES.presupuestoObra),
  placas: waLink(WA_MESSAGES.placas),
} as const;

/** Link de WhatsApp para comprar un producto del catálogo. */
export function waProducto(
  producto: string,
  articulo: WaArticulo = "del",
): string {
  return waLink(waMensajeProducto(producto, articulo));
}

/** Link de WhatsApp para consultar por una obra de la galería de proyectos. */
export function waProyecto(proyecto: string): string {
  return waLink(waMensajeProyecto(proyecto));
}

// ─────────────────────────────────────────────────────────────
// Otros datos de contacto
// ─────────────────────────────────────────────────────────────
export const CONTACT = {
  email: "hola@concrit.py",
  instagramHandle: "@concrit.py",
  instagramUrl: "https://instagram.com/concrit.py",
  // Link de Google Maps de la fábrica (Ruta 9, Villa Hayes).
  mapsUrl: "https://maps.google.com/?q=Villa+Hayes+Ruta+9+Paraguay",
} as const;

// ─────────────────────────────────────────────────────────────
// Datos del sitio / SEO. `url` es el dominio canónico: cambialo si
// el sitio se publica en otro dominio (se usa en metadata, sitemap y JSON-LD).
// ─────────────────────────────────────────────────────────────
export const SITE = {
  url: "https://concrit.py",
  name: "CONCRIT",
  locale: "es_PY",
  title: "CONCRIT · Prefabricados de hormigón en Paraguay | Ruta 9, Villa Hayes",
  description:
    "Prefabricados de concreto macizo para el campo, la industria y el hogar. Comederos y bebederos para ganado, obradores prefabricados, postes de hormigón y casas prefabricadas de hormigón en Paraguay. Fábrica sobre la Ruta 9, Villa Hayes, la puerta del Chaco. Precio cerrado y montaje incluido.",
} as const;
