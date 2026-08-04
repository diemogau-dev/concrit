import Link from "next/link";
import { wa, CONTACT, FABRICA, FABRICA_LINEA, WHATSAPP_DISPLAY } from "@/lib/config";

/**
 * Cada rubro apunta a su landing de producto en vez de al ancla de la home:
 * son páginas reales y el texto del enlace le dice a Google de qué tratan.
 */
const RUBROS = [
  { href: "/comederos-bebederos-tanques-ganado", label: "Campo y ganadería" },
  { href: "/obradores-prefabricados", label: "Obradores y galpones" },
  { href: "/casas-prefabricadas-paraguay", label: "Casas prefabricadas" },
];

/** Mismas secciones que el nav superior, para no dejar páginas huérfanas. */
const SITIO = [
  { href: "/productos", label: "Productos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/#sistema", label: "Nuestro sistema" },
  { href: "/#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  return (
    <footer className="bg-concrete-dark pt-[clamp(56px,7vw,84px)] pb-[40px]">
      <div className="max-w-container mx-auto px-[clamp(18px,5vw,72px)]">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] gap-[40px] items-start pb-[44px] border-b border-[rgba(242,241,237,.12)]">
          <div>
            <div className="font-anton font-normal text-[clamp(40px,6vw,64px)] leading-[0.86] uppercase tracking-[.02em] text-bone-soft">
              CONCRIT
            </div>
            <div className="h-[4px] w-[70px] bg-olive mt-[16px] mb-[14px]" />
            <p className="font-condensed font-medium text-[13px] leading-[1.5] tracking-[.06em] uppercase text-gray-warm-3 m-0 max-w-[32ch]">
              Industria de prefabricados de concreto. Productos, sistema
              constructivo y proyectos llave en mano.
            </p>
          </div>

          <div>
            <div className="font-condensed font-extrabold text-[12px] leading-none tracking-[.16em] uppercase text-olive-light mb-[16px]">
              Contacto
            </div>
            <div className="flex flex-col gap-[10px]">
              <a
                href={wa.general}
                target="_blank"
                rel="noopener noreferrer"
                className="font-barlow font-normal text-[15px] leading-[1.3] text-gray-warm-1"
              >
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-barlow font-normal text-[15px] leading-[1.3] text-gray-warm-1"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-barlow font-normal text-[15px] leading-[1.3] text-gray-warm-1"
              >
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <div className="font-condensed font-extrabold text-[12px] leading-none tracking-[.16em] uppercase text-olive-light mb-[16px]">
              Fábrica
            </div>
            <p className="font-barlow font-normal text-[15px] leading-[1.55] text-gray-warm-1 m-0">
              {FABRICA_LINEA}
              <br />
              {FABRICA.departamento}
              <br />
              Entregamos en todo el país
            </p>
          </div>

          <div>
            <div className="font-condensed font-extrabold text-[12px] leading-none tracking-[.16em] uppercase text-olive-light mb-[16px]">
              Rubros
            </div>
            <div className="flex flex-col gap-[10px]">
              {RUBROS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-barlow font-normal text-[15px] leading-[1.3] text-gray-warm-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-condensed font-extrabold text-[12px] leading-none tracking-[.16em] uppercase text-olive-light mb-[16px]">
              El sitio
            </div>
            <div className="flex flex-col gap-[10px]">
              {SITIO.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-barlow font-normal text-[15px] leading-[1.3] text-gray-warm-1"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-[16px] flex-wrap pt-[24px]">
          <span className="font-condensed font-medium text-[12px] leading-[1.4] tracking-[.08em] uppercase text-gray-warm-4">
            © 2026 CONCRIT · Todos los derechos reservados
          </span>
          <span className="font-condensed font-medium text-[12px] leading-[1.4] tracking-[.08em] uppercase text-gray-warm-4">
            Fábrica que sabe de oficio · Ruta 9, la puerta del Chaco
          </span>
        </div>
      </div>
    </footer>
  );
}
