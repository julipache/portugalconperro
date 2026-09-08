import type { DestinationGuide } from './destinationGuides';

export const lagosGuide: DestinationGuide = {
  slug: 'lagos',
  intro:
    'Lagos funciona muy bien como base para un viaje con perro porque permite alternar costa, paseos urbanos y rutas de naturaleza sin hacer grandes desplazamientos. La clave es no confundir “hay un sendero” o “hay playa” con “el perro puede acceder sin condiciones”: para 2026 tenemos fechas oficiales de temporada balnear, una regla marítima clara sobre animales y, sobre todo, una fuente de Rota Vicentina que explica expresamente cómo caminar con perro. También hemos incluido una alternativa interior muy práctica en la Mata Nacional de Barão de São João.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Ponta da Piedade y sus passadiços',
      category: 'walk',
      summary: 'Uno de los grandes paisajes de Lagos. La Câmara Municipal describe un circuito de pasarelas y miradores entre Praia do Pinhão y Praia do Canavial, pasando por D. Ana y el Farol da Ponta da Piedade.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La fuente municipal confirma el recorrido peatonal, pero no publica una política específica de acceso con perros a todo el circuito. Por eso no lo marcamos como “dog-friendly confirmado”.',
      sourceLabel: 'Câmara Municipal de Lagos — Passadiços da Ponta da Piedade',
      sourceUrl: 'https://fototeca.cm-lagos.pt/praias-e-costa/passadicos-da-ponta-da-piedade'
    },
    {
      name: 'Meia Praia',
      category: 'beach',
      summary: 'El gran arenal de Lagos. La información municipal de Bandeira Azul le atribuye unos 4 km de línea de playa y destaca la presencia de zonas dunares que deben preservarse.',
      dogAccess: 'restricted',
      dogAccessNotes: 'En 2026 está identificada oficialmente como playa de baños del 1 de junio al 30 de septiembre. La Autoridade Marítima indica que fuera de la época balnear, o durante ella fuera de áreas concesionadas y debidamente señalizadas, no existe una prohibición legal general de permanencia de animales; siempre mandan el edital y la señalización local.',
      sourceLabel: 'Portaria 204-A/2026 + Autoridade Marítima Nacional',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia do Porto de Mós',
      category: 'beach',
      summary: 'Arenal amplio bajo acantilados, con unos 600 metros de frente de playa según la información municipal y accesos más sencillos que varias calas de la Costa d’Oiro.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Es playa de baños en 2026 del 1 de junio al 30 de septiembre. No la presentamos como playa canina: fuera de temporada y fuera de áreas concesionadas puede cambiar el régimen, pero hay que revisar siempre el edital y la señalización vigente.',
      sourceLabel: 'Câmara Municipal de Lagos / Portaria 204-A/2026',
      sourceUrl: 'https://www.cm-lagos.pt/areas-de-atuacao/ambiente/epoca-balnear/151-bandeira-azul'
    },
    {
      name: 'Praia da Luz',
      category: 'beach',
      summary: 'Playa urbana al oeste de Lagos con un arenal amplio, paseo y servicios. El municipio la incluye entre las playas accesibles y con Bandeira Azul.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La época balnear oficial de 2026 es del 1 de junio al 30 de septiembre. Fuera de ese periodo no damos por hecho que todo el arenal sea de libre acceso: se debe comprobar señalización, zonas autorizadas y eventuales normas locales.',
      sourceLabel: 'Câmara Municipal de Lagos / Portaria 204-A/2026',
      sourceUrl: 'https://cm-lagos.pt/descobrir-lagos/visitar/praias'
    },
    {
      name: 'Praia D. Ana',
      category: 'beach',
      summary: 'Una de las playas más conocidas de la Costa d’Oiro, rodeada por formaciones rocosas y acantilados y muy próxima al centro urbano.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Figura como playa de baños de Lagos del 1 de junio al 30 de septiembre de 2026. En temporada no la tratamos como opción para ir con perro al arenal; fuera de temporada hay que revisar edital y señalización.',
      sourceLabel: 'Portaria n.º 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia do Camilo',
      category: 'beach',
      summary: 'Pequeña cala entre acantilados a la que se accede por una larga escalinata. El municipio la describe como playa vigilada y de aguas generalmente tranquilas.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Es playa de baños del 1 de junio al 30 de septiembre de 2026. Además de la regulación estacional, la larga escalera y el poco espacio disponible hacen que sea importante valorar la comodidad real para cada perro.',
      sourceLabel: 'Câmara Municipal de Lagos / Portaria 204-A/2026',
      sourceUrl: 'https://cm-lagos.pt/descobrir-lagos/visitar/praias'
    },
    {
      name: 'Mata Nacional de Barão de São João',
      category: 'natural_area',
      summary: 'Zona forestal del interior del municipio con rutas señalizadas, parque de merendas y conexión con la Via Algarviana. Es una alternativa muy distinta a las playas y acantilados.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La Câmara publica rutas y equipamientos, pero en la documentación consultada no hemos localizado una política específica de acceso con perro a toda la mata. No lo damos por confirmado.',
      sourceLabel: 'Câmara Municipal de Lagos — Rotas e Percursos',
      sourceUrl: 'https://cm-lagos.pt/en/descobrir-lagos/lazer-e-entretenimento/rotas-e-percursos'
    },
    {
      name: 'Rota Vicentina — etapa Luz → Lagos',
      category: 'walk',
      summary: 'Etapa oficial de 10 km y dificultad fácil del Trilho dos Pescadores. Es una de las pocas opciones donde la propia organización responde expresamente a la pregunta de si se puede caminar con perro.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Rota Vicentina confirma que se puede caminar con perro, pero recomienda llevarlo siempre con correa. Advierte que esto encaja con dificultad en el Trilho dos Pescadores por la protección de fauna, el terreno y los posibles encuentros con ganado y perros pastores.',
      sourceLabel: 'Rota Vicentina — caminar con perro',
      sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
    }
  ],
  walks: [
    {
      name: 'Rota Vicentina · Luz → Lagos · 10 km · fácil',
      summary: 'La etapa oficial del Trilho dos Pescadores entre Luz y Lagos figura con 10 km y dificultad fácil. Para quien viaja con perro es especialmente útil porque Rota Vicentina permite llevarlo, recomienda correa permanente y avisa de posibles encuentros con ganado y perros pastores. Aun siendo “fácil” en la clasificación de la ruta, discurre por costa y acantilados y exige control del perro.',
      sourceLabel: 'Rota Vicentina — Trilho dos Pescadores',
      sourceUrl: 'https://rotavicentina.com/page/2/?walking-category=trilho-dos-pescadores'
    },
    {
      name: 'PR1 LGS · Pedra do Galo · 6,1 km · muy fácil',
      summary: 'Ruta circular oficial en Barão de São João. Tiene 6,1 km, unas 1 h 30 min, 137 m de subida acumulada y está clasificada como muy fácil. La ficha avisa de algo importante si vas con perro: no hay disponibilidad de agua en el recorrido, así que hay que llevar suficiente para ambos.',
      sourceLabel: 'Câmara Municipal de Lagos — PR1 LGS Pedra do Galo',
      sourceUrl: 'https://www.cm-lagos.pt/images/site/cliente/PEDRA_DO_GALO__folheto.compressed.pdf'
    },
    {
      name: 'Passadiços da Ponta da Piedade · paseo costero',
      summary: 'Circuito de pasarelas y miradores entre Pinhão y Canavial, pasando por D. Ana y el faro. Es una propuesta municipal clara para caminar y observar la Costa d’Oiro; la guía mantiene el acceso específico con perro como no confirmado porque la fuente no publica esa regla.',
      sourceLabel: 'Câmara Municipal de Lagos — Ponta da Piedade',
      sourceUrl: 'https://fototeca.cm-lagos.pt/praias-e-costa/passadicos-da-ponta-da-piedade'
    }
  ],
  beachRule: {
    summary:
      'Para 2026, Batata, Camilo, D. Ana, Luz, Meia Praia y Porto de Mós tienen época balnear oficial del 1 de junio al 30 de septiembre. La Autoridade Marítima Nacional explica que fuera de la época balnear, o durante ella fuera de las áreas concesionadas y debidamente señalizadas, no hay una prohibición legal general de permanencia y circulación de animales; aun así, las zonas autorizadas, el edital de playa y la señalización local son los que mandan. Por eso no etiquetamos ninguna de estas playas como “playa para perros” sin una autorización específica.',
    sourceLabel: 'Portaria 204-A/2026 + Capitania do Porto de Portimão',
    sourceUrl: 'https://www.amn.pt/DGAM/Capitanias/Portimao/Paginas/Capitania-do-porto-de-Portimao.aspx'
  },
  practicalRule: {
    eyebrow: 'Lo más útil con perro',
    title: 'Lagos no es solo playa',
    summary:
      'En verano, basar el viaje únicamente en los arenales deja pocas opciones durante la temporada balnear. La combinación más práctica es usar las horas frescas para paseos y rutas, aprovechar la Mata de Barão de São João como alternativa interior y comprobar cada playa según temporada y señalización. Para senderismo costero, Rota Vicentina recomienda llevar siempre al perro con correa y recuerda los posibles encuentros con ganado y perros pastores.',
    sourceLabel: 'Câmara Municipal de Lagos + Rota Vicentina',
    sourceUrl: 'https://cm-lagos.pt/en/descobrir-lagos/lazer-e-entretenimento/rotas-e-percursos'
  },
  alerts: [
    {
      title: '🏖️ Del 1 de junio al 30 de septiembre cambia el uso de las principales playas',
      summary: 'Es la época balnear fijada para 2026 en las seis aguas balneares oficiales de Lagos. Antes de bajar al arenal con perro, comprueba el edital y la señalización de esa playa concreta.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      title: '🐕 Rota Vicentina permite perro, pero pide correa siempre',
      summary: 'La organización explica que la correa protege la fauna y evita problemas en encuentros con ganado y perros pastores. Añade que esta condición puede hacer menos cómodo el Trilho dos Pescadores, por lo que conviene valorar el tipo de perro y el tramo elegido.',
      sourceLabel: 'Rota Vicentina — FAQ caminar con perro',
      sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
    },
    {
      title: '💧 PR1 Pedra do Galo no tiene agua disponible',
      summary: 'La ficha técnica municipal marca expresamente “Disponibilidade de água: Não”. En una ruta con perro es un detalle mucho más útil que una descripción genérica: hay que salir con agua suficiente para el animal y para la persona.',
      sourceLabel: 'Câmara Municipal de Lagos — PR1 LGS',
      sourceUrl: 'https://www.cm-lagos.pt/images/site/cliente/PEDRA_DO_GALO__folheto.compressed.pdf'
    }
  ],
  sources: [
    { label: 'Câmara Municipal de Lagos — Praias', url: 'https://cm-lagos.pt/descobrir-lagos/visitar/praias' },
    { label: 'Câmara Municipal de Lagos — Rotas e Percursos', url: 'https://cm-lagos.pt/en/descobrir-lagos/lazer-e-entretenimento/rotas-e-percursos' },
    { label: 'Câmara Municipal de Lagos — PR1 Pedra do Galo', url: 'https://www.cm-lagos.pt/images/site/cliente/PEDRA_DO_GALO__folheto.compressed.pdf' },
    { label: 'Câmara Municipal de Lagos — Passadiços Ponta da Piedade', url: 'https://fototeca.cm-lagos.pt/praias-e-costa/passadicos-da-ponta-da-piedade' },
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Capitania de Portimão', url: 'https://www.amn.pt/DGAM/Capitanias/Portimao/Paginas/Capitania-do-porto-de-Portimao.aspx' },
    { label: 'Rota Vicentina — FAQ viajar con perro', url: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina' },
    { label: 'Rota Vicentina — Trilho dos Pescadores', url: 'https://rotavicentina.com/trilho-dos-pescadores/' }
  ]
};
