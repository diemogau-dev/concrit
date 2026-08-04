/**
 * Datos de contenido del sitio.
 *
 * El copy vive acá y no dentro de los componentes: así se revisa el texto
 * sin leer JSX, y el mismo banco de FAQ alimenta el acordeón visible y el
 * JSON-LD de FAQPage sin riesgo de que se desincronicen.
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

/**
 * Banco de FAQ del home. Google levanta estas preguntas como FAQPage, así
 * que cada respuesta tiene que sostenerse sola fuera del contexto de la
 * página. Nada de precios ni plazos inventados: cuando el dato depende del
 * caso, la respuesta lo dice y manda a WhatsApp.
 */
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
    a: "Las formas habituales de plaza. Para vivienda trabajamos en cuotas a través de loteadoras y entidades financieras aliadas. Todas las condiciones quedan escritas en el presupuesto antes de que pongas un guaraní.",
  },
  {
    q: "¿Pueden adaptar el modelo a lo que yo necesito?",
    a: "Sí. Nuestro sistema se arma encastrando piezas, así que podemos sumar habitaciones, ampliar el largo o combinar módulos sin rehacer nada desde cero. Contanos por WhatsApp qué tenés en mente y lo vemos caso por caso: te decimos qué se puede hacer, cuánto sale y cuándo lo tenés.",
  },
  {
    q: "¿Cuánto hace que están fabricando?",
    a: "Diez años produciendo concreto sobre la Ruta 9, en el Km 41, con más de 100 proyectos entregados. Fábrica, moldes, flota y equipo de montaje propios: lo que te vendemos lo hacemos nosotros, no lo tercerizamos.",
  },
  {
    q: "¿Ofrecen financiamiento para vivienda?",
    a: "Sí. Las casas se pagan en cuotas a través de loteadoras y entidades financieras aliadas. Es vivienda de material noble pensada para que sea accesible: concreto macizo al alcance de una familia trabajadora.",
  },
  {
    q: "¿Hacen la instalación y el montaje?",
    a: "Sí, con equipo propio. Fabricamos en planta y montamos en tu campo, tu obra o tu terreno. Se hace con cuadrilla chica y en pocas semanas, algo clave cuando el destino está lejos.",
  },
  {
    q: "¿No sale más caro que construir con ladrillo?",
    a: "No. En la mayoría de los casos sale menos que levantar la misma obra en ladrillo. El metro cuadrado ya arranca más barato, y encima te ahorrás los meses de obra, la mano de obra de albañilería, el material que se rompe y se desperdicia y el presupuesto que se estira sobre la marcha. La diferencia grande es esa: con el prefabricado sabés cuánto vas a pagar antes de empezar y ese número no se mueve.",
  },
  {
    q: "¿Cuánto anticipo piden para arrancar?",
    a: "Se trabaja con un anticipo a la firma, porque recién ahí compramos la materia prima de tu proyecto y entrás en el cronograma de producción. El porcentaje y las fechas de cada pago quedan escritos en el presupuesto, sin letra chica.",
  },
  {
    q: "¿Por cuánto tiempo vale el precio que me pasan?",
    a: "Los presupuestos tienen 15 días de validez. Pasado ese plazo recotizamos, porque los precios de la materia prima se mueven y preferimos decírtelo de frente antes que ajustarte el precio a mitad del proyecto.",
  },
  {
    q: "¿Hacen proyectos a medida o solo lo que está en el catálogo?",
    a: "Las dos cosas. Tenemos productos y modelos estándar con precio cerrado para resolver rápido, y también diseñamos y construimos proyectos a medida con respaldo de ingeniero. En el proyecto a medida el diseño y la visita de relevamiento se cobran aparte, se construya o no finalmente con nosotros: es trabajo técnico real, no un folleto.",
  },
  {
    q: "¿Venden productos sueltos o solo obras completas?",
    a: "Sueltos también. En el catálogo están los productos de línea —bebederos, comederos, postes, placas, camineros, cajas de registro, alcantarillas y más— y se compran por unidad o por cantidad. No hace falta contratar una obra para comprarnos.",
  },
  {
    q: "¿De qué son los pilares del sistema?",
    a: "Los pilares son metálicos y las placas son de concreto macizo. Los pilares los fabricamos nosotros en nuestra carpintería metálica: arman la retícula que sostiene todo y la placa cierra el muro, encastrando y trabándose con tornillos pasantes. Esa combinación es la que permite montar rápido y anexar módulos después sin romper nada.",
  },
  {
    q: "¿Qué necesito tener listo antes de que lleguen a montar?",
    a: "Básicamente el terreno accesible para el camión y la fundación resuelta. Si no sabés cómo dejarlo, te lo indicamos nosotros — o lo hacemos nosotros y va dentro del mismo presupuesto. Lo definimos antes de fabricar, no el día que llega el camión.",
  },
  {
    q: "¿Y si el camión no llega hasta el lugar?",
    a: "Es una de las ventajas del sistema: las piezas son planas y entran donde otros no llegan. Trabajamos seguido en zonas donde el acceso es malo. Pasanos la ubicación y evaluamos el acceso antes de comprometer la entrega, para que no haya sorpresas el día del montaje.",
  },
  {
    q: "¿Qué mantenimiento necesita después?",
    a: "Ninguno en la estructura. No hay que revocar, ni repintar cada temporada, ni tratar contra termitas. Es la diferencia entre gastar una vez y gastar todos los años.",
  },
  {
    q: "¿Aguanta el calor del Chaco?",
    a: "El concreto macizo tiene mucha más masa que una chapa o un panel liviano, así que no se calienta ni se enfría de golpe como esos materiales. Para vivienda sumamos además las terminaciones que correspondan según el uso y la orientación. Contanos dónde va a estar y te decimos qué conviene.",
  },
  {
    q: "¿Cuánto dura un bebedero o un tanque australiano de concreto?",
    a: "Décadas. El animal empuja, el sol raja y el agua pudre, y esas son justamente las tres cosas que el concreto macizo aguanta sin moverse. No se oxida, no se deforma con el sol y no se lo lleva nadie. Lo instalás y no lo tocás más.",
  },
  {
    q: "¿Alquilan obradores o solo los venden?",
    a: "Las dos cosas: venta y alquiler mensual. Muchas constructoras prefieren alquilar mientras dura la obra en vez de inmovilizar plata en algo que van a usar un año. Decinos cuánto tiempo lo necesitás y te pasamos las dos opciones con números para que compares.",
  },
  {
    q: "¿Trabajan con constructoras y cooperativas?",
    a: "Sí, y es buena parte de lo que hacemos. Si necesitás volumen, entregas programadas o abastecer varias obras a la vez, se arma un esquema de precios y de cronograma para eso. Escribinos y lo vemos.",
  },
  {
    q: "¿Puedo ir a ver la fábrica antes de comprar?",
    a: "Sí, y es lo que más recomendamos. Estamos sobre la Ruta 9 en el Km 41, Villa Hayes, a la vista y fácil de encontrar. Venís, mirás cómo se produce y tocás el producto antes de decidir. Abrimos de lunes a sábado de 7 a 17.",
  },
];

