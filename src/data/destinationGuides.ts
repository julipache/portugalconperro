export type DogAccessStatus = 'allowed' | 'restricted' | 'not_allowed' | 'unknown';

export interface GuidePlace {
  name: string;
  category: 'viewpoint' | 'park' | 'beach' | 'walk' | 'attraction' | 'historic';
  summary: string;
  dogAccess: DogAccessStatus;
  dogAccessNotes: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface GuideWalk {
  name: string;
  summary: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface DestinationGuide {
  slug: string;
  intro: string;
  reviewedAt: string;
  places: GuidePlace[];
  walks: GuideWalk[];
  beachRule: {
    summary: string;
    sourceLabel: string;
    sourceUrl: string;
  };
  sources: { label: string; url: string }[];
}

export const destinationGuides: Record<string, DestinationGuide> = {
  nazare: {
    slug: 'nazare',
    intro:
      'Nazaré combina un frente marítimo urbano, miradores elevados y varios paseos exteriores en muy poco espacio. Para esta primera guía hemos separado los lugares que merece la pena conocer de las afirmaciones sobre acceso con perro: cuando una fuente oficial no confirma ese acceso, lo dejamos expresamente como “por confirmar”.',
    reviewedAt: '2026-09-07',
    places: [
      {
        name: 'Sítio da Nazaré',
        category: 'historic',
        summary: 'La parte alta de Nazaré concentra algunos de sus miradores y monumentos más conocidos y domina el gran promontorio sobre la costa.',
        dogAccess: 'unknown',
        dogAccessNotes: 'Zona exterior de interés, pero no hemos localizado una norma oficial específica que permita afirmar el acceso con perro a todos sus espacios y monumentos.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      },
      {
        name: 'Miradouro do Suberco',
        category: 'viewpoint',
        summary: 'Mirador en Sítio con una de las panorámicas más conocidas de la costa de Nazaré.',
        dogAccess: 'unknown',
        dogAccessNotes: 'No afirmamos una política dog-friendly específica sin confirmación oficial.',
        sourceLabel: 'Município da Nazaré — Posto de Turismo',
        sourceUrl: 'https://www.cm-nazare.pt/visitar/onde-ir/posto-de-turismo'
      },
      {
        name: 'Forte de São Miguel Arcanjo',
        category: 'attraction',
        summary: 'Fortaleza situada al final del promontorio, sobre Praia do Norte, asociada hoy también a la interpretación del Cañón de Nazaré y las olas gigantes.',
        dogAccess: 'unknown',
        dogAccessNotes: 'La visita al interior tiene condiciones propias; hasta obtener confirmación del gestor no indicaremos que se puede entrar con perro.',
        sourceLabel: 'Município da Nazaré — Forte de S. Miguel Arcanjo',
        sourceUrl: 'https://www.cm-nazare.pt/visitar/onde-ir/monumentos-e-patrimonio/poi/forte-de-s-miguel-arcanjo'
      },
      {
        name: 'Praia do Norte',
        category: 'beach',
        summary: 'La playa al norte del promontorio es conocida internacionalmente por las grandes olas asociadas al Cañón de Nazaré.',
        dogAccess: 'restricted',
        dogAccessNotes: 'El acceso de animales a playas depende de la época balnear, de las zonas autorizadas y del edital/señalización de cada playa. No la presentamos como playa canina.',
        sourceLabel: 'Autoridade Marítima Nacional — FAQ sobre animales en playas',
        sourceUrl: 'https://www.amn.pt/ISN/Documents/FAQ_SAB_19.pdf'
      },
      {
        name: 'Praia da Nazaré',
        category: 'beach',
        summary: 'Gran arenal integrado en el núcleo urbano y en el frente marítimo de Nazaré.',
        dogAccess: 'restricted',
        dogAccessNotes: 'La regla general en playas concesionadas restringe animales domésticos durante la época balnear, salvo excepciones como perros de asistencia. Hay que comprobar siempre el edital y la señalización vigente.',
        sourceLabel: 'Turismo de Portugal / Autoridade Marítima Nacional',
        sourceUrl: 'https://www.visitportugal.com/pt-pt/content/praia-da-nazar%C3%A9'
      },
      {
        name: 'Ermida da Memória',
        category: 'historic',
        summary: 'Pequeña ermita de Sítio vinculada a la leyenda de D. Fuas Roupinho y uno de los hitos históricos del promontorio.',
        dogAccess: 'unknown',
        dogAccessNotes: 'No hemos localizado confirmación oficial de acceso al interior con perro.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      },
      {
        name: 'Santuário de Nossa Senhora da Nazaré',
        category: 'historic',
        summary: 'Santuario situado en Sítio y estrechamente ligado a la historia y tradición religiosa local.',
        dogAccess: 'unknown',
        dogAccessNotes: 'No hemos localizado confirmación oficial de acceso al interior con perro.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      },
      {
        name: 'Parque da Pedralva y Pederneira',
        category: 'walk',
        summary: 'Turismo de Portugal propone caminar desde Sítio atravesando el Parque da Pedralva hasta Pederneira, que funciona como mirador natural sobre la costa.',
        dogAccess: 'unknown',
        dogAccessNotes: 'Es un recorrido exterior, pero mantenemos el acceso con perro como no confirmado hasta revisar normativa local específica.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      }
    ],
    walks: [
      {
        name: 'Sítio → Parque da Pedralva → Pederneira',
        summary: 'Es el paseo más claro para la primera versión: conecta la parte alta con zonas verdes y termina en otro punto panorámico sobre Nazaré. La ruta aparece recomendada por Turismo de Portugal.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      },
      {
        name: 'Frente marítimo y calles de la zona baja',
        summary: 'El propio portal oficial de turismo recomienda recorrer con calma las calles perpendiculares a la playa y el frente urbano para conocer Nazaré. Lo tratamos como paseo urbano, sin afirmar acceso del perro al arenal.',
        sourceLabel: 'Turismo de Portugal — Nazaré',
        sourceUrl: 'https://www.visitportugal.com/es/content/nazare'
      }
    ],
    beachRule: {
      summary:
        'No vamos a etiquetar una playa como “para perros” sin una fuente actual. La Autoridade Marítima Nacional indica como regla general que los animales domésticos están restringidos en playas concesionadas durante la época balnear; en otras zonas y fuera de temporada la situación puede variar. El edital de playa y la señalización local son la referencia que hay que comprobar.',
      sourceLabel: 'Autoridade Marítima Nacional — FAQ de asistencia balnear',
      sourceUrl: 'https://www.amn.pt/ISN/Documents/FAQ_SAB_19.pdf'
    },
    sources: [
      { label: 'Turismo de Portugal — Nazaré', url: 'https://www.visitportugal.com/es/content/nazare' },
      { label: 'Município da Nazaré — Posto de Turismo', url: 'https://www.cm-nazare.pt/visitar/onde-ir/posto-de-turismo' },
      { label: 'Município da Nazaré — Forte de S. Miguel Arcanjo', url: 'https://www.cm-nazare.pt/visitar/onde-ir/monumentos-e-patrimonio/poi/forte-de-s-miguel-arcanjo' },
      { label: 'Autoridade Marítima Nacional — FAQ sobre playas', url: 'https://www.amn.pt/ISN/Documents/FAQ_SAB_19.pdf' }
    ]
  },
  cascais: {
    slug: 'cascais',
    intro:
      'Cascais permite combinar paseos urbanos junto al Atlántico con parques, senderos y espacios naturales. Aquí ya podemos confirmar varias condiciones útiles con fuentes municipales: en los espacios verdes municipales los animales deben ir sujetos según la normativa; la Quinta do Pisão admite perros en sus paseos interpretativos siempre con correa; y las playas balneares del municipio tienen una restricción estacional clara para animales.',
    reviewedAt: '2026-09-07',
    places: [
      {
        name: 'Parque Marechal Carmona',
        category: 'park',
        summary: 'Gran parque urbano con zonas arboladas, amplios céspedes, lagos, circuito de marcha, área de picnic y cafetería, muy cerca del centro de Cascais.',
        dogAccess: 'restricted',
        dogAccessNotes: 'La normativa municipal de espacios verdes prohíbe circular con animales si no están debidamente sujetos con correa o cadena, o con bozal cuando corresponda. Por tanto, el acceso con perro es posible sujeto a esas normas.',
        sourceLabel: 'Câmara Municipal de Cascais — Regulamento de Espaços Verdes',
        sourceUrl: 'https://www.cascais.pt/sites/default/files/anexos/gerais/new/regulamento_de_espacos_verdes_e_de_protecao_da_arvore.pdf'
      },
      {
        name: 'Boca do Inferno',
        category: 'viewpoint',
        summary: 'Formación rocosa junto al océano a pocos minutos del centro, con miradores y un paseo costero que la conecta con Cascais.',
        dogAccess: 'unknown',
        dogAccessNotes: 'La fuente oficial confirma el acceso público y el paseo costero, pero no publica una regla específica sobre perros para este punto; no lo etiquetamos como acceso confirmado.',
        sourceLabel: 'Visit Cascais — Boca do Inferno',
        sourceUrl: 'https://www.visitcascais.com/en/partners/boca-do-inferno'
      },
      {
        name: 'Praia do Guincho',
        category: 'beach',
        summary: 'Una de las grandes playas de Cascais, conocida por el viento, el oleaje y los deportes acuáticos, junto al sistema dunar Guincho-Cresmina.',
        dogAccess: 'restricted',
        dogAccessNotes: 'En 2026 la época balnear de Cascais va del 1 de mayo al 30 de septiembre y la permanencia de animales está prohibida en las playas balneares durante ese periodo. Fuera de temporada se permite con las obligaciones legales de higiene y control.',
        sourceLabel: 'Câmara Municipal de Cascais — Permanência de animais nas praias',
        sourceUrl: 'https://www.cascais.pt/node/44701'
      },
      {
        name: 'Praia da Ribeira de Cascais',
        category: 'beach',
        summary: 'Pequeña playa situada en plena Baía de Cascais. La ficha municipal indica expresamente que no está clasificada para uso balnear.',
        dogAccess: 'restricted',
        dogAccessNotes: 'La orientación municipal indica que la circulación de animales no está prohibida en playas marítimas cuyas aguas no estén identificadas como balneares, siempre que se cumplan las reglas generales, como correa cuando corresponda y recogida de deyecciones.',
        sourceLabel: 'Cascais Ambiente — Praia da Ribeira de Cascais',
        sourceUrl: 'https://ambiente.cascais.pt/pt/espacos/praias/praia-da-ribeira-cascais'
      },
      {
        name: 'Trilho da Ribeira das Vinhas',
        category: 'walk',
        summary: 'Corredor verde que conecta el centro de Cascais con el interior y se ha ampliado hasta superar los siete kilómetros, acercándose al Parque Natural de Sintra-Cascais y a Quinta do Pisão.',
        dogAccess: 'unknown',
        dogAccessNotes: 'La Câmara lo presenta como recorrido para caminar, bicicleta y caballo, pero la ficha consultada no especifica una política propia para perros. Mantenemos el acceso como por confirmar.',
        sourceLabel: 'Câmara Municipal de Cascais — Trilho da Ribeira das Vinhas',
        sourceUrl: 'https://www.cascais.pt/node/36400'
      },
      {
        name: 'Quinta do Pisão',
        category: 'walk',
        summary: 'Espacio natural del interior del municipio conectado con la red de recorridos de Cascais y con paseos interpretativos por paisaje rural y patrimonio.',
        dogAccess: 'restricted',
        dogAccessNotes: 'La propia Câmara indica expresamente en la información de sus paseos interpretativos que se puede llevar al perro, pero debe permanecer siempre con correa.',
        sourceLabel: 'Câmara Municipal de Cascais — Passeios Interpretativos na Quinta do Pisão',
        sourceUrl: 'https://www.cascais.pt/informacoes-sobre-os-passeios-interpretativos-na-quinta-do-pisao'
      },
      {
        name: 'Paredão Cascais–Estoril',
        category: 'walk',
        summary: 'Paseo marítimo de unos 2,75 km entre Cascais y São João do Estoril, pasando junto a varias playas y con bancos, sombras, fuentes y servicios.',
        dogAccess: 'unknown',
        dogAccessNotes: 'La fuente municipal describe el recorrido peatonal, pero no especifica una regla propia de acceso con perros al paseo. Las restricciones de los arenales contiguos son independientes.',
        sourceLabel: 'Câmara Municipal de Cascais — Paredão Cascais–Estoril',
        sourceUrl: 'https://www.cascais.pt/node/36781'
      },
      {
        name: 'Rota do Cabo Raso (PR2 CSC)',
        category: 'walk',
        summary: 'Ruta circular oficial de 15 km y dificultad baja que pasa por Farol da Guia, Cabo Raso, Guincho, Cresmina y Areia.',
        dogAccess: 'unknown',
        dogAccessNotes: 'El municipio publica el itinerario, longitud y dificultad, pero no especifica en la ficha consultada una norma de acceso con perro para todo el recorrido.',
        sourceLabel: 'Câmara Municipal de Cascais — Rede de Percursos Pedestres',
        sourceUrl: 'https://www.cascais.pt/node/36207'
      }
    ],
    walks: [
      {
        name: 'Paredão Cascais–Estoril',
        summary: 'Un paseo costero sencillo de unos 2,75 km. Recorre la línea de mar entre Cascais y São João do Estoril y pasa junto a las playas de Conceição, Duquesa, Moitas, Tamariz y Poça. El paseo y el acceso a los arenales deben tratarse como espacios distintos.',
        sourceLabel: 'Câmara Municipal de Cascais — Paredão',
        sourceUrl: 'https://www.cascais.pt/node/36781'
      },
      {
        name: 'Trilho da Ribeira das Vinhas',
        summary: 'Alternativa verde que parte del entorno urbano y se adentra hacia el interior. El municipio informa de una extensión superior a siete kilómetros tras su ampliación y de conexión hacia Quinta do Pisão.',
        sourceLabel: 'Câmara Municipal de Cascais — Trilho da Ribeira das Vinhas',
        sourceUrl: 'https://www.cascais.pt/node/36400'
      },
      {
        name: 'Quinta do Pisão — paseo interpretativo',
        summary: 'La actividad municipal describe un recorrido circular de unos 4 km y dificultad baja. Es especialmente útil para nuestra guía porque la fuente confirma que se puede llevar perro siempre con correa.',
        sourceLabel: 'Câmara Municipal de Cascais — Passeios Interpretativos',
        sourceUrl: 'https://www.cascais.pt/informacoes-sobre-os-passeios-interpretativos-na-quinta-do-pisao'
      }
    ],
    beachRule: {
      summary:
        'Para 2026, Cascais tiene época balnear del 1 de mayo al 30 de septiembre. El municipio prohíbe la permanencia de animales en las playas balneares durante ese periodo, salvo las excepciones legales como perros de asistencia. Fuera de la época balnear se permite la circulación cumpliendo las normas de higiene y control. Además, la propia Câmara aclara que las playas marítimas no identificadas como balneares no quedan sometidas a esa prohibición general, aunque siguen aplicando las normas de correa y recogida de deyecciones.',
      sourceLabel: 'Câmara Municipal de Cascais — Permanência de animais nas praias',
      sourceUrl: 'https://www.cascais.pt/node/44701'
    },
    sources: [
      { label: 'Câmara Municipal de Cascais — Época Balnear 2026', url: 'https://www.cascais.pt/noticia/esta-aberta-epoca-balnear-de-cascais-2026' },
      { label: 'Câmara Municipal de Cascais — Permanência de animais nas praias', url: 'https://www.cascais.pt/node/44701' },
      { label: 'Câmara Municipal de Cascais — Regulamento de Espaços Verdes', url: 'https://www.cascais.pt/sites/default/files/anexos/gerais/new/regulamento_de_espacos_verdes_e_de_protecao_da_arvore.pdf' },
      { label: 'Câmara Municipal de Cascais — Paredão Cascais–Estoril', url: 'https://www.cascais.pt/node/36781' },
      { label: 'Câmara Municipal de Cascais — Percursos Pedestres', url: 'https://www.cascais.pt/node/36207' },
      { label: 'Câmara Municipal de Cascais — Quinta do Pisão', url: 'https://www.cascais.pt/informacoes-sobre-os-passeios-interpretativos-na-quinta-do-pisao' },
      { label: 'Cascais Ambiente — Praia da Ribeira', url: 'https://ambiente.cascais.pt/pt/espacos/praias/praia-da-ribeira-cascais' },
      { label: 'Visit Cascais — Boca do Inferno', url: 'https://www.visitcascais.com/en/partners/boca-do-inferno' }
    ]
  }
};
