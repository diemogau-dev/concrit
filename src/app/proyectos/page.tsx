import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";
import Lightbox from "@/components/Lightbox";
import Sistema from "@/components/sections/Sistema";
import LlaveEnMano from "@/components/sections/LlaveEnMano";
import { WhatsAppIcon } from "@/components/icons";
import { wa, waProyecto, SITE } from "@/lib/config";
import { queConstruimos, obrasEntregadas } from "@/lib/proyectos";

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
          title="Así construimos y esto entregamos"
          lead="Un sistema de piezas que encastran: placas, pilares y uniones que salen de planta y se arman en el terreno. Obradores, galpones, depósitos y casas, montados en semanas y entregados terminados. Acá está cómo funciona y qué llevamos hecho."
        >
          <a
            href={wa.presupuestoObra}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] bg-olive text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-olive-hover"
          >
            <WhatsAppIcon size={17} fill="#F2F1ED" />
            Pedir presupuesto de obra
          </a>
        </PageHero>

        {/* 01 — Sistema constructivo + de la fundación a la llave.
            El bloque llave en mano va más abajo, como sección propia. */}
        <Sistema
          eyebrow="01 — El sistema constructivo"
          conLlaveEnMano={false}
          spacious
        />

        {/* 02 — Qué construimos */}
        <section
          id="que-construimos"
          className="bg-bone-2 py-[clamp(72px,10vw,120px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
              02 — Qué construimos
            </div>
            <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[20ch]">
              El mismo sistema, cuatro destinos
            </h2>
            <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[62ch] mt-0 mb-[48px]">
              Cambia el uso, no la manera de construirlo. Las mismas placas y los
              mismos pilares resuelven un obrador de tres semanas o la casa donde
              va a vivir una familia treinta años.
            </p>

            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[22px]">
              {queConstruimos.map((o) => (
                <article
                  key={o.slug}
                  className="bg-white border border-gray-warm-2 flex flex-col"
                >
                  <div className="relative h-[210px]">
                    <Image
                      src={o.img}
                      alt={o.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover [filter:grayscale(1)_contrast(1.03)]"
                    />
                  </div>
                  <div className="pt-[22px] px-[24px] pb-[26px] border-t-4 border-olive flex flex-col flex-1">
                    <h3 className="font-anton font-normal text-[26px] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[10px]">
                      {o.nombre}
                    </h3>
                    <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 m-0">
                      {o.descripcion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Proyectos entregados */}
        <section
          id="entregados"
          className="bg-bone py-[clamp(72px,10vw,120px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
              03 — Proyectos entregados
            </div>
            <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[20ch]">
              Más de 100 obras, paradas y funcionando
            </h2>
            <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[62ch] mt-0 mb-[48px]">
              Diez años sobre la Ruta 9 dejan obra hecha. Estas son algunas,
              entregadas con precio cerrado y en la fecha comprometida. Si ves
              una parecida a lo que necesitás, escribinos y arrancamos por ahí.
            </p>

            {/* gap real en vez de grilla con fondo: con un número impar de
                obras la última fila no deja un hueco gris colgando. */}
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
              {obrasEntregadas.map((o) => (
                <figure
                  key={o.slug}
                  className="bg-white border border-gray-warm-2 m-0 flex flex-col"
                >
                  <Lightbox
                    src={o.img}
                    alt={o.alt}
                    width={o.w ?? 900}
                    height={o.h ?? 700}
                  >
                    <div className="relative h-[240px]">
                      <Image
                        src={o.img}
                        alt={o.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover [filter:grayscale(1)_contrast(1.04)]"
                      />
                    </div>
                  </Lightbox>
                  <figcaption className="pt-[20px] px-[22px] pb-[24px] flex flex-col gap-[8px] flex-1">
                    <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive">
                      {o.lugar}
                    </span>
                    <span className="font-condensed font-bold text-[16px] leading-[1.25] tracking-[.02em] uppercase text-concrete-dark">
                      {o.caption}
                    </span>
                    <a
                      href={waProyecto(o.caption)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-[12px] font-condensed font-extrabold text-[12px] leading-none tracking-[.1em] uppercase text-olive"
                    >
                      Quiero algo parecido →
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Llave en mano */}
        <section
          id="llave-en-mano"
          className="bg-bone-2 py-[clamp(72px,10vw,120px)] border-t border-bone-3 scroll-mt-[74px]"
        >
          <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
              04 — Llave en mano
            </div>
            <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[22ch]">
              Un solo responsable, de la fundación al último detalle
            </h2>
            <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[62ch] mt-0 mb-[44px]">
              No te dejamos la estructura levantada y el resto por tu cuenta. La
              terminación interior también la hacemos nosotros.
            </p>
            <LlaveEnMano />
          </div>
        </section>

        {/* CTA final */}
        <section className="relative bg-olive py-[clamp(72px,10vw,120px)] overflow-hidden">
          <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-[.28]" />
          <div className="relative z-[2] max-w-[900px] mx-auto px-[clamp(18px,5vw,72px)] text-center flex flex-col items-center">
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-fog mb-[16px]">
              05 — Tu obra
            </div>
            <h2 className="font-anton font-normal text-[clamp(34px,5.4vw,66px)] leading-[0.98] uppercase text-bone mt-0 mb-[18px] max-w-[18ch]">
              Contanos tu obra y te pasamos el precio
            </h2>
            <p className="font-barlow font-normal text-[clamp(17px,2vw,21px)] leading-[1.5] text-olive-pale max-w-[54ch] mt-0 mb-[34px]">
              Mandanos las medidas, un croquis o hasta una foto del terreno. Te
              armamos el presupuesto cerrado, con alcance definido, montaje
              incluido y fecha de entrega. Sin vueltas y sin compromiso.
            </p>
            <a
              href={wa.presupuestoObra}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[24px] px-[40px] hover:bg-white"
            >
              <WhatsAppIcon size={22} fill="#201F1C" />
              Pedir presupuesto de obra
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
