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
    layout.tsx        Fuentes, metadata SEO (OG/Twitter), JSON-LD LocalBusiness
    page.tsx          Home
    productos/page.tsx  Catálogo de productos
    proyectos/page.tsx  Sistema constructivo + obras entregadas
    globals.css       Base global + textura de ruido
    sitemap.ts        /sitemap.xml
    robots.ts         /robots.txt
  components/
    Nav.tsx           Nav sticky + menú hamburguesa mobile (client)
    Faq.tsx           Acordeón FAQ accesible (client)
    Lightbox.tsx      Pop-up para ampliar fotos (client)
    PageHero.tsx      Encabezado de las páginas internas
    ProductoCard.tsx  Card de catálogo + variante ancha de familia
    icons.tsx         Iconos SVG (WhatsApp, pin)
    sections/         Una sección por archivo (server components)
  lib/
    config.ts         ⚙️ Número de WhatsApp, mensajes, contacto, dominio
    content.ts        Copy de tablas/FAQ (datos duros del HTML original)
    productos.ts      📋 Catálogo: productos, detalle técnico, fotos, precios
    proyectos.ts      📋 Qué construimos + galería de obras entregadas
public/
  assets/             Fotos publicadas del sitio
scripts/
  revisar-fotos.mjs       Hojas de contactos de las fotos crudas
  publicar-fotos.mjs      Curaduría: qué foto va en qué lugar del sitio
  generate-placeholders.mjs   Placeholders sólidos para lo que falte
```

## Páginas

| Ruta | Qué tiene |
| --- | --- |
| `/` | Hero, ventajas, líneas, sistema constructivo, CTA, ubicación, FAQ |
| `/productos` | Catálogo en tres secciones con chips de navegación, una card por producto y consulta de precio por WhatsApp |
| `/proyectos` | Sistema constructivo completo, qué construimos, galería de obras entregadas, llave en mano y CTA de presupuesto de obra |

## Editar el catálogo: `src/lib/productos.ts`

Todo el catálogo es un array tipado. Para tocarlo **no hace falta abrir ningún
componente**:

- **Agregar un producto** → copiá un objeto dentro de la sección que
  corresponda (`campo`, `construccion`, `vial`) y cambiale los campos. Cada
  sección tiene sólo `id`, `n` y `nombre`: el nombre se usa a la vez en el chip
  de navegación y en el encabezado, así que las cajas de producto arrancan
  enseguida, sin bajada de texto en el medio.
- **Cambiar el detalle técnico** → editá `detalle` (texto libre, 2 o 3 líneas).
- **Poner la foto real** → sobrescribí el archivo de `public/assets` que apunta
  `img`, manteniendo el mismo nombre. Si preferís otro nombre, cambiá `img`.
- **Cargar un precio** → completá el campo opcional `precio`, ej:
  `precio: "Gs. 850.000"`. La card lo muestra sola. Mientras esté vacío (o sin
  la clave), la card queda con el botón de WhatsApp y nada más.
- **Variantes o medidas** → `variantes: ["Diseño 1", "Diseño 2"]` se muestran
  como chips debajo del detalle.

El mensaje de WhatsApp de cada producto se arma solo con el nombre y el
artículo (`articulo: "de las"` → *"consultar precio de las Baldosas de
concreto"*). Los textos siguen viviendo todos en `config.ts`.

## Editar los proyectos: `src/lib/proyectos.ts`

`categorias` es una sola lista. Las que son tipo de obra (obradores, casas,
galpones, depósitos) llevan `tarjeta` y aparecen además en "Qué construimos";
las que no (interiores terminados) viven sólo en la galería. Así las tarjetas y
las pestañas nunca se desincronizan.

La galería **no lleva nombres de obra ni localidades**: se elige el tipo con una
pestaña y se ven las fotos. Para sumar fotos a una categoría, agregá entradas a
su `fotos` y dejá los archivos en `public/assets` siguiendo el nombre
`galeria-<tipo>-NN.jpg`. La grilla se acomoda sola.

## Configuración (un solo lugar): `src/lib/config.ts`

Todo lo que puede cambiar vive acá — **nunca** está hardcodeado en los componentes:

| Dato | Valor actual |
| --- | --- |
| WhatsApp | `+595 981 625546` → `https://wa.me/595981625546` |
| Email | `hola@concrit.py` |
| Instagram | `@concrit.py` |
| Google Maps | link a Villa Hayes · Ruta 9 |
| Dominio canónico (`SITE.url`) | `https://concrit.py` |

> **Dominio:** `SITE.url` se usa en la metadata, el canonical, el sitemap y el
> JSON-LD. Si el sitio se publica en otro dominio, cambialo ahí (una sola línea).

## Imágenes

`public/assets/` tiene todas las fotos publicadas. Para reemplazar alguna,
sobrescribí el archivo **manteniendo el mismo nombre**: no hace falta tocar
código. Todas llevan `alt` descriptivos (SEO local).

Las fotos son reales y van **a color**, con un tratamiento parejo
(`contrast(1.04) saturate(.94)`) para que el conjunto se lea como un sistema.
El hero de la home va más saturado y sin oscurecer, para que se vea el
atardecer; la legibilidad del texto la resuelve un degradé radial en la esquina
de abajo a la izquierda, no oscureciendo toda la foto.

Faltan las fotos de **piso ecológico** y **cordón de vereda**: esas dos cards
muestran un panel tipográfico de marca en vez de un hueco gris. En cuanto
existan las fotos, se agrega `img` al producto en `src/lib/productos.ts`.

### Subir fotos nuevas para publicar

1. Creá la carpeta `fotos/` en la raíz y dejá ahí los originales (JPG, no HEIC).
   Esa carpeta viaja versionada a propósito, a diferencia de `uploads-raw/`.
2. `npm run fotos` arma hojas de contactos numeradas en `fotos/_hojas/` para
   revisar muchas fotos de una vez en vez de abrirlas de a una.
3. Elegida la curaduría, se anota en el mapeo de `scripts/publicar-fotos.mjs`
   (qué foto va en qué lugar) y `npm run publicar-fotos` las recorta, les saca
   la metadata y las deja en `public/assets/`.
4. Se borra `fotos/` para que el repositorio no quede cargando los originales.

Cuatro scripts de apoyo en `scripts/`:

- `revisar-fotos.mjs` — hojas de contactos para revisar de a muchas.
- `publicar-fotos.mjs` — **la curaduría**: el mapeo de qué foto va en qué lugar
  del sitio, con su recorte. Para cambiar una elección, cambiá el `src` de esa
  línea y volvé a correr el script.
- `generate-placeholders.mjs` — genera placeholders sólidos en tono concreto
  (útil si falta alguna foto real momentáneamente). **No pisa archivos que ya
  existen**, así que se puede correr sin miedo a borrar una foto real; para
  regenerar todo desde cero, `node scripts/generate-placeholders.mjs --force`.
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
