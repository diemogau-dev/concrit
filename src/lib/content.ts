/**
 * Datos de contenido del sitio, extraídos textualmente del HTML de referencia
 * (bloque renderVals()). No inventar ni modificar copy: estos son los únicos
 * datos duros del sitio.
 */

export const terminaciones: string[] = [
  "Instalación de agua y sanitarios",
  "Instalación eléctrica y apliques",
  "Baños completos",
  "Azulejos y revestimientos",
  "Aberturas",
  "Pintura y detalles de terminación",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "¿A qué zonas entregan?",
    a: "A todo el país. Trabajamos con estancias y cooperativas del Chaco, con industrias, barrios cerrados y obras de Asunción y Gran Asunción, y con clientes del interior: casas, depósitos, galpones, obradores y vestuarios. Estar sobre la ruta nos deja el flete corto en las dos direcciones. Contanos dónde estás y te pasamos el costo de entrega cerrado, no una estimación.",
  },
  {
    q: "¿Cuánto tardan en fabricar y entregar?",
    a: "Depende del producto y la cantidad, pero tenemos plazos claros desde el primer día. En el mismo presupuesto va la fecha de entrega comprometida. No trabajamos con plazos abiertos.",
  },
  {
    q: "¿La casa viene terminada o solo la estructura?",
    a: "Terminada y lista para usar. Además de fabricar y montar la estructura, hacemos las instalaciones de agua y electricidad, los baños completos, azulejos, revestimientos, aberturas y apliques. Un solo responsable, un solo presupuesto y una sola fecha de entrega.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Las formas habituales de plaza. Para vivienda trabajamos en cuotas a través de loteadoras aliadas. Todas las condiciones quedan escritas en el presupuesto antes de que pongas un guaraní.",
  },
  {
    q: "¿Pueden adaptar el modelo a lo que yo necesito?",
    a: "Sí. Nuestro sistema se arma encastrando piezas, así que podemos sumar habitaciones, ampliar el largo o combinar módulos sin rehacer nada desde cero. Contanos por WhatsApp qué tenés en mente y lo vemos caso por caso: te decimos qué se puede hacer, cuánto sale y cuándo lo tenés.",
  },
  {
    q: "¿Cuánto hace que están fabricando?",
    a: "Diez años produciendo concreto sobre la Ruta 9, con más de 100 proyectos entregados. Fábrica, moldes, flota y equipo de montaje propios: lo que te vendemos lo hacemos nosotros, no lo tercerizamos.",
  },
  {
    q: "¿Ofrecen financiamiento para vivienda?",
    a: "Sí. Las casas se pagan en cuotas a través de loteadoras aliadas. Es vivienda de material noble pensada para que sea accesible: concreto macizo al alcance de una familia trabajadora.",
  },
  {
    q: "¿Hacen la instalación y el montaje?",
    a: "Sí, con equipo propio. Fabricamos en planta y montamos en tu campo, tu obra o tu terreno. Se hace con cuadrilla chica y en pocas semanas, algo clave cuando el destino está lejos.",
  },
  {
    q: "¿No sale más caro que construir con ladrillo?",
    a: "No. En la mayoría de los casos sale menos que levantar la misma obra en ladrillo. El metro cuadrado ya arranca más barato, y encima te ahorrás los meses de obra, la mano de obra de albañilería, el material que se rompe y se desperdicia y el presupuesto que se estira sobre la marcha. La diferencia grande es esa: con el prefabricado sabés cuánto vas a pagar antes de empezar y ese número no se mueve.",
  },
];
