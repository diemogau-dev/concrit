"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { categorias } from "@/lib/proyectos";

/**
 * Galería de obras entregadas agrupada por tipo de construcción.
 *
 * Sin nombres de obra ni localidades: se elige el tipo y se ven las fotos. Al
 * mostrar una categoría por vez entran muchas fotos sin estirar el scroll.
 */
export default function GaleriaObras() {
  const [activa, setActiva] = useState(categorias[0].id);
  const categoria = categorias.find((c) => c.id === activa) ?? categorias[0];

  return (
    <div>
      {/* Selector de tipo de obra */}
      <div className="flex flex-wrap gap-[10px] mb-[22px]">
        {categorias.map((c) => {
          const on = c.id === activa;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiva(c.id)}
              aria-pressed={on}
              className={`font-condensed font-extrabold text-[13px] leading-none tracking-[.12em] uppercase py-[14px] px-[20px] border transition-colors ${
                on
                  ? "bg-concrete-dark text-bone border-concrete-dark"
                  : "bg-transparent text-gray-warm-4b border-gray-warm-2 hover:border-concrete-dark hover:text-concrete-dark"
              }`}
            >
              {c.nombre}
              <span
                className={`ml-[9px] font-normal ${
                  on ? "text-olive-light" : "text-gray-warm-3"
                }`}
              >
                {c.fotos.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mosaico: sólo fotos, sin epígrafes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]">
        {categoria.fotos.map((f) => (
          <Lightbox
            key={f.img}
            src={f.img}
            alt={f.alt}
            width={f.w ?? 1400}
            height={f.h ?? 1050}
          >
            <div className="relative aspect-[4/3] bg-concrete-dark overflow-hidden">
              <Image
                src={f.img}
                alt={f.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover [filter:grayscale(1)_contrast(1.04)] transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          </Lightbox>
        ))}
      </div>
    </div>
  );
}
