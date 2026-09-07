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
  }
};
