import { terminaciones } from "@/lib/content";

/**
 * Bloque "Llave en mano". Vive suelto porque se usa en dos lugares: dentro del
 * sistema constructivo de la home y como sección propia en /proyectos.
 * El listado de terminaciones sale de `src/lib/content.ts`.
 */
export default function LlaveEnMano({
  className = "",
  conEtiqueta = true,
}: {
  className?: string;
  /** Apagala cuando la sección de afuera ya dice "Llave en mano". */
  conEtiqueta?: boolean;
}) {
  return (
    <div
      className={`grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-4c border border-gray-warm-4c ${className}`}
    >
      <div className="bg-concrete-dark p-[clamp(30px,4vw,50px)] flex flex-col justify-center">
        {conEtiqueta ? (
          <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.18em] uppercase text-olive-light mb-[14px]">
            Llave en mano
          </span>
        ) : null}
        <h3 className="font-anton font-normal text-[clamp(24px,3.2vw,40px)] leading-[1.05] uppercase text-bone mt-0 mb-[16px] max-w-[18ch]">
          Te lo entregamos terminado, listo para usar
        </h3>
        <p className="font-barlow font-normal text-[clamp(15px,1.7vw,18px)] leading-[1.55] text-gray-warm-1 m-0 max-w-[52ch]">
          Llegás el día de la entrega, abrís la puerta y ya está. La luz prende,
          la canilla tira agua, el baño funciona y las paredes están pintadas. No
          hay lista de pendientes, no hay que salir a buscar un gremio distinto
          cada semana ni mudarse a una obra a medio terminar. Un solo responsable
          de principio a fin, un solo presupuesto y una sola fecha. Ese mismo día
          empezás a vivir o a producir.
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
  );
}
