import type { DestinationGuide } from './destinationGuides';

export const aljezurGuide: DestinationGuide = {
  slug: 'aljezur',
  intro:
    'Aljezur es una de las bases más interesantes de la Costa Vicentina para viajar con perro porque permite combinar pueblo, castillo, playas muy distintas y etapas de la Rota Vicentina. La información útil aquí no es decir que “todo es dog-friendly”: las principales playas tienen temporada balnear oficial del 1 de junio al 30 de septiembre y la Autoridade Marítima restringe los animales en playas de baños fuera de las zonas autorizadas durante ese periodo. En cambio, Rota Vicentina sí confirma expresamente que se puede caminar con perro, aunque recomienda llevarlo siempre con correa por la fauna, el ganado y los perros pastores.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Castelo de Aljezur',
      category: 'historic',
      summary: 'Fortificación medieval situada sobre la parte antigua de Aljezur, con vistas sobre el valle. Turismo de Portugal indica que está abierto diariamente y tiene acceso libre.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Que el acceso sea libre no equivale a una política de admisión de perros. La fuente oficial consultada no especifica esa condición, así que mantenemos el acceso canino como no confirmado.',
      sourceLabel: 'Turismo de Portugal — Castelo de Aljezur',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/content/castelo-de-aljezur'
    },
    {
      name: 'Parque Natural do Sudoeste Alentejano e Costa Vicentina',
      category: 'natural_area',
      summary: 'El parque protegido abarca territorio de Aljezur y conserva una gran diversidad de hábitats costeros, playas, acantilados y áreas marinas. Es el marco natural de buena parte de las excursiones del municipio.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No extrapolamos la política de un sendero a todo el parque natural. Las normas pueden variar según zona y actividad, por lo que solo marcamos como confirmado aquello que tenga una fuente específica.',
      sourceLabel: 'ICNF — Parque Natural do Sudoeste Alentejano e Costa Vicentina',
      sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnsudoestealentejanoecostavicentina'
    },
    {
      name: 'Praia da Arrifana',
      category: 'beach',
      summary: 'Playa situada en una bahía rodeada de altas escarpas, con servicios, vigilancia y mucha tradición de surf y bodyboard. Las ruinas de la antigua fortaleza ofrecen una de las panorámicas más conocidas de la bahía.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Arrifana figura como playa de baños en 2026 del 1 de junio al 30 de septiembre. Durante la época balnear, la AMN prohíbe la permanencia y circulación de animales fuera de las zonas autorizadas en las playas sujetas a edital. Hay que comprobar señalización y zonas autorizadas antes de bajar con perro.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026 + AMN',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia do Monte Clérigo',
      category: 'beach',
      summary: 'Arenal junto a la pequeña población de Monte Clérigo, a unos 10 km de Aljezur, con acceso por carretera y entrada mediante rampas y escaleras.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Monte Clérigo tiene temporada balnear oficial del 1 de junio al 30 de septiembre de 2026. No la presentamos como playa canina: durante ese periodo se aplica la restricción de animales fuera de zonas autorizadas y siempre mandan el edital y la señalización local.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia da Amoreira',
      category: 'beach',
      summary: 'Gran arenal en la desembocadura de la Ribeira de Aljezur, rodeado de dunas y con posibilidad de estar junto a agua marina o fluvial. Turismo de Portugal la sitúa a unos 8 km de Aljezur.',
      dogAccess: 'restricted',
      dogAccessNotes: 'En 2026 aparecen identificadas Amoreira-Mar y Amoreira-Rio con temporada balnear del 1 de junio al 30 de septiembre; Amoreira-Mar está cualificada como playa de baños. La regla concreta para animales depende de la zona, el edital y la señalización: no tratamos todo el estuario como una única “playa para perros”.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/NR/exeres/C13CBE32-78A0-48B8-BF87-0768E2E8C616'
    },
    {
      name: 'Praia de Odeceixe',
      category: 'beach',
      summary: 'Playa en la desembocadura de la Ribeira de Seixe, donde el paisaje combina el Atlántico y el río. Es uno de los puntos más reconocibles del norte del municipio y una parada importante de la Rota Vicentina.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Odeceixe-Mar tiene temporada balnear oficial del 1 de junio al 30 de septiembre de 2026. El encuentro entre río y mar no implica que todo el espacio tenga la misma norma: hay que consultar zonas autorizadas, edital y señalización antes de acceder con perro.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/NR/exeres/8030A835-6D31-455B-8274-3194DF43CC0D'
    },
    {
      name: 'Praia da Bordeira / Carrapateira',
      category: 'beach',
      summary: 'Uno de los arenales más extensos de la zona, junto a Carrapateira, que aumenta mucho con la marea baja y recibe una ribera que puede formar una laguna.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Bordeira está cualificada como playa de baños en 2026 del 1 de junio al 30 de septiembre. Durante la temporada balnear no damos por hecho el acceso canino: deben respetarse las zonas autorizadas y la señalización vigente.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/node/141825'
    },
    {
      name: 'Rota Vicentina — Odeceixe → Aljezur',
      category: 'walk',
      summary: 'Etapa interior de unos 19–23 km según la variante elegida, pasando por Rogil. Existe una opción que se acerca a Praia da Amoreira y alarga el recorrido.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Rota Vicentina confirma que se puede caminar con perro, pero recomienda llevarlo siempre con correa por la protección de fauna, el tránsito fuera del sendero y los posibles encuentros con ganado y perros pastores.',
      sourceLabel: 'Rota Vicentina — Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
    },
    {
      name: 'Rota Vicentina — Aljezur → Arrifana',
      category: 'walk',
      summary: 'Etapa de unos 16–17 km en su opción costera, pasando por el castillo, Monte Clérigo y la zona de Ponta da Atalaia antes de llegar a Arrifana. Hay una alternativa más corta por el Caminho Histórico.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La política de Rota Vicentina permite caminar con perro pero recomienda correa permanente. La propia organización advierte de que esa exigencia puede encajar con dificultad en el Trilho dos Pescadores; conviene valorar el terreno y el tipo de perro antes de elegir la variante costera.',
      sourceLabel: 'Rota Vicentina — Aljezur a Arrifana / Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/programas/a-descoberta-da-costa-sudoeste/'
    }
  ],
  walks: [
    {
      name: 'Odeceixe → Aljezur · 19,5 km · 5 h',
      summary: 'Rota Vicentina publica una opción de 19,5 km y unas 5 horas, sencilla y bastante llana, siguiendo caminos próximos al canal de riego. El desvío hacia Praia da Amoreira añade unos 5 km y eleva la jornada a unas 7 horas. Con perro, la recomendación oficial de la red es correa permanente.',
      sourceLabel: 'Rota Vicentina — À descoberta da Costa Sudoeste',
      sourceUrl: 'https://rotavicentina.com/programas/a-descoberta-da-costa-sudoeste/'
    },
    {
      name: 'Aljezur → Arrifana · 16–17 km · unas 5–5,5 h',
      summary: 'La variante costera enlaza la parte antigua y el castillo con Monte Clérigo, Ponta da Atalaia y Arrifana. Rota Vicentina publica recorridos de 16–17 km según programa y variante; existe también una opción más corta por el Caminho Histórico para quien prefiera reducir distancia y exposición costera.',
      sourceLabel: 'Rota Vicentina — programas de senderismo',
      sourceUrl: 'https://rotavicentina.com/programas/uma-travessia-classica-a-pe-pela-costa-vicentina/'
    },
    {
      name: 'Aljezur histórico → Castelo de Aljezur',
      summary: 'Como opción corta para un día sin gran ruta, se puede recorrer la parte antigua y subir hasta el castillo. Turismo de Portugal confirma que el recinto está abierto diariamente con acceso libre; la admisión específica de perros no está publicada, por lo que no la damos por hecha.',
      sourceLabel: 'Turismo de Portugal — Castelo de Aljezur',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/content/castelo-de-aljezur'
    }
  ],
  beachRule: {
    summary:
      'Para 2026, Amoreira-Mar, Arrifana, Bordeira, Monte Clérigo y Odeceixe-Mar están entre las playas de baños de Aljezur con temporada del 1 de junio al 30 de septiembre; la Portaria también identifica otras aguas balneares del municipio en esas fechas. La Autoridade Marítima Nacional establece que durante la época balnear está prohibida la permanencia y circulación de animales fuera de las zonas autorizadas en playas de baños sujetas a edital, independientemente de la hora. En espacios que no estén identificados como playas de baños sujetos a edital, los animales pueden acompañar a sus dueños cumpliendo la legislación general. Siempre hay que comprobar el edital y la señalización del lugar concreto.',
    sourceLabel: 'Autoridade Marítima Nacional — FAQ + Portaria 204-A/2026',
    sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
  },
  practicalRule: {
    eyebrow: 'Cómo plantearía el viaje',
    title: 'Aljezur funciona mejor si combinas costa y senderos',
    summary:
      'En verano, las reglas de las playas de baños reducen las opciones de arenal con perro, mientras que la Rota Vicentina aporta recorridos donde la política canina sí está expresamente publicada. La organización recomienda como temporada de caminata septiembre–junio por las altas temperaturas estivales. Para un viaje con perro, tiene más sentido elegir una base desde la que alternar rutas en horas frescas, pueblo y costa que depender exclusivamente de la playa.',
    sourceLabel: 'Rota Vicentina — Guia de Ajuda',
    sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
  },
  alerts: [
    {
      title: '🐕 Rota Vicentina permite perro, pero recomienda correa siempre',
      summary: 'La organización lo justifica por la protección de la vida salvaje, evitar pisoteo fuera del recorrido y los posibles encuentros con ganado y perros pastores. También pide recoger siempre las deyecciones.',
      sourceLabel: 'Rota Vicentina — FAQ caminar con perro',
      sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
    },
    {
      title: '☀️ La temporada recomendada para caminar es septiembre–junio',
      summary: 'Rota Vicentina recomienda esos meses por las temperaturas elevadas del verano. Si se viaja con perro en los meses cálidos, esto refuerza la necesidad de empezar temprano, llevar agua y evitar las horas de máxima exposición.',
      sourceLabel: 'Rota Vicentina — Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
    },
    {
      title: '🏖️ Del 1 de junio al 30 de septiembre se aplica la temporada balnear de 2026',
      summary: 'Arrifana, Bordeira, Monte Clérigo, Amoreira-Mar y Odeceixe-Mar aparecen como playas de baños durante esas fechas. No basta con que una playa sea grande o poco concurrida: con perro hay que revisar zona autorizada, edital y señalización.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      title: '💧 En rutas largas no des por hecho que habrá agua',
      summary: 'La propia guía de Rota Vicentina recomienda salir con un mínimo de 1,5 litros de agua por persona porque no todas las etapas atraviesan localidades con cafés o tiendas. Si llevas perro, hay que sumar su agua al cálculo y revisar la etapa concreta antes de salir.',
      sourceLabel: 'Rota Vicentina — Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
    }
  ],
  sources: [
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' },
    { label: 'ICNF — Parque Natural do Sudoeste Alentejano e Costa Vicentina', url: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnsudoestealentejanoecostavicentina' },
    { label: 'Turismo de Portugal — Castelo de Aljezur', url: 'https://www.visitportugal.com/pt-pt/content/castelo-de-aljezur' },
    { label: 'Turismo de Portugal — Praia da Arrifana', url: 'https://www.visitportugal.com/es/node/141536' },
    { label: 'Turismo de Portugal — Praia da Amoreira', url: 'https://www.visitportugal.com/es/NR/exeres/C13CBE32-78A0-48B8-BF87-0768E2E8C616' },
    { label: 'Turismo de Portugal — Praia de Odeceixe', url: 'https://www.visitportugal.com/es/NR/exeres/8030A835-6D31-455B-8274-3194DF43CC0D' },
    { label: 'Turismo de Portugal — Praia da Bordeira', url: 'https://www.visitportugal.com/es/node/141825' },
    { label: 'Rota Vicentina — Guia de Ajuda', url: 'https://rotavicentina.com/guia-de-ajuda/' },
    { label: 'Rota Vicentina — FAQ caminar con perro', url: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina' },
    { label: 'Rota Vicentina — Odeceixe a Aljezur', url: 'https://rotavicentina.com/programas/a-descoberta-da-costa-sudoeste/' },
    { label: 'Rota Vicentina — Aljezur a Arrifana', url: 'https://rotavicentina.com/programas/uma-travessia-classica-a-pe-pela-costa-vicentina/' }
  ]
};