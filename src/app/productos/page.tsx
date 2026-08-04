import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";
import ProductoCard from "@/components/ProductoCard";
import { WhatsAppIcon } from "@/components/icons";
import { wa, SITE } from "@/lib/config";
import { secciones } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Catálogo de productos | CONCRIT · Prefabricados de concreto",
  description:
    "Catálogo completo de prefabricados de concreto CONCRIT: bebederos, comederos, postes y tanques australianos para el campo; placas, piso ecológico y baldosas para la obra; cajas de registro, cordón de vereda y alcantarillas para vial e infraestructura. Fábrica sobre la Ruta 9 Km 36, Villa Hayes.",
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

export default function ProductosPage() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-bone [overflow-x:clip]">
        <PageHero
          eyebrow="Catálogo completo"
          title="Todo lo que sale de la fábrica"
          lead="Elegí lo que necesitás y pedí el precio por WhatsApp. Te lo pasamos cerrado, con flete y fecha."
          img="/assets/hero-productos.jpg"
          imgAlt="Postes de concreto CONCRIT recién desmoldados y apilados en la fábrica de Villa Hayes"
          bw
        />

        <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)] py-[clamp(34px,5vw,64px)]">
          <div className="grid lg:[grid-template-columns:200px_1fr] gap-[clamp(22px,3vw,44px)]">
            {/* Menú de categorías: al costado en desktop, en fila arriba en
                mobile. Son anclas: el catálogo entero está en una sola página. */}
            <aside className="min-w-0 lg:sticky lg:top-[86px] lg:self-start">
              <nav aria-label="Categorías del catálogo">
                <div className="hidden lg:block font-condensed font-semibold text-[11px] leading-none tracking-[.24em] uppercase text-gray-warm-3 mb-[14px]">
                  Categorías
                </div>
                <ul className="list-none m-0 p-0 flex lg:flex-col gap-[8px] overflow-x-auto pb-[4px] lg:pb-0">
                  {secciones.map((s) => (
                    <li key={s.id} className="flex-none">
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-[8px] font-condensed font-bold text-[12px] leading-[1.2] tracking-[.08em] uppercase text-gray-warm-4b border border-gray-warm-2 py-[12px] px-[14px] hover:border-concrete-dark hover:text-concrete-dark lg:border-0 lg:border-l-2 lg:border-l-gray-warm-2 lg:py-[9px] lg:hover:border-l-olive"
                      >
                        <span className="text-olive">{s.n}</span>
                        {s.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0">
              {secciones.map((seccion) => (
                <section
                  key={seccion.id}
                  id={seccion.id}
                  className="scroll-mt-[90px] mb-[clamp(38px,5vw,64px)] last:mb-0"
                >
                  <div className="flex items-baseline gap-[10px] pb-[12px] mb-[18px] border-b border-gray-warm-2">
                    <span className="font-anton font-normal text-[20px] leading-none text-olive">
                      {seccion.n}
                    </span>
                    <h2 className="font-condensed font-bold text-[16px] leading-none tracking-[.14em] uppercase text-concrete-dark m-0">
                      {seccion.nombre}
                    </h2>
                    <span className="font-barlow font-normal text-[14px] leading-none text-gray-warm-3 ml-auto">
                      {seccion.productos.length} productos
                    </span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(10px,1.4vw,18px)]">
                    {seccion.productos.map((p) => (
                      <ProductoCard key={p.slug} producto={p} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

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
              Tenemos moldes propios y hacemos piezas a medida. Mandanos la
              medida o un dibujo a mano y te decimos si se puede, cuánto sale y
              cuándo lo tenés.
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