/**
 * Comparativa contra la obra tradicional. La consigna es mostrar la
 * diferencia, no pegarle al ladrillo: la columna de la derecha describe lo
 * que efectivamente pasa en una obra húmeda, sin adjetivos de descarte.
 */
export type ComparisonRow = { criterio: string; concrit: string; ladrillo: string };

export const comparison: ComparisonRow[] = [
  {
    criterio: "Cuándo lo podés usar",
    concrit: "En semanas",
    ladrillo: "En meses",
  },
  {
    criterio: "El precio",
    concrit: "Cerrado antes de arrancar",
    ladrillo: "Se ajusta sobre la marcha",
  },
  {
    criterio: "Gente en obra",
    concrit: "Cuadrilla chica, pocas semanas",
    ladrillo: "Equipo completo durante meses",
  },
  {
    criterio: "Si llueve",
    concrit: "Se fabrica bajo techo, la obra no para",
    ladrillo: "Cada lluvia frena el avance",
  },
  {
    criterio: "Mantenimiento",
    concrit: "Ninguno",
    ladrillo: "Revoque, pintura y humedad",
  },
  {
    criterio: "Ampliar después",
    concrit: "Se anexan módulos al mismo sistema",
    ladrillo: "Romper, apuntalar y rehacer",
  },
  {
    criterio: "Lejos de la ciudad",
    concrit: "Piezas planas en camión propio",
    ladrillo: "Fletes repetidos de material a granel",
  },
  {
    criterio: "Calidad de la pieza",
    concrit: "Igual una tras otra, controlada en planta",
    ladrillo: "Depende del pulso del albañil",
  },
];
