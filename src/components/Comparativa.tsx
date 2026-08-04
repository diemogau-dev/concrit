import { comparison } from "@/lib/content";

/**
 * Comparativa contra la obra tradicional.
 *
 * Es una `<table>` real —son datos tabulares— pero en mobile las filas se
 * apilan (`block` sobre `md:table-row`) en vez de scrollear: tres columnas
 * de texto a 360px quedan ilegibles. Cada celda repite su encabezado en
 * mobile para que el dato no pierda a qué columna pertenece.
 *
 * La columna CONCRIT va resaltada; la otra describe lo que pasa en una obra
 * húmeda, sin adjetivos de descarte. Mostramos la diferencia, no pegamos.
 */
export default function Comparativa() {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">
        Comparación entre construir con el sistema prefabricado de CONCRIT y
        construir con obra tradicional de ladrillo.
      </caption>
      <thead className="hidden md:table-header-group">
        <tr>
          <th
            scope="col"
            className="w-[30%] bg-bone-2 py-[16px] px-[20px] border border-gray-warm-2 font-condensed font-bold text-[11px] leading-none tracking-[.16em] uppercase text-gray-warm-4"
          >
            &nbsp;
          </th>
          <th
            scope="col"
            className="w-[35%] bg-concrete-dark py-[16px] px-[20px] border border-concrete-dark font-anton font-normal text-[22px] leading-none uppercase text-olive-light"
          >
            CONCRIT
          </th>
          <th
            scope="col"
            className="w-[35%] bg-bone-2 py-[16px] px-[20px] border border-gray-warm-2 font-condensed font-bold text-[13px] leading-none tracking-[.12em] uppercase text-gray-warm-4"
          >
            Obra tradicional
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {comparison.map((row) => (
          <tr
            key={row.criterio}
            className="block md:table-row mb-[14px] md:mb-0 border border-gray-warm-2 md:border-0"
          >
            <th
              scope="row"
              className="block md:table-cell text-left bg-bone-2 py-[12px] md:py-[16px] px-[18px] md:px-[20px] md:border md:border-gray-warm-2 font-condensed font-bold text-[13px] md:text-[14px] leading-[1.25] tracking-[.06em] uppercase text-concrete-dark"
            >
              {row.criterio}
            </th>
            <td className="block md:table-cell bg-concrete-dark py-[14px] md:py-[16px] px-[18px] md:px-[20px] md:border md:border-concrete-dark">
              <span className="md:hidden block font-condensed font-extrabold text-[10px] leading-none tracking-[.16em] uppercase text-olive-light mb-[6px]">
                CONCRIT
              </span>
              <span className="font-barlow font-normal text-[15px] leading-[1.4] text-bone-soft">
                {row.concrit}
              </span>
            </td>
            <td className="block md:table-cell bg-bone py-[14px] md:py-[16px] px-[18px] md:px-[20px] md:border md:border-gray-warm-2">
              <span className="md:hidden block font-condensed font-extrabold text-[10px] leading-none tracking-[.16em] uppercase text-gray-warm-3 mb-[6px]">
                Obra tradicional
              </span>
              <span className="font-barlow font-normal text-[15px] leading-[1.4] text-gray-warm-4">
                {row.ladrillo}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
