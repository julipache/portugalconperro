export interface PropertySeed {
  id: string;
  name: string;
  location: string;
  type: string;
  dogs: string;
  fencedGarden: boolean;
  privateGarden: boolean;
  pool: boolean;
  verification: 'demo';
}

// Datos de demostración para construir la interfaz. Se sustituirán por inventario real
// obtenido de partners y fuentes verificables antes de publicar fichas indexables.
export const propertySeeds: PropertySeed[] = [
  { id: 'demo-1', name: 'Villa atlántica · Demo', location: 'Lagos, Algarve', type: 'Villa', dogs: '2 perros', fencedGarden: true, privateGarden: true, pool: true, verification: 'demo' },
  { id: 'demo-2', name: 'Casa rural entre montes · Demo', location: 'Gerês, Norte', type: 'Casa rural', dogs: 'Perros grandes', fencedGarden: true, privateGarden: true, pool: false, verification: 'demo' },
  { id: 'demo-3', name: 'Casa de costa · Demo', location: 'Nazaré, Centro', type: 'Casa', dogs: '1 perro', fencedGarden: false, privateGarden: true, pool: false, verification: 'demo' },
  { id: 'demo-4', name: 'Quinta tranquila · Demo', location: 'Sintra, Lisboa', type: 'Quinta', dogs: '2+ perros', fencedGarden: true, privateGarden: true, pool: true, verification: 'demo' }
];
