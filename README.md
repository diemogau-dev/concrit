# CONCRIT — Sitio web

Sitio estático de **CONCRIT**, fábrica de prefabricados de concreto macizo sobre
la Ruta 9, Km 32, Villa Hayes, Paraguay (la puerta del Chaco).

El sitio tiene un solo objetivo: **generar conversaciones de WhatsApp**. No hay
backend, base de datos ni formularios. Todo call to action abre WhatsApp con un
mensaje precargado según el segmento (Campo / Obra / Hogar / general).

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** con los tokens de marca en `tailwind.config.ts`
- Fuentes vía `next/font/google` (`Anton`, `Barlow`, `Barlow Semi Condensed`) con `display: swap`
- 100% estático (`output` prerenderizado) — pensado para **Vercel**
- Sin librerías de UI: el diseño de referencia se replicó a mano

## Estructura

```
src/
  app/
    layout.tsx        Fuentes, metadata SEO (OG/Twitter), JSON-LD global
    page.tsx          Home: composición de secciones + FAQPage
    globals.css       Base global + textura de ruido
    sitemap.ts        /sitemap.xml (home + landings)
    robots.ts         /robots.txt
    casas-prefabricadas-paraguay/        ┐
    comederos-bebederos-tanques-ganado/  ├ Landings de producto (SEO)
    obradores-prefabricados/             ┘
  components/
    Nav.tsx           Nav sticky + menú hamburguesa mobile (client)
    Faq.tsx           Acordeón FAQ accesible (client)
    Lightbox.tsx      Zoom de fotos de obra (client)
    LandingPage.tsx   Layout compartido de las landings de producto
    Comparativa.tsx   Tabla CONCRIT vs obra tradicional (responsive)
    CtaBanda.tsx      Banda de conversión intermedia a WhatsApp
    Breadcrumbs.tsx   Migas visibles (acompañan al BreadcrumbList)
    JsonLd.tsx        Inyección segura de structured data
    icons.tsx         Iconos SVG (WhatsApp, pin)
    sections/         Una sección por archivo (server components)
  lib/
    config.ts         ⚙️ Número de WhatsApp, mensajes, contacto, dominio
    content.ts        Copy de FAQ y comparativa del home
    landings.ts       Copy completo de las tres landings de producto
    schema.ts         Constructores de JSON-LD
    seo.ts            Metadata de las landings
public/
  assets/             Fotos reales de fábrica y obra
scripts/
  generate-placeholders.mjs   Regenera los placeholders sólidos
```

## Landings de producto

Tres páginas apuntadas a búsquedas con intención de compra. Todas usan el
mismo layout y se diferencian solo por los datos de `src/lib/landings.ts`,
así que **para editar el copy no hace falta tocar JSX**:

| Ruta | Qué cubre |
| --- | --- |
| `/casas-prefabricadas-paraguay` | Vivienda: modelos, financiación, proceso |
| `/comederos-bebederos-tanques-ganado` | Línea ganadera completa |
| `/obradores-prefabricados` | Obradores, galpones, venta y alquiler |

Cada una entra a WhatsApp con su propio mensaje precargado y publica su
`Product`, `BreadcrumbList` y `FAQPage`. Para agregar una landing nueva:
sumá el objeto a `LANDINGS` y creá la carpeta con un `page.tsx` de tres
líneas — el sitemap se actualiza solo.

## Configuración (un solo lugar): `src/lib/config.ts`

Todo lo que puede cambiar vive acá — **nunca** está hardcodeado en los componentes:

| Dato | Valor actual |
| --- | --- |
| WhatsApp | `+595 981 625546` → `https://wa.me/595981625546` |
| Email | `hola@concrit.py` ⚠️ ver nota |
| Instagram | `@concrit.py` |
| Google Maps | link a Villa Hayes · Ruta 9 |
| Dominio canónico (`SITE.url`) | `https://concrit.com.py` |

> ⚠️ **Email:** sigue apuntando a `@concrit.py`, un dominio distinto al
> canónico. Si esa casilla no existe, cambiala por `hola@concrit.com.py`
> — es una línea en `config.ts`.

Los mensajes precargados de WhatsApp también viven ahí (`WA_MESSAGES`),
uno por segmento y uno por landing, para que la conversación arranque con
contexto en vez de un "quiero información".

> **Dominio:** `SITE.url` se usa en la metadata, el canonical, el sitemap y el
> JSON-LD. Si el sitio se publica en otro dominio, cambialo ahí (una sola línea).

## Imágenes

`public/assets/` ya tiene las fotos reales de fábrica/obra:

```
hero-obrador.jpg   campo-bebedero.jpg   obra-blanco.jpg   v-hogar.jpg
sistema-union.jpg  sistema-pilares.jpg  sistema-placas.jpg
sistema-muros.jpg  sistema-techo.jpg    og-image.jpg (imagen para redes)
```

Todas llevan el filtro `grayscale(1)` del diseño y `alt` descriptivos (SEO
local). Para reemplazar alguna, sobrescribí el archivo **manteniendo el mismo
nombre** — no hace falta tocar código.

Dos scripts de apoyo en `scripts/`:

- `generate-placeholders.mjs` — genera placeholders sólidos en tono concreto
  (útil si falta alguna foto real momentáneamente).
- `process-uploads.mjs` — toma fotos crudas de una carpeta `uploads-raw/` (no
  versionada), las reorienta según EXIF, descarta metadata (incluye GPS de
  fotos de celular) y las recomprime a los nombres que espera el sitio.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

## Deploy en Vercel

El proyecto no tiene variables de entorno ni secretos.

1. Subí el repo a GitHub (o GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importá el repo.
3. Vercel detecta **Next.js** automáticamente. Dejá los valores por defecto:
   - Build Command: `next build`
   - Output: gestionado por Vercel
   - Install Command: `npm install`
4. **Deploy**. Listo.
5. (Opcional) Agregá el dominio propio en **Settings → Domains** y actualizá
   `SITE.url` en `src/lib/config.ts` si el dominio final difiere de `concrit.py`.

## Accesibilidad y performance

- HTML semántico (`header`, `main`, `section`, `footer`), un solo `h1`.
- Acordeón FAQ operable con teclado y con `aria-expanded` / `aria-controls`.
- Menú mobile con `aria-expanded`, cierre con `Escape`.
- Imágenes optimizadas con `next/image`; sólo el hero es `priority`.
- Sólo dos componentes usan `"use client"` (nav mobile y FAQ); el resto es
  render de servidor / estático.
