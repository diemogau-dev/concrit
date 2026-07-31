# Fotos crudas de CONCRIT

Acá van **todas** las fotos tal como salen del celular o de la cámara. No hace
falta que las ordenes, recortes ni renombres: de esta carpeta salen las que
después se publican en `public/assets/`.

## Cómo subirlas

1. Entrá a esta carpeta en GitHub y usá **Add file → Upload files**, o arrastralas
   desde la compu si usás GitHub Desktop.
2. Subilas a la **misma rama** en la que se está trabajando, no a otra.
3. Van de a tandas: la web de GitHub acepta hasta 100 archivos y 25 MB por
   archivo por vez.

## Antes de subir

- **Exportá en JPG.** Si el iPhone las guarda en `.HEIC`, exportalas como JPG
  (en Fotos: Compartir → Opciones → Formato: Compatible). El HEIC no se puede
  procesar acá.
- **Bajá el tamaño a ~2000 px de lado largo.** El sitio nunca usa más de 1920 px,
  así que subir el original de 4000 px sólo infla el repositorio.
- No hace falta corregir la rotación: se arregla sola al procesarlas.

## Si ya sabés a qué obra pertenecen

Es opcional, pero ayuda mucho: metelas en una subcarpeta con el nombre de la
obra y el lugar. El nombre de la carpeta se usa después como epígrafe.

```
fotos/
  obrador-benjamin-aceval/
  casa-2-dormitorios-villa-hayes/
  galpon-concepcion/
  productos-bebederos/
  sueltas/            ← lo que no sabés dónde va
```

Si no sabés, tirá todo suelto en `fotos/` y se identifica una por una.

## Qué fotos hacen falta

Estos son los lugares del sitio que hoy tienen un placeholder gris esperando la
foto real. No hace falta que mandes exactamente esta cantidad: mandá todas las
que tengas y de ahí se eligen las mejores.

| Dónde va | Cuántas | Qué se busca |
| --- | --- | --- |
| Hero de la home | 1 | Obrador o galpón terminado, **con luz de atardecer**. Es la única foto que va a color en todo el sitio, así que conviene la más linda que tengas. Horizontal y con aire arriba, porque el texto se apoya abajo a la izquierda. |
| Hero de /proyectos | 1 | Otro obrador, distinto al de la home. Horizontal. |
| Galería de obras | 8 obradores, 8 casas, 8 depósitos, 8 galpones | Obras terminadas. Sin nombres ni localidades: sólo se muestran agrupadas por tipo. |
| Tarjetas de tipo de obra | 4 | La mejor de cada tipo: un obrador, una casa, un depósito, un galpón. |
| Catálogo de productos | 12 | Bebedero, comedero, postes, tanque australiano, placas, piso ecológico, baldosas (los 3 diseños), cajas de registro, cajas eléctricas, cordón de vereda, alcantarilla tubular, alcantarilla celular. Producto solo, lo más limpio posible: si está sobre fondo parejo se le puede recortar el fondo. |
| Cara lisa de la placa | 1 | Un caminero de patio, vereda o fachada hecho con la cara lisa. Es el argumento de venta del bloque de las placas. |
| Secuencia constructiva | 4 | Fundación y pilares, montaje de placas, muros cerrados, techo. Ya hay fotos, pero si tenés mejores se cambian. |

## Qué pasa después

1. Se arma una hoja de contactos con todas (`npm run fotos`) y se revisa cada
   una para identificar qué es.
2. Se eligen las mejores para cada lugar del sitio y se recortan, comprimen y
   publican en `public/assets/` con el nombre que espera cada página.
3. Se actualizan los epígrafes y los textos alternativos de
   `src/lib/productos.ts` y `src/lib/proyectos.ts` con lo que realmente se ve.
4. Se borra esta carpeta en un commit aparte, así el repositorio queda liviano.

## Privacidad

Las fotos de celular llevan la ubicación GPS adentro. Al procesarlas se les
borra toda la metadata, así que lo que se publica no tiene datos de ubicación.
Igual tené en cuenta que mientras estén en esta carpeta, los originales sí la
tienen.
