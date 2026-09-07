import type { DestinationGuide } from './destinationGuides';

export const geresGuide: DestinationGuide = {
  slug: 'geres',
  intro:
    'Gerês es el destino de naturaleza más importante de esta primera fase: el Parque Nacional da Peneda-Gerês es el único parque nacional de Portugal y reúne bosques, miradores, cascadas, aldeas y una extensa red de senderos. Para viajar con perro hemos priorizado lo práctico: rutas oficiales con distancia y dificultad, avisos temporales, riesgo de incendio y presencia de ganado y perros pastores. Cuando una fuente oficial no publica una regla específica de acceso con perro, lo dejamos como “por confirmar” en lugar de asumir que un sendero exterior es automáticamente dog-friendly.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Parque Nacional da Peneda-Gerês',
      category: 'natural_area',
      summary: 'Único parque nacional de Portugal, con 69.592,50 hectáreas repartidas entre cinco municipios del noroeste. Protege algunos de los ecosistemas mejor conservados del país y forma parte de la Reserva de la Biosfera Transfronteriza Gerês-Xurés.',
      dogAccess: 'unknown',
      dogAccessNotes: 'El ICNF regula la visita y las actividades según las distintas zonas de protección, pero en las fuentes consultadas no hemos localizado una autorización general que permita afirmar que todo el parque admite perros. Revisaremos cada recorrido por separado.',
      sourceLabel: 'ICNF — Parque Nacional da Peneda-Gerês',
      sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/pnacpenedageres'
    },
    {
      name: 'Mata de Albergaria',
      category: 'natural_area',
      summary: 'Bosque de robles considerado uno de los espacios más representativos y sensibles del parque, atravesado además por un tramo de la antigua vía romana Geira.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La circulación y el acceso a la reserva tienen regulación específica y el tráfico entre Leonte y Portela do Homem está condicionado. No hemos encontrado en la ficha oficial una política específica sobre perros, así que no lo presentamos como acceso confirmado.',
      sourceLabel: 'Turismo de Terras de Bouro — Mata de Albergaria',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/mata-de-albergaria/'
    },
    {
      name: 'Miradouro da Pedra Bela',
      category: 'viewpoint',
      summary: 'Uno de los miradores más conocidos de Gerês, a 829 metros de altitud, con vistas sobre la albufeira da Caniçada y los valles de los ríos Gerês y Cávado. Tiene mesas, fuente y zonas de sombra.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La ficha oficial confirma que se accede en coche y que forma parte del PR3, pero no publica una regla propia de acceso con perro.',
      sourceLabel: 'Turismo de Terras de Bouro — Pedra Bela',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pedra-bela/'
    },
    {
      name: 'Cascata do Arado',
      category: 'waterfall',
      summary: 'Cascada a unos 8 km de Vila do Gerês y cerca de la aldea de Ermida. El último kilómetro de acceso por carretera es de tierra y desde el puente se sube por escalones de piedra hasta el mirador.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No hemos localizado una regla específica para perros. La fuente municipal desaconseja bañarse aquí por el riesgo de accidentes graves, un dato especialmente importante si se viaja con un perro que tiende a entrar al agua.',
      sourceLabel: 'Turismo de Terras de Bouro — Cascata do Arado',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/cascata-do-arado/'
    },
    {
      name: 'Cascata de S. Miguel (Portela do Homem)',
      category: 'waterfall',
      summary: 'Sucesión de pequeñas cascadas en el río Homem, a unos 500 metros de la frontera con España. El acceso por carretera dentro de Mata de Albergaria está condicionado y el aparcamiento se realiza en la zona fronteriza.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No encontramos confirmación específica sobre perros. La fuente oficial advierte de terreno accidentado, rocas resbaladizas y riesgo de caída al bajar hacia el agua.',
      sourceLabel: 'Turismo de Terras de Bouro — Portela do Homem',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/cascata-da-portela-do-homem/'
    },
    {
      name: 'Miradouro da Junceda',
      category: 'viewpoint',
      summary: 'Mirador a 915 metros de altitud sobre el valle del río Gerês. Se llega por un camino de tierra de unos 2,5 km y forma parte del PR6 Trilho dos Miradouros.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La ficha oficial describe acceso y equipamiento, pero no especifica una política para perros. Tiene mesas de merienda, aunque sin protección solar.',
      sourceLabel: 'Turismo de Terras de Bouro — Junceda',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/miradouro-da-junceda/'
    },
    {
      name: 'Campo do Gerês y Vilarinho da Furna',
      category: 'historic',
      summary: 'Campo do Gerês es una buena base para combinar patrimonio, la Geira romana, la albufeira de Vilarinho das Furnas y la memoria de la antigua aldea comunitaria de Vilarinho da Furna, sumergida a comienzos de los años setenta.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Son espacios exteriores y rurales, pero las fuentes consultadas no publican una regla general de acceso con perro para todo el conjunto.',
      sourceLabel: 'Turismo de Terras de Bouro — Vilarinho da Furna',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/vilarinho-da-furna-aldeia/'
    },
    {
      name: 'Vila do Gerês',
      category: 'walk',
      summary: 'La villa termal es la base más cómoda para servicios, restauración y acceso a varios senderos. Desde aquí parten o quedan próximos recorridos como PR3, PR6 y PR10.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Moverse por la villa es distinto de entrar en parques privados, termas u otros recintos. No trasladamos automáticamente una política de acceso de un espacio a otro.',
      sourceLabel: 'Turismo de Terras de Bouro — Portal turístico',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/'
    }
  ],
  walks: [
    {
      name: 'PR10 — Trilho da Preguiça · 6 km · fácil',
      summary: 'Una de las opciones más asequibles para una primera caminata. La ruta oficial tiene una variante larga cercana a 6 km y otras dos opciones más cortas; la ficha municipal la clasifica como fácil y estima unas 3 horas para el trazado principal. Recomendable para quien quiera bosque y río sin plantear una jornada de montaña exigente.',
      sourceLabel: 'Turismo de Terras de Bouro — PR10 Trilho da Preguiça',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr10-trilho-da-preguica/'
    },
    {
      name: 'PR6 — Trilho dos Miradouros · 12 km · medio',
      summary: 'Ruta de unas 5 horas que conecta varios miradores sobre Vila do Gerês y la Caniçada, entre ellos Junceda, Boneca, Fraga Negra y Penedo da Freira. La ficha oficial avisa actualmente de problemas de limpieza de vegetación y árboles caídos, por lo que conviene revisar el estado antes de salir.',
      sourceLabel: 'Turismo de Terras de Bouro — PR6 Trilho dos Miradouros',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr6-trilho-dos-miradouros/'
    },
    {
      name: 'PR14 — Sobreiral da Ermida · 14 km · difícil',
      summary: 'Ruta de unas 5 horas que pasa por el entorno de la Cascata do Arado, antiguos currais y el gran sobreiral de Ermida. Es particularmente relevante para viajar con perro porque la propia ficha oficial advierte de la posible presencia de perros pastores y recomienda evitar el contacto con rebaños o perros aislados y mantener distancia de seguridad.',
      sourceLabel: 'Turismo de Terras de Bouro — PR14 Sobreiral da Ermida',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr14-trilho-do-sobreiral-da-ermida/'
    },
    {
      name: 'PR3 — Trilho dos Currais · 10 km · medio',
      summary: 'Recorrido de unas 5 horas por tres currais tradicionales. Entre mayo y septiembre el ganado de la comunidad sube a la sierra dentro del sistema de pastoreo de vezeira, por lo que es una ruta donde resulta especialmente importante prever encuentros con ganado.',
      sourceLabel: 'Turismo de Terras de Bouro — PR3 Trilho dos Currais',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr3-trilho-dos-currais/'
    }
  ],
  practicalRule: {
    eyebrow: 'Antes de salir con el perro',
    title: 'Gerês exige comprobar el estado del día',
    summary:
      'No existe una única ficha oficial que nos permita marcar todos los senderos del parque como “admiten perros”. Por eso esta guía trabaja ruta a ruta. Además, Terras de Bouro suspende los recorridos pedestres cuando el peligro de incendio rural es Máximo o Muy Elevado, y varias rutas atraviesan zonas de pastoreo donde puede haber ganado y perros pastores. Antes de cada caminata conviene revisar el aviso del sendero y el índice de riesgo de incendio.',
    sourceLabel: 'Turismo de Terras de Bouro — Red de senderos y avisos',
    sourceUrl: 'https://turismo.cm-terrasdebouro.pt/aventura/'
  },
  alerts: [
    {
      title: '🔥 Con riesgo de incendio Máximo o Muy Elevado se suspenden los senderos',
      summary: 'El portal oficial de Terras de Bouro indica que en esos días está prohibido circular o permanecer en áreas forestales públicas o comunitarias, incluidas sus vías, y por tanto queda suspendida la práctica de los recorridos pedestres.',
      sourceLabel: 'Turismo de Terras de Bouro — Aventura',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/aventura/'
    },
    {
      title: '🐕 Atención a los perros pastores y al ganado',
      summary: 'La ficha oficial del PR14 avisa de la posible presencia de perros pastores. Ante rebaños o perros aislados recomienda evitar el contacto y mantener una distancia de seguridad. Es información especialmente relevante si llevas tu propio perro.',
      sourceLabel: 'Turismo de Terras de Bouro — PR14',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr14-trilho-do-sobreiral-da-ermida/'
    },
    {
      title: '🚧 PR5 Águia do Sarilhão: cierre parcial temporal',
      summary: 'Estado consultado el 7 de septiembre de 2026: la ficha oficial mantiene un aviso de cierre parcial por obras, iniciado el 27 de marzo de 2026 y con duración estimada de 240 días. Hay que revisar la fuente antes de planificar esta ruta.',
      sourceLabel: 'Turismo de Terras de Bouro — PR5 Águia do Sarilhão',
      sourceUrl: 'https://turismo.cm-terrasdebouro.pt/listings/pr5-trilho-da-aguia-do-sarilhao/'
    }
  ],
  sources: [
    { label: 'ICNF — Parque Nacional da Peneda-Gerês', url: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/pnacpenedageres' },
    { label: 'Turismo de Terras de Bouro — Red de senderos y avisos', url: 'https://turismo.cm-terrasdebouro.pt/aventura/' },
    { label: 'Turismo de Terras de Bouro — Mata de Albergaria', url: 'https://turismo.cm-terrasdebouro.pt/listings/mata-de-albergaria/' },
    { label: 'Turismo de Terras de Bouro — Pedra Bela', url: 'https://turismo.cm-terrasdebouro.pt/listings/pedra-bela/' },
    { label: 'Turismo de Terras de Bouro — Cascata do Arado', url: 'https://turismo.cm-terrasdebouro.pt/listings/cascata-do-arado/' },
    { label: 'Turismo de Terras de Bouro — Portela do Homem', url: 'https://turismo.cm-terrasdebouro.pt/listings/cascata-da-portela-do-homem/' },
    { label: 'Turismo de Terras de Bouro — PR10 Trilho da Preguiça', url: 'https://turismo.cm-terrasdebouro.pt/listings/pr10-trilho-da-preguica/' },
    { label: 'Turismo de Terras de Bouro — PR6 Trilho dos Miradouros', url: 'https://turismo.cm-terrasdebouro.pt/listings/pr6-trilho-dos-miradouros/' },
    { label: 'Turismo de Terras de Bouro — PR14 Sobreiral da Ermida', url: 'https://turismo.cm-terrasdebouro.pt/listings/pr14-trilho-do-sobreiral-da-ermida/' },
    { label: 'Turismo de Terras de Bouro — PR5 Águia do Sarilhão', url: 'https://turismo.cm-terrasdebouro.pt/listings/pr5-trilho-da-aguia-do-sarilhao/' }
  ]
};
