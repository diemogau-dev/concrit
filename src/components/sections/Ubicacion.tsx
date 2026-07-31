import { CONTACT } from "@/lib/config";
import { PinIcon } from "../icons";

const POINTS = [
  { n: "01", text: "Flete corto al campo, la cooperativa y la obra." },
  { n: "02", text: "Sobre la ruta, a la vista y fácil de encontrar." },
  {
    n: "03",
    text: "Fábrica abierta: vení, mirá cómo se produce y tocá el producto.",
  },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-bone py-[clamp(72px,10vw,120px)]">
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
          05 — Ubicación y showroom
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[40px] max-w-[20ch]">
          Sobre la Ruta 9, a la entrada del Chaco
        </h2>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-4c border border-gray-warm-4c">
          {/* Columna izquierda */}
          <div className="bg-concrete-dark p-[clamp(30px,4vw,54px)] flex flex-col">
            <p className="font-barlow font-normal text-[clamp(18px,2.1vw,23px)] leading-[1.5] text-bone-soft mt-0 mb-[30px] max-w-[44ch]">
              Estamos parados sobre el{" "}
              <strong className="text-white">corredor bioceánico</strong>,
              camino al Chaco, sobre la ruta por donde pasa todo lo que entra y
              sale del norte. Eso no es dato de folleto: es{" "}
              <strong className="text-olive-light">
                flete más corto y más barato
              </strong>{" "}
              para el productor, la cooperativa y la obra del interior.
            </p>
            <div className="flex flex-col mt-auto">
              {POINTS.map((p) => (
                <div
                  key={p.n}
                  className="flex gap-[16px] py-[16px] border-t border-[rgba(242,241,237,.14)]"
                >
                  <span className="font-anton font-normal text-[22px] leading-none text-olive-light min-w-[34px]">
                    {p.n}
                  </span>
                  <span className="font-barlow font-normal text-[16px] leading-[1.45] text-gray-warm-1">
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="bg-concrete-dark p-[clamp(30px,4vw,54px)] flex flex-col justify-between gap-[34px]">
            <div>
              <div className="inline-flex items-center gap-[9px] mb-[18px]">
                <PinIcon size={16} fill="#8f9260" />
                <span className="font-condensed font-extrabold text-[12px] leading-none tracking-[.16em] uppercase text-olive-light">
                  La fábrica
                </span>
              </div>
              <div className="font-anton font-normal text-[clamp(28px,3.6vw,44px)] leading-[1.02] uppercase text-bone">
                Ruta 9 · Villa Hayes
              </div>
              <p className="font-barlow font-normal text-[16px] leading-[1.55] text-gray-warm-3 mt-[12px] mb-0 max-w-[38ch]">
                Presidente Hayes, Paraguay. La puerta de entrada al Chaco, sobre
                la ruta principal.
              </p>
              <div className="flex gap-[14px] flex-wrap mt-[26px]">
                <div className="flex-1 min-w-[130px] border-t-2 border-olive pt-[12px]">
                  <div className="font-condensed font-bold text-[11px] leading-none tracking-[.12em] uppercase text-gray-warm-3 mb-[6px]">
                    Visitas
                  </div>
                  <div className="font-condensed font-bold text-[15px] leading-[1.3] tracking-[.03em] uppercase text-bone">
                    Lun a Sáb · 7 a 17 h
                  </div>
                </div>
                <div className="flex-1 min-w-[130px] border-t-2 border-olive pt-[12px]">
                  <div className="font-condensed font-bold text-[11px] leading-none tracking-[.12em] uppercase text-gray-warm-3 mb-[6px]">
                    Atención
                  </div>
                  <div className="font-condensed font-bold text-[15px] leading-[1.3] tracking-[.03em] uppercase text-bone">
                    WhatsApp · todos los días
                  </div>
                </div>
              </div>
            </div>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[12px] bg-olive text-bone font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[19px] px-[26px] hover:bg-olive-hover"
            >
              <PinIcon size={17} fill="#F2F1ED" />
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
