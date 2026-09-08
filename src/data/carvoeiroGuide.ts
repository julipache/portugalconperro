import type { DestinationGuide } from './destinationGuides';

export const carvoeiroGuide: DestinationGuide = {
  slug: 'carvoeiro',
  intro:
    'Carvoeiro y el litoral de Lagoa ofrecen un Algarve muy distinto a Portimão: pequeñas calas bajo acantilados, el Percurso dos Sete Vales Suspensos y playas como Marinha, Benagil y Vale Centeanes. Para viajar con perro la dificultad es precisamente esa geografía. La temporada balnear 2026 va del 1 de junio al 30 de septiembre en las principales playas de baños y varias aparecen además clasificadas oficialmente como playas de uso limitado. El gran sendero costero es público y está documentado por el municipio, pero no hemos encontrado una política oficial específica sobre perros; por eso lo tratamos como ruta de interés con acceso canino por confirmar, no como “sendero dog-friendly”.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Praia do Carvoeiro',
      category: 'beach',
      summary: 'Pequeño arenal integrado prácticamente en el centro de Carvoeiro, bajo los acantilados y junto a restaurantes, bares y terrazas. Es una de las imágenes más reconocibles de la costa de Lagoa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Carvoeiro está cualificada como playa de baños en 2026 del 1 de junio al 30 de septiembre. Durante la época balnear, la Autoridade Marítima prohíbe animales fuera de las zonas autorizadas en playas sujetas a edital. Hay que comprobar señalización y zona concreta antes de bajar con perro.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/node/141695'
    },
    {
      name: 'Percurso dos Sete Vales Suspensos',
      category: 'walk',
      summary: 'Sendero costero de aproximadamente 5,7 km entre Praia de Vale Centeanes y Praia da Marinha. Recorre la parte alta de los acantilados y permite observar valles suspendidos, formas kársticas y hábitats propios de esta costa.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La documentación municipal confirma el recorrido y su carácter público, pero no publica una política específica para perros. Por eso no afirmamos que admita perros aunque sea un sendero exterior. En caso de hacerlo, el terreno de acantilado exige un control especialmente cuidadoso.',
      sourceLabel: 'Município de Lagoa — PDM / Percurso dos Sete Vales Suspensos',
      sourceUrl: 'https://www.cm-lagoa.pt/cmlagoaalgarve/uploads/document/file/787/volume_iv__do_patrimonio_aos_fenomenos_perigosos_junho_2021.pdf'
    },
    {
      name: 'Praia da Marinha',
      category: 'beach',
      summary: 'Playa rodeada por un alto acantilado esculpido por la erosión. Antes de llegar al arenal se contempla la costa desde arriba y el acceso implica una larga escalinata.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Marinha tiene temporada balnear del 1 de junio al 30 de septiembre de 2026 y aparece además identificada como “praia de uso limitado” en la Portaria de ese año. No la tratamos como playa para perros: deben respetarse las zonas autorizadas, el edital y la señalización, además de las indicaciones de seguridad de los acantilados.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/node/141913'
    },
    {
      name: 'Praia de Benagil',
      category: 'beach',
      summary: 'Pequeño arenal en una antigua aldea de pescadores, rodeado por acantilados con grutas y cavidades. Es uno de los puntos más conocidos para las excursiones marítimas de la costa de Lagoa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Benagil tiene temporada balnear del 1 de junio al 30 de septiembre de 2026 y está clasificada como playa de uso limitado. La presencia de barcos o actividades marítimas no implica admisión de perros ni en el arenal ni en las embarcaciones: esas condiciones deben comprobarse por separado.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/content/praia-de-benagil'
    },
    {
      name: 'Praia do Vale de Centeanes',
      category: 'beach',
      summary: 'Cala entre acantilados dorados que constituye uno de los extremos del Percurso dos Sete Vales Suspensos. Turismo de Portugal destaca el acceso mediante una larga escalinata.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Vale Centeanes es playa de baños del 1 de junio al 30 de septiembre de 2026 y figura como playa de uso limitado. Además de las reglas de animales, la larga escalera es un factor práctico para perros mayores o con movilidad reducida.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/NR/exeres/8D8E9BB6-F375-42B6-AABC-AE68A33BAFCB'
    },
    {
      name: 'Sítio das Fontes',
      category: 'park',
      summary: 'Parque municipal de 18 hectáreas en Estômbar, junto al Arade. Reúne sapal, zonas húmedas, matorral mediterráneo, una laguna temporal, áreas agrícolas y patrimonio ligado a antiguos molinos de agua.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Es una alternativa interior interesante a la costa, pero la ficha municipal que hemos consultado no especifica la admisión de perros. Hasta localizar una regla explícita, no lo marcamos como parque dog-friendly.',
      sourceLabel: 'Município de Lagoa — Sítio das Fontes',
      sourceUrl: 'https://www.cm-lagoa.pt/municipio/contactos/poi/sitio-das-fontes'
    },
    {
      name: 'Praia de Albandeira',
      category: 'beach',
      summary: 'Pequeña cala rodeada por acantilados y formaciones rocosas, situada al este de Carvoeiro. Forma parte del mismo paisaje de costa recortada que caracteriza Lagoa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Albandeira figura en la Portaria 204-A/2026 con temporada balnear del 1 de junio al 30 de septiembre. Como en el resto de playas de baños, el acceso con perro depende de las zonas autorizadas y del edital y señalización vigentes.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia da Senhora da Rocha',
      category: 'beach',
      summary: 'Playa de Porches rodeada por acantilados, junto al promontorio de Nossa Senhora da Rocha. Amplía el radio de excursión desde Carvoeiro hacia el sector oriental del municipio de Lagoa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Senhora da Rocha está cualificada como playa de baños en 2026 del 1 de junio al 30 de septiembre. No afirmamos acceso con perro al arenal durante ese periodo sin una zona autorizada explícita.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    }
  ],
  walks: [
    {
      name: 'Sete Vales Suspensos · Vale Centeanes → Marinha · 5,7 km',
      summary: 'Es la caminata de referencia de la zona. El municipio documenta 5,7 km entre Vale Centeanes y Praia da Marinha sobre una costa de acantilados y valles suspendidos. El acceso específico con perro sigue sin estar confirmado por una fuente oficial, así que la guía separa claramente el interés de la ruta de la política canina.',
      sourceLabel: 'Município de Lagoa — PDM',
      sourceUrl: 'https://www.cm-lagoa.pt/cmlagoaalgarve/uploads/document/file/787/volume_iv__do_patrimonio_aos_fenomenos_perigosos_junho_2021.pdf'
    },
    {
      name: 'Carvoeiro → Algar Seco · paseo costero corto',
      summary: 'Turismo de Portugal sitúa las formaciones de Algar Seco a unos 800 metros de Carvoeiro. Es una alternativa corta para combinar localidad y costa, pero no hemos localizado una política oficial de acceso con perro al conjunto de pasarelas y formaciones, por lo que no la presentamos como confirmada.',
      sourceLabel: 'Turismo de Portugal — Rotas e Caminhos do Algarve',
      sourceUrl: 'https://www.visitportugal.com/sites/default/files/RotaseCaminhos_Algarve_ES_Nov2015.pdf'
    },
    {
      name: 'Sítio das Fontes · paseo interior',
      summary: 'El parque municipal permite cambiar completamente de paisaje: 18 hectáreas de ambientes mediterráneos y ribereños junto al Arade. Es una opción útil para días en los que no interese depender de acantilados y playa, aunque la admisión canina permanece por confirmar.',
      sourceLabel: 'Município de Lagoa — Sítio das Fontes',
      sourceUrl: 'https://www.cm-lagoa.pt/municipio/contactos/poi/sitio-das-fontes'
    }
  ],
  beachRule: {
    summary:
      'En 2026, playas del municipio de Lagoa como Carvoeiro, Benagil, Marinha, Vale Centeanes, Albandeira y Senhora da Rocha tienen temporada balnear del 1 de junio al 30 de septiembre. La Autoridade Marítima Nacional establece que durante la época balnear está prohibida la permanencia y circulación de animales fuera de zonas autorizadas en playas de baños sujetas a edital. Marinha, Benagil y Vale Centeanes aparecen además en la Portaria como playas de uso limitado. Antes de bajar con perro hay que revisar siempre el edital, la señalización y las condiciones de seguridad del acceso.',
    sourceLabel: 'Autoridade Marítima Nacional — FAQ + Portaria 204-A/2026',
    sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
  },
  practicalRule: {
    eyebrow: 'Acantilados antes que etiquetas',
    title: 'En Carvoeiro importa tanto el acceso físico como la norma del perro',
    summary:
      'Muchas de las playas y rutas más famosas de Lagoa están ligadas a acantilados y escaleras. Vale Centeanes y Marinha tienen accesos largos por escalones, y la Portaria 2026 identifica varias playas del municipio como de uso limitado. Para un perro mayor, pequeño o con movilidad reducida, la accesibilidad puede ser más decisiva que si el alojamiento está a pocos kilómetros del mar. Esa información debe entrar también en nuestros futuros filtros y recomendaciones.',
    sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
    sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
  },
  alerts: [
    {
      title: '⚠️ Marinha, Benagil y Vale Centeanes: uso limitado en 2026',
      summary: 'La Portaria 204-A/2026 las identifica expresamente como playas de uso limitado. La clasificación está relacionada con las condiciones de seguridad y el espacio afectado por riesgo de acantilados; hay que respetar señalización y zonas de seguridad.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      title: '🏖️ Temporada balnear: 1 de junio → 30 de septiembre',
      summary: 'Las principales playas de la zona están reguladas durante esas fechas. Con perro, no basta con mirar si la playa parece vacía: la prohibición en playas de baños durante la época balnear se aplica independientemente de la hora fuera de las zonas autorizadas.',
      sourceLabel: 'Autoridade Marítima Nacional — FAQ',
      sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
    },
    {
      title: '🪜 Vale Centeanes y Marinha implican escaleras',
      summary: 'Turismo de Portugal describe una larga escalinata en Vale Centeanes y también una larga bajada de escalones en Marinha. Es información importante si el perro tiene problemas articulares, edad avanzada o poca tolerancia a escaleras.',
      sourceLabel: 'Turismo de Portugal — Vale Centeanes / Marinha',
      sourceUrl: 'https://www.visitportugal.com/es/NR/exeres/8D8E9BB6-F375-42B6-AABC-AE68A33BAFCB'
    },
    {
      title: '🥾 Sete Vales Suspensos: ruta confirmada, política canina no',
      summary: 'El sendero existe, tiene 5,7 km y es de acceso público, pero ninguna de las fuentes oficiales consultadas publica una regla específica sobre perros. En Portugal con Perro preferimos mostrar “por confirmar” antes que convertir automáticamente todo sendero exterior en dog-friendly.',
      sourceLabel: 'Município de Lagoa — Percurso dos Sete Vales Suspensos',
      sourceUrl: 'https://www.cm-lagoa.pt/cmlagoaalgarve/uploads/document/file/787/volume_iv__do_patrimonio_aos_fenomenos_perigosos_junho_2021.pdf'
    }
  ],
  sources: [
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' },
    { label: 'Município de Lagoa — PDM / Sete Vales Suspensos', url: 'https://www.cm-lagoa.pt/cmlagoaalgarve/uploads/document/file/787/volume_iv__do_patrimonio_aos_fenomenos_perigosos_junho_2021.pdf' },
    { label: 'Município de Lagoa — Sítio das Fontes', url: 'https://www.cm-lagoa.pt/municipio/contactos/poi/sitio-das-fontes' },
    { label: 'Turismo de Portugal — Praia do Carvoeiro', url: 'https://www.visitportugal.com/es/node/141695' },
    { label: 'Turismo de Portugal — Praia da Marinha', url: 'https://www.visitportugal.com/es/node/141913' },
    { label: 'Turismo de Portugal — Praia de Benagil', url: 'https://www.visitportugal.com/es/content/praia-de-benagil' },
    { label: 'Turismo de Portugal — Vale de Centeanes', url: 'https://www.visitportugal.com/es/NR/exeres/8D8E9BB6-F375-42B6-AABC-AE68A33BAFCB' }
  ]
};