import Image from "next/image";
import { terminaciones } from "@/lib/content";

const COMPONENTS = [
  {
    n: "01",
    color: "text-olive",
    title: "Placas de concreto",
    body: "Cierran muros, tabiques y losas. Macizas, a escuadra y con las aberturas ya previstas. Salen de planta iguales una tras otra: no dependen del pulso del albañil.",
    border: true,
  },
  {
    n: "02",
    color: "text-terracotta",
    title: "Pilares de concreto",
    body: "La estructura que sostiene todo. Premoldeados y listos para izar, marcan la retícula donde encastran las placas.",
    border: true,
  },
  {
    n: "03",
    color: "text-olive-light",
    title: "Uniones y tornillos",
    body: "El encastre pasante que traba placa con pilar. Se ajusta con llave, queda firme y te deja anexar módulos nuevos el día que necesites crecer.",
    border: false,
  },
];

const STEPS = [
  {
    img: "/assets/sistema-pilares.jpg",
    alt: "Pilares de hormigón prefabricado CONCRIT instalados sobre la fundación",
    n: "1",
    title: "Fundación y pilares",
    body: "Se instalan los pilares sobre la fundación y queda armada la retícula.",
  },
  {
    img: "/assets/sistema-placas.jpg",
    alt: "Montaje de placas de concreto macizo encastradas entre pilares",
    n: "2",
    title: "Montaje de placas",
    body: "Las placas encastran entre pilares y se traban con los tornillos.",
  },
  {
    img: "/assets/sistema-muros.jpg",
    alt: "Muros de hormigón macizo cerrados con sus vanos ya definidos",
    n: "3",
    title: "Muros cerrados",
    body: "En pocas semanas el volumen queda cerrado, con sus vanos definidos.",
  },
  {
    img: "/assets/sistema-techo.jpg",
    alt: "Techo y terminaciones de una construcción prefabricada CONCRIT",
    n: "4",
    title: "Techo y terminaciones",
    body: "Se monta la cubierta y avanzamos con las terminaciones hasta dejarlo listo.",
  },
];

const BENEFITS = [
  {
    label: "Más rápido",
    body: "Se monta en semanas, no en meses. Cuadrilla chica.",
  },
  {
    label: "Menos gente en obra",
    body: "Menos personal y menos costo de montaje.",
  },
  {
    label: "Llega a cualquier lado",
    body: "Piezas planas que entran donde otros no llegan, aun en zona lejana.",
  },
  {
    label: "Crece con vos",
    body: "Sumás habitaciones o módulos nuevos al mismo sistema, sin romper nada.",
  },
];

