import type { DestinationGuide } from './destinationGuides';

export const sintraGuide: DestinationGuide = {
  slug: 'sintra',
  intro:
    'Sintra es uno de los destinos donde una guía especializada para perros puede ahorrar más errores: dos de los grandes espacios gestionados por Parques de Sintra —Castelo dos Mouros y Parque de Monserrate— admiten perros con reglas muy concretas, mientras que en el resto de sus parques y monumentos no se permiten mascotas por ahora. Además, la movilidad en la sierra está condicionada y el acceso en vehículo particular al Castelo dos Mouros y al Palácio da Pena no está permitido. Hemos separado claramente lo que está confirmado de lo que todavía hay que comprobar.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Castelo dos Mouros',
      category: 'historic',
      summary: 'Fortificación en la Serra de Sintra con recorrido por murallas, miradores, zona arqueológica y caminos de ronda. Es uno de los dos grandes espacios de Parques de Sintra que tienen una política canina explícita.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Perros de compañía bienvenidos con condiciones: un perro por persona, máximo 5 perros simultáneamente, microchip obligatorio, correa no extensible y circulación solo por caminos y zonas autorizadas. Algunas áreas están prohibidas por seguridad. El perro necesita un billete gratuito que se recoge en la entrada.',
      sourceLabel: 'Parques de Sintra — Castelo dos Mouros dog-friendly',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-castelo-dos-mouros/'
    },
    {
      name: 'Parque de Monserrate',
      category: 'park',
      summary: 'Jardín histórico y paisajístico de Monserrate. Desde febrero de 2024 admite perros y dispone de equipamiento pensado específicamente para ellos.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Un perro por persona, máximo 5 perros simultáneamente, microchip y correa no extensible obligatorios. Hay zonas donde no pueden circular. El parque dispone de bebedouros, dispensadores de bolsas y espacios donde el perro puede esperar mientras su acompañante visita zonas vetadas. El billete del perro es gratuito.',
      sourceLabel: 'Parques de Sintra — Parque de Monserrate dog-friendly',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-parque-de-monserrate/'
    },
    {
      name: 'Parque e Palácio Nacional da Pena',
      category: 'historic',
      summary: 'El conjunto más emblemático de Sintra y uno de los lugares que más condiciona una visita si viajas con perro.',
      dogAccess: 'not_allowed',
      dogAccessNotes: 'La FAQ oficial de Parques de Sintra indica que los perros son bienvenidos únicamente en Castelo dos Mouros y Parque de Monserrate; en los restantes parques y monumentos no es posible entrar con mascotas actualmente. Los perros de asistencia identificados tienen un régimen propio.',
      sourceLabel: 'Parques de Sintra — Preguntas frecuentes',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
    },
    {
      name: 'Palácio Nacional de Sintra',
      category: 'historic',
      summary: 'Palacio histórico en pleno centro de la villa. Es fácil incorporarlo a un paseo urbano, pero visitar el interior viajando con un perro de compañía requiere organizarse.',
      dogAccess: 'not_allowed',
      dogAccessNotes: 'No está entre los dos espacios donde Parques de Sintra permite perros de compañía. La política general vigente limita la entrada con mascota a Castelo dos Mouros y Parque de Monserrate.',
      sourceLabel: 'Parques de Sintra — Preguntas frecuentes',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
    },
    {
      name: 'Convento dos Capuchos',
      category: 'historic',
      summary: 'Convento integrado en la Serra de Sintra y rodeado de bosque, atractivo precisamente por su relación con el paisaje natural.',
      dogAccess: 'not_allowed',
      dogAccessNotes: 'Aunque el entorno pueda parecer apropiado para un paseo, la política oficial de Parques de Sintra no incluye este monumento entre los espacios que admiten perros de compañía.',
      sourceLabel: 'Parques de Sintra — Preguntas frecuentes',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
    },
    {
      name: 'Percurso de Santa Maria (PR1)',
      category: 'walk',
      summary: 'Ruta circular municipal de unos 1,9 km y dificultad baja que parte del Palácio Nacional de Sintra y pasa por Fonte da Sabuga, Igreja de Santa Maria y Parque da Liberdade.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La Câmara publica distancia, trazado y dificultad, pero la ficha del recorrido no contiene una política específica sobre perros. No trasladamos automáticamente las reglas de los monumentos al espacio público del recorrido.',
      sourceLabel: 'Câmara Municipal de Sintra — Caminhada / percursos pedestres',
      sourceUrl: 'https://cm-sintra.pt/component/content/article/caminhada-desporto?catid=21'
    },
    {
      name: 'Praia Grande',
      category: 'beach',
      summary: 'Una de las principales playas del litoral de Sintra y una de las cinco distinguidas con Bandeira Azul en 2026.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La Portaria 204-A/2026 fija para Praia Grande una época balnear del 30 de mayo al 13 de septiembre. La normativa marítima prohíbe animales en áreas concesionadas o licenciadas durante la época balnear salvo excepciones legales; fuera de temporada hay que seguir igualmente edital, señalización y zonas autorizadas.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://files.diariodarepublica.pt/1s/2026/04/08401/0000200039.pdf'
    },
    {
      name: 'Praia das Maçãs',
      category: 'beach',
      summary: 'Playa urbana del litoral de Sintra, también distinguida con Bandeira Azul y Praia Acessível en la temporada 2026.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La época balnear oficial de 2026 va del 30 de mayo al 13 de septiembre. Durante ese periodo, las áreas concesionadas o licenciadas están sujetas a la prohibición de permanencia y circulación de animales, con las excepciones previstas legalmente.',
      sourceLabel: 'Câmara Municipal de Sintra / Portaria 204-A/2026',
      sourceUrl: 'https://cm-sintra.pt/noticias/ambiente/praias-sintrenses-distinguidas'
    }
  ],
  walks: [
    {
      name: 'Castelo dos Mouros con perro · visita confirmada',
      summary: 'Más que una ruta genérica, es una visita patrimonial donde sabemos exactamente qué hacer con el perro: microchip, correa no extensible, un perro por persona y máximo cinco simultáneamente. Hay tramos y áreas vetados, de modo que conviene descargar el mapa oficial antes de ir.',
      sourceLabel: 'Parques de Sintra — condiciones para perros',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-castelo-dos-mouros/'
    },
    {
      name: 'Parque de Monserrate con perro · visita confirmada',
      summary: 'Otra opción especialmente sólida porque el parque no solo admite perros con reglas explícitas, sino que tiene bebedouros y espacios de espera para las zonas donde el animal no puede circular. Es una de las mejores piezas de información verificable de toda la web hasta ahora.',
      sourceLabel: 'Parques de Sintra — Monserrate dog-friendly',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-parque-de-monserrate/'
    },
    {
      name: 'PR1 Santa Maria · 1,9 km · dificultad baja',
      summary: 'Paseo circular corto desde el centro histórico. La ficha municipal lo clasifica como de baja dificultad y escaso desnivel. Es útil como paseo urbano, pero mantenemos la compatibilidad concreta con perro como no confirmada en la fuente del recorrido.',
      sourceLabel: 'Câmara Municipal de Sintra — PR1 Santa Maria',
      sourceUrl: 'https://cm-sintra.pt/component/content/article/caminhada-desporto?catid=21'
    }
  ],
  beachRule: {
    summary:
      'En 2026 las aguas balneares de Adraga, Azenhas do Mar, Praia Grande, Praia das Maçãs, Magoito y São Julião tienen época balnear del 30 de mayo al 13 de septiembre. La normativa aplicable prohíbe la permanencia y circulación de animales en áreas concesionadas o licenciadas durante la época balnear, salvo excepciones legales. Fuera de temporada no convertimos automáticamente una playa en “playa para perros”: hay que comprobar edital, señalización y eventuales interdicciones de acceso.',
    sourceLabel: 'Portaria 204-A/2026 + Autoridade Marítima Nacional',
    sourceUrl: 'https://files.diariodarepublica.pt/1s/2026/04/08401/0000200039.pdf'
  },
  practicalRule: {
    eyebrow: 'Planifica la logística',
    title: 'Con perro, Sintra se planifica antes de llegar',
    summary:
      'No puedes subir en vehículo particular a los accesos del Castelo dos Mouros y Palácio da Pena, y la circulación en el centro histórico también tiene limitaciones. Si vas con perro, conviene decidir antes qué monumentos visitar, cómo llegar y qué política tiene el transporte que vayas a utilizar. Castelo dos Mouros y Monserrate son las dos opciones de Parques de Sintra con acceso canino confirmado; Pena y el resto no admiten mascotas actualmente.',
    sourceLabel: 'Parques de Sintra — FAQ de planificación',
    sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
  },
  alerts: [
    {
      title: '🐕 Solo dos grandes espacios de Parques de Sintra admiten perros',
      summary: 'Castelo dos Mouros y Parque de Monserrate. En los restantes parques y monumentos gestionados por la entidad no es posible entrar con mascotas actualmente. Es una diferencia que puede cambiar por completo el itinerario del día.',
      sourceLabel: 'Parques de Sintra — FAQ',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
    },
    {
      title: '🎟️ Microchip, correa no extensible y aforo canino',
      summary: 'En Castelo dos Mouros y Monserrate se permite un perro por persona y un máximo de cinco perros simultáneamente. El animal debe llevar microchip y correa no extensible; ciertas áreas están vetadas. Para perros potencialmente peligrosos hay requisitos adicionales de acompañante, bozal, trela corta y licencia.',
      sourceLabel: 'Parques de Sintra — reglas de acceso canino',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-castelo-dos-mouros/'
    },
    {
      title: '🌲 La sierra puede cerrar por incendio o meteorología extrema',
      summary: 'Parques de Sintra advierte que algunos monumentos pueden cerrar puntualmente por interdicción del perímetro forestal, riesgo de incendio o condiciones meteorológicas extremas. En 2026 ya se han producido varios cierres preventivos, así que conviene consultar avisos oficiales el mismo día.',
      sourceLabel: 'Parques de Sintra — FAQ y avisos',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/'
    }
  ],
  sources: [
    { label: 'Parques de Sintra — FAQ', url: 'https://www.parquesdesintra.pt/pt/planear-a-visita/faqs/' },
    { label: 'Parques de Sintra — Castelo dos Mouros dog-friendly', url: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-castelo-dos-mouros/' },
    { label: 'Parques de Sintra — Monserrate dog-friendly', url: 'https://www.parquesdesintra.pt/pt/planear-a-visita/os-caes-sao-bem-vindos-no-parque-de-monserrate/' },
    { label: 'Parques de Sintra — Castelo dos Mouros', url: 'https://www.parquesdesintra.pt/pt/parques-monumentos/castelo-dos-mouros/' },
    { label: 'Câmara Municipal de Sintra — Percursos pedestres', url: 'https://cm-sintra.pt/component/content/article/caminhada-desporto?catid=21' },
    { label: 'Câmara Municipal de Sintra — Praias 2026', url: 'https://cm-sintra.pt/noticias/ambiente/praias-sintrenses-distinguidas' },
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://files.diariodarepublica.pt/1s/2026/04/08401/0000200039.pdf' },
    { label: 'Autoridade Marítima Nacional — FAQ', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' }
  ]
};
