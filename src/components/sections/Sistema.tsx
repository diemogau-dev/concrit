import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import SectionHeader from "@/components/SectionHeader";
import LlaveEnMano from "./LlaveEnMano";

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
    title: "Pilares metálicos",
    body: "La estructura que sostiene todo. Los fabricamos nosotros en nuestra carpintería metálica: llegan listos para plantar y marcan la retícula donde encastran las placas.",
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
    img: "/assets/sistema-01-placas.jpg",
    alt: "Placas de concreto macizo CONCRIT apiladas en pallets y cargadas en el camión que las lleva a la obra",
    w: 900,
    h: 600,
    n: "1",
    title: "Las placas salen de planta",
    body: "Se fabrican en Villa Hayes, se apilan en pallets y viajan en camión hasta el terreno.",
  },
  {
    img: "/assets/sistema-02-paredes.jpg",
    alt: "Montaje sobre la losa: pilares metálicos plantados y placas de concreto cerrando las paredes",
    w: 900,
    h: 600,
    n: "2",
    title: "Losa, pilares y paredes",
    body: "Sobre la losa se plantan los pilares metálicos y las placas van encastrando hasta cerrar las paredes.",
  },
  {
    img: "/assets/sistema-03-techo.jpg",
    alt: "Colocación de la cubierta y terminaciones sobre los muros de hormigón macizo CONCRIT",
    w: 900,
    h: 600,
    n: "3",
    title: "Techo y terminaciones",
    body: "Se monta la cubierta y avanzan las terminaciones hasta dejarlo cerrado y listo.",
  },
  {
    img: "/assets/sistema-04-obrador.jpg",
    alt: "Obrador prefabricado de concreto macizo CONCRIT terminado, pintado y entregado",
    w: 900,
    h: 600,
    n: "4",
    title: "Obrador listo",
    body: "Se entrega terminado, con aberturas, instalaciones y pintura. Listo para usar.",
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

type Props = {
  /** Línea chica de arriba. En la home lleva el número de sección. */
  eyebrow?: string;
  /**
   * Incluir el bloque "Llave en mano" acá adentro. En /proyectos va como
   * sección aparte, más abajo, así que se apaga.
   */
  conLlaveEnMano?: boolean;
  /**
   * Modo compacto: encabezado de una línea, sin titular grande ni bajada.
   * Lo usa /proyectos, donde el hero de la página ya cuenta lo mismo.
   */
  compacto?: { n: string; titulo: string };
};

export default function Sistema({
  eyebrow = "03 — El sistema constructivo",
  conLlaveEnMano = true,
  compacto,
}: Props = {}) {
  return (
    <section
      id="sistema"
      className="bg-bone border-t border-bone-3 scroll-mt-[74px] py-[clamp(60px,8vw,110px)]"
    >
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        {compacto ? (
          <SectionHeader n={compacto.n} titulo={compacto.titulo} />
        ) : (
          <>
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]">
              {eyebrow}
            </div>
            <h2 className="font-anton font-normal text-[clamp(32px,5vw,60px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px] max-w-[20ch]">
              Se arma encastrando. Sin encofrado y sin esperar.
            </h2>
            <p className="font-barlow font-normal text-[clamp(16px,1.9vw,20px)] leading-[1.55] text-gray-warm-4c max-w-[64ch] mt-0 mb-[56px]">
              Fabricamos las{" "}
              <strong className="text-concrete-dark">placas de concreto</strong>,
              los{" "}
              <strong className="text-concrete-dark">pilares metálicos</strong>{" "}
              y las{" "}
              <strong className="text-concrete-dark">uniones</strong> en planta:
              la carpintería metálica también es nuestra.
              En obra encastran uno con otro y se traban con tornillos pasantes.
              No hay que encofrar, no hay que esperar que fragüe en el terreno y
              no hay que llevar una cuadrilla grande al medio del campo. Llega,
              se arma y queda para toda la vida.
            </p>
          </>
        )}

        {/* Featured: unión + componentes */}
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2 mb-[22px]">
          <div className="relative min-h-[clamp(340px,42vw,540px)] bg-concrete-dark">
            <Image
              src="/assets/sistema-union.jpg"
              alt="Detalle de la unión con tornillo pasante que traba una placa de concreto con un pilar metálico"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover [filter:contrast(1.04)_saturate(.94)]"
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
          De la planta a la llave
        </div>

        {/* Desktop / tablet: grilla fija con los 4 pasos */}
        <div className="hidden md:grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-bone flex flex-col">
              <Lightbox src={s.img} alt={s.alt} width={s.w} height={s.h}>
                <div className="relative h-[200px]">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="25vw"
                    className="object-cover [filter:contrast(1.04)_saturate(.94)]"
                  />
                </div>
              </Lightbox>
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

        {/* Mobile: los mismos 4 pasos, en tira horizontal por swipe en vez
            de apilados. La tarjeta siguiente se asoma a la derecha para
            que se note que se puede deslizar. */}
        <div className="md:hidden -mx-[18px] px-[18px] flex gap-[10px] overflow-x-auto snap-x snap-mandatory pb-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="snap-start shrink-0 w-[78%] bg-bone border border-gray-warm-2 flex flex-col"
            >
              <Lightbox src={s.img} alt={s.alt} width={s.w} height={s.h}>
                <div className="relative h-[180px]">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="78vw"
                    className="object-cover [filter:contrast(1.04)_saturate(.94)]"
                  />
                </div>
              </Lightbox>
              <div className="pt-[18px] px-[18px] pb-[20px] flex flex-col gap-[6px] flex-1">
                <span className="font-anton font-normal text-[26px] leading-[0.8] text-gray-warm-1">
                  {s.n}
                </span>
                <div className="font-condensed font-bold text-[15px] leading-[1.2] tracking-[.04em] uppercase text-concrete-dark">
                  {s.title}
                </div>
                <p className="font-barlow font-normal text-[14px] leading-[1.45] text-gray-warm-4 m-0">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Llave en mano */}
        {conLlaveEnMano ? <LlaveEnMano className="mt-[22px]" /> : null}

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
