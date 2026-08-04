import { WhatsAppIcon } from "./icons";

type Props = {
  /** El dolor o la pregunta que el visitante ya tiene en la cabeza a esta altura. */
  title: string;
  /** Texto del botón. Siempre en primera persona del cliente ("quiero…"). */
  cta: string;
  href: string;
  /** Línea opcional de refuerzo bajo el botón (respuesta rápida, sin compromiso). */
  note?: string;
  tone?: "dark" | "light";
};

/**
 * Banda de conversión intermedia.
 *
 * Va después de cada bloque que genera una pregunta ("¿y a mí cuánto me
 * sale?") en vez de hacer scrollear hasta el CTA final. Es deliberadamente
 * más chica que el cierre de la página para no competir con él.
 */
export default function CtaBanda({ title, cta, href, note, tone = "light" }: Props) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-[28px] gap-y-[18px] py-[clamp(24px,3.4vw,34px)] px-[clamp(22px,3.4vw,40px)] ${
        isDark
          ? "bg-concrete-dark border border-concrete-dark"
          : "bg-bone-2 border border-gray-warm-2"
      }`}
    >
      <p
        className={`font-condensed font-bold text-[clamp(17px,2.2vw,23px)] leading-[1.2] tracking-[.01em] uppercase m-0 max-w-[34ch] ${
          isDark ? "text-bone" : "text-concrete-dark"
        }`}
      >
        {title}
      </p>

      <div className="flex flex-col gap-[8px]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-[10px] bg-olive text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[17px] px-[26px] hover:bg-olive-hover"
        >
          <WhatsAppIcon size={16} fill="#F2F1ED" />
          {cta}
        </a>
        {note && (
          <span
            className={`font-barlow font-normal text-[13px] leading-[1.4] ${
              isDark ? "text-gray-warm-3" : "text-gray-warm-4"
            }`}
          >
            {note}
          </span>
        )}
      </div>
    </div>
  );
}
