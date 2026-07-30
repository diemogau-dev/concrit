import Image from "next/image";
import { waLink, waProducto } from "@/lib/config";
import type { Producto } from "@/lib/productos";
import { WhatsAppIcon } from "./icons";

const CHIP =
  "font-condensed font-semibold text-[12px] leading-none tracking-[.05em] uppercase text-gray-warm-4b border border-gray-warm-2 py-[8px] px-[12px]";

const CTA =
  "inline-flex items-center justify-center gap-[10px] bg-olive text-bone font-condensed font-extrabold text-[13px] leading-none tracking-[.1em] uppercase py-[16px] px-[20px] text-center hover:bg-olive-hover";

/**
 * Link de WhatsApp del producto. Por defecto se arma con el nombre y el
 * artículo; un producto puede traer `waMensaje` para usar un mensaje propio
 * (los textos siguen viviendo todos en `src/lib/config.ts`).
 */
function hrefDe({ nombre, articulo, waMensaje }: Producto): string {
  return waMensaje ? waLink(waMensaje) : waProducto(nombre, articulo);
}

/**
 * Precio: sólo se muestra si el producto lo trae cargado en
 * `src/lib/productos.ts`. Mientras el campo esté vacío, la card queda con el
 * botón de consulta y nada más.
 */
function Precio({ precio }: { precio?: string }) {
  if (!precio) return null;
  return (
    <div className="mb-[18px] pt-[14px] border-t border-gray-warm-2">
      <div className="font-condensed font-bold text-[11px] leading-none tracking-[.16em] uppercase text-gray-warm-3 mb-[7px]">
        Precio
      </div>
      <div className="font-anton font-normal text-[28px] leading-none text-concrete-dark">
        {precio}
      </div>
    </div>
  );
}

/** Card de catálogo. Sin carrito: el único camino de salida es WhatsApp. */
export default function ProductoCard({ producto }: { producto: Producto }) {
  const { nombre, img, alt, detalle, precio, ctaText, variantes } = producto;

  return (
    <article className="bg-white border border-gray-warm-2 flex flex-col">
      <div className="relative h-[220px]">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover [filter:grayscale(1)_contrast(1.03)]"
        />
      </div>

      <div className="pt-[24px] px-[24px] pb-[26px] border-t-4 border-olive flex flex-col flex-1">
        <h3 className="font-anton font-normal text-[26px] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[12px]">
          {nombre}
        </h3>

        <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 mt-0 mb-[18px]">
          {detalle}
        </p>

        {variantes?.length ? (
          <ul className="list-none mt-0 mb-[20px] p-0 flex flex-wrap gap-[8px]">
            {variantes.map((v) => (
              <li key={v} className={CHIP}>
                {v}
              </li>
            ))}
          </ul>
        ) : null}

        <Precio precio={precio} />

        <a
          href={hrefDe(producto)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${CTA} mt-auto`}
        >
          <WhatsAppIcon size={16} fill="#F2F1ED" />
          {ctaText ?? "Consultar precio por WhatsApp"}
        </a>
      </div>
    </article>
  );
}

/**
 * Variante ancha para las familias de producto (las placas): la misma card,
 * pero en dos columnas, para que se lea como una familia y no como un SKU.
 */
export function ProductoFamilia({ producto }: { producto: Producto }) {
  const { nombre, img, alt, detalle, precio, ctaText, variantes } = producto;

  return (
    <article className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2">
      <div className="relative min-h-[clamp(260px,32vw,400px)] bg-concrete-dark">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover [filter:grayscale(1)_contrast(1.03)]"
        />
        <div className="absolute left-0 bottom-0 bg-concrete-dark py-[13px] px-[18px]">
          <span className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive-light">
            Familia de producto
          </span>
        </div>
      </div>

      <div className="bg-white p-[clamp(26px,3.4vw,44px)] flex flex-col justify-center">
        <h3 className="font-anton font-normal text-[clamp(28px,3.6vw,44px)] leading-[1.02] uppercase text-concrete-dark mt-0 mb-[14px]">
          {nombre}
        </h3>

        <p className="font-barlow font-normal text-[clamp(16px,1.8vw,18px)] leading-[1.55] text-gray-warm-4 mt-0 mb-[22px] max-w-[52ch]">
          {detalle}
        </p>

        {variantes?.length ? (
          <>
            <div className="font-condensed font-extrabold text-[11px] leading-none tracking-[.16em] uppercase text-olive mb-[12px]">
              Se fabrican en
            </div>
            <ul className="list-none mt-0 mb-[24px] p-0 flex flex-wrap gap-[8px]">
              {variantes.map((v) => (
                <li key={v} className={CHIP}>
                  {v}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <Precio precio={precio} />

        <a
          href={hrefDe(producto)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${CTA} self-start`}
        >
          <WhatsAppIcon size={16} fill="#F2F1ED" />
          {ctaText ?? "Consultar precio por WhatsApp"}
        </a>
      </div>
    </article>
  );
}
