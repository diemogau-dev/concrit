import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CarruselObras from "@/components/CarruselObras";
import Lightbox from "@/components/Lightbox";
import Sistema from "@/components/sections/Sistema";
import LlaveEnMano from "@/components/sections/LlaveEnMano";
import { WhatsAppIcon } from "@/components/icons";
import { wa, SITE } from "@/lib/config";
import { tiposDeObra, proceso } from "@/lib/proyectos";

export const metadata: Metadata = {
  title: "Proyectos y sistema constructivo | CONCRIT",
  description:
    "Cómo construimos con prefabricados de concreto: placas macizas, pilares metálicos y uniones atornilladas, paso a paso de la planta a la llave. Más de 100 obras entregadas en Paraguay: obradores, galpones, depósitos y casas prefabricadas llave en mano. Fábrica sobre la Ruta 9 Km 36, Villa Hayes.",
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
          title="De terreno vacío a llave en mano"
          lead="Tu obrador, tu galpón, tu depósito o tu casa: en pie en semanas y entregados listos para usar, con el precio cerrado desde el primer día. Y después no piden nada — ni mantenimiento, ni pintura, ni arreglos por humedad o termita."
          img="/assets/hero-proyectos.jpg"
          imgAlt="Obrador de concreto prefabricado CONCRIT terminado, con su galería y la vereda de placas"
          bw
        >
          <a
            href={wa.miProyecto}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] bg-olive text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-olive-hover"
          >
            <WhatsAppIcon size={17} fill="#F2F1ED" />
            Quiero contarles mi proyecto
          </a>
        </PageHero>

        {/* 01 — Sistema constructivo y sus ventajas.
            El titular ya lo cuenta el hero, así que va en modo compacto.
            El bloque llave en mano va más abajo, como sección propia. */}
        <Sistema
          compacto={{ n: "01", titulo: "El sistema constructivo" }}
          conLlaveEnMano={false}
          conComparativa
        />

        {/* Franja de proceso: el equipo trabajando, a todo el ancho.
            Va pegada al sistema constructivo porque es la prueba de que lo
            hacemos nosotros, no un render. */}
        <section className="bg-concrete-dark">
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)] py-[16px] flex flex-wrap items-baseline gap-x-[14px] gap-y-[5px]">
            <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.18em] uppercase text-olive-light">
              Fábrica, flota y equipo propios
            </span>
            <span className="font-barlow font-normal text-[16px] leading-[1.4] text-gray-warm-1">
              Lo que te vendemos lo fabricamos y lo montamos nosotros.
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(242,241,237,.14)]">
            {proceso.map((f) => (
              <Lightbox key={f.img} src={f.img} alt={f.alt} width={f.w} height={f.h}>
                <div className="relative aspect-[4/3] bg-concrete-dark">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover [filter:grayscale(1)_contrast(1.05)]"
                  />
                </div>
              </Lightbox>
            ))}
          </div>
        </section>

        {/* 02 — Los cuatro tipos de obra */}
        <section
          id="que-construimos"
          className="bg-bone-2 py-[clamp(56px,7vw,86px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <SectionHeader n="02" titulo="Qué construimos" />

            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[22px]">
              {tiposDeObra.map((c) => (
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
                      className="object-cover [filter:contrast(1.04)_saturate(.94)]"
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

        {/* 03 — Obras entregadas: carrusel único, sin nombres ni categorías */}
        <section
          id="entregados"
          className="bg-bone py-[clamp(56px,7vw,86px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <SectionHeader n="03" titulo="Obras entregadas" />
            <CarruselObras />
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
              href={wa.miProyecto}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[24px] px-[40px] hover:bg-white"
            >
              <WhatsAppIcon size={22} fill="#201F1C" />
              Quiero contarles mi proyecto
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
