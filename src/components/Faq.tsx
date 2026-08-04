"use client";

import { useState } from "react";
import { faqs as homeFaqs, type Faq as FaqItem } from "@/lib/content";

/**
 * Acordeón de preguntas frecuentes.
 *
 * La apertura usa una transición de `grid-template-rows` (0fr → 1fr) en vez
 * de un `max-height` fijo: con respuestas de largo variable —y en mobile,
 * donde el mismo texto ocupa el triple de alto— cualquier tope fijo termina
 * recortando alguna respuesta.
 */
export default function Faq({ items = homeFaqs }: { items?: FaqItem[] }) {
  // Primera pregunta abierta: muestra de entrada que el bloque es expandible.
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="border-b border-gray-warm-2">
      {items.map((f, i) => {
        const isOpen = i === openFaq;
        const buttonId = `faq-button-${i}`;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={f.q} className="border-t border-gray-warm-2">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
                className="w-full flex justify-between items-center gap-[20px] bg-transparent border-0 cursor-pointer py-[22px] px-[2px] text-left"
              >
                <span className="font-condensed font-bold text-[clamp(16px,2.1vw,20px)] leading-[1.3] tracking-[.01em] uppercase text-concrete-dark">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`inline-block flex-none font-barlow font-normal text-[30px] leading-none transition-transform duration-300 [transition-timing-function:ease] ${
                    isOpen ? "rotate-45 text-terracotta" : "rotate-0 text-olive"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-[.34s] [transition-timing-function:cubic-bezier(.4,0,.2,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-barlow font-normal text-[clamp(15px,1.8vw,17px)] leading-[1.6] text-gray-warm-4c pt-0 px-[2px] pb-[24px] max-w-[72ch] m-0">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
