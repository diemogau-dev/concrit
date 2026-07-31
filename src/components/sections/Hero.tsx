import Image from "next/image";
import Link from "next/link";
import { wa, FABRICA_LINEA } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

export default function Hero() {
  return (
    <section className="relative min-h-[clamp(560px,88vh,860px)] flex items-end bg-concrete-dark overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-obrador.jpg"
          alt="Obrador prefabricado de concreto macizo CONCRIT sobre la Ruta 9 Km 41, Villa Hayes, Paraguay"
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:contrast(1.04)_saturate(1.16)_brightness(.98)]"
        />
      </div>
      {/* Legibilidad sin apagar el atardecer: en vez de oscurecer toda la foto,
          se oscurece la esquina de abajo a la izquierda, que es exactamente
          donde se apoya el texto. El cielo y el cerro quedan intactos. */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(125%_105%_at_8%_92%,rgba(18,17,15,.92)_0%,rgba(18,17,15,.62)_32%,rgba(18,17,15,.12)_62%,rgba(18,17,15,0)_78%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(18,17,15,.34)_0%,rgba(18,17,15,0)_26%,rgba(18,17,15,0)_58%,rgba(18,17,15,.72)_100%)]" />
      {/* Textura de ruido */}
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-50" />

      <div className="relative z-[2] w-full max-w-container mx-auto py-[clamp(40px,7vw,84px)] px-[clamp(18px,5vw,72px)]">
        <div className="inline-flex items-center gap-[10px] border border-[rgba(242,241,237,.32)] py-[8px] px-[14px] mb-[26px]">
          <span className="w-[7px] h-[7px] bg-olive-light rounded-full" />
          <span className="font-condensed font-semibold text-[11px] leading-none tracking-[.22em] uppercase text-concrete-dark">
            {FABRICA_LINEA} · La puerta del Chaco
          </span>
        </div>

        <h1 className="font-anton font-normal text-[clamp(52px,10.5vw,160px)] leading-[0.84] uppercase tracking-[.01em] text-bone-soft [text-shadow:0_2px_0_rgba(0,0,0,.4)] m-0">
          CONCRIT
        </h1>

        <div className="h-[6px] w-[120px] bg-olive mt-[26px] mb-[22px]" />

        <p className="font-condensed font-medium text-[clamp(19px,2.6vw,32px)] leading-[1.14] tracking-[.01em] uppercase text-bone max-w-[34ch] mt-0 mb-[16px]">
          Industria de prefabricados de concreto.
        </p>

        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,21px)] leading-[1.5] text-gray-warm-1 max-w-[58ch] mt-0 mb-[34px]">
          Productos prefabricados de hormigón. Sistema propio de construcción
          para el campo, la industria y el hogar. Proyectos llave en mano, plazo
          de entrega corto y precio bajo.
        </p>

        <div className="flex gap-[14px] flex-wrap">
          <a
            href={wa.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-bone text-concrete-dark font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-white"
          >
            <WhatsAppIcon size={17} fill="#201F1C" />
            Solicitar presupuesto
          </a>
          <Link
            href="/productos"
            className="inline-flex items-center gap-[10px] bg-transparent text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] border-[1.5px] border-[rgba(242,241,237,.55)] hover:border-bone hover:bg-[rgba(242,241,237,.08)]"
          >
            Ver todos los productos →
          </Link>
        </div>
      </div>
    </section>
  );
}
