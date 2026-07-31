import Image from "next/image";
import { waLink, waProducto } from "@/lib/config";
import type { Producto } from "@/lib/productos";
import { WhatsAppIcon } from "./icons";

const CHIP =
  "font-condensed font-semibold text-[11px] leading-none tracking-[.06em] uppercase text-gray-warm-4b border border-gray-warm-2 py-[7px] px-[10px]";

const CTA =
  "inline-flex w-full items-center justify-center gap-[10px] bg-olive text-bone font-condensed font-extrabold text-[13px] leading-none tracking-[.1em] uppercase py-[15px] px-[16px] text-center hover:bg-olive-hover";

/** Tratamiento parejo para todas las fotos del catálogo. */
const FOTO = "object-cover [filter:grayscale(1)_contrast(1.06)]";

/**
 * Link de WhatsApp del producto. Por defecto se arma con el nombre y el
 * artículo; un producto puede traer `waMensaje` para usar un mensaje propio
 * (los textos siguen viviendo todos en `src/lib/config.ts`).
 */
function hrefDe({ nombre, articulo, waMensaje }: Producto): string {
  return waMensaje ? waLink(waMensaje) : waProducto(nombre, articulo);
}

/**
 * Foto del producto, siempre cuadrada. Si todavía no hay una foto buena de esa
 * pieza, en vez de un hueco gris va un panel tipográfico de marca: se lee como
 * parte del diseño y no como una imagen rota.
 */
function FotoProducto({
  img,
  alt,
  nombre,
}: {
  img?: string;
  alt: string;
  nombre: string;
}) {
  if (img) {
    return (
      <div className="relative aspect-square bg-bone-2">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={FOTO}
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-square bg-concrete-dark overflow-hidden flex items-center justify-center px-[20px]">
      <div className="noise absolute inset-0 pointer-events-none [mix-blend-mode:multiply] opacity-40" />
      <span className="relative z-[2] font-anton font-normal text-[clamp(20px,2.4vw,28px)] leading-[1.02] uppercase text-bone-soft text-center">
        {nombre}
      </span>
      <span className="absolute z-[2] left-0 bottom-0 bg-olive text-bone font-condensed font-extrabold text-[10px] leading-none tracking-[.16em] uppercase py-[7px] px-[10px]">
        Foto en camino
      </span>
    </div>
  );
}

/**
 * Ficha de catálogo, formato tienda: foto cuadrada, nombre, dos renglones y
 * botón. Sin carrito: el único camino de salida es WhatsApp.
 */
export default function ProductoCard({ producto }: { producto: Producto }) {
  const { nombre, img, imgs, alt, detalle, precio, ctaText, variantes } =
    producto;

  return (
    <article className="bg-white border border-gray-warm-2 flex flex-col">
      <FotoProducto img={img} alt={alt} nombre={nombre} />

      {/* Fotos extra: los diseños y variantes que hay que mostrar sí o sí. */}
      {imgs?.length ? (
        <div
          className="grid gap-px bg-gray-warm-2 border-t border-gray-warm-2"
          style={{
            gridTemplateColumns: `repeat(${Math.min(imgs.length + 1, 3)}, minmax(0, 1fr))`,
          }}
        >
          {[{ src: img!, alt }, ...imgs].slice(0, 3).map((f) => (
            <div key={f.src} className="relative aspect-square bg-bone-2">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="120px"
                className={FOTO}
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="pt-[18px] px-[18px] pb-[18px] border-t-4 border-olive flex flex-col flex-1">
        <h3 className="font-condensed font-bold text-[19px] leading-[1.12] tracking-[.02em] uppercase text-concrete-dark mt-0 mb-[8px]">
          {nombre}
        </h3>

        <p className="font-barlow font-normal text-[15px] leading-[1.45] text-gray-warm-4 mt-0 mb-[14px]">
          {detalle}
        </p>

        {variantes?.length ? (
          <ul className="list-none mt-0 mb-[16px] p-0 flex flex-wrap gap-[6px]">
            {variantes.map((v) => (
              <li key={v} className={CHIP}>
                {v}
              </li>
            ))}
          </ul>
        ) : null}

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
          {ctaText ?? "Comprar por WhatsApp"}
        </a>
      </div>
    </article>
  );
}
