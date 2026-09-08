import type { DestinationGuide } from './destinationGuides';

export const portimaoGuide: DestinationGuide = {
  slug: 'portimao',
  intro:
    'Portimão es un buen contrapunto a la Costa Vicentina: aquí el viaje puede combinar una base urbana, grandes playas, la Ria de Alvor y una red municipal de recorridos naturales. Para viajar con perro hay dos ideas importantes. Primero, las principales playas de baños tienen temporada balnear oficial del 1 de junio al 30 de septiembre y durante ese periodo la Autoridade Marítima restringe animales fuera de zonas autorizadas. Segundo, el municipio publica cinco recorridos naturales con recomendaciones útiles de calor, agua y protección de dunas, pero no especifica una política general de acceso con perro; por eso no los etiquetamos como dog-friendly confirmado.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Praia da Rocha',
      category: 'beach',
      summary: 'El gran arenal urbano de Portimão, junto a la desembocadura del Arade. Turismo de Portugal lo describe como una de las estaciones balnearias más conocidas del sur y el municipio la sitúa en el centro de su oferta de costa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Rocha figura como playa de baños en 2026 del 1 de junio al 30 de septiembre. Durante la época balnear se aplica la prohibición de animales fuera de zonas autorizadas en playas sujetas a edital; hay que comprobar señalización y zona concreta antes de acceder con perro.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026 + AMN',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia de Alvor',
      category: 'beach',
      summary: 'Extenso arenal junto a la Ria de Alvor. Turismo de Portugal destaca tanto la playa como la laguna próxima, de importancia para aves acuáticas migratorias.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Alvor-Nascente y Alvor-Poente tienen temporada balnear del 1 de junio al 30 de septiembre de 2026. No confundimos el arenal con los paseos de la ría: la regulación de animales en la playa depende de zonas autorizadas, edital y señalización.',
      sourceLabel: 'Turismo de Portugal + Portaria 204-A/2026',
      sourceUrl: 'https://www.visitportugal.com/es/node/141476'
    },
    {
      name: 'Ria de Alvor',
      category: 'natural_area',
      summary: 'Zona lagunar con dunas, sapal y gran interés para la observación de aves. El municipio ha diseñado varios recorridos naturales para conocer este entorno a pie, en bicicleta o, según el itinerario, desde el agua.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La documentación municipal consultada pide no perturbar animales, evitar ruido y seguir los senderos, pero no publica una política general para perros. No lo marcamos como acceso canino confirmado.',
      sourceLabel: 'Câmara Municipal de Portimão — Percursos Naturais',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais'
    },
    {
      name: 'Percurso P2 — Ao Sabor da Maré',
      category: 'walk',
      summary: 'Recorrido municipal por la península de Alvor y su sistema de dunas, con vistas sobre la playa, los sapales y la laguna. Es una de las mejores alternativas al arenal para conocer la zona caminando.',
      dogAccess: 'unknown',
      dogAccessNotes: 'El municipio describe el itinerario y la sensibilidad ecológica de dunas y laguna, pero no publica una regla específica de acceso con perro. Si se recorre con animal, no debemos presentar como confirmado algo que la fuente no afirma.',
      sourceLabel: 'Câmara Municipal de Portimão — P2 Ao Sabor da Maré',
      sourceUrl: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p2-ao-sabor-da-mare'
    },
    {
      name: 'Percurso P1 — A Rocha Delicada',
      category: 'walk',
      summary: 'Ruta por Quinta da Rocha, una península entre la ribeira de Odiáxere y el río Alvor. Atraviesa campos agrícolas, vegetación mediterránea, sapales, antiguas salinas y el ecosistema acuático de la laguna.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La ficha municipal no indica una política de perros. El valor para nuestra guía está en conocer la sensibilidad del lugar y las recomendaciones generales del municipio: mantenerse en los recorridos, no perturbar fauna y evitar ruido.',
      sourceLabel: 'Câmara Municipal de Portimão — P1 A Rocha Delicada',
      sourceUrl: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p1-a-rocha-delicada'
    },
    {
      name: 'Percurso P3 — Varandas Sobre o Mar',
      category: 'walk',
      summary: 'Itinerario municipal por una sección de costa rocosa de Portimão, caminando sobre acantilados calcáreos erosionados y zonas de matorral mediterráneo con abundante avifauna.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No hay una política canina publicada en la ficha. Al discurrir por acantilados y hábitats de aves, conviene aplicar un criterio conservador: seguir el sendero, evitar molestias a fauna y mantener control del perro aunque la fuente no nos permita etiquetarlo como acceso confirmado.',
      sourceLabel: 'Câmara Municipal de Portimão — P3 Varandas Sobre o Mar',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p3-varandas-sobre-o-mar'
    },
    {
      name: 'Praia do Vau',
      category: 'beach',
      summary: 'Playa de acceso peatonal sencillo, rodeada por acantilados bajos y situada en la secuencia de costa entre Alvor y Praia da Rocha.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Vau figura como playa de baños en 2026 del 1 de junio al 30 de septiembre. Durante la temporada balnear no debe darse por hecho el acceso con perro; deben comprobarse el edital y la señalización de las zonas autorizadas.',
      sourceLabel: 'Câmara Municipal de Portimão + Portaria 204-A/2026',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/praias-do-concelho'
    },
    {
      name: 'Praia dos Três Castelos',
      category: 'beach',
      summary: 'Playa al oeste de Praia da Rocha con formaciones rocosas, arcos y grutas. El municipio advierte de que el acceso implica bajar escaleras desde el mirador.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Três Castelos es playa de baños en 2026 del 1 de junio al 30 de septiembre. Además de la regulación estacional, las escaleras de acceso son un factor práctico para perros mayores, con movilidad reducida o que no lleven bien descensos prolongados.',
      sourceLabel: 'Câmara Municipal de Portimão + Portaria 204-A/2026',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/praias-do-concelho'
    },
    {
      name: 'Fortaleza de Santa Catarina / mirador de Praia da Rocha',
      category: 'viewpoint',
      summary: 'Fortaleza histórica sobre la desembocadura del Arade que hoy funciona como excelente punto panorámico sobre la ciudad, el río, el mar y la línea de playas hacia el oeste.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La fuente turística describe el lugar y las vistas, pero no publica una política específica de admisión con perros al recinto. Lo mantenemos como por confirmar.',
      sourceLabel: 'Turismo de Portugal — Portimão',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/node/73800'
    }
  ],
  walks: [
    {
      name: 'P2 — Ao Sabor da Maré · Ria de Alvor',
      summary: 'Es la opción más clara para un paseo tranquilo centrado en laguna y dunas. El municipio pide respetar la señalización, no pisotear el sistema dunar, no perturbar fauna y evitar ruido. La guía no afirma admisión canina porque esa condición no está publicada.',
      sourceLabel: 'Câmara Municipal de Portimão — P2',
      sourceUrl: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p2-ao-sabor-da-mare'
    },
    {
      name: 'P1 — A Rocha Delicada · Quinta da Rocha',
      summary: 'Alternativa para observar distintos hábitats de la Ria de Alvor: campos agrícolas, sapal, salinas y laguna. Es especialmente interesante fuera de las horas de más calor y para quien quiera un día sin depender de la playa.',
      sourceLabel: 'Câmara Municipal de Portimão — P1',
      sourceUrl: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p1-a-rocha-delicada'
    },
    {
      name: 'P3 — Varandas Sobre o Mar · costa de acantilados',
      summary: 'La opción más costera de la red municipal. Recorre la parte alta de los acantilados y permite observar formaciones geológicas y aves. Por terreno y exposición, exige más control que un paseo urbano y conviene evitar el calor fuerte.',
      sourceLabel: 'Câmara Municipal de Portimão — P3',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p3-varandas-sobre-o-mar'
    },
    {
      name: 'Alvor histórico + frente de la ría',
      summary: 'Turismo de Portugal recomienda pasear por el centro histórico de Alvor y acercarse a la ría. Es una combinación sencilla para alternar pueblo y paisaje lagunar sin convertir una jornada de verano en una caminata larga.',
      sourceLabel: 'Turismo de Portugal — Praia de Alvor',
      sourceUrl: 'https://www.visitportugal.com/es/node/141476'
    }
  ],
  beachRule: {
    summary:
      'Para 2026, Portimão tiene playas de baños como Alvor-Nascente, Alvor-Poente, Barranco das Canas, Careanos, Marina de Portimão, Rocha, Três Castelos y Vau con temporada del 1 de junio al 30 de septiembre. La Autoridade Marítima Nacional establece que durante la época balnear está prohibida la permanencia y circulación de animales fuera de zonas autorizadas en playas de baños sujetas a edital, independientemente de la hora. En espacios que no estén identificados como playas de baños sujetos a edital, los animales pueden acompañar a sus dueños cumpliendo la legislación general. No llamamos “playa para perros” a ninguna sin una zona autorizada explícita.',
    sourceLabel: 'Autoridade Marítima Nacional — FAQ + Portaria 204-A/2026',
    sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
  },
  practicalRule: {
    eyebrow: 'Alternativas al arenal',
    title: 'La Ria de Alvor hace Portimão más interesante con perro',
    summary:
      'En plena temporada balnear no conviene construir el viaje alrededor de estar todo el día en la playa con el perro. El municipio dispone de cinco recorridos naturales y recomienda hacerlos en las primeras horas de luz o al crepúsculo para evitar el calor, además de llevar agua potable. Aunque no hemos encontrado una política canina específica para esos itinerarios, sí son una base mucho mejor para planificar alternativas que una lista genérica de playas.',
    sourceLabel: 'Câmara Municipal de Portimão — Percursos Naturais',
    sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais'
  },
  alerts: [
    {
      title: '🏖️ Temporada balnear 2026: 1 de junio → 30 de septiembre',
      summary: 'Las principales playas de baños de Portimão están sujetas a esas fechas. Durante ese periodo, antes de acceder con perro hay que comprobar las zonas autorizadas, el edital y la señalización concreta.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      title: '☀️ El propio municipio recomienda caminar temprano o al atardecer',
      summary: 'Para sus recorridos naturales, Portimão recomienda evitar las horas de más calor y llevar sombrero, protector solar y agua potable en verano. Con perro, el agua y el horario son todavía más importantes.',
      sourceLabel: 'Câmara Municipal de Portimão — Percursos Naturais',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais'
    },
    {
      title: '🐦 Ria y dunas: mantenerse en el recorrido y no molestar fauna',
      summary: 'Las recomendaciones municipales piden respetar la señalización, evitar pisar el sistema dunar, no perturbar ni capturar animales y evitar ruido. Es un criterio importante si se camina con un perro en una zona rica en aves.',
      sourceLabel: 'Câmara Municipal de Portimão — Percursos Naturais',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais'
    },
    {
      title: '🪜 Três Castelos tiene acceso por escaleras',
      summary: 'El municipio avisa expresamente de la bajada desde el mirador. Aunque el acceso canino al arenal dependa de la temporada y señalización, este detalle ayuda a descartar la playa para algunos perros antes incluso de llegar.',
      sourceLabel: 'Câmara Municipal de Portimão — Praias do Concelho',
      sourceUrl: 'https://www.cm-portimao.pt/menus/servicos/ambiente/praias-do-concelho'
    }
  ],
  sources: [
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' },
    { label: 'Câmara Municipal de Portimão — Praias do Concelho', url: 'https://www.cm-portimao.pt/menus/servicos/ambiente/praias-do-concelho' },
    { label: 'Câmara Municipal de Portimão — Percursos Naturais', url: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais' },
    { label: 'Câmara Municipal de Portimão — P1 A Rocha Delicada', url: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p1-a-rocha-delicada' },
    { label: 'Câmara Municipal de Portimão — P2 Ao Sabor da Maré', url: 'https://cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p2-ao-sabor-da-mare' },
    { label: 'Câmara Municipal de Portimão — P3 Varandas Sobre o Mar', url: 'https://www.cm-portimao.pt/menus/servicos/ambiente/percursos-naturais/percurso-p3-varandas-sobre-o-mar' },
    { label: 'Turismo de Portugal — Praia de Alvor', url: 'https://www.visitportugal.com/es/node/141476' },
    { label: 'Turismo de Portugal — Praia da Rocha', url: 'https://www.visitportugal.com/pt-pt/content/praia-da-rocha' },
    { label: 'Turismo de Portugal — Portimão', url: 'https://www.visitportugal.com/pt-pt/node/73800' }
  ]
};