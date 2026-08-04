import type { Metadata } from "next";
import { SITE } from "./config";
import type { Landing } from "./landings";

/**
 * Metadata de una landing de producto.
 *
 * El canonical se declara con la ruta relativa: Next lo resuelve contra el
 * `metadataBase` del layout, así que cambiar de dominio sigue siendo una
 * sola línea en `config.ts`.
 */
export function landingMetadata(landing: Landing): Metadata {
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    keywords: [...landing.keywords],
    alternates: { canonical: landing.slug },
    openGraph: {
      type: "article",
      locale: SITE.locale,
      url: `${SITE.url}${landing.slug}`,
      siteName: SITE.name,
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [
        {
          url: landing.heroImg,
          width: 1200,
          height: 630,
          alt: landing.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [landing.heroImg],
    },
    robots: { index: true, follow: true },
  };
}
