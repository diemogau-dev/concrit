"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { FotoProducto } from "@/lib/productos";

/** Tratamiento parejo para todas las fotos del catálogo. */
const FILTRO = "object-cover [filter:grayscale(1)_contrast(1.06)]";

/**
 * Fotos de una ficha de producto: cuadradas, en blanco y negro y con zoom.
 *
 * Cuando el producto tiene más de una, se pasan con las flechas (o tocando los
 * puntitos), como en una tienda. La foto abierta se amplía a pantalla completa
 * al hacer click, que es donde se ve la textura de la pieza.
 */
export default function ProductoFotos({
  fotos,
  nombre,
}: {
  fotos: FotoProducto[];
  nombre: string;
}) {
  const [i, setI] = useState(0);

  // Sin fotos todavía: panel de marca en vez de un hueco gris.
  if (!fotos.length) {
    return (
      <div className="relative aspect-square bg-concrete-dark overflow-hidden flex items-center justify-center px-[20px]">
        <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-40" />
        <span className="relative z-[2] font-anton font-normal text-[clamp(20px,2.4vw,28px)] leading-[1.02] uppercase text-bone-soft text-center">
          {nombre}
        </span>
        <span className="absolute z-[2] left-0 bottom-0 bg-olive text-bone font-condensed font-extrabold text-[10px] leading-none tracking-[.16em] uppercase py-[7px] px-[10px]">
          Foto en camino
        </span>
      </div>
    );
  }

  const foto = fotos[Math.min(i, fotos.length - 1)];
  const total = fotos.length;
  const ir = (n: number) => setI(((n % total) + total) % total);

  return (
    <div className="relative bg-bone-2">
      <Lightbox src={foto.src} alt={foto.alt} width={1000} height={1000}>
        <div className="relative aspect-square">
          <Image
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={FILTRO}
          />
        </div>
      </Lightbox>

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={() => ir(i - 1)}
            aria-label={`Foto anterior de ${nombre}`}
            className="absolute left-[6px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[30px] h-[30px] bg-bone/90 text-concrete-dark hover:bg-bone"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => ir(i + 1)}
            aria-label={`Foto siguiente de ${nombre}`}
            className="absolute right-[6px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[30px] h-[30px] bg-bone/90 text-concrete-dark hover:bg-bone"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute left-0 right-0 bottom-[8px] flex justify-center gap-[6px]">
            {fotos.map((f, n) => (
              <button
                key={f.src}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Ver foto ${n + 1} de ${total}`}
                aria-current={n === i}
                className={`w-[7px] h-[7px] rounded-full border border-concrete-dark/40 ${
                  n === i ? "bg-concrete-dark" : "bg-bone/80"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
