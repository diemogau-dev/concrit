/**
 * Contenido de las landings de producto.
 *
 * Cada landing existe para capturar una búsqueda con intención de compra
 * ("casas prefabricadas Paraguay", "bebederos para ganado") y llevarla al
 * mismo WhatsApp que el resto del sitio. Son distintas de /productos y
 * /proyectos: el catálogo lista piezas y la galería muestra obras, mientras
 * que acá se responde en largo la pregunta con la que alguien googlea.
 *
 * El copy arranca siempre por el problema del que busca, no por el producto:
 * quien googlea "obrador prefabricado" ya sabe qué es un obrador, lo que
 * quiere saber es si le resuelve lo que le está pasando en la obra.
 *
 * Regla del contenido: no se inventan medidas, precios ni plazos. Cuando el
 * dato depende del caso, la respuesta lo dice y manda a la conversación.
 */

import { wa } from "./config";
import type { Faq } from "./content";

export type Block =
  | { kind: "prose"; eyebrow: string; title: string; paragraphs: string[] }
  | {
      kind: "cards";
      eyebrow: string;
      title: string;
      intro?: string;
      cards: { title: string; body: string }[];
      note?: string;
    }
  | {
      kind: "checklist";
      eyebrow: string;
      title: string;
      intro?: string;
      items: string[];
    }
  | {
      kind: "steps";
      eyebrow: string;
      title: string;
      intro?: string;
      steps: { title: string; body: string }[];
    }
  | { kind: "comparativa"; eyebrow: string; title: string; intro?: string }
  | { kind: "cta"; title: string; cta: string; note?: string };

export type Landing = {
  slug: string;
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Línea chica sobre el h1. */
  eyebrow: string;
  h1: string;
  /** Bajada del hero: el dolor, antes que el producto. */
  intro: string;
  heroImg: string;
  heroAlt: string;
  waHref: string;
  ctaLabel: string;
  product: { name: string; description: string; category: string };
  blocks: Block[];
  faqs: Faq[];
  /** Enlaces internos al catálogo y a la galería de obras. */
  relacionados: { href: string; label: string }[];
};