export default function Sistema() {
  return (
    <section
      id="sistema"
      className="bg-bone py-[clamp(72px,10vw,120px)] border-t border-bone-3"
    >
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
          03 — El sistema constructivo
        </div>
        <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[20ch]">
          Se arma encastrando. Sin encofrado y sin esperar.
        </h2>
        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[64ch] mt-0 mb-[56px]">
          Fabricamos las <strong className="text-concrete-dark">placas</strong>,
          los <strong className="text-concrete-dark">pilares</strong> y las{" "}
          <strong className="text-concrete-dark">uniones</strong> en planta. En
          obra encastran uno con otro y se traban con tornillos pasantes. No hay
          que encofrar, no hay que esperar que fragüe en el terreno y no hay que
          llevar una cuadrilla grande al medio del campo. Llega, se arma y queda
          para toda la vida.
        </p>

        {/* Featured: unión + componentes */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2 mb-[22px]">
          <div className="relative min-h-[clamp(340px,42vw,540px)] bg-concrete-dark">
            <Image
              src="/assets/sistema-union.jpg"
              alt="Detalle de la unión con tornillo pasante que traba una placa con un pilar de hormigón"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover [filter:grayscale(1)_contrast(1.05)]"
            />
            <div className="absolute left-0 bottom-0 bg-concrete-dark py-[14px] px-[18px]">
              <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive-light">
                La unión
              </span>
              <div className="font-condensed font-bold text-[15px] leading-[1.2] tracking-[.02em] uppercase text-bone mt-[6px]">
                Tornillo pasante que traba placa con pilar
              </div>
            </div>
          </div>
          <div className="bg-bone flex flex-col">
            {COMPONENTS.map((c) => (
              <div
                key={c.n}
                className={`p-[clamp(26px,3vw,38px)] ${
                  c.border ? "border-b border-gray-warm-2" : ""
                } flex gap-[20px] items-start flex-1`}
              >
                <div
                  className={`font-anton font-normal text-[clamp(34px,4vw,52px)] leading-[0.8] flex-none ${c.color}`}
                >
                  {c.n}
                </div>
                <div>
                  <div className="font-condensed font-bold text-[18px] leading-[1.15] tracking-[.03em] uppercase text-concrete-dark mb-[8px]">
                    {c.title}
                  </div>
                  <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 m-0">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secuencia de obra */}
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mt-[54px] mb-[26px]">
          De la fundación a la llave
        </div>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-bone flex flex-col">
              <div className="relative h-[200px]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover [filter:grayscale(1)_contrast(1.04)]"
                />
              </div>
              <div className="pt-[22px] px-[22px] pb-[26px] flex flex-col gap-[8px] flex-1">
                <span className="font-anton font-normal text-[30px] leading-[0.8] text-gray-warm-1">
                  {s.n}
                </span>
                <div className="font-condensed font-bold text-[15px] leading-[1.2] tracking-[.04em] uppercase text-concrete-dark">
                  {s.title}
                </div>
                <p className="font-barlow font-normal text-[15px] leading-[1.5] text-gray-warm-4 m-0">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Llave en mano */}
        <div className="mt-[22px] grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-4c border border-gray-warm-4c">
          <div className="bg-concrete-dark p-[clamp(30px,4vw,50px)] flex flex-col justify-center">
            <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.18em] uppercase text-olive-light mb-[14px]">
              Llave en mano
            </span>
            <h3 className="font-anton font-normal text-[clamp(24px,3.2vw,40px)] leading-[1.05] uppercase text-bone mt-0 mb-[16px] max-w-[18ch]">
              Te lo entregamos terminado, listo para usar
            </h3>
            <p className="font-barlow font-normal text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-gray-warm-1 m-0 max-w-[52ch]">
              No fabricamos solo la estructura y te dejamos el resto. Hacemos
              también toda la terminación interior: instalación de agua,
              instalación eléctrica, baños completos, azulejos, revestimientos,
              aberturas, apliques y detalles de terminación. Entrás y ya podés
              vivir o producir. Un solo responsable de principio a fin, un solo
              presupuesto y una sola fecha de entrega.
            </p>
          </div>
          <div className="bg-concrete-dark p-[clamp(30px,4vw,50px)] flex flex-col justify-center gap-px">
            <div className="font-condensed font-extrabold text-[11px] leading-none tracking-[.18em] uppercase text-olive-light mb-[18px]">
              Incluye
            </div>
            {terminaciones.map((t) => (
              <div
                key={t}
                className="flex items-center gap-[14px] py-[13px] border-t border-[rgba(242,241,237,.13)]"
              >
                <span className="font-anton font-normal text-[18px] leading-none text-olive flex-none">
                  ✓
                </span>
                <span className="font-barlow font-normal text-[16px] leading-[1.35] text-bone-soft">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cuatro ventajas del sistema */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-px bg-concrete-dark border border-concrete-dark mt-[22px]">
          {BENEFITS.map((b) => (
            <div
              key={b.label}
              className="bg-concrete-dark py-[26px] px-[24px] flex flex-col gap-[8px]"
            >
              <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive-light">
                {b.label}
              </span>
              <span className="font-barlow font-normal text-[16px] leading-[1.45] text-gray-warm-1">
                {b.body}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
