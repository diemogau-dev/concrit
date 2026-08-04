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
        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[58ch] mt-0 mb-[48px]">
          Cambiar el poste podrido. Repintar la pared manchada. Llamar otra vez
          al albañil. Con concreto macizo eso no pasa: llega hecho, se instala
          una vez y trabaja el resto de tu vida.
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
      </div>
    </section>
  );
}
