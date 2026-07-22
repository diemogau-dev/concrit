import type { Config } from "tailwindcss";

/**
 * Brand tokens extraídos del HTML de referencia (Landing_CONCRIT.dc.html).
 * Los valores son exactos: token === hex del original.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "concrete-dark": "#201F1C", // fondo oscuro principal
        "concrete-nav": "#1E1D1A", // nav sticky (se usa con /94 de opacidad)
        bone: "#F2F1ED", // fondo claro principal
        "bone-soft": "#EDEBE5", // texto sobre oscuro
        olive: "#5C5F3C", // acento primario / CTAs
        "olive-hover": "#4A4D30", // hover de CTA
        "olive-light": "#8F9260", // acento secundario
        terracotta: "#6E4E34", // hover de links
        "gray-warm-1": "#C9C6BE", // texto secundario sobre oscuro
        "gray-warm-2": "#D3D1C9", // bordes / superficies claras
        "gray-warm-3": "#918D84", // texto terciario
        "gray-warm-4": "#615F58", // superficie oscura
        "gray-warm-4b": "#4B4A45", // superficie oscura
        "gray-warm-4c": "#3A3934", // superficie oscura
        // Terciarios presentes en el original
        "olive-pale": "#EEF0E2",
        "bone-2": "#E6E4DD",
        "bone-3": "#D8D6CF",
        "olive-chip": "#C3C8AC",
        "sand-1": "#F3EDE4",
        "olive-mist": "#E3E5D3",
        "olive-fog": "#D7D9C2",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
