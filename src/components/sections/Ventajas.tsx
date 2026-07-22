import { compare } from "@/lib/content";

const CARDS = [
  {
    n: "01",
    numColor: "text-gray-warm-1",
    title: "Dura toda la vida",
    body: "No lo carcome la termita, no lo hincha la humedad, no lo quema el fuego y no se lo lleva nadie. Lo que ponés hoy sigue ahí dentro de treinta años.",
  },
  {
    n: "02",
    numColor: "text-gray-warm-1",
    title: "Cero mantenimiento",
    body: "Lo instalás y te olvidás. Ni pintura, ni revoque, ni arreglos cada temporada. Gastás una sola vez.",
  },
  {
    n: "03",
    numColor: "text-olive-light",
    title: "Precio cerrado desde el día uno",
    body: "Se fabrica en planta, con calidad controlada y costo fijo. Sabés cuánto pagás antes de arrancar, no a mitad de camino.",
  },
  {
    n: "04",
    numColor: "text-terracotta",
    title: "Se monta en semanas",
    body: "Llega listo, se arma con cuadrilla chica y queda funcionando. Clave cuando el destino está lejos y conseguir gente cuesta.",
  },
];

export default function Ventajas() {
  return (
    <section
      id="ventajas"
      className="bg-bone py-[clamp(72px,10vw,120px)] border-t border-bone-3"
    >
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
          01 — Por qué concreto
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[16ch]">
          El material que aguanta todo
        </h2>
        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[60ch] mt-0 mb-[52px]">
          El ladrillo depende del albañil, del clima y del tiempo. El concreto
          macizo llega hecho, se instala una vez y trabaja el resto de tu vida.
        </p>

        {/* 4 cards numeradas */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2">
          {CARDS.map((c) => (
            <div
              key={c.n}
              className="bg-bone p-[clamp(28px,3vw,40px)] flex flex-col gap-[16px] min-h-[288px]"
            >
              <div
                className={`font-anton font-normal text-[clamp(52px,6vw,78px)] leading-[0.8] ${c.numColor}`}
              >
                {c.n}
              </div>
              <div className="font-condensed font-bold text-[18px] leading-[1.15] tracking-[.03em] uppercase text-concrete-dark">
                {c.title}
              </div>
              <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 m-0">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Comparación ladrillo vs CONCRIT */}
        <div className="mt-[56px]">
          <h3 className="font-anton font-normal text-[clamp(24px,3.4vw,40px)] leading-[1.05] uppercase text-concrete-dark mt-0 mb-[12px] max-w-[22ch]">
            Lo mismo que hacés con ladrillo, pero sin los problemas
          </h3>
          <p className="font-barlow font-normal text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-gray-warm-4 max-w-[64ch] mt-0 mb-[34px]">
            No estamos contra el ladrillo. Estamos contra los meses de obra, la
            mano de obra que no aparece y el presupuesto que se estira.
          </p>
          <div className="border border-gray-warm-2 bg-gray-warm-2 flex flex-col gap-px">
            {/* Encabezado */}
            <div className="grid [grid-template-columns:minmax(90px,1fr)_1.6fr_1.6fr]">
              <div className="bg-concrete-dark py-[16px] px-[18px]" />
              <div className="bg-concrete-dark py-[16px] px-[18px] font-condensed font-extrabold text-[12px] leading-[1.2] tracking-[.12em] uppercase text-gray-warm-3">
                Ladrillo tradicional
              </div>
              <div className="bg-olive py-[16px] px-[18px] font-condensed font-extrabold text-[12px] leading-[1.2] tracking-[.12em] uppercase text-bone">
                CONCRIT
              </div>
            </div>
            {/* Filas */}
            {compare.map((row) => (
              <div
                key={row.k}
                className="grid [grid-template-columns:minmax(90px,1fr)_1.6fr_1.6fr]"
              >
                <div className="bg-bone-2 py-[16px] px-[18px] font-condensed font-extrabold text-[11px] leading-[1.3] tracking-[.1em] uppercase text-olive flex items-center">
                  {row.k}
                </div>
                <div className="bg-bone py-[16px] px-[18px] font-barlow font-normal text-[15px] leading-[1.45] text-[#8a877e] flex items-center">
                  {row.old}
                </div>
                <div className="bg-white py-[16px] px-[18px] font-barlow font-semibold text-[15px] leading-[1.45] text-concrete-dark flex items-center">
                  {row.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
