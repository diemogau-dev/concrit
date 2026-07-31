/**
 * Encabezado compacto de sección para las páginas internas: número y nombre en
 * una sola línea, sin bajada. La idea es que el contenido (las cajas de
 * producto, las fotos de obra) arranque enseguida, sin un muro de texto arriba.
 */
export default function SectionHeader({
  n,
  titulo,
}: {
  n: string;
  titulo: string;
}) {
  return (
    <header className="flex items-baseline gap-[clamp(14px,2vw,24px)] pb-[14px] mb-[clamp(28px,3.5vw,44px)] border-b-2 border-concrete-dark">
      <span className="font-anton font-normal text-[clamp(30px,4.2vw,54px)] leading-[0.8] text-olive flex-none">
        {n}
      </span>
      <h2 className="font-anton font-normal text-[clamp(22px,3.2vw,40px)] leading-[1] uppercase text-concrete-dark m-0">
        {titulo}
      </h2>
    </header>
  );
}
