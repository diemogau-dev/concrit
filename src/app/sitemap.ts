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
    ...Object.values(LANDINGS).map((l) => ({
      url: `${SITE.url}${l.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
