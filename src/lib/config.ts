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

/**
 * Mensajes precargados según de dónde sale el click.
 *
 * Están redactados en primera persona y con el pedido ya explícito: el
 * lead entra al chat con contexto y con la próxima pregunta obvia servida,
 * en vez de un "quiero información" que obliga a Fernando a arrancar de
 * cero. Cuanto más específico el mensaje, menos ida y vuelta hasta el
 * presupuesto.
 */
export const WA_MESSAGES = {
  general: "Hola CONCRIT, quiero cotizar un proyecto. Te cuento qué necesito:",
  campo:
    "Hola CONCRIT, quiero cotizar para mi establecimiento (comederos, bebederos o tanques australianos). Te paso los detalles:",
  obra: "Hola CONCRIT, quiero cotizar un obrador o galpón para una obra. Te paso los detalles:",
  hogar:
    "Hola CONCRIT, quiero conocer los modelos de vivienda y las opciones de financiación.",
  sistema:
    "Hola CONCRIT, quiero saber cuánto costaría mi proyecto con el sistema de placas encastrables.",
  medida:
    "Hola CONCRIT, tengo un proyecto a medida y quiero consultar por el diseño y el relevamiento.",
  // Mensajes de las landings de producto.
  casas:
    "Hola CONCRIT, quiero conocer los modelos de casas prefabricadas y cómo se financian en cuotas.",
  ganado:
    "Hola CONCRIT, quiero cotizar bebederos, comederos o tanques australianos para mi establecimiento.",
  obradores:
    "Hola CONCRIT, quiero cotizar un obrador prefabricado. Te paso la ubicación y los metros que necesito:",
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
  sistema: waLink(WA_MESSAGES.sistema),
  medida: waLink(WA_MESSAGES.medida),
  casas: waLink(WA_MESSAGES.casas),
  ganado: waLink(WA_MESSAGES.ganado),
  obradores: waLink(WA_MESSAGES.obradores),
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
  url: "https://concrit.com.py",
  name: "CONCRIT",
  locale: "es_PY",
  title: "CONCRIT · Prefabricados de hormigón en Paraguay | Ruta 9, Villa Hayes",
  description:
    "Prefabricados de concreto macizo para el campo, la industria y el hogar. Comederos y bebederos para ganado, obradores prefabricados, postes de hormigón y casas prefabricadas de hormigón en Paraguay. Fábrica sobre la Ruta 9, Villa Hayes, la puerta del Chaco. Precio cerrado y montaje incluido.",
} as const;

/** Datos de la fábrica, reutilizados en el JSON-LD de todas las páginas. */
export const BUSINESS = {
  streetAddress: "Ruta 9 Km 32",
  locality: "Villa Hayes",
  region: "Presidente Hayes",
  country: "PY",
  opens: "07:00",
  closes: "17:00",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  foundingYear: "2016",
} as const;
