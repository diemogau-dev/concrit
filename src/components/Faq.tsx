"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  // Estado inicial: primera pregunta abierta (openFaq: 0 en el original).
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="border-b border-gray-warm-2">
      {faqs.map((f, i) => {
        const isOpen = i === openFaq;
        const buttonId = `faq-button-${i}`;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={i} className="border-t border-gray-warm-2">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
                className="w-full flex justify-between items-center gap-[20px] bg-transparent border-0 cursor-pointer py-[24px] px-[2px] text-left"
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
              className={`overflow-hidden transition-[max-height] duration-[.34s] [transition-timing-function:cubic-bezier(.4,0,.2,1)] ${
                isOpen ? "max-h-[460px]" : "max-h-0"
              }`}
            >
              <p className="font-barlow font-normal text-[clamp(15px,1.8vw,17px)] leading-[1.6] text-gray-warm-4c pt-0 px-[2px] pb-[26px] max-w-[72ch] m-0">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
