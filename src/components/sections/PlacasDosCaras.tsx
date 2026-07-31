import Image from "next/image";
import { placasDosCaras } from "@/lib/productos";

/**
 * Argumento de venta de las placas: salen del molde con una cara texturada y
 * una cara lisa, y la lisa se usa a la vista (camineros, veredas, fachadas).
 * El copy se edita en `src/lib/productos.ts`.
 */
export default function PlacasDosCaras() {
  const { eyebrow, titulo, cuerpo, caras, usos } = placasDosCaras;

  return (
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-4c border border-gray-warm-4c">
      <div className="bg-concrete-dark p-[clamp(30px,4vw,50px)] flex flex-col justify-center">
        <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.18em] uppercase text-olive-light mb-[14px]">
          {eyebrow}
        </span>

        <h3 className="font-anton font-normal text-[clamp(24px,3.2vw,40px)] leading-[1.05] uppercase text-bone mt-0 mb-[16px] max-w-[20ch]">
          {titulo}
        </h3>

        <p className="font-barlow font-normal text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-gray-warm-1 mt-0 mb-[26px] max-w-[52ch]">
          {cuerpo}
        </p>

        <div className="flex flex-col">
          {caras.map((c) => (
            <div
              key={c.label}
              className="py-[15px] border-t border-[rgba(242,241,237,.14)]"
            >
              <div className="font-condensed font-bold text-[13px] leading-none tracking-[.12em] uppercase text-olive-light mb-[7px]">
                {c.label}
              </div>
              <p className="font-barlow font-normal text-[16px] leading-[1.45] text-bone-soft m-0">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <ul className="list-none mt-[26px] mb-0 p-0 flex flex-wrap gap-[8px]">
          {usos.map((u) => (
            <li
              key={u}
              className="font-condensed font-semibold text-[12px] leading-none tracking-[.05em] uppercase text-bone-soft border border-[rgba(242,241,237,.28)] py-[8px] px-[12px]"
            >
              {u}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[clamp(300px,38vw,520px)] bg-concrete-dark">
        <Image
          src="/assets/producto-placa-cara-lisa.jpg"
          alt="Caminero de patio resuelto con la cara lisa de las placas de concreto CONCRIT"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover [filter:contrast(1.04)_saturate(.94)]"
        />
        <div className="absolute left-0 bottom-0 bg-concrete-dark py-[14px] px-[18px]">
          <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive-light">
            La cara lisa, a la vista
          </span>
          <div className="font-condensed font-bold text-[15px] leading-[1.2] tracking-[.02em] uppercase text-bone mt-[6px]">
            Caminero de patio con la misma placa del muro
          </div>
        </div>
      </div>
    </div>
  );
}
