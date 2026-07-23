import { wa } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative bg-olive py-[clamp(72px,10vw,120px)] overflow-hidden"
    >
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-[.28]" />
      <div className="relative z-[2] max-w-[900px] mx-auto px-[clamp(18px,5vw,72px)] text-center flex flex-col items-center">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-fog mb-[16px]">
          04 — Hablemos
        </div>
        <h2 className="font-anton font-normal text-[clamp(34px,5.4vw,66px)] leading-[0.98] uppercase text-bone mt-0 mb-[18px] max-w-[18ch]">
          Decinos qué necesitás y te pasamos el precio
        </h2>
        <p className="font-barlow font-normal text-[clamp(17px,2vw,21px)] leading-[1.5] text-olive-pale max-w-[54ch] mt-0 mb-[34px]">
          Escribinos por WhatsApp. Te armamos el presupuesto cerrado, con precio
          fijo, alcance definido y fecha de entrega, y arrancamos. Sin vueltas y
          sin compromiso.
        </p>
        <a
          href={wa.general}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[24px] px-[40px] hover:bg-white"
        >
          <WhatsAppIcon size={22} fill="#201F1C" />
          Escribinos por WhatsApp
        </a>
        <p className="font-barlow font-normal text-[14px] leading-[1.45] text-olive-mist mt-[16px] mb-0">
          Respondemos todos los días. Preguntar no te compromete a nada.
        </p>
        <div className="flex flex-wrap justify-center gap-y-[10px] gap-x-[26px] mt-[36px] pt-[26px] border-t border-[rgba(242,241,237,.24)] w-full max-w-[660px]">
          <span className="font-condensed font-bold text-[12px] leading-[1.3] tracking-[.08em] uppercase text-olive-pale">
            +100 proyectos entregados
          </span>
          <span className="font-condensed font-normal text-[12px] leading-[1.3] text-olive-chip">
            ·
          </span>
          <span className="font-condensed font-bold text-[12px] leading-[1.3] tracking-[.08em] uppercase text-olive-pale">
            Cientos de estancias con nuestros productos
          </span>
          <span className="font-condensed font-normal text-[12px] leading-[1.3] text-olive-chip">
            ·
          </span>
          <span className="font-condensed font-bold text-[12px] leading-[1.3] tracking-[.08em] uppercase text-olive-pale">
            10 años sobre la Ruta 9
          </span>
        </div>
      </div>
    </section>
  );
}
