import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * Migas visibles de las landings. Acompañan al BreadcrumbList del JSON-LD:
 * Google desconfía de las migas declaradas en schema que no existen en la
 * página, así que van siempre las dos juntas.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-[18px]">
      <ol className="flex flex-wrap items-center gap-x-[10px] gap-y-[4px] list-none m-0 p-0">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-[10px]">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-condensed font-semibold text-[11px] leading-none tracking-[.16em] uppercase text-gray-warm-3"
                >
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="font-condensed font-semibold text-[11px] leading-none tracking-[.16em] uppercase text-olive-light hover:text-bone"
                >
                  {c.name}
                </Link>
              )}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="text-gray-warm-4 text-[11px] leading-none"
                >
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
