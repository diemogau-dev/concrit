import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { LANDINGS } from "@/lib/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/productos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/proyectos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Landings de producto: se agregan solas al sumar una entrada a LANDINGS.
    ...Object.values(LANDINGS).map((l) => ({
      url: `${SITE.url}${l.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
