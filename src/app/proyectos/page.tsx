import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import GaleriaObras from "@/components/GaleriaObras";
import Sistema from "@/components/sections/Sistema";
import LlaveEnMano from "@/components/sections/LlaveEnMano";
import { WhatsAppIcon } from "@/components/icons";
import { wa, SITE } from "@/lib/config";
import { categorias } from "@/lib/proyectos";

export const metadata: Metadata = {
  title: "Proyectos y sistema constructivo | CONCRIT",
  description:
    "Cómo construimos con prefabricados de concreto: el sistema de placas, pilares y uniones, paso a paso de la fundación a la llave. Obradores, galpones, depósitos y casas prefabricadas entregadas llave en mano en Paraguay. Fábrica sobre la Ruta 9, Villa Hayes.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/proyectos`,
    siteName: SITE.name,
    title: "Proyectos y sistema constructivo | CONCRIT",
    description:
      "Obradores, galpones, depósitos y casas prefabricadas de concreto macizo. Se monta en semanas y se entrega terminado.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function ProyectosPage() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-bone [overflow-x:clip]">
        <PageHero
          eyebrow="Obras y sistema constructivo"
          title="Se arma encastrando y se entrega terminado"
          lead="Placas, pilares y uniones que salen de planta y encastran en el terreno. Sin encofrado, sin esperar que fragüe y con cuadrilla chica. Obradores, galpones, depósitos y casas, montados en semanas."
          img="/assets/hero-proyectos.jpg"
          imgAlt="Obrador de concreto prefabricado CONCRIT terminado y en uso"
        >
          <a
            href={wa.presupuestoObra}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] bg-olive text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-olive-hover"
          >
            <WhatsAppIcon size={17} fill="#F2F1ED" />
            Solicitar presupuesto de obra
          </a>
        </PageHero>

        {/* 01 — Sistema constructivo y sus ventajas.
            El titular ya lo cuenta el hero, así que va en modo compacto.
            El bloque llave en mano va más abajo, como sección propia. */}
        <Sistema
          compacto={{ n: "01", titulo: "El sistema constructivo" }}
          conLlaveEnMano={false}
        />

        {/* 02 — Los cuatro tipos de obra */}
        <section
          id="que-construimos"
          className="bg-bone-2 py-[clamp(56px,7vw,86px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <SectionHeader n="02" titulo="Qué construimos" />

            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[22px]">
              {categorias.map((c) => (
                <article
                  key={c.id}
                  className="bg-white border border-gray-warm-2 flex flex-col"
                >
                  <div className="relative h-[210px]">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover [filter:grayscale(1)_contrast(1.03)]"
                    />
                  </div>
                  <div className="pt-[22px] px-[24px] pb-[26px] border-t-4 border-olive flex flex-col flex-1">
                    <h3 className="font-anton font-normal text-[26px] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[10px]">
                      {c.nombre}
                    </h3>
                    <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 m-0">
                      {c.descripcion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Obras entregadas: mosaico por tipo, sin nombres ni localidades */}
        <section
          id="entregados"
          className="bg-bone py-[clamp(56px,7vw,86px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <SectionHeader n="03" titulo="Obras entregadas" />
            <GaleriaObras />
          </div>
        </section>

        {/* 04 — Llave en mano */}
        <section
          id="llave-en-mano"
          className="bg-bone-2 py-[clamp(56px,7vw,86px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <SectionHeader n="04" titulo="Llave en mano" />
            <LlaveEnMano conEtiqueta={false} />
          </div>
        </section>

        {/* CTA final */}
        <section className="relative bg-olive py-[clamp(64px,9vw,110px)] overflow-hidden">
          <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-[.28]" />
          <div className="relative z-[2] max-w-[900px] mx-auto px-[clamp(18px,5vw,72px)] text-center flex flex-col items-center">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-fog mb-[16px]">
              05 — Tu obra
            </div>
            <h2 className="font-anton font-normal text-[clamp(34px,5.4vw,66px)] leading-[0.98] uppercase text-bone mt-0 mb-[18px] max-w-[18ch]">
              Contanos tu obra y te acompañamos en todo el proceso
            </h2>
            <p className="font-barlow font-normal text-[clamp(17px,2vw,21px)] leading-[1.5] text-olive-pale max-w-[54ch] mt-0 mb-[34px]">
              Mandanos las medidas, un croquis o hasta una foto del terreno. Lo
              miramos con vos, te decimos qué conviene y te acompañamos hasta el
              día que te entregamos la llave.
            </p>
            <a
              href={wa.presupuestoObra}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[24px] px-[40px] hover:bg-white"
            >
              <WhatsAppIcon size={22} fill="#201F1C" />
              Solicitar presupuesto de obra
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
