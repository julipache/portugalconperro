export interface Destination {
  slug: string;
  name: string;
  region: string;
  score: number;
  summary: string;
  idealFor: string[];
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'algarve',
    name: 'Algarve',
    region: 'Sur de Portugal',
    score: 9.1,
    summary: 'Calas, rutas costeras y una gran oferta de villas: una de las zonas con más potencial para viajar con perro.',
    idealFor: ['playa', 'casas con jardín', 'escapadas largas'],
    highlights: ['Costa extensa', 'Muchas villas', 'Buen clima fuera de temporada']
  },
  {
    slug: 'geres',
    name: 'Gerês',
    region: 'Norte',
    score: 9.4,
    summary: 'Naturaleza, senderos y alojamientos rurales para quienes priorizan paseos y espacio exterior.',
    idealFor: ['senderismo', 'naturaleza', 'casas rurales'],
    highlights: ['Parque nacional', 'Rutas', 'Entorno rural']
  },
  {
    slug: 'nazare',
    name: 'Nazaré',
    region: 'Centro',
    score: 8.6,
    summary: 'Una base cómoda para combinar costa, paseos y excursiones por la región centro.',
    idealFor: ['costa', 'fin de semana', 'paseos'],
    highlights: ['Paseo marítimo', 'Costa', 'Buena base para explorar']
  },
  {
    slug: 'cascais',
    name: 'Cascais',
    region: 'Lisboa',
    score: 8.7,
    summary: 'Mar, parques y restauración con terrazas a un paso de Lisboa y Sintra.',
    idealFor: ['restaurantes', 'costa', 'escapada urbana'],
    highlights: ['Cerca de Lisboa', 'Paseos costeros', 'Terrazas']
  },
  {
    slug: 'sintra',
    name: 'Sintra',
    region: 'Lisboa',
    score: 8.8,
    summary: 'Bosques, paisaje y alojamientos con terreno para una escapada verde cerca de la capital.',
    idealFor: ['bosque', 'rutas', 'casas con terreno'],
    highlights: ['Paisaje', 'Rutas', 'Cerca de Cascais']
  },
  {
    slug: 'comporta',
    name: 'Comporta',
    region: 'Alentejo',
    score: 8.9,
    summary: 'Casas independientes, pinares y costa para buscar tranquilidad y espacio exterior.',
    idealFor: ['tranquilidad', 'playa', 'casas independientes'],
    highlights: ['Pinares', 'Costa', 'Alojamientos independientes']
  }
];