// ─────────────────────────────────────────────────────────────
// Casas prefabricadas
// ─────────────────────────────────────────────────────────────
const casas: Landing = {
  slug: "/casas-prefabricadas-paraguay",
  crumb: "Casas prefabricadas",
  metaTitle:
    "Casas prefabricadas de hormigón en Paraguay | CONCRIT · Villa Hayes",
  metaDescription:
    "Casas prefabricadas de concreto macizo de 1, 2 y 3 habitaciones en Paraguay. Se entregan terminadas, con precio cerrado, montaje incluido y pago en cuotas. Fábrica sobre la Ruta 9 Km 36, Villa Hayes.",
  keywords: [
    "casas prefabricadas Paraguay",
    "casas prefabricadas de hormigón",
    "casas de concreto prefabricadas",
    "vivienda prefabricada Paraguay",
    "casas prefabricadas en cuotas",
    "casas prefabricadas Villa Hayes",
    "casa de material en cuotas Paraguay",
  ],
  eyebrow: "Línea Hogar",
  h1: "Casas prefabricadas de hormigón en Paraguay",
  intro:
    "Pagar alquiler diez años y no quedarte con nada. O juntar de a poco para levantar algo que se llueve al segundo verano. Nuestras casas son de concreto macizo, se entregan terminadas y se pagan en cuotas.",
  heroImg: "/assets/obra-casa.jpg",
  heroAlt:
    "Casa prefabricada de hormigón macizo CONCRIT terminada y lista para habitar en Paraguay",
  waHref: wa.casas,
  ctaLabel: "Ver modelos y cuotas",
  product: {
    name: "Casa prefabricada de hormigón macizo CONCRIT",
    description:
      "Vivienda prefabricada de placas de concreto macizo sobre pilares metálicos, de 1, 2 y 3 habitaciones, entregada terminada con instalaciones, baños y aberturas. Precio cerrado, montaje incluido y financiación en cuotas.",
    category: "Casas prefabricadas de hormigón",
  },
  relacionados: [
    { href: "/proyectos", label: "Ver obras terminadas" },
    { href: "/productos", label: "Ver el catálogo completo" },
  ],
  blocks: [
    {
      kind: "prose",
      eyebrow: "01 — El material",
      title: "Prefabricada no tiene por qué significar liviana",
      paragraphs: [
        "En Paraguay “casa prefabricada” suele querer decir madera, fibrocemento o panel liviano. Se levantan rápido y salen poco, pero la termita, la humedad y el sol de acá les ponen fecha de vencimiento desde el día que las terminás.",
        "Las nuestras son de placas de concreto macizo montadas sobre pilares metálicos que fabricamos en nuestra propia carpintería. Es el mismo material noble de una obra tradicional, con la diferencia de que se produce en planta con calidad controlada y se monta en tu terreno. No lo carcome la termita, no lo hincha la humedad, no lo quema el fuego y no se lo lleva nadie.",
        "La diferencia se ve a los diez años: la casa liviana ya pidió su segunda reparación y la de concreto sigue igual que el día que entraste.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "02 — Los modelos",
      title: "De una a tres habitaciones",
      intro:
        "Trabajamos con tres tamaños base. La distribución final la definimos con vos antes de fabricar, así que ninguno es una caja cerrada.",
      cards: [
        {
          title: "1 habitación",
          body: "Para arrancar, para una pareja o para la vivienda del personal en el establecimiento. El modelo más rápido de entregar.",
        },
        {
          title: "2 habitaciones",
          body: "El tamaño que más piden las familias. Espacio para dos dormitorios sin pagar metros que no vas a usar.",
        },
        {
          title: "3 habitaciones",
          body: "Para familia armada, con lugar para que cada uno tenga el suyo y sin quedar corto en cinco años.",
        },
      ],
      note: "Los tres se pueden ampliar después: el sistema encastra, así que sumar una habitación no es romper la casa.",
    },
    {
      kind: "checklist",
      eyebrow: "03 — Qué incluye",
      title: "Te la entregamos lista para entrar",
      intro:
        "No fabricamos la estructura y te dejamos el resto por tu cuenta. Un solo responsable, un solo presupuesto y una sola fecha de entrega.",
      items: [
        "Fabricación y montaje de la estructura",
        "Instalación de agua y sanitarios",
        "Instalación eléctrica y apliques",
        "Baño completo",
        "Azulejos y revestimientos",
        "Aberturas",
        "Pintura y detalles de terminación",
      ],
    },
    {
      kind: "prose",
      eyebrow: "04 — Cómo se paga",
      title: "En cuotas, con el precio cerrado desde el principio",
      paragraphs: [
        "Las casas se pagan en cuotas a través de loteadoras y entidades financieras aliadas. Es vivienda de material noble pensada para que sea accesible, no para que quede linda en el folleto.",
        "El precio queda cerrado en el presupuesto, con el alcance escrito y la fecha de entrega comprometida, antes de que pongas un guaraní. Lo que firmás es lo que pagás.",
        "Si estás comprando terreno en un loteamiento, contanos cuál: trabajamos con desarrolladoras de la zona y en varios casos el terreno y la casa se resuelven en el mismo plan.",
      ],
    },
    {
      kind: "steps",
      eyebrow: "05 — El proceso",
      title: "De la primera consulta a la llave",
      steps: [
        {
          title: "Nos escribís",
          body: "Contás dónde está el terreno y cuántas habitaciones necesitás. Si no tenés nada definido, lo definimos juntos.",
        },
        {
          title: "Presupuesto cerrado",
          body: "Te pasamos precio fijo, alcance detallado y fecha de entrega. Vale 15 días.",
        },
        {
          title: "Firma y anticipo",
          body: "Con la firma entrás en el cronograma de producción y recién ahí compramos tu material.",
        },
        {
          title: "Fabricación",
          body: "Producimos las piezas en planta mientras se resuelve la fundación en el terreno.",
        },
        {
          title: "Montaje y terminación",
          body: "Montamos con cuadrilla propia y hacemos las instalaciones y terminaciones hasta dejarla lista.",
        },
      ],
    },
    {
      kind: "comparativa",
      eyebrow: "06 — Contra la obra tradicional",
      title: "La misma casa, dos formas de llegar",
      intro:
        "No tenemos nada contra el ladrillo. Solo mostramos en qué se diferencian cuando ponés las dos al lado.",
    },
    {
      kind: "cta",
      title: "¿Querés saber qué modelo entra en tu presupuesto?",
      cta: "Ver modelos y cuotas",
      note: "Respondemos todos los días. Preguntar no te compromete a nada.",
    },
  ],
  faqs: [
    {
      q: "¿Cuánto tarda desde que firmo hasta que puedo entrar?",
      a: "Semanas, no meses: el grueso del tiempo es la fabricación en planta, que arranca apenas se firma, y el montaje se hace con cuadrilla chica en pocas semanas. El plazo exacto depende del modelo y de dónde esté el terreno, y va escrito y comprometido en el mismo presupuesto.",
    },
    {
      q: "¿La casa viene con baño y cocina terminados?",
      a: "Sí. Entregamos con las instalaciones de agua y electricidad hechas, el baño completo, los azulejos, revestimientos, aberturas, apliques y la pintura. Entrás y ya podés vivir, sin contratar a nadie más.",
    },
    {
      q: "¿Puedo elegir la distribución o son modelos cerrados?",
      a: "Podés elegir. Los tres tamaños son la base, pero la distribución se define con vos antes de fabricar. El sistema se arma encastrando piezas, así que mover un ambiente o alargar la casa no obliga a rehacer el proyecto desde cero.",
    },
    {
      q: "¿Se puede ampliar más adelante?",
      a: "Sí, y es una de las razones para elegir este sistema. Las placas encastran entre pilares y se traban con tornillos, así que el día que necesites una habitación más se anexa al mismo sistema sin romper lo que ya está construido.",
    },
    {
      q: "¿Necesito tener el terreno a mi nombre?",
      a: "Para construir necesitamos que el terreno esté disponible y con acceso para el camión. Si lo estás comprando en cuotas en un loteamiento, contanos cuál: trabajamos con desarrolladoras de la zona y lo vemos caso por caso.",
    },
    {
      q: "¿Quién hace la fundación?",
      a: "Puede hacerla tu gente siguiendo lo que te indicamos, o la hacemos nosotros y va dentro del mismo presupuesto. Lo importante es que quede definido antes de fabricar y no el día que llega el camión con las piezas.",
    },
    {
      q: "¿Entregan en el interior del país?",
      a: "Sí, a todo el país. Estar sobre la Ruta 9 nos deja el flete corto hacia el interior y el Chaco. Pasanos la ubicación y te cerramos el costo de entrega junto con el presupuesto, no después.",
    },
    {
      q: "¿No sale más caro que construir con ladrillo?",
      a: "No. En la mayoría de los casos sale menos que levantar la misma casa en ladrillo. El metro cuadrado ya arranca más barato, y encima te ahorrás los meses de obra, la mano de obra de albañilería y el material que se desperdicia. Y sabés cuánto vas a pagar antes de empezar.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Comederos, bebederos y tanques australianos
// ─────────────────────────────────────────────────────────────
const ganado: Landing = {
  slug: "/comederos-bebederos-tanques-ganado",
  crumb: "Comederos, bebederos y tanques",
  metaTitle:
    "Comederos, bebederos y tanques australianos de hormigón | CONCRIT Paraguay",
  metaDescription:
    "Comederos, bebederos y tanques australianos de concreto macizo para ganado en Paraguay. Aguantan el sol, el agua y el empuje del animal. Fábrica sobre la Ruta 9 Km 36, Villa Hayes, con entrega y montaje propios al Chaco y todo el país.",
  keywords: [
    "comederos para ganado Paraguay",
    "bebederos para ganado de hormigón",
    "bebederos de concreto para vacas",
    "tanques australianos Paraguay",
    "tanque australiano de hormigón",
    "comederos de concreto para ganado",
    "postes de hormigón Chaco",
    "prefabricados para estancias",
  ],
  eyebrow: "Línea Campo",
  h1: "Comederos, bebederos y tanques australianos de hormigón",
  intro:
    "El bebedero de chapa se oxida. El de plástico se raja con el sol. El de madera lo empuja el animal hasta que cede. Los nuestros son de concreto macizo: se instalan una vez y siguen ahí cuando cambies de tropa.",
  heroImg: "/assets/campo-bebedero.jpg",
  heroAlt:
    "Fila de bebederos de concreto macizo CONCRIT instalados y con agua en una estancia del Chaco paraguayo",
  waHref: wa.ganado,
  ctaLabel: "Cotizar para mi campo",
  product: {
    name: "Comederos, bebederos y tanques australianos de hormigón CONCRIT",
    description:
      "Comederos, bebederos, tanques australianos y postes de concreto macizo para ganadería, fabricados en Villa Hayes con entrega y montaje propios en todo Paraguay.",
    category: "Prefabricados de hormigón para ganadería",
  },
  relacionados: [
    { href: "/productos#campo", label: "Ver la línea de campo en el catálogo" },
    { href: "/proyectos", label: "Ver obras terminadas" },
  ],
  blocks: [
    {
      kind: "prose",
      eyebrow: "01 — El problema",
      title: "Lo que el campo no perdona",
      paragraphs: [
        "En el campo nada falla por una sola razón. Falla por todas juntas: el sol que raja, el agua que pudre, el animal que empuja todos los días en el mismo punto y la distancia, que hace que arreglar algo termine costando más que el algo.",
        "Por eso el criterio no es cuánto sale hoy. Es cuántas veces vas a tener que volver a ocuparte. Un bebedero de chapa se oxida por dentro, uno de plástico se pone quebradizo con los años de sol y uno liviano se corre de lugar solo con que la hacienda se apoye.",
        "El concreto macizo no hace ninguna de esas cosas. Pesa, no se oxida, no se deforma con el calor y no se lo lleva nadie. Lo instalás y no lo tocás más.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "02 — Qué fabricamos",
      title: "La línea completa para el establecimiento",
      intro:
        "Todo sale de la misma planta, así que no dependés de tres proveedores distintos ni de tres fletes.",
      cards: [
        {
          title: "Bebederos",
          body: "Agua limpia y permanente, en una pieza que el animal no mueve. Sin óxido adentro y sin remiendos cada temporada.",
        },
        {
          title: "Comederos",
          body: "Para ración, sal o balanceado. Macizos, a escuadra y hechos para el empuje diario de la hacienda en el mismo punto.",
        },
        {
          title: "Tanques australianos",
          body: "Reserva de agua para aguantar la seca. Concreto en vez de chapa: no se pica, no se oxida y no se abolla.",
        },
        {
          title: "Postes y estructuras",
          body: "Postes para alambrado y tejido, corrales, muros y casas para el personal. La misma fábrica, el mismo camión.",
        },
      ],
      note: "¿Necesitás una medida que no es la estándar? Fabricamos nuestros propios moldes metálicos en la planta, así que se puede hacer a pedido.",
    },
    {
      kind: "checklist",
      eyebrow: "03 — Por qué concreto",
      title: "La cuenta que importa es la de los diez años",
      intro:
        "Comparado con la chapa, el plástico o la madera, la ventaja no está en el precio del día uno.",
      items: [
        "No se oxida ni se pica por dentro",
        "No se raja ni se pone quebradizo con el sol",
        "El animal empuja y la pieza no se mueve",
        "No se lo lleva nadie: pesa demasiado",
        "Cero mantenimiento, ninguna temporada",
        "Dura décadas, no temporadas",
      ],
    },
    {
      kind: "prose",
      eyebrow: "04 — La entrega",
      title: "Estamos del lado del campo, no del lado de Asunción",
      paragraphs: [
        "La fábrica está sobre la Ruta 9, en el Km 36 de Villa Hayes: la puerta del Chaco y el corredor por el que pasa todo lo que entra y sale del norte. No es un dato de folleto, es flete más corto y más barato para el productor y para la cooperativa.",
        "Entregamos con camiones propios y montamos con equipo propio. Cuando el destino está a horas de ripio, eso es la diferencia entre una entrega que se cumple y una que se reprograma tres veces.",
        "Contanos dónde está el establecimiento y te pasamos el costo de entrega cerrado junto con el precio del producto. No una estimación para ajustar después.",
      ],
    },
    {
      kind: "cta",
      title: "¿Cuántos necesitás y para cuándo?",
      cta: "Cotizar para mi campo",
      note: "Pasanos cantidad y ubicación y te cerramos precio con entrega.",
    },
  ],
  faqs: [
    {
      q: "¿Vienen listos o hay que armarlos?",
      a: "Vienen fabricados de planta. Los entregamos y los dejamos instalados con equipo propio: vos no tenés que conseguir gente ni herramientas en el campo para poder usarlos.",
    },
    {
      q: "¿Cuánto dura un bebedero o un tanque de concreto?",
      a: "Décadas. No se oxida, no se deforma con el sol, no se raja con el uso y no se lo lleva nadie. Es la diferencia entre comprar una vez y estar reponiendo cada par de temporadas.",
    },
    {
      q: "¿Entregan en el Chaco profundo?",
      a: "Sí, es buena parte de lo que hacemos. Estar sobre la Ruta 9 nos deja el camino más corto hacia el norte. Pasanos la ubicación y evaluamos el acceso antes de comprometer la fecha, para que no haya sorpresas el día de la entrega.",
    },
    {
      q: "¿Hacen medidas o modelos especiales?",
      a: "Sí. Fabricamos nuestros propios moldes metálicos en la planta, así que podemos producir a pedido lo que no está en el catálogo estándar. Contanos qué necesitás y te decimos si se puede, cuánto sale y cuándo lo tenés.",
    },
    {
      q: "¿Venden por cantidad a cooperativas y estancias grandes?",
      a: "Sí. Si necesitás volumen o entregas programadas para varios puestos, se arma un esquema de precio y de cronograma para eso. Escribinos con las cantidades y lo vemos.",
    },
    {
      q: "¿Cómo se instala un tanque australiano?",
      a: "Lo entregamos y lo montamos nosotros. Del lado tuyo necesitamos la base nivelada y acceso para el camión; si eso todavía no está resuelto, lo definimos antes de fabricar y no el día de la entrega.",
    },
    {
      q: "¿Los postes sirven para alambrado eléctrico?",
      a: "Fabricamos postes de hormigón para alambrado y tejido. Si el uso va a ser alambrado eléctrico, decinos al escribir, porque cambia la forma de fijar los aisladores y conviene resolverlo antes de producir.",
    },
    {
      q: "¿También hacen la casa del personal?",
      a: "Sí. Con el mismo sistema de placas hacemos viviendas para el personal del establecimiento, entregadas terminadas con instalaciones y baño. Es el mismo proveedor, el mismo camión y una sola fecha de entrega.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Obradores y galpones
// ─────────────────────────────────────────────────────────────
const obradores: Landing = {
  slug: "/obradores-prefabricados",
  crumb: "Obradores y galpones",
  metaTitle:
    "Obradores prefabricados y galpones de hormigón | CONCRIT Paraguay",
  metaDescription:
    "Obradores prefabricados, vestuarios, depósitos y galpones de concreto macizo para obra en Paraguay. Venta y alquiler mensual, montaje en semanas con precio cerrado y fecha comprometida. Fábrica en Villa Hayes, Ruta 9 Km 36.",
  keywords: [
    "obradores prefabricados Paraguay",
    "obrador prefabricado de hormigón",
    "alquiler de obradores Paraguay",
    "galpones prefabricados Paraguay",
    "depósitos prefabricados de hormigón",
    "vestuarios para obra prefabricados",
    "obrador para constructora",
  ],
  eyebrow: "Línea Obra",
  h1: "Obradores prefabricados y galpones de hormigón",
  intro:
    "La obra arrancó y la oficina todavía no existe. El pañol está en una carpa, los planos se mojan y el capataz atiende parado. Un obrador de concreto llega fabricado y se monta en semanas.",
  heroImg: "/assets/obra-obrador.jpg",
  heroAlt:
    "Obrador prefabricado de hormigón CONCRIT terminado y entregado en una obra en Paraguay",
  waHref: wa.obradores,
  ctaLabel: "Cotizar un obrador",
  product: {
    name: "Obrador prefabricado de hormigón CONCRIT",
    description:
      "Obradores, vestuarios, depósitos y galpones de placas de concreto macizo sobre pilares metálicos para obra e industria. Venta y alquiler mensual, con montaje propio, precio cerrado y fecha de entrega comprometida.",
    category: "Obradores y galpones prefabricados de hormigón",
  },
  relacionados: [
    { href: "/proyectos", label: "Ver obradores y galpones entregados" },
    { href: "/productos", label: "Ver el catálogo completo" },
  ],
  blocks: [
    {
      kind: "prose",
      eyebrow: "01 — El problema",
      title: "El obrador no es un gasto, es cronograma",
      paragraphs: [
        "Todo lo que la obra no tiene se termina pagando en tiempo. Sin oficina el capataz resuelve parado y de memoria. Sin pañol cerrado el material se moja, se pierde o desaparece. Sin vestuario ni comedor el equipo pierde media hora por turno que nadie anota pero todos pagan.",
        "El obrador de madera o de chapa sale barato el primer día y se nota después: se recalienta al punto de que nadie quiere estar adentro, se destruye con el uso y no se puede dejar solo un fin de semana largo sin que falte algo.",
        "El nuestro es de placas de concreto macizo sobre pilares metálicos. Llega fabricado de planta, se monta con cuadrilla chica en semanas y desde el primer día la obra tiene dónde trabajar, dónde guardar y dónde cambiarse.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "02 — Qué fabricamos",
      title: "Para la obra y para la industria",
      intro:
        "El mismo sistema resuelve las cuatro cosas, así que entran en un solo presupuesto y una sola fecha.",
      cards: [
        {
          title: "Obradores",
          body: "Oficina técnica, sala de reuniones y administración de obra. Fresco, cerrado y sin ruido de chapa.",
        },
        {
          title: "Vestuarios y comedores",
          body: "Para que el equipo se cambie y coma en condiciones. Impacta directo en el rendimiento del turno.",
        },
        {
          title: "Depósitos y pañol",
          body: "Muros macizos y cierre firme. El material caro duerme adentro y sigue estando el lunes.",
        },
        {
          title: "Galpones y estructuras",
          body: "Para industria, acopio o producción. La misma lógica de montaje, en otra escala.",
        },
      ],
      note: "Trabajamos con configuraciones tipo y también a medida. Decinos cuántas personas lo van a usar y qué necesitás adentro.",
    },
    {
      kind: "checklist",
      eyebrow: "03 — Por qué concreto en obra",
      title: "Lo que cambia contra un obrador liviano",
      items: [
        "No se recalienta como la chapa: se puede trabajar adentro",
        "Muro macizo: el material guardado está realmente guardado",
        "Resiste el uso pesado de una obra, no una temporada",
        "Cero mantenimiento durante toda la obra",
        "Se monta en semanas, con cuadrilla chica",
        "Se le anexan módulos si la obra crece",
      ],
    },
    {
      kind: "prose",
      eyebrow: "04 — Comprar o alquilar",
      title: "Dos formas, según cuánto dure la obra",
      paragraphs: [
        "Trabajamos las dos modalidades. Muchas constructoras prefieren el alquiler mensual mientras dura la obra, para no inmovilizar plata en algo que van a usar un año y medio. Otras lo compran porque tienen obra continua y les rinde tenerlo propio.",
        "No hay una que sea mejor en abstracto: depende del plazo de tu obra y de cómo esté armado tu flujo. Decinos cuánto tiempo lo necesitás y te pasamos las dos opciones con números al lado, para que compares vos.",
        "En los dos casos el precio queda cerrado y la fecha de entrega comprometida en el presupuesto. Tu cronograma no depende de que a nosotros nos salgan las cosas.",
      ],
    },
    {
      kind: "comparativa",
      eyebrow: "05 — Contra la obra tradicional",
      title: "Construirlo en el sitio o traerlo hecho",
      intro:
        "La comparación vale igual para un obrador que para una vivienda: cambia cuándo lo podés usar.",
    },
    {
      kind: "cta",
      title: "¿Cuándo arranca la obra?",
      cta: "Cotizar un obrador",
      note: "Pasanos ubicación y metros y te cerramos precio con fecha.",
    },
  ],
  faqs: [
    {
      q: "¿Lo alquilan o lo venden?",
      a: "Las dos cosas: venta y alquiler mensual. Muchas constructoras prefieren alquilar mientras dura la obra en vez de inmovilizar plata. Decinos cuánto tiempo lo necesitás y te pasamos las dos opciones con números para que compares.",
    },
    {
      q: "¿Cuánto tarda el montaje en obra?",
      a: "Semanas, no meses, y con cuadrilla chica. Las piezas se fabrican en planta mientras se resuelve la fundación, así que el tiempo en tu obra es solo el de montaje. La fecha va comprometida en el presupuesto.",
    },
    {
      q: "¿Qué medidas manejan?",
      a: "Trabajamos con configuraciones tipo y también a medida. Contanos cuántas personas lo van a usar y qué necesitás adentro —oficina, pañol, vestuario, baño— y te pasamos la configuración con precio cerrado.",
    },
    {
      q: "¿Incluye baño e instalación eléctrica?",
      a: "Sí, si lo necesitás. Hacemos las instalaciones de agua y electricidad, los baños completos y las terminaciones interiores con equipo propio. Un solo responsable y un solo presupuesto, en vez de coordinar tres gremios.",
    },
    {
      q: "¿Montan en obras lejos de Asunción?",
      a: "Sí. Estamos sobre la Ruta 9 en Villa Hayes, con camiones y equipo de montaje propios. Las piezas son planas y entran donde otros no llegan, que es justamente lo que se necesita cuando la obra está lejos.",
    },
    {
      q: "¿Se puede ampliar si la obra crece?",
      a: "Sí. Las placas encastran entre pilares y se traban con tornillos pasantes, así que se anexan módulos nuevos al mismo sistema sin romper lo que ya está montado.",
    },
    {
      q: "¿Trabajan con constructoras de forma continua?",
      a: "Sí, y es parte importante de lo que hacemos. Si tenés varias obras o necesitás entregas programadas, se arma un esquema de precios y cronograma para eso. Escribinos y lo vemos.",
    },
    {
      q: "¿Cómo se cierra el precio?",
      a: "Con presupuesto escrito: precio fijo, alcance definido y fecha de entrega comprometida, con 15 días de validez. No trabajamos con plazos abiertos ni con precios que se ajustan a mitad de camino.",
    },
  ],
};

export const LANDINGS = { casas, ganado, obradores } as const;
