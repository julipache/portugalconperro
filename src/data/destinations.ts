export interface Destination {
  slug: string;
  name: string;
  region: string;
  summary: string;
  idealFor: string[];
  highlights: string[];
  guideStatus?: 'researching' | 'verified';
  destinationType?: 'region' | 'local';
}

export const destinations: Destination[] = [
  {
    slug: 'algarve',
    name: 'Algarve',
    region: 'Sur de Portugal',
    summary: 'Hub regional para elegir zona antes de reservar: costa occidental, Algarve central y sotavento tienen paisajes, rutas y reglas de playa muy diferentes.',
    idealFor: ['costa', 'escapadas largas', 'elegir zona'],
    highlights: ['Hub regional', 'Rutas y costa', 'Preparado para inventario'],
    guideStatus: 'verified',
    destinationType: 'region'
  },
  {
    slug: 'lagos',
    name: 'Lagos',
    region: 'Algarve occidental',
    summary: 'Acantilados, pasarelas, playas y rutas con información útil para viajar con perro: temporada balnear 2026, Rota Vicentina y alternativa forestal.',
    idealFor: ['costa', 'senderismo', 'escapada larga'],
    highlights: ['Rota Vicentina', 'Ponta da Piedade', 'Reglas de playa 2026'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'sagres',
    name: 'Sagres',
    region: 'Algarve occidental',
    summary: 'Cabo de São Vicente, Rota Vicentina, acantilados y playas con reglas concretas para planificar un viaje con perro sin depender solo del arenal.',
    idealFor: ['senderismo', 'costa salvaje', 'naturaleza'],
    highlights: ['Rota Vicentina con perro', 'Cabo de São Vicente', 'Temporada balnear 2026'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'aljezur',
    name: 'Aljezur',
    region: 'Algarve occidental',
    summary: 'Castillo, Costa Vicentina, playas y etapas de la Rota Vicentina con reglas claras para combinar senderismo y costa viajando con perro.',
    idealFor: ['senderismo', 'playas', 'naturaleza'],
    highlights: ['Rota Vicentina con perro', 'Arrifana y Odeceixe', 'Temporada balnear 2026'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'portimao',
    name: 'Portimão',
    region: 'Algarve central',
    summary: 'Base urbana con Praia da Rocha, Alvor y una red municipal de recorridos naturales alrededor de la ría, las dunas y los acantilados.',
    idealFor: ['costa', 'paseos', 'base urbana'],
    highlights: ['Ria de Alvor', 'Recorridos naturales', 'Reglas de playa 2026'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'carvoeiro',
    name: 'Carvoeiro',
    region: 'Algarve central',
    summary: 'Calas, acantilados y el sendero de Sete Vales Suspensos, con atención especial a escaleras, playas de uso limitado y seguridad del perro.',
    idealFor: ['senderismo costero', 'calas', 'paisaje'],
    highlights: ['Sete Vales Suspensos', 'Marinha y Benagil', 'Accesibilidad real'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'tavira',
    name: 'Tavira',
    region: 'Algarve oriental',
    summary: 'Ria Formosa, islas y playas donde el transporte importa tanto como la arena: Barril se alcanza andando, mientras otras grandes playas dependen de barco.',
    idealFor: ['Ria Formosa', 'paseos', 'costa tranquila'],
    highlights: ['Barril a pie', 'Playas con barco', 'Temporada balnear 2026'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'geres',
    name: 'Gerês',
    region: 'Norte',
    summary: 'Parque nacional, bosques, cascadas y senderos oficiales con avisos prácticos sobre incendios, ganado, perros pastores y estado de las rutas.',
    idealFor: ['senderismo', 'naturaleza', 'escapada rural'],
    highlights: ['Rutas oficiales', 'Avisos actualizados', 'Naturaleza y cascadas'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'nazare',
    name: 'Nazaré',
    region: 'Centro',
    summary: 'Costa, miradores y paseos concentrados en un destino compacto de la región centro.',
    idealFor: ['costa', 'fin de semana', 'paseos'],
    highlights: ['Sítio', 'Miradores', 'Costa'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'peniche',
    name: 'Peniche',
    region: 'Centro',
    summary: 'Península, Baleal, Cabo Carvoeiro y Berlengas con reglas de playa 2026 y atención especial a la diferencia entre paseo, arenal y excursión en barco.',
    idealFor: ['costa', 'paseos', 'surf y paisaje'],
    highlights: ['Cabo Carvoeiro', 'Baleal', 'Berlengas'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'cascais',
    name: 'Cascais',
    region: 'Lisboa',
    summary: 'Costa urbana, parques y senderos con varias normas útiles para viajar con perro ya confirmadas por fuentes municipales.',
    idealFor: ['costa', 'paseos', 'escapada urbana'],
    highlights: ['Parques con normativa', 'Paseos costeros', 'Playas con regla estacional clara'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'sintra',
    name: 'Sintra',
    region: 'Lisboa',
    summary: 'Patrimonio y naturaleza con una diferencia clave para viajar con perro: Castelo dos Mouros y Monserrate lo admiten con reglas explícitas; otros grandes monumentos no.',
    idealFor: ['patrimonio', 'paseos', 'naturaleza'],
    highlights: ['Castelo dos Mouros con perro', 'Monserrate con perro', 'Reglas oficiales claras'],
    guideStatus: 'verified',
    destinationType: 'local'
  },
  {
    slug: 'comporta',
    name: 'Comporta',
    region: 'Alentejo',
    summary: 'Costa y entorno rural del Alentejo litoral, pendiente de investigación específica para la guía.',
    idealFor: ['tranquilidad', 'costa', 'escapadas'],
    highlights: ['Costa', 'Entorno rural', 'Contenido en preparación'],
    guideStatus: 'researching',
    destinationType: 'local'
  }
];
