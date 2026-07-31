import Image from "next/image";

/**
 * Encabezado de las páginas internas (/productos, /proyectos).
 * Mismo registro visual que el hero de la home. Con `img` lleva foto de fondo;
 * sin `img` queda sólido, para que la página baje rápido al contenido.
 */

type Props = {
  /** Línea chica de arriba, ej: "Catálogo completo". */
  eyebrow: string;
  /** Título de la página. Se renderiza como el único h1. */
  title: string;
  /** Bajada. */
  lead: string;
  /** Foto de fondo opcional. */
  img?: string;
  imgAlt?: string;
  /** Botones, chips o cualquier cosa que vaya debajo de la bajada. */
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  img,
  imgAlt,
  children,
}: Props) {
  return (
    <section className="relative bg-concrete-dark overflow-hidden">
      {img ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={img}
              alt={imgAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover [filter:contrast(1.04)_saturate(1.1)_brightness(.9)]"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(125%_110%_at_8%_88%,rgba(18,17,15,.93)_0%,rgba(18,17,15,.66)_34%,rgba(18,17,15,.18)_64%,rgba(18,17,15,0)_80%)]" />
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(18,17,15,.44)_0%,rgba(18,17,15,.06)_28%,rgba(18,17,15,.62)_100%)]" />
        </>
      ) : null}
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-40" />

      <div
        className={`relative z-[2] max-w-container mx-auto px-[clamp(18px,5vw,72px)] ${
          img
            ? "pt-[clamp(64px,10vw,130px)] pb-[clamp(56px,8vw,100px)]"
            : "pt-[clamp(48px,7vw,88px)] pb-[clamp(44px,6vw,72px)]"
        }`}
      >
        <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-light mb-[16px]">
          {eyebrow}
        </div>

        <h1 className="font-anton font-normal text-[clamp(38px,7vw,86px)] leading-[0.92] uppercase tracking-[.01em] text-bone-soft mt-0 mb-0 max-w-[16ch] [text-shadow:0_2px_0_rgba(0,0,0,.35)]">
          {title}
        </h1>

        <div className="h-[6px] w-[110px] bg-olive mt-[24px] mb-[22px]" />

        <p className="font-barlow font-normal text-[clamp(16px,1.9vw,21px)] leading-[1.5] text-gray-warm-1 max-w-[62ch] mt-0 mb-0">
          {lead}
        </p>

        {children ? <div className="mt-[32px]">{children}</div> : null}
      </div>
    </section>
  );
}
