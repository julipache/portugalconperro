import type { DestinationGuide } from './destinationGuides';

export const obidosGuide: DestinationGuide = {
  slug: 'obidos',
  intro:
    'Óbidos es especialmente útil en una ruta por Costa Centro porque ofrece algo distinto a Nazaré o Peniche: una villa amurallada, recorridos alrededor del castillo, una red municipal de senderos y la Lagoa de Óbidos. Para viajar con perro hay además una ventaja editorial importante: el municipio publica un reglamento específico sobre circulación de animales. Ese reglamento permite explicar con precisión las obligaciones en vías y lugares públicos, pero no lo usamos para afirmar que un perro pueda entrar en monumentos o espacios cerrados concretos.',
  reviewedAt: '2026-09-10',
  places: [
    {
      name: 'Vila muralhada de Óbidos',
      category: 'historic',
      summary: 'El turismo municipal describe Óbidos como una villa histórica bien conservada, con castillo, calles y casas blancas dentro de las murallas. El paseo exterior por el burgo es la experiencia central del destino.',
      dogAccess: 'restricted',
      dogAccessNotes: 'El reglamento municipal regula la presencia de perros en vías y lugares públicos: exige collar o arnés y establece que no pueden estar sin acompañante; para perros ordinarios, llevarlos con correa es la excepción a la exigencia de bozal funcional prevista para animales no llevados con correa. Esto no confirma entrada a monumentos cerrados.',
      sourceLabel: 'Turismo de Óbidos + Regulamento Municipal de Animais',
      sourceUrl: 'https://www.cm-obidos.pt/cmobidos/uploads/document/file/209/regulamento_sobre_a_posse__circulacao__detencao__alojamento_de_animais_do_municipio_de_obidos.pdf'
    },
    {
      name: 'Rua Direita y calles del centro histórico',
      category: 'walk',
      summary: 'La guía turística municipal identifica Rua Direita como la principal arteria de la villa, conectando Porta da Vila con la zona del castillo. Es una forma directa de recorrer el casco histórico a pie.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Al tratarse de espacio público, aplican las obligaciones municipales de control del perro. En días de gran afluencia conviene valorar calles laterales y horarios tranquilos; la normativa de circulación no equivale a permiso de entrada en comercios o monumentos.',
      sourceLabel: 'Óbidos Turismo — mapa turístico 2026 + reglamento animal',
      sourceUrl: 'https://turismo.obidos.pt/download/Turismo_PT_2026.pdf'
    },
    {
      name: 'Parque da Vila',
      category: 'park',
      summary: 'La red municipal de percursos sitúa el Parque da Vila en la encosta oeste de Óbidos y lo presenta como plataforma central de la red, con circuito forestal de 1,85 km y circuito deportivo de 1,6 km, ambos de dificultad fácil.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Es un lugar público municipal, por lo que el perro debe mantenerse bajo las condiciones de circulación establecidas por el reglamento. La ficha del recorrido no publica una excepción que permita llevarlo suelto.',
      sourceLabel: 'Óbidos Turismo — Percursos Pedestres + reglamento animal',
      sourceUrl: 'https://turismo.obidos.pt/percursos-pedestres/'
    },
    {
      name: 'Aqueduto da Usseira',
      category: 'historic',
      summary: 'El acueducto aparece en el mapa turístico municipal y también estructura varios recorridos peatonales. La Rota do Aqueduto permite seguir una parte de esta obra histórica por caminos rurales y zonas de huerta.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La ruta se desarrolla por aldeas, caminos y espacio público. Aplican las reglas municipales de control del perro; la ficha oficial no establece acceso libre sin correa.',
      sourceLabel: 'Óbidos Turismo — Rota do Aqueduto',
      sourceUrl: 'https://turismo.obidos.pt/2021/09/01/rota-do-aqueduto/'
    },
    {
      name: 'Rota Panorâmica',
      category: 'walk',
      summary: 'PR14 de 8,4 km, unos 190 m de desnivel positivo, nivel III y tiempo orientativo de 2 h 45 min. Sale junto al Posto de Turismo y combina acueducto, caminos agrícolas, vistas de Óbidos, Atlántico, Berlengas y Lagoa de Óbidos.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Es una ruta municipal por caminos y espacio público. Deben cumplirse las reglas de circulación de animales; además, la dificultad y el desnivel hacen aconsejable valorar calor y condición física del perro.',
      sourceLabel: 'Óbidos Turismo — Rota Panorâmica PR14',
      sourceUrl: 'https://turismo.obidos.pt/2022/10/04/rota-panoramica/'
    },
    {
      name: 'Ecovia da Lagoa',
      category: 'walk',
      summary: 'Ruta municipal fácil alrededor de la Lagoa de Óbidos. La página general de percursos publica un recorrido largo de 11 km; una noticia municipal de lanzamiento de 2022 describía entonces unos 9 km, por lo que usamos la ficha actual de la red para la distancia vigente publicada.',
      dogAccess: 'restricted',
      dogAccessNotes: 'El trazado es público y enlaza varios parques y zonas de la laguna. Aplican las reglas municipales de circulación con perro. No asumimos acceso sin correa ni condiciones especiales por tratarse de una ecovía.',
      sourceLabel: 'Óbidos Turismo — Percursos Pedestres / Ecovia da Lagoa',
      sourceUrl: 'https://turismo.obidos.pt/percursos-pedestres/'
    },
    {
      name: 'Lagoa de Óbidos',
      category: 'natural_area',
      summary: 'La laguna es uno de los grandes paisajes naturales del concelho y la red de ecovías permite recorrer parte de su entorno observando humedales, salinas, aves y actividad pesquera tradicional.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No etiquetamos toda la laguna como un único espacio de acceso canino: incluye ecovías, orillas, aldeas y zonas naturales con condiciones diferentes. Para caminar recomendamos ceñirse a recorridos públicos señalizados y aplicar la normativa municipal.',
      sourceLabel: 'Óbidos Turismo — Ecovia da Lagoa',
      sourceUrl: 'https://turismo.obidos.pt/2022/06/22/ecovia-da-lagoa/'
    }
  ],
  walks: [
    {
      name: 'Parque da Vila · circuito forestal',
      summary: 'Circuito municipal de 1,85 km, nivel II y dificultad fácil. Es una alternativa especialmente útil si quieres complementar el casco histórico con un paseo verde junto a la encosta de la villa.',
      sourceLabel: 'Óbidos Turismo — Percursos Pedestres',
      sourceUrl: 'https://turismo.obidos.pt/percursos-pedestres/'
    },
    {
      name: 'PR14 · Rota Panorâmica',
      summary: '8,4 km, +190 m, nivel III y unas 2 h 45 min según la ficha oficial. Enlaza vistas del castillo con el acueducto, caminos agrícolas y panorámicas amplias del litoral centro.',
      sourceLabel: 'Óbidos Turismo — Rota Panorâmica',
      sourceUrl: 'https://turismo.obidos.pt/2022/10/04/rota-panoramica/'
    },
    {
      name: 'PR11 · Rota do Aqueduto',
      summary: 'Ruta de 6,2 km, +175 m, nivel II y unas 2 h según Turismo de Óbidos. Recorre aldeas, huertas y una sección del Aqueduto da Usseira con vistas hacia la villa y el Atlántico.',
      sourceLabel: 'Óbidos Turismo — Rota do Aqueduto',
      sourceUrl: 'https://turismo.obidos.pt/2021/09/01/rota-do-aqueduto/'
    },
    {
      name: 'PR4 · Ecovia da Lagoa',
      summary: 'La ficha general actual de la red publica un recorrido largo de 11 km y dificultad fácil. El itinerario enlaza distintos puntos de la Lagoa de Óbidos y conecta con otras rutas municipales.',
      sourceLabel: 'Óbidos Turismo — Percursos Pedestres',
      sourceUrl: 'https://turismo.obidos.pt/percursos-pedestres/'
    }
  ],
  practicalRule: {
    eyebrow: 'Regla municipal útil',
    title: 'En espacio público, lleva el perro controlado y conoce la norma local',
    summary:
      'El artículo 22 del reglamento municipal exige collar o arnés e identificación del propietario. Prohíbe perros en vía o lugar público sin acompañante y sin bozal funcional, salvo cuando van conducidos con correa. Para perros peligrosos o potencialmente peligrosos establece medidas adicionales, entre ellas bozal y correa corta de hasta 1 metro. La regla ayuda a planificar los paseos, pero no confirma la entrada en monumentos o negocios privados.',
    sourceLabel: 'Município de Óbidos — Regulamento sobre animais, art. 22 y 23',
    sourceUrl: 'https://www.cm-obidos.pt/cmobidos/uploads/document/file/209/regulamento_sobre_a_posse__circulacao__detencao__alojamento_de_animais_do_municipio_de_obidos.pdf'
  },
  alerts: [
    {
      title: '🐕 Óbidos tiene reglas municipales específicas de circulación',
      summary: 'Antes de recorrer el casco histórico o los senderos, revisa los artículos 22 y 23 del reglamento animal: las exigencias aumentan para perros clasificados como peligrosos o potencialmente peligrosos.',
      sourceLabel: 'Município de Óbidos — Regulamento sobre animais',
      sourceUrl: 'https://www.cm-obidos.pt/cmobidos/uploads/document/file/209/regulamento_sobre_a_posse__circulacao__detencao__alojamento_de_animais_do_municipio_de_obidos.pdf'
    },
    {
      title: '🥾 La red de senderos tiene opciones muy distintas',
      summary: 'La oferta municipal va desde circuitos muy cortos y fáciles a rutas de más de 8 km y nivel III. Si viajas con perro, elige por terreno, calor y capacidad física, no solo por la cercanía al centro histórico.',
      sourceLabel: 'Óbidos Turismo — Percursos Pedestres',
      sourceUrl: 'https://turismo.obidos.pt/percursos-pedestres/'
    }
  ],
  sources: [
    { label: 'Óbidos Turismo — A Vila', url: 'https://turismo.obidos.pt/a-vila/' },
    { label: 'Óbidos Turismo — mapa 2026', url: 'https://turismo.obidos.pt/download/Turismo_PT_2026.pdf' },
    { label: 'Óbidos Turismo — Percursos Pedestres', url: 'https://turismo.obidos.pt/percursos-pedestres/' },
    { label: 'Óbidos Turismo — Rota Panorâmica', url: 'https://turismo.obidos.pt/2022/10/04/rota-panoramica/' },
    { label: 'Óbidos Turismo — Rota do Aqueduto', url: 'https://turismo.obidos.pt/2021/09/01/rota-do-aqueduto/' },
    { label: 'Óbidos Turismo — Ecovia da Lagoa', url: 'https://turismo.obidos.pt/2022/06/22/ecovia-da-lagoa/' },
    { label: 'Município de Óbidos — Regulamento sobre animais', url: 'https://www.cm-obidos.pt/cmobidos/uploads/document/file/209/regulamento_sobre_a_posse__circulacao__detencao__alojamento_de_animais_do_municipio_de_obidos.pdf' }
  ]
};
