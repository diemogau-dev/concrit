/**
 * Constructores de JSON-LD.
 *
 * Todo el structured data del sitio sale de acá para que los datos de la
 * fábrica (dirección, horarios, teléfono) existan una sola vez. Los tipos
 * son laxos a propósito: el objeto se serializa tal cual dentro de un
 * <script type="application/ld+json">.
 */

import { SITE, BUSINESS, CONTACT, WHATSAPP_DISPLAY } from "./config";
import type { Faq } from "./content";

type Json = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organizacion`;

const postalAddress: Json = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
};

/** Identidad de la empresa. Se referencia por @id desde el resto de los nodos. */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/assets/og-image.jpg`,
    image: `${SITE.url}/assets/og-image.jpg`,
    telephone: WHATSAPP_DISPLAY,
    email: CONTACT.email,
    foundingDate: BUSINESS.foundingYear,
    address: postalAddress,
    sameAs: [CONTACT.instagramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: WHATSAPP_DISPLAY,
        email: CONTACT.email,
        areaServed: "PY",
        availableLanguage: ["es"],
      },
    ],
  };
}

/** Ficha local: es la que alimenta el panel de Google y el SEO del Chaco. */
export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#fabrica`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/assets/og-image.jpg`,
    telephone: WHATSAPP_DISPLAY,
    email: CONTACT.email,
    priceRange: "$$",
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress,
    hasMap: CONTACT.mapsUrl,
    areaServed: [
      { "@type": "Country", name: "Paraguay" },
      { "@type": "Place", name: "Chaco" },
      { "@type": "Place", name: "Villa Hayes" },
      { "@type": "Place", name: "Presidente Hayes" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...BUSINESS.days],
        opens: BUSINESS.opens,
        closes: BUSINESS.closes,
      },
    ],
    sameAs: [CONTACT.instagramUrl],
  };
}

/** FAQPage a partir del mismo banco de preguntas que se ve en pantalla. */
export function faqPageSchema(items: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Product para las landings de producto. Sin `offers` a propósito: no
 * publicamos precios, y declarar una oferta sin precio real es
 * exactamente el tipo de dato que Google marca como inválido.
 */
export function productSchema(p: {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: `${SITE.url}${p.image}`,
    url: `${SITE.url}${p.url}`,
    category: p.category,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    material: "Hormigón armado macizo",
  };
}

/** Migas de pan. `items` va en orden, de la home a la página actual. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
