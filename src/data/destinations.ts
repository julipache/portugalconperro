export interface Destination {
  slug: string;
  name: string;
  region: string;
  summary: string;
  idealFor: string[];
  highlights: string[];
  guideStatus?: 'researching' | 'verified';
}

export const destinations: Destination[] = [
  {
    slug: 'algarve',
    name: 'Algarve',
    region: 'Sur de Portugal',
    summary: 'Costa, pueblos y una gran variedad de alojamientos vacacionales: será uno de los grandes hubs de la guía.',
    idealFor: ['costa', 'escapadas largas', 'alojamientos'],
    highlights: ['Costa extensa', 'Muchos destinos', 'Contenido en preparación'],
    guideStatus: 'researching'
  },
  {
    slug: 'geres',
    name: 'Gerês',
    region: 'Norte',
    summary: 'Naturaleza y senderos en uno de los destinos interiores prioritarios de Portugal con Perro.',
    idealFor: ['senderismo', 'naturaleza', 'escapada rural'],
    highlights: ['Parque nacional', 'Rutas', 'Contenido en preparación'],
    guideStatus: 'researching'
  },
  {
    slug: 'nazare',
    name: 'Nazaré',
    region: 'Centro',
    summary: 'Costa, miradores y paseos concentrados en un destino compacto de la región centro.',
    idealFor: ['costa', 'fin de semana', 'paseos'],
    highlights: ['Sítio', 'Miradores', 'Costa'],
    guideStatus: 'verified'
  },
  {
    slug: 'cascais',
    name: 'Cascais',
    region: 'Lisboa',
    summary: 'Costa urbana, parques y senderos con varias normas útiles para viajar con perro ya confirmadas por fuentes municipales.',
    idealFor: ['costa', 'paseos', 'escapada urbana'],
    highlights: ['Parques con normativa', 'Paseos costeros', 'Playas con regla estacional clara'],
    guideStatus: 'verified'
  },
  {
    slug: 'sintra',
    name: 'Sintra',
    region: 'Lisboa',
    summary: 'Paisaje, patrimonio y naturaleza cerca de Lisboa y Cascais.',
    idealFor: ['naturaleza', 'rutas', 'cultura'],
    highlights: ['Paisaje', 'Excursiones', 'Contenido en preparación'],
    guideStatus: 'researching'
  },
  {
    slug: 'comporta',
    name: 'Comporta',
    region: 'Alentejo',
    summary: 'Costa y entorno rural del Alentejo litoral, pendiente de investigación específica para la guía.',
    idealFor: ['tranquilidad', 'costa', 'escapadas'],
    highlights: ['Costa', 'Entorno rural', 'Contenido en preparación'],
    guideStatus: 'researching'
  }
];
