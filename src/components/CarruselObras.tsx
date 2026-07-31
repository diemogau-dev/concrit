"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { galeriaObras } from "@/lib/proyectos";

/**
 * Carrusel de obras entregadas.
 *
 * Un visor grande arriba y la tira de miniaturas abajo, como la galería de
 * fotos de una ficha de hotel: la persona pasa fotos y nada más. Sin nombres,
 * sin epígrafes y sin dividir por tipo de obra — obradores, casas, galpones,
 * camineros, interiores y el equipo trabajando van mezclados.
 *
 * La foto grande va contenida (no recortada) sobre fondo oscuro, así entran
 * las verticales y las horizontales sin cortar nada. La miniatura sí recorta,
 * para que la tira quede pareja.
 */
export default function CarruselObras() {
  const fotos = galeriaObras;
  const [i, setI] = useState(0);
  const tiraRef = useRef<HTMLDivElement>(null);

  const total = fotos.length;
  const ir = useCallback((n: number) => setI(((n % total) + total) % total), [total]);

  // Flechas del teclado, sólo cuando el foco está dentro del carrusel.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      ir(i + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      ir(i - 1);
    }
  };

  // La miniatura activa siempre a la vista.
  useEffect(() => {
    const tira = tiraRef.current;
    const activa = tira?.querySelector<HTMLElement>('[data-activa="true"]');
    if (!tira || !activa) return;
    const izq = activa.offsetLeft - tira.offsetWidth / 2 + activa.offsetWidth / 2;
    tira.scrollTo({ left: izq, behavior: "smooth" });
  }, [i]);

  const foto = fotos[i];

  return (
    <div
      className="focus:outline-none"
      tabIndex={-1}
      onKeyDown={onKeyDown}
      role="group"
      aria-roledescription="carrusel"
      aria-label="Fotos de obras entregadas"
    >
      {/* Visor */}
      <div className="relative bg-concrete-dark">
        <Lightbox src={foto.img} alt={foto.alt} width={foto.w} height={foto.h}>
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <Image
              key={foto.img}
              src={foto.img}
              alt={foto.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority={i === 0}
              className="object-contain [filter:grayscale(1)_contrast(1.05)]"
            />
          </div>
        </Lightbox>

        <button
          type="button"
          onClick={() => ir(i - 1)}
          aria-label="Foto anterior"
          className="absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[44px] h-[44px] bg-bone/90 text-concrete-dark hover:bg-bone"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => ir(i + 1)}
          aria-label="Foto siguiente"
          className="absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[44px] h-[44px] bg-bone/90 text-concrete-dark hover:bg-bone"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          aria-live="polite"
          className="absolute left-[10px] bottom-[10px] bg-concrete-dark/85 font-condensed font-bold text-[12px] leading-none tracking-[.12em] uppercase text-bone py-[9px] px-[12px]"
        >
          {i + 1} / {total}
        </div>
      </div>

      {/* Tira de miniaturas */}
      <div
        ref={tiraRef}
        className="mt-[10px] flex gap-[8px] overflow-x-auto pb-[6px] [scrollbar-width:thin]"
      >
        {fotos.map((f, n) => {
          const activa = n === i;
          return (
            <button
              key={f.img}
              type="button"
              data-activa={activa}
              onClick={() => setI(n)}
              aria-label={`Ver foto ${n + 1} de ${total}`}
              aria-current={activa}
              className={`relative flex-none w-[92px] h-[70px] sm:w-[108px] sm:h-[80px] overflow-hidden border-2 transition-opacity ${
                activa
                  ? "border-olive opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={f.img}
                alt=""
                fill
                sizes="110px"
                loading="lazy"
                className="object-cover [filter:grayscale(1)_contrast(1.05)]"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
