import type { Metadata } from "next";
import { Anton, Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { SITE, WHATSAPP_DISPLAY, CONTACT, FABRICA } from "@/lib/config";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Semi_Condensed({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "prefabricados de hormigón Paraguay",
    "prefabricados de concreto",
    "comederos y bebederos para ganado",
    "obradores prefabricados",
    "casas prefabricadas de hormigón Paraguay",
    "postes de hormigón Chaco",
    "tanques australianos",
    "galpones prefabricados",
    "CONCRIT",
    "Villa Hayes",
    "Ruta 9",
  ],
  authors: [{ name: "CONCRIT" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CONCRIT · Prefabricados de concreto macizo · Ruta 9 Km 41, Villa Hayes, Paraguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CONCRIT",
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/assets/og-image.jpg`,
  telephone: WHATSAPP_DISPLAY,
  email: CONTACT.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${FABRICA.ruta} Km ${FABRICA.km}`,
    addressLocality: FABRICA.ciudad,
    addressRegion: "Presidente Hayes",
    addressCountry: "PY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: FABRICA.lat,
    longitude: FABRICA.lng,
  },
  hasMap: CONTACT.mapsUrl,
  areaServed: [
    { "@type": "Country", name: "Paraguay" },
    { "@type": "Place", name: "Chaco" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  sameAs: [CONTACT.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PY">
      <body
        className={`${anton.variable} ${barlow.variable} ${barlowCondensed.variable} font-barlow`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
