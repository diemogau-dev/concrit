import { waLink, waProducto } from "@/lib/config";
import type { Producto } from "@/lib/productos";
import ProductoFotos from "./ProductoFotos";
import { WhatsAppIcon } from "./icons";

const CTA =
  "inline-flex w-full items-center justify-center gap-[10px] bg-olive text-bone font-condensed font-extrabold text-[13px] leading-none tracking-[.1em] uppercase py-[15px] px-[16px] text-center hover:bg-olive-hover";

/**
 * Link de WhatsApp del producto. Por defecto se arma con el nombre y el
 * artículo; un producto puede traer `waMensaje` para usar un mensaje propio
 * (los textos siguen viviendo todos en `src/lib/config.ts`).
 */
function hrefDe({ nombre, articulo, waMensaje }: Producto): string {
  return waMensaje ? waLink(waMensaje) : waProducto(nombre, articulo);
}

/**
 * Ficha de catálogo, formato tienda: foto, título, descripción y botón.
 * Nada de chips ni de precio de relleno — todo lo que hay que decir de la
 * pieza (medidas, diseños, variantes) va en `detalle`. La descripción tiene
 * una altura fija de 3 renglones, así todas las fichas de una fila quedan
 * igual de altas sin importar cuánto texto tenga cada una.
 */
export default function ProductoCard({ producto }: { producto: Producto }) {
  const { nombre, fotos, detalle, precio, ctaText } = producto;

  return (
    <article className="bg-white border border-gray-warm-2 flex flex-col">
      <ProductoFotos fotos={fotos} nombre={nombre} />

      <div className="pt-[18px] px-[18px] pb-[18px] border-t-4 border-olive flex flex-col flex-1">
        <h3 className="font-condensed font-bold text-[19px] leading-[1.12] tracking-[.02em] uppercase text-concrete-dark mt-0 mb-[8px]">
          {nombre}
        </h3>

        <p className="font-barlow font-normal text-[15px] leading-[1.45] text-gray-warm-4 line-clamp-3 min-h-[66px] mt-0 mb-[14px]">
          {detalle}
        </p>

        {precio ? (
          <div className="font-anton font-normal text-[24px] leading-none text-concrete-dark mt-auto mb-[14px]">
            {precio}
          </div>
        ) : null}

        <a
          href={hrefDe(producto)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${CTA} ${precio ? "" : "mt-auto"}`}
        >
          <WhatsAppIcon size={15} fill="#F2F1ED" />
          {ctaText ?? "Comprar"}
        </a>
      </div>
    </article>
  );
}
