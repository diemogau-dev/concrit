const METRICS = [
  { value: "10 años", label: "Fabricando y construyendo" },
  { value: "+100", label: "Proyectos entregados" },
  {
    value: "Cientos",
    label: "De estancias y constructoras usan nuestros productos",
  },
  { value: "Propias", label: "Fábrica, flota y montaje" },
];

export default function Credentials() {
  return (
    <div className="bg-concrete-dark border-t border-[rgba(242,241,237,.12)]">
      {/* Desktop / tablet: grilla original */}
      <div className="hidden md:grid max-w-container mx-auto px-[clamp(18px,5vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-px bg-[rgba(242,241,237,.12)]">
        {METRICS.map((m) => (
          <div
            key={m.value}
            className="bg-concrete-dark py-[22px] px-[20px] flex flex-col gap-[5px]"
          >
            <span className="font-anton font-normal text-[30px] leading-none text-olive-light">
              {m.value}
            </span>
            <span className="font-condensed font-semibold text-[12px] leading-[1.3] tracking-[.08em] uppercase text-gray-warm-3">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: carrusel horizontal en movimiento continuo.
          Con prefers-reduced-motion la animación se detiene y la tira
          queda desplazable a mano. */}
      <div className="md:hidden overflow-hidden motion-reduce:overflow-x-auto">
        <ul className="flex w-max m-0 p-0 list-none animate-marquee motion-reduce:animate-none">
          {[...METRICS, ...METRICS].map((m, i) => (
            <li
              key={i}
              aria-hidden={i >= METRICS.length}
              className="shrink-0 w-[15rem] py-[22px] px-[20px] flex flex-col gap-[5px] border-r border-[rgba(242,241,237,.12)]"
            >
              <span className="font-anton font-normal text-[30px] leading-none text-olive-light">
                {m.value}
              </span>
              <span className="font-condensed font-semibold text-[12px] leading-[1.3] tracking-[.08em] uppercase text-gray-warm-3">
                {m.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
