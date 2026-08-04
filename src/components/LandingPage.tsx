import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Credentials from "@/components/sections/Credentials";
import CtaFinal from "@/components/sections/CtaFinal";
import CtaBanda from "@/components/CtaBanda";
import Comparativa from "@/components/Comparativa";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { breadcrumbSchema, productSchema, faqPageSchema } from "@/lib/schema";
import type { Block, Landing } from "@/lib/landings";

const WRAP = "max-w-container mx-auto px-[clamp(18px,5vw,72px)]";
const EYEBROW =
  "font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive mb-[14px]";
const H2 =
  "font-anton font-normal text-[clamp(28px,4.4vw,52px)] leading-[1.04] uppercase text-concrete-dark mt-0 mb-[16px] max-w-[22ch]";
const LEAD =
  "font-barlow font-normal text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-gray-warm-4c max-w-[62ch] mt-0";

/** Un bloque de contenido. El fondo alterna para dar ritmo al scroll. */
function BlockView({
  block,
  alt,
  waHref,
}: {
  block: Block;
  alt: boolean;
  /** Link de WhatsApp del producto: los CTA intermedios entran al chat con su contexto. */
  waHref: string;
}) {
  const bg = alt ? "bg-bone-2" : "bg-bone";
  const pad = "py-[clamp(52px,7vw,86px)]";

  switch (block.kind) {
    case "prose":
      return (
        <section className={`${bg} ${pad} border-t border-bone-3`}>
          <div className={WRAP}>
            <div className={EYEBROW}>{block.eyebrow}</div>
            <h2 className={H2}>{block.title}</h2>
            <div className="flex flex-col gap-[16px] mt-[8px]">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className={`${LEAD} mb-0`}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      );

    case "cards":
      return (
        <section className={`${bg} ${pad} border-t border-bone-3`}>
          <div className={WRAP}>
            <div className={EYEBROW}>{block.eyebrow}</div>
            <h2 className={H2}>{block.title}</h2>
            {block.intro && <p className={`${LEAD} mb-[36px]`}>{block.intro}</p>}
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2">
              {block.cards.map((c) => (
                <div
                  key={c.title}
                  className="bg-bone p-[clamp(24px,2.8vw,34px)] flex flex-col gap-[12px]"
                >
                  <div className="h-[4px] w-[44px] bg-olive" />
                  <div className="font-condensed font-bold text-[17px] leading-[1.2] tracking-[.03em] uppercase text-concrete-dark">
                    {c.title}
                  </div>
                  <p className="font-barlow font-normal text-[16px] leading-[1.5] text-gray-warm-4 m-0">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
            {block.note && (
              <p className="font-barlow font-normal text-[15px] leading-[1.55] text-gray-warm-4 max-w-[62ch] mt-[20px] mb-0">
                {block.note}
              </p>
            )}
          </div>
        </section>
      );

    case "checklist":
      return (
        <section className={`bg-concrete-dark ${pad}`}>
          <div className={WRAP}>
            <div className="font-condensed font-semibold text-[13px] leading-none tracking-[.28em] uppercase text-olive-light mb-[14px]">
              {block.eyebrow}
            </div>
            <h2 className="font-anton font-normal text-[clamp(28px,4.4vw,52px)] leading-[1.04] uppercase text-bone mt-0 mb-[16px] max-w-[22ch]">
              {block.title}
            </h2>
            {block.intro && (
              <p className="font-barlow font-normal text-[clamp(16px,1.9vw,19px)] leading-[1.6] text-gray-warm-1 max-w-[62ch] mt-0 mb-[30px]">
                {block.intro}
              </p>
            )}
            <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-x-[36px] list-none m-0 p-0">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-[14px] py-[14px] border-t border-[rgba(242,241,237,.13)]"
                >
                  <span
                    aria-hidden="true"
                    className="font-anton font-normal text-[18px] leading-[1.2] text-olive-light flex-none"
                  >
                    ✓
                  </span>
                  <span className="font-barlow font-normal text-[16px] leading-[1.4] text-bone-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case "steps":
      return (
        <section className={`${bg} ${pad} border-t border-bone-3`}>
          <div className={WRAP}>
            <div className={EYEBROW}>{block.eyebrow}</div>
            <h2 className={H2}>{block.title}</h2>
            {block.intro && <p className={`${LEAD} mb-[36px]`}>{block.intro}</p>}
            <ol className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-px bg-gray-warm-2 border border-gray-warm-2 list-none m-0 p-0">
              {block.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="bg-bone p-[clamp(22px,2.6vw,30px)] flex flex-col gap-[10px]"
                >
                  <span className="font-anton font-normal text-[34px] leading-[0.8] text-gray-warm-1">
                    {i + 1}
                  </span>
                  <span className="font-condensed font-bold text-[15px] leading-[1.2] tracking-[.04em] uppercase text-concrete-dark">
                    {s.title}
                  </span>
                  <span className="font-barlow font-normal text-[15px] leading-[1.5] text-gray-warm-4">
                    {s.body}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "comparativa":
      return (
        <section className={`${bg} ${pad} border-t border-bone-3`}>
          <div className={WRAP}>
            <div className={EYEBROW}>{block.eyebrow}</div>
            <h2 className={H2}>{block.title}</h2>
            {block.intro && <p className={`${LEAD} mb-[32px]`}>{block.intro}</p>}
            <Comparativa />
          </div>
        </section>
      );

    case "cta":
      return (
        <section className={`${bg} pt-0 pb-[clamp(40px,5vw,64px)]`}>
          <div className={WRAP}>
            <CtaBanda
              tone="dark"
              title={block.title}
              cta={block.cta}
              href={waHref}
              note={block.note}
            />
          </div>
        </section>
      );
  }
}

/**
 * Página de producto.
 *
 * Todas las landings comparten esta estructura y se diferencian solo por los
 * datos de `lib/landings.ts`: así el copy se revisa en un archivo de texto y
 * el layout no se duplica tres veces. Usa el mismo `PageHero` que /productos
 * y /proyectos para que las páginas internas se sientan del mismo sitio.
 */
export default function LandingPage({ landing }: { landing: Landing }) {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: landing.crumb, path: landing.slug },
  ];

  return (
    <>
      <Nav />
      <main id="top" className="bg-bone [overflow-x:clip]">
        <PageHero
          eyebrow={landing.eyebrow}
          title={landing.h1}
          lead={landing.intro}
          img={landing.heroImg}
          imgAlt={landing.heroAlt}
          titleMaxCh={24}
        >
          <a
            href={landing.waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-bone text-concrete-dark font-condensed font-extrabold text-[14px] leading-none tracking-[.1em] uppercase py-[18px] px-[28px] hover:bg-white"
          >
            <WhatsAppIcon size={17} fill="#201F1C" />
            {landing.ctaLabel}
          </a>
        </PageHero>

        {/* Las migas van bajo el hero: sobre la foto competirían con el h1. */}
        <div className="bg-concrete-dark border-t border-[rgba(242,241,237,.12)]">
          <div className={`${WRAP} pt-[18px] pb-[4px]`}>
            <Breadcrumbs items={crumbs} />
          </div>
        </div>

        <Credentials />

        {landing.blocks.map((block, i) => (
          <BlockView
            key={`${block.kind}-${i}`}
            block={block}
            alt={i % 2 === 1}
            waHref={landing.waHref}
          />
        ))}

        {/* FAQ propio de la landing */}
        <section className="bg-bone py-[clamp(64px,9vw,110px)] border-t border-bone-3">
          <div className="max-w-[920px] mx-auto px-[clamp(18px,5vw,72px)]">
            <div className={EYEBROW}>Preguntas frecuentes</div>
            <h2 className={`${H2} mb-[36px]`}>
              Lo que preguntan antes de decidir
            </h2>
            <Faq items={landing.faqs} />
            <div className="mt-[30px]">
              <CtaBanda
                title="¿Tu pregunta no está en la lista?"
                cta="Preguntar por WhatsApp"
                href={landing.waHref}
                note="Te contesta alguien de la fábrica, no un formulario."
              />
            </div>
          </div>
        </section>

        {/* Enlaces internos al catálogo y a la galería de obras. */}
        <section className="bg-bone-2 py-[clamp(40px,5vw,60px)] border-t border-bone-3">
          <div className={`${WRAP} flex flex-wrap items-center gap-[14px]`}>
            <span className="font-condensed font-bold text-[12px] leading-none tracking-[.16em] uppercase text-gray-warm-4">
              Seguir mirando
            </span>
            {landing.relacionados.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="font-condensed font-extrabold text-[13px] leading-none tracking-[.08em] uppercase text-concrete-dark border-b-2 border-olive pb-[4px] hover:text-olive"
              >
                {r.label} →
              </Link>
            ))}
          </div>
        </section>

        <CtaFinal
          eyebrow="Hablemos"
          cta={landing.ctaLabel}
          href={landing.waHref}
        />
      </main>
      <Footer />

      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={productSchema({
          name: landing.product.name,
          description: landing.product.description,
          category: landing.product.category,
          image: landing.heroImg,
          url: landing.slug,
        })}
      />
      <JsonLd data={faqPageSchema(landing.faqs)} />
    </>
  );
}
