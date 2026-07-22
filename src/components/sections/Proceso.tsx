const STEPS = [
  {
    n: "1",
    title: "Contanos qué necesitás",
    body: "Un mensaje por WhatsApp o una visita a la fábrica. Nos decís para qué es, cuántos y a dónde va.",
  },
  {
    n: "2",
    title: "Te pasamos el precio cerrado",
    body: "Precio fijo, alcance definido y fecha de entrega comprometida. Por escrito y rápido.",
  },
  {
    n: "3",
    title: "Fabricamos, entregamos y montamos",
    body: "Producimos en planta y llegamos hasta tu campo, tu obra o tu terreno. Montaje y terminaciones con equipo propio.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="relative bg-concrete-dark py-[clamp(72px,10vw,120px)] overflow-hidden"
    >
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:overlay] opacity-[.35]" />
      <div className="relative z-[2] max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-light mb-[14px]">
          04 — Cómo trabajamos
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-bone-soft mt-0 mb-[14px]">
          Tres pasos, sin vueltas
        </h2>
        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-3 max-w-[56ch] mt-0 mb-[48px]">
          Nada de presupuestos que tardan una semana ni precios que cambian a
          mitad de obra.
        </p>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-px bg-[rgba(242,241,237,.14)] border border-[rgba(242,241,237,.14)] mb-[26px]">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-concrete-dark p-[clamp(28px,3vw,42px)] flex flex-col gap-[16px]"
            >
              <div className="font-anton font-normal text-[clamp(56px,7vw,90px)] leading-[0.8] text-olive">
                {s.n}
              </div>
              <div className="font-condensed font-bold text-[19px] leading-[1.15] tracking-[.03em] uppercase text-bone">
                {s.title}
              </div>
              <p className="font-barlow font-normal text-[16px] leading-[1.55] text-gray-warm-3 m-0">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[16px] flex-wrap bg-terracotta py-[22px] px-[28px]">
          <span className="font-anton font-normal text-[40px] leading-[0.8] text-bone">
            ✓
          </span>
          <p className="font-condensed font-semibold text-[clamp(15px,1.9vw,20px)] leading-[1.35] tracking-[.02em] uppercase text-bone m-0">
            Precio fijo y fecha comprometida, siempre por escrito. El que te da
            precio abierto te lo sube después.
          </p>
        </div>
      </div>
    </section>
  );
}
