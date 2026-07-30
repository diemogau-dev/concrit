import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";
import ProductoCard, { ProductoFamilia } from "@/components/ProductoCard";
import PlacasDosCaras from "@/components/sections/PlacasDosCaras";
import { WhatsAppIcon } from "@/components/icons";
import { wa, SITE } from "@/lib/config";
import { secciones } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Catálogo de productos | CONCRIT · Prefabricados de concreto",
  description:
    "Catálogo completo de prefabricados de concreto CONCRIT: bebederos, comederos, postes y tanques australianos para el campo; placas, piso ecológico y baldosas para la obra; cajas de registro, cordón de vereda y alcantarillas para vial e infraestructura. Fábrica sobre la Ruta 9, Villa Hayes.",
  alternates: { canonical: "/productos" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/productos`,
    siteName: SITE.name,
    title: "Catálogo de productos | CONCRIT",
    description:
      "Todo lo que fabricamos en concreto macizo: campo y ganadería, construcción y arquitectura, vial e infraestructura.",
    images: ["/assets/og-image.jpg"],
  },
};

/** Fondo alternado por sección, para que el ojo separe los tres bloques. */
const FONDOS = ["bg-bone", "bg-bone-2", "bg-bone"] as const;

export default function ProductosPage() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-bone [overflow-x:clip]">
        <PageHero
          eyebrow="Catálogo completo"
          title="Todo lo que sale de la fábrica"
          lead="Tres familias de producto, un solo concreto macizo y el mismo oficio detrás de cada pieza. Fabricamos sobre la Ruta 9 y entregamos a todo el país. Elegí lo que necesitás y consultá el precio por WhatsApp: te lo pasamos cerrado, con flete y fecha."
        >
          <nav aria-label="Secciones del catálogo">
            <ul className="list-none m-0 p-0 flex flex-wrap gap-[10px]">
              {secciones.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-[9px] font-condensed font-bold text-[12px] leading-none tracking-[.12em] uppercase text-bone-soft border border-[rgba(242,241,237,.32)] py-[13px] px-[16px] hover:border-bone hover:bg-[rgba(242,241,237,.08)]"
                  >
                    <span className="text-olive-light">{s.n}</span>
                    {s.chip}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </PageHero>

        {/* Aclaración de precios: ninguna card muestra precio todavía. */}
        <div className="bg-olive-pale border-b border-bone-3">
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)] py-[18px] flex flex-wrap items-center gap-x-[14px] gap-y-[6px]">
            <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive">
              Precios
            </span>
            <span className="font-barlow font-normal text-[16px] leading-[1.45] text-gray-warm-4c">
              El precio depende de la medida, la cantidad y adónde va el flete.
              Escribinos y te lo pasamos cerrado en el momento.
            </span>
          </div>
        </div>

        {secciones.map((seccion, i) => {
          const familias = seccion.productos.filter((p) => p.destacado);
          const resto = seccion.productos.filter((p) => !p.destacado);

          return (
            <section
              key={seccion.id}
              id={seccion.id}
              className={`${FONDOS[i % FONDOS.length]} py-[clamp(64px,9vw,110px)] border-t border-bone-3 scroll-mt-[74px]`}
            >
              <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
                <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
                  {seccion.n} — {seccion.chip}
                </div>
                <h2 className="font-anton font-normal text-[clamp(30px,4.6vw,54px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[20ch]">
                  {seccion.titulo}
                </h2>
                <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[62ch] mt-0 mb-[44px]">
                  {seccion.intro}
                </p>

                {/* Familias de producto (hoy: las placas) */}
                {familias.map((p) => (
                  <div key={p.slug} className="mb-[22px]">
                    <ProductoFamilia producto={p} />
                  </div>
                ))}

                {/* Argumento de las dos caras: va pegado a las placas */}
                {seccion.id === "construccion" ? (
                  <div className="mb-[22px]">
                    <PlacasDosCaras />
                  </div>
                ) : null}

                <div className="grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-[22px]">
                  {resto.map((p) => (
                    <ProductoCard key={p.slug} producto={p} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Cierre: lo que no está en el catálogo también se fabrica */}
        <section className="relative bg-olive py-[clamp(64px,9vw,110px)] overflow-hidden">
          <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-[.28]" />
          <div className="relative z-[2] max-w-[900px] mx-auto px-[clamp(18px,5vw,72px)] text-center flex flex-col items-center">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-fog mb-[16px]">
              ¿No está en la lista?
            </div>
            <h2 className="font-anton font-normal text-[clamp(30px,5vw,60px)] leading-[0.98] uppercase text-bone mt-0 mb-[18px] max-w-[20ch]">
              Si es de concreto, lo hacemos
            </h2>
            <p className="font-barlow font-normal text-[clamp(16px,2vw,21px)] leading-[1.5] text-olive-pale max-w-[54ch] mt-0 mb-[32px]">
              Tenemos moldes propios y hacemos piezas a medida. Contanos qué
              necesitás, mandanos la medida o un dibujo a mano y te decimos si se
              puede, cuánto sale y cuándo lo tenés.
            </p>
            <a
              href={wa.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[22px] px-[36px] hover:bg-white"
            >
              <WhatsAppIcon size={22} fill="#201F1C" />
              Consultar por WhatsApp
            </a>
            <p className="font-barlow font-normal text-[14px] leading-[1.45] text-olive-mist mt-[16px] mb-0">
              Respondemos todos los días. Preguntar no te compromete a nada.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
