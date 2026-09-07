import type { DestinationGuide } from './destinationGuides';

export const taviraGuide: DestinationGuide = {
  slug: 'tavira',
  intro:
    'Tavira cambia bastante la forma de viajar con perro respecto al Algarve occidental y central. Aquí gran parte de la costa está separada del continente por la Ria Formosa: Ilha de Tavira, Terra Estreita y Cabanas dependen del barco, mientras que Barril es la gran excepción con acceso peatonal por puente y unos 1–1,8 km de recorrido. Para 2026 las cuatro principales playas de baños tienen temporada del 1 de junio al 30 de septiembre. No hemos encontrado una política oficial común sobre perros en los barcos, tren turístico o senderos del municipio, así que ese dato queda expresamente por confirmar antes de planificar una excursión.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Centro histórico y orillas del Gilão',
      category: 'walk',
      summary: 'Tavira se reparte entre las dos orillas del río Gilão, con calles antiguas, puente histórico, plazas, jardines y terrazas. Turismo de Portugal propone recorrerla a pie sin prisa desde la zona del río hacia el castillo.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Es un recorrido urbano exterior, pero no hemos localizado una norma municipal específica que permita etiquetar todo el itinerario como acceso canino confirmado. Los interiores de iglesias, museos y monumentos deben comprobarse por separado.',
      sourceLabel: 'Turismo de Portugal — Un paseo por Tavira',
      sourceUrl: 'https://www.visitportugal.com/es/content/un-paseo-por-tavira'
    },
    {
      name: 'Jardim do Coreto',
      category: 'park',
      summary: 'El jardín público más antiguo de Tavira, junto al río y en pleno centro. Es uno de los puntos más agradables para incorporar a un paseo urbano por la ciudad.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La Câmara describe el jardín y su historia, pero en la ficha consultada no publica una política específica para perros. No damos por hecho el acceso aunque sea un espacio público exterior.',
      sourceLabel: 'Câmara Municipal de Tavira — Jardins Históricos',
      sourceUrl: 'https://cm-tavira.pt/site/ambiente/jardins-historicos/'
    },
    {
      name: 'Castelo e Jardim do Castelo',
      category: 'historic',
      summary: 'Recinto amurallado y jardín-mirador sobre Tavira. El municipio indica que el castillo es Monumento Nacional y publica horario de verano de 08:30 a 19:00.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No hemos localizado una regla oficial de admisión de perros al recinto. El acceso al entorno urbano y al interior del castillo/jardín no deben tratarse como la misma cosa.',
      sourceLabel: 'Câmara Municipal de Tavira — Outro Património',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/outro-patrimonio/'
    },
    {
      name: 'Parque Natural da Ria Formosa',
      category: 'natural_area',
      summary: 'Gran sistema lagunar protegido de unas 18.000 hectáreas que se extiende por varios municipios del sotavento, incluido Tavira, con islas barrera, sapales, bancos de arena, dunas, salinas y gran diversidad de aves.',
      dogAccess: 'unknown',
      dogAccessNotes: 'El ICNF regula un espacio protegido de gran sensibilidad ecológica, pero no hemos localizado una autorización general para perros aplicable a todo el parque. Verificamos cada playa, sendero o actividad por separado.',
      sourceLabel: 'ICNF — Parque Natural da Ria Formosa',
      sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnriaformosa'
    },
    {
      name: 'Praia do Barril',
      category: 'beach',
      summary: 'La playa más sencilla de alcanzar sin barco: desde Pedras d’El Rei se cruza un puente peatonal y se continúa aproximadamente 1 km según la ficha municipal, a pie o en tren turístico. El recorrido atraviesa la Ria Formosa antes de llegar al arenal y al antiguo arraial de pesca del atún.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Barril es playa de baños del 1 de junio al 30 de septiembre de 2026. Durante la época balnear se aplica la restricción de animales fuera de zonas autorizadas en playas sujetas a edital. Además, no hemos localizado una política oficial sobre perros en el tren turístico: si se necesita utilizarlo, hay que comprobarlo antes.',
      sourceLabel: 'Câmara Municipal de Tavira + Portaria 204-A/2026',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/praia-do-barril-praia-acessivel/'
    },
    {
      name: 'Praia da Ilha de Tavira',
      category: 'beach',
      summary: 'Arenal en el extremo oriental de Ilha de Tavira, dentro del Parque Natural. El municipio indica acceso en barco desde la ciudad, Quatro Águas o mediante aquatáxi, con servicios de restauración y camping en la isla.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Ilha de Tavira-Mar es playa de baños del 1 de junio al 30 de septiembre de 2026. Antes incluso de valorar el arenal, hay que confirmar con el operador si el perro puede viajar en la embarcación elegida: no hemos encontrado una regla común publicada por el municipio para todos los barcos.',
      sourceLabel: 'Câmara Municipal de Tavira — Praia da Ilha de Tavira',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/praia-da-ilha-de-tavira/'
    },
    {
      name: 'Praia da Terra Estreita',
      category: 'beach',
      summary: 'Playa en una de las zonas más estrechas de Ilha de Tavira, con un arenal menos frecuentado que otras playas vecinas. El acceso es exclusivamente en barco desde Santa Luzia y el trayecto dura unos cinco minutos según Turismo de Portugal.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Terra Estreita tiene temporada balnear del 1 de junio al 30 de septiembre de 2026. El barco es parte imprescindible de la excursión y su política de mascotas debe confirmarse con el operador antes de salir; no tenemos una regla oficial común para todos los servicios.',
      sourceLabel: 'Câmara Municipal de Tavira / Turismo de Portugal',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/praia-da-terra-estreita/'
    },
    {
      name: 'Praia de Cabanas',
      category: 'beach',
      summary: 'Arenal en la estrecha Ilha de Cabanas, frente a la localidad del mismo nombre. El acceso se realiza desde la marginal en pequeñas embarcaciones y la playa forma parte del paisaje protegido de Ria Formosa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Cabanas-Mar y Cabanas-Poente tienen temporada balnear del 1 de junio al 30 de septiembre de 2026. El acceso requiere barco, y no damos por hecho que todas las pequeñas embarcaciones acepten perros: hay que preguntar al operador antes de comprar el trayecto.',
      sourceLabel: 'Câmara Municipal de Tavira — Praia de Cabanas',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/praia-de-cabanas/'
    },
    {
      name: 'Perímetro Florestal da Mata da Conceição',
      category: 'natural_area',
      summary: 'Área forestal de 457 hectáreas a unos 5 km de la costa. El municipio describe una zona recreativa vallada de unas 40 hectáreas y senderos señalizados de entre 1 y 2,4 km, además de fauna silvestre y una pequeña manada de gamos en semicautividad.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La presencia de fauna y de un área vallada hace especialmente importante no asumir que el perro puede entrar sin condiciones. La ficha municipal no publica una política canina; la dejamos por confirmar hasta encontrar una norma específica.',
      sourceLabel: 'Câmara Municipal de Tavira — Património Natural',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/patrimonio-natural/'
    }
  ],
  walks: [
    {
      name: 'Centro histórico → Jardim do Coreto → Gilão → Castelo',
      summary: 'Recorrido urbano para conocer Tavira sin depender de barco ni playa. Turismo de Portugal recomienda caminar por las calles antiguas y subir hacia el castillo; advierte además de pendientes y pavimento irregular en la parte alta, un detalle útil si el perro es mayor o tiene movilidad reducida.',
      sourceLabel: 'Turismo de Portugal — Itinerario accesible de Tavira',
      sourceUrl: 'https://www.visitportugal.com/es/destinos/algarve/357665'
    },
    {
      name: 'Pedras d’El Rei → Praia do Barril · aproximadamente 1–1,8 km',
      summary: 'Es la única gran playa de Tavira a la que puede llegarse caminando sin tomar barco. La ficha municipal actual habla de unos 1 km desde el puente hasta el arenal y el plan turístico municipal documenta unos 1.800 metros de acceso peatonal, con estaciones de observación. La política del perro en el tren turístico no está confirmada.',
      sourceLabel: 'Câmara Municipal de Tavira — Praia do Barril / PEDTM',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/praia-do-barril-praia-acessivel/'
    },
    {
      name: 'Mata da Conceição · senderos de 1 a 2,4 km',
      summary: 'Alternativa interior y corta a las islas. El municipio publica varios senderos peatonales señalizados de 1 a 2,4 km dentro del perímetro forestal. Como existe fauna silvestre y gamos en semicautividad, no recomendaremos llevar perro hasta confirmar expresamente las reglas del recinto.',
      sourceLabel: 'Câmara Municipal de Tavira — Património Natural',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/patrimonio-natural/'
    }
  ],
  beachRule: {
    summary:
      'En Tavira, Barril, Cabanas-Mar, Ilha de Tavira-Mar y Terra Estreita están identificadas como playas de baños en 2026 con temporada del 1 de junio al 30 de septiembre; la Portaria también identifica Cabanas-Poente en esas fechas. La Autoridade Marítima Nacional establece que durante la época balnear los animales no pueden permanecer ni circular fuera de las zonas autorizadas en playas de baños sujetas a edital, independientemente de la hora. A esto se añade una particularidad de Tavira: salvo Barril, las principales playas dependen de barco, por lo que la política del operador de transporte debe comprobarse también.',
    sourceLabel: 'Diário da República — Portaria 204-A/2026 + AMN',
    sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
  },
  practicalRule: {
    eyebrow: 'La clave de Tavira',
    title: 'Comprueba el transporte antes que la playa',
    summary:
      'En Ilha de Tavira, Terra Estreita y Cabanas el barco forma parte inevitable del acceso. Una playa puede tener una regla estacional conocida y aun así resultar inviable con perro si el operador no acepta animales o exige condiciones concretas. No hemos localizado una política única oficial para todas las embarcaciones, así que la guía lo marca como dato a confirmar en cada viaje. Barril es la alternativa más sencilla para evitar esa dependencia porque tiene acceso peatonal.',
    sourceLabel: 'Câmara Municipal de Tavira — Praias',
    sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/'
  },
  alerts: [
    {
      title: '⛴️ Tres de las cuatro playas principales dependen de barco',
      summary: 'Ilha de Tavira, Terra Estreita y Cabanas requieren embarcación. Antes de salir con perro hay que confirmar directamente las condiciones del operador: la información municipal consultada explica los accesos, pero no publica una política común de mascotas para todos los servicios.',
      sourceLabel: 'Câmara Municipal de Tavira — Praias',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/'
    },
    {
      title: '🏖️ Temporada balnear 2026: 1 de junio → 30 de septiembre',
      summary: 'Barril, Cabanas, Ilha de Tavira y Terra Estreita están reguladas durante esas fechas. En playas de baños sujetas a edital, la AMN prohíbe animales fuera de zonas autorizadas durante la época balnear, independientemente de la hora.',
      sourceLabel: 'Portaria 204-A/2026 + Autoridade Marítima Nacional',
      sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
    },
    {
      title: '🌾 No salirse de pasarelas ni pisar las dunas',
      summary: 'El municipio insiste en que la circulación fuera de los accesos autorizados degrada la vegetación dunar. Con perro, esto refuerza la necesidad de controlarlo y evitar que entre en dunas o zonas sensibles, aunque una playa o sendero admita animales.',
      sourceLabel: 'Câmara Municipal de Tavira — conservación dunar',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/praias/'
    },
    {
      title: '🦌 Mata da Conceição: senderos sí, regla canina no confirmada',
      summary: 'El municipio publica rutas cortas de 1 a 2,4 km y describe fauna silvestre y gamos en semicautividad. Precisamente por eso no la etiquetamos como paseo con perro hasta localizar una norma explícita del recinto.',
      sourceLabel: 'Câmara Municipal de Tavira — Património Natural',
      sourceUrl: 'https://cm-tavira.pt/site/descobrir/patrimonio-natural/'
    }
  ],
  sources: [
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' },
    { label: 'ICNF — Parque Natural da Ria Formosa', url: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnriaformosa' },
    { label: 'Câmara Municipal de Tavira — Praias', url: 'https://cm-tavira.pt/site/descobrir/praias/' },
    { label: 'Câmara Municipal de Tavira — Praia do Barril', url: 'https://cm-tavira.pt/site/descobrir/praias/praia-do-barril-praia-acessivel/' },
    { label: 'Câmara Municipal de Tavira — Praia da Ilha de Tavira', url: 'https://cm-tavira.pt/site/descobrir/praias/praia-da-ilha-de-tavira/' },
    { label: 'Câmara Municipal de Tavira — Terra Estreita', url: 'https://cm-tavira.pt/site/descobrir/praias/praia-da-terra-estreita/' },
    { label: 'Câmara Municipal de Tavira — Praia de Cabanas', url: 'https://cm-tavira.pt/site/descobrir/praias/praia-de-cabanas/' },
    { label: 'Câmara Municipal de Tavira — Património Natural', url: 'https://cm-tavira.pt/site/descobrir/patrimonio-natural/' },
    { label: 'Câmara Municipal de Tavira — Jardins Históricos', url: 'https://cm-tavira.pt/site/ambiente/jardins-historicos/' },
    { label: 'Turismo de Portugal — Un paseo por Tavira', url: 'https://www.visitportugal.com/es/content/un-paseo-por-tavira' }
  ]
};