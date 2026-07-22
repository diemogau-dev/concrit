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
  general: "Hola CONCRIT, quiero pedir un presupuesto",
  campo: "Hola CONCRIT, quiero consultar por la línea Campo (ganadería)",
  obra: "Hola CONCRIT, quiero consultar por la línea Obra (obradores y galpones)",
  hogar: "Hola CONCRIT, quiero consultar por la línea Hogar (vivienda)",
} as const;

/** Construye un link de WhatsApp con el mensaje URL-encodeado en ?text=. */
export function waLink(message: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

/** Links de WhatsApp ya armados por segmento. */
export const wa = {
  general: waLink(WA_MESSAGES.general),
  campo: waLink(WA_MESSAGES.campo),
  obra: waLink(WA_MESSAGES.obra),
  hogar: waLink(WA_MESSAGES.hogar),
} as const;

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
