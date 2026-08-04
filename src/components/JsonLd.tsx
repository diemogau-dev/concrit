/**
 * Inyecta un bloque de structured data.
 *
 * El `<` se escapa a < porque un string del contenido que contenga
 * "</script>" cerraría la etiqueta antes de tiempo. Es la única forma
 * segura de serializar JSON dentro de un <script> inline.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
