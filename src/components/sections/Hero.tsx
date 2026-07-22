import Image from "next/image";
import { wa } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

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
        <div className="inline-flex items-center gap-[10px] border border-[rgba(242,241,237,.32)] py-[8px] px-[14px] mb-[26px]">
          <span className="w-[7px] h-[7px] bg-olive-light rounded-full" />
          <span className="font-condensed font-semibold text-[11px] leading-none tracking-[.22em] uppercase text-gray-warm-1">
            Ruta 9 · Villa Hayes · La puerta del Chaco
          </span>
        </div>

        <h1 className="font-anton font-normal text-[clamp(52px,10.5vw,160px)] leading-[0.84] uppercase tracking-[.01em] text-bone-soft [text-shadow:0_2px_0_rgba(0,0,0,.4)] m-0">
          CONCRIT
        </h1>

        <div className="h-[6px] w-[120px] bg-olive mt-[26px] mb-[22px]" />

        <p className="font-condensed font-medium text-[clamp(19px,2.6vw,32px)] leading-[1.14] tracking-[.01em] uppercase text-bone max-w-[22ch] mt-0 mb-[16px]">
          Se instala una vez.
          <br />
          Y queda para siempre.
        </p>

        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,21px)] leading-[1.5] text-gray-warm-1 max-w-[56ch] mt-0 mb-[34px]">
          Prefabricados de concreto macizo para el campo, la industria y la obra.
          Fabricados en el Chaco, para aguantar el Chaco. Precio cerrado, plazo
          cumplido y montaje incluido.
        </p>

        <div className="flex gap-[14px] flex-wrap">
          <a
            href={wa.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-bone text-concrete-dark font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-white"
          >
            <WhatsAppIcon size={17} fill="#201F1C" />
            Pedir presupuesto por WhatsApp
          </a>
          <a
            href="#lineas"
            className="inline-flex items-center gap-[10px] bg-transparent text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] border-[1.5px] border-[rgba(242,241,237,.55)] hover:border-bone hover:bg-[rgba(242,241,237,.08)]"
          >
            Ver nuestras líneas →
          </a>
        </div>
      </div>
    </section>
  );
}
