"use client";

import { useEffect, useState } from "react";
import { wa } from "@/lib/config";
import { WhatsAppIcon } from "./icons";

const LINKS = [
  { href: "#ventajas", label: "Ventajas" },
  { href: "#lineas", label: "Líneas" },
  { href: "#sistema", label: "El sistema" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(30,29,26,.94)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,.09)]">
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)] min-h-[66px] flex items-center justify-between gap-[14px] flex-wrap">
        <a
          href="#top"
          className="font-anton font-normal text-[27px] leading-none uppercase tracking-[.02em] text-bone-soft"
        >
          CONCRIT
        </a>

        {/* Navegación desktop — idéntica al original */}
        <nav className="hidden md:flex items-center gap-[clamp(14px,2.4vw,28px)] flex-wrap">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-condensed font-semibold text-[12px] leading-none tracking-[.14em] uppercase text-gray-warm-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] bg-olive text-bone font-condensed font-extrabold text-[12px] leading-none tracking-[.12em] uppercase px-[18px] py-[12px] hover:bg-olive-hover"
          >
            <WhatsAppIcon size={15} fill="#F2F1ED" />
            Pedir presupuesto
          </a>
        </nav>

        {/* Botón hamburguesa — solo mobile */}
        <button
          type="button"
          className="md:hidden inline-flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-6 bg-bone-soft transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone-soft transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone-soft transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panel mobile desplegable */}
      <nav
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-[rgba(255,255,255,.09)] bg-[rgba(30,29,26,.98)] transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="px-[clamp(18px,5vw,72px)] py-2 flex flex-col">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-condensed font-semibold text-[14px] leading-none tracking-[.14em] uppercase text-gray-warm-1 py-4 border-b border-[rgba(255,255,255,.07)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 inline-flex items-center justify-center gap-[8px] bg-olive text-bone font-condensed font-extrabold text-[13px] leading-none tracking-[.12em] uppercase px-[18px] py-[15px] hover:bg-olive-hover"
          >
            <WhatsAppIcon size={16} fill="#F2F1ED" />
            Pedir presupuesto
          </a>
        </div>
      </nav>
    </header>
  );
}
