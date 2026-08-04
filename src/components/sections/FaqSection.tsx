import Faq from "../Faq";
import CtaBanda from "@/components/CtaBanda";
import { wa } from "@/lib/config";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-bone py-[clamp(72px,10vw,120px)]">
      <div className="max-w-[920px] mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
          06 — Preguntas frecuentes
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[40px] max-w-[22ch]">
          Lo que todos preguntan antes de comprar
        </h2>
        <Faq />

        <div className="mt-[32px]">
          <CtaBanda
            title="¿Tu pregunta no está en la lista?"
            cta="Preguntar por WhatsApp"
            href={wa.general}
            note="Te contesta alguien de la fábrica, no un formulario."
          />
        </div>
      </div>
    </section>
  );
}
