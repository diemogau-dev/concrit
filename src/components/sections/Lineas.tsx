import Image from "next/image";
import { wa } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

type Chip = { label: string; className?: string };

type Linea = {
  name: string;
  tag: string;
  tagColor: string;
  border: string;
  img: string;
  alt: string;
  subtitle: string;
  body: string;
  chips: Chip[];
  ctaHref: string;
  ctaColor: string;
  ctaText: string;
};

const CHIP_BASE =
  "font-condensed font-semibold text-[12px] leading-none tracking-[.05em] uppercase text-gray-warm-4b border border-gray-warm-2 py-[8px] px-[12px]";

const LINEAS: Linea[] = [
  {
    name: "Campo",
    tag: "Ganadería",
    tagColor: "text-olive",
    border: "border-olive",
    img: "/assets/campo-bebedero.jpg",
    alt: "Bebedero de concreto macizo CONCRIT para ganado en una estancia del Chaco paraguayo",
    subtitle: "Lo que el campo no perdona, el concreto lo aguanta",
    body: "El animal empuja, el sol raja y el agua pudre. Nuestros comederos, bebederos y tanques están hechos para eso: se instalan y no se tocan más. Ya trabajan en cientos de estancias del país.",
    chips: [
      { label: "Comederos" },
      { label: "Bebederos" },
      { label: "Tanques australianos" },
      { label: "Postes" },
      { label: "Casas para el personal" },
    ],
    ctaHref: wa.campo,
    ctaColor: "text-olive",
    ctaText: "Consultar línea campo →",
  },
  {
    name: "Obra",
    tag: "Industria",
    tagColor: "text-gray-warm-4b",
    border: "border-gray-warm-4b",
    img: "/assets/obra-blanco.jpg",
    alt: "Obrador prefabricado de hormigón CONCRIT montado en una obra industrial",
    subtitle: "Tu obra avanza sin esperar a nadie",
    body: "Obradores, galpones y depósitos con precio cerrado y fecha comprometida. Llegan fabricados, se montan en semanas y tu cronograma no se mueve.",
    chips: [
      { label: "Obradores" },
      { label: "Galpones" },
      { label: "Estructuras" },
      { label: "Depósitos" },
      { label: "Vestuarios" },
    ],
    ctaHref: wa.obra,
    ctaColor: "text-olive",
    ctaText: "Consultar línea obra →",
  },
  {
    name: "Hogar",
    tag: "Vivienda",
    tagColor: "text-terracotta",
    border: "border-terracotta",
    img: "/assets/v-hogar.jpg",
    alt: "Casa prefabricada de hormigón macizo CONCRIT lista para habitar",
    subtitle: "Tu casa de material, en cuotas que podés pagar",
    body: "Casas de concreto macizo de 1, 2 y 3 habitaciones. Precio cerrado, entrega en semanas y pago en cuotas a través de loteadoras aliadas. Material noble de verdad, no material barato.",
    chips: [
      { label: "1 habitación" },
      { label: "2 habitaciones" },
      { label: "3 habitaciones" },
      {
        label: "Pago en cuotas",
        className:
          "font-condensed font-semibold text-[12px] leading-none tracking-[.05em] uppercase text-terracotta border border-[#cdbfae] bg-sand-1 py-[8px] px-[12px]",
      },
    ],
    ctaHref: wa.hogar,
    ctaColor: "text-terracotta",
    ctaText: "Consultar línea hogar →",
  },
];

export default function Lineas() {
  return (
    <section id="lineas" className="bg-bone-2 py-[clamp(72px,10vw,120px)]">
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
          02 — Nuestras líneas
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px]">
          Tres frentes, una sola fábrica
        </h2>
        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[60ch] mt-0 mb-[52px]">
          Campo, obra y hogar. El mismo concreto macizo y el mismo oficio detrás
          de cada pieza. Un solo proveedor en vez de tres.
        </p>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-[22px]">
          {LINEAS.map((l) => (
            <div
              key={l.name}
              className="bg-white border border-gray-warm-2 flex flex-col"
            >
              <div className="relative h-[230px]">
                <Image
                  src={l.img}
                  alt={l.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover [filter:grayscale(1)_contrast(1.03)]"
                />
              </div>
              <div
                className={`pt-[26px] px-[26px] pb-[30px] border-t-4 ${l.border} flex flex-col flex-1`}
              >
                <div className="flex justify-between items-baseline mb-[14px]">
                  <span className="font-anton font-normal text-[32px] leading-none uppercase text-concrete-dark">
                    {l.name}
                  </span>
                  <span
                    className={`font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase ${l.tagColor}`}
                  >
                    {l.tag}
                  </span>
                </div>
                <div className="font-condensed font-bold text-[17px] leading-[1.25] tracking-[.01em] uppercase text-concrete-dark mt-0 mb-[10px]">
                  {l.subtitle}
                </div>
                <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 mt-0 mb-[20px]">
                  {l.body}
                </p>
                <ul className="list-none mt-0 mb-[22px] p-0 flex flex-wrap gap-[8px]">
                  {l.chips.map((c) => (
                    <li key={c.label} className={c.className ?? CHIP_BASE}>
                      {c.label}
                    </li>
                  ))}
                </ul>
                <a
                  href={l.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto font-condensed font-extrabold text-[12px] leading-none tracking-[.1em] uppercase ${l.ctaColor}`}
                >
                  {l.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[34px]">
          <a
            href={wa.representante}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-concrete-dark text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-gray-warm-4c"
          >
            <WhatsAppIcon size={17} fill="#F2F1ED" />
            Hablar con un representante de CONCRIT
          </a>
        </div>
      </div>
    </section>
  );
}
