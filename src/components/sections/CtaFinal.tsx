import { wa } from "@/lib/config";
import { WhatsAppIcon } from "../icons";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
};

/**
 * Cierre de página. Los textos son parametrizables porque las landings de
 * producto reutilizan el bloque con su propio mensaje precargado: el que
 * llega buscando "obrador prefabricado" tiene que entrar al chat hablando de
 * obradores, no de un presupuesto genérico.
 */
export default function CtaFinal({
  eyebrow = "04 — Hablemos",
  title = "Contanos tu proyecto y te acompañamos en todo el proceso",
  body = "Escribinos por WhatsApp y lo vemos juntos: qué necesitás, qué conviene y cómo se hace. Te acompañamos desde la primera idea hasta el día que te entregamos la llave.",
  cta = "Solicitar presupuesto",
  href = wa.general,
}: Props = {}) {
  return (
    <section
      id="contacto"
      className="relative bg-olive py-[clamp(72px,10vw,120px)] overflow-hidden"
    >
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-[.28]" />
      <div className="relative z-[2] max-w-[900px] mx-auto px-[clamp(18px,5vw,72px)] text-center flex flex-col items-center">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-fog mb-[16px]">
          {eyebrow}
        </div>
        <h2 className="font-anton font-normal text-[clamp(34px,5.4vw,66px)] leading-[0.98] uppercase text-bone mt-0 mb-[18px] max-w-[18ch]">
          {title}
        </h2>
        <p className="font-barlow font-normal text-[clamp(17px,2vw,21px)] leading-[1.5] text-olive-pale max-w-[54ch] mt-0 mb-[34px]">
          {body}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[14px] bg-bone text-concrete-dark font-condensed font-extrabold text-[clamp(15px,2vw,18px)] leading-none tracking-[.1em] uppercase py-[24px] px-[40px] hover:bg-white"
        >
          <WhatsAppIcon size={22} fill="#201F1C" />
          {cta}
        </a>
        <p className="font-barlow font-normal text-[14px] leading-[1.45] text-olive-mist mt-[16px] mb-0">
          Respondemos todos los días. Preguntar no te compromete a nada.
        </p>
      </div>
    </section>
  );
}
