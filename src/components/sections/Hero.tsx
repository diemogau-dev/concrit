import Image from "next/image";
import { wa } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

/**
 * Hero.
 *
 * El h1 lleva el nombre de marca y, dentro del mismo encabezado, la línea
 * que dice literalmente qué fabricamos: quien entra tiene que poder
 * responder "¿qué hacen?" sin bajar ni un scroll, y el buscador tiene que
 * leer los productos en el encabezado principal, no en un párrafo suelto.
 */
export default function Hero() {
  return (
    <section className="relative min-h-[clamp(560px,88vh,860px)] flex items-end bg-concrete-dark overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-obrador.jpg"
          alt="Obrador prefabricado de concreto macizo CONCRIT sobre la Ruta 9, Villa Hayes, Paraguay"
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:grayscale(1)_contrast(1.04)_brightness(.82)]"
        />
      </div>
      {/* Degradé de legibilidad */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(24,23,20,.72)_0%,rgba(24,23,20,.34)_38%,rgba(24,23,20,.82)_100%)]" />
      {/* Textura de ruido */}
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-50" />

      <div className="relative z-[2] w-full max-w-container mx-auto py-[clamp(40px,7vw,84px)] px-[clamp(18px,5vw,72px)]">
        <div className="inline-flex items-center gap-[10px] border border-[rgba(242,241,237,.32)] py-[8px] px-[14px] mb-[24px]">
          <span className="w-[7px] h-[7px] bg-olive-light rounded-full" />
          <span className="font-condensed font-semibold text-[11px] leading-none tracking-[.22em] uppercase text-gray-warm-1">
            Ruta 9 · Villa Hayes · La puerta del Chaco
          </span>
        </div>

        <h1 className="m-0">
          <span className="block font-anton font-normal text-[clamp(52px,10.5vw,160px)] leading-[0.84] uppercase tracking-[.01em] text-bone-soft [text-shadow:0_2px_0_rgba(0,0,0,.4)]">
            CONCRIT
          </span>
          <span
            aria-hidden="true"
            className="block h-[6px] w-[120px] bg-olive mt-[24px] mb-[20px]"
          />
          <span className="block font-condensed font-bold text-[clamp(20px,2.7vw,34px)] leading-[1.12] tracking-[.01em] uppercase text-bone max-w-[24ch]">
            Casas, obradores, galpones y productos de hormigón
          </span>
        </h1>

        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,21px)] leading-[1.5] text-gray-warm-1 max-w-[52ch] mt-[16px] mb-[32px]">
          Los fabricamos en Villa Hayes, sobre la Ruta 9, y te los entregamos
          montados. Precio cerrado, plazo cumplido y una sola fecha de entrega.
        </p>

        <div className="flex gap-[14px] flex-wrap">
          <a
            href={wa.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-bone text-concrete-dark font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-white"
          >
            <WhatsAppIcon size={17} fill="#201F1C" />
            Quiero cotizar mi proyecto
          </a>
          <a
            href="#lineas"
            className="inline-flex items-center gap-[10px] bg-transparent text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] border-[1.5px] border-[rgba(242,241,237,.55)] hover:border-bone hover:bg-[rgba(242,241,237,.08)]"
          >
            Ver qué fabricamos →
          </a>
        </div>
      </div>
    </section>
  );
}
