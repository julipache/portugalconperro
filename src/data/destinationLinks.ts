export const destinationLinks: Record<string, string[]> = {
  lagos: ['sagres', 'portimao', 'aljezur'],
  sagres: ['lagos', 'aljezur'],
  aljezur: ['sagres', 'lagos'],
  portimao: ['carvoeiro', 'lagos'],
  carvoeiro: ['portimao', 'lagos'],
  tavira: ['carvoeiro', 'portimao'],
  nazare: ['peniche', 'sintra'],
  peniche: ['nazare', 'sintra'],
  cascais: ['sintra', 'peniche'],
  sintra: ['cascais', 'peniche'],
  geres: []
};
