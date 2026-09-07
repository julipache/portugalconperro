import type { DestinationGuide } from './destinationGuides';

export const sagresGuide: DestinationGuide = {
  slug: 'sagres',
  intro:
    'Sagres es uno de los destinos donde una guía para viajar con perro puede aportar más que una lista de playas. Aquí se cruzan el Parque Natural do Sudoeste Alentejano e Costa Vicentina, el Cabo de São Vicente y varias etapas de la Rota Vicentina. Para 2026 tenemos fechas oficiales de temporada balnear, una regla clara de la Capitania de Portimão sobre animales en playas y, sobre todo, una política explícita de Rota Vicentina para caminar con perro: se puede, pero recomiendan llevarlo siempre con correa por la fauna, el ganado y los perros pastores.',
  reviewedAt: '2026-09-07',
  places: [
    {
      name: 'Fortaleza de Sagres',
      category: 'historic',
      summary: 'El gran recinto histórico del promontorio de Sagres, ligado al Infante D. Henrique, con vistas abiertas al Atlántico, la Rosa dos Ventos y varios edificios históricos dentro del recinto.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Las fuentes oficiales consultadas publican horarios, accesibilidad y servicios, pero no hemos encontrado una política específica sobre entrada con perro. No asumimos que el acceso exterior implique acceso al recinto monumental.',
      sourceLabel: 'Turismo de Portugal — Fortaleza de Sagres',
      sourceUrl: 'https://www.visitportugal.com/es/content/fortaleza-de-sagres'
    },
    {
      name: 'Cabo de São Vicente',
      category: 'viewpoint',
      summary: 'El gran cabo del extremo sudoeste portugués, integrado en el sistema defensivo histórico de la costa y convertido en uno de los paisajes más reconocibles de Sagres.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La visita al entorno exterior y el acceso a la fortaleza/faro son situaciones distintas. No hemos localizado una regla oficial que permita afirmar el acceso con perro a todos los espacios del recinto.',
      sourceLabel: 'Turismo de Portugal — Fortaleza do Cabo de S. Vicente',
      sourceUrl: 'https://www.visitportugal.com/es/NR/exeres/7AF1F623-BB51-4D12-A880-BFECB8AC66C9'
    },
    {
      name: 'Parque Natural do Sudoeste Alentejano e Costa Vicentina',
      category: 'natural_area',
      summary: 'El espacio protegido se extiende desde São Torpes, al sur de Sines, hasta Burgau y abarca territorio de Vila do Bispo. Protege hábitats costeros, acantilados, playas y una franja marina.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No trasladamos la política de la Rota Vicentina a todo el parque. El acceso y las actividades dependen de la zona y del tipo de espacio; por eso verificamos senderos y lugares concretos en vez de marcar todo el parque como dog-friendly.',
      sourceLabel: 'ICNF — Parque Natural do Sudoeste Alentejano e Costa Vicentina',
      sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnsudoestealentejanoecostavicentina'
    },
    {
      name: 'Praia da Mareta',
      category: 'beach',
      summary: 'Playa urbana de Sagres con unos 700 metros de longitud, acceso por camino regularizado y pasarelas, además de restauración y servicios junto al arenal.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La ficha municipal fija la época balnear del 1 de junio al 30 de septiembre. La Capitania de Portimão explica que fuera de la época balnear, o durante ella fuera de áreas concesionadas y señalizadas, no existe una prohibición legal general de animales; aun así, mandan las zonas autorizadas, el edital y la señalización de la playa.',
      sourceLabel: 'Município de Vila do Bispo — Praia da Mareta',
      sourceUrl: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/mareta'
    },
    {
      name: 'Praia do Tonel',
      category: 'beach',
      summary: 'Playa atlántica a unos 500 metros del centro de Sagres, bajo la Fortaleza de Sagres y dentro del Parque Natural do Sudoeste Alentejano e Costa Vicentina.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Tiene época balnear del 1 de junio al 30 de septiembre. No la etiquetamos como playa canina: fuera de temporada o fuera de áreas concesionadas la situación puede ser distinta, pero siempre hay que comprobar el edital y la señalización vigente.',
      sourceLabel: 'Município de Vila do Bispo — Praia do Tonel',
      sourceUrl: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/tonel'
    },
    {
      name: 'Praia do Martinhal',
      category: 'beach',
      summary: 'Arenal de unos 650 metros en la bahía de Martinhal-Baleeira, con cordón dunar, acceso por camino regularizado y pasarelas y dos apoyos de playa.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La época balnear publicada por el municipio va del 1 de junio al 30 de septiembre. En ese periodo no damos por hecho el acceso del perro al arenal; fuera de temporada se debe revisar igualmente la señalización y las zonas autorizadas.',
      sourceLabel: 'Município de Vila do Bispo — Praia do Martinhal',
      sourceUrl: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/martinhal'
    },
    {
      name: 'Praia do Beliche',
      category: 'beach',
      summary: 'Pequeña playa entre acantilados calcáreos de unos 40 metros, en dirección al Cabo de São Vicente. El acceso peatonal se realiza por una escalera con ese desnivel.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La temporada balnear municipal es del 1 de junio al 30 de septiembre. Además de la normativa, la escalera de unos 40 metros de desnivel es un dato práctico importante para perros mayores, con movilidad reducida o poco habituados a escaleras largas.',
      sourceLabel: 'Município de Vila do Bispo — Praia do Beliche',
      sourceUrl: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/beliche'
    },
    {
      name: 'Rota Vicentina — Vila do Bispo → Sagres',
      category: 'walk',
      summary: 'Etapa de alrededor de 20 km que pasa por el Cabo de São Vicente y continúa por la costa hasta Sagres, atravesando un paisaje de acantilados calcáreos y campos abiertos.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Rota Vicentina confirma que se puede caminar con perro, pero recomienda llevarlo siempre con correa por la protección de la fauna y los encuentros con ganado y perros pastores. Esta condición se aplica a sus senderos, no automáticamente a monumentos o playas que se crucen por el camino.',
      sourceLabel: 'Rota Vicentina — Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
    },
    {
      name: 'Rota Vicentina — Sagres → Salema',
      category: 'walk',
      summary: 'Etapa costera de 16 a 20 km considerada una de las más exigentes del Trilho dos Pescadores, con subidas y bajadas continuas por caminos pedregosos junto a acantilados.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Se aplica la misma regla de Rota Vicentina: perro permitido con recomendación de correa permanente. La propia organización advierte que esta exigencia encaja con dificultad en algunos tramos del Trilho dos Pescadores, por el terreno, la fauna y posibles encuentros con ganado y perros pastores.',
      sourceLabel: 'Rota Vicentina — Sagres a Salema / FAQ perro',
      sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
    }
  ],
  walks: [
    {
      name: 'Vila do Bispo → Cabo de São Vicente → Sagres · 20 km',
      summary: 'Una de las etapas grandes del extremo occidental. Rota Vicentina la describe con unos 20 km y unas 5–6 horas en sus programas de travesía. Pasa por el Cabo de São Vicente antes de terminar en Sagres. Para hacerla con perro, la organización recomienda correa siempre y recuerda el riesgo de encuentros con ganado y perros pastores.',
      sourceLabel: 'Rota Vicentina — travesía Arrifana a Lagos',
      sourceUrl: 'https://rotavicentina.com/programas/8-dias-de-caminhada-na-rota-vicentina-de-arrifana-a-lagos/'
    },
    {
      name: 'Sagres → Salema · 16–20 km · exigente',
      summary: 'Etapa de 5 a 6,5 horas con ascensos y descensos constantes por acantilados y terreno pedregoso. Es una ruta preciosa, pero no la presentaría como paseo sencillo con perro: exige valorar calor, condición física, control con correa y comodidad del animal en terreno irregular.',
      sourceLabel: 'Rota Vicentina — Sagres a Salema',
      sourceUrl: 'https://rotavicentina.com/programas/8-dias-de-caminhada-na-rota-vicentina-de-arrifana-a-lagos/'
    },
    {
      name: 'Vila do Bispo → Sagres · paseo arqueológico municipal · 10 km',
      summary: 'El municipio programó en 2026 un recorrido arqueológico de 10 km y unas 4 horas entre Vila do Bispo y Sagres pasando por menhires prehistóricos, la reserva biogenética, Baía da Baleeira y vestigios romanos de Martinhal. La ficha no indica política sobre perros, así que lo usamos como referencia de recorrido, no como actividad canina confirmada.',
      sourceLabel: 'Município de Vila do Bispo — Passeio Pedestre Arqueológico',
      sourceUrl: 'https://www.cm-viladobispo.pt/agenda/passeio-pedestre-arqueologico-vila-do-bispo-sagres'
    }
  ],
  beachRule: {
    summary:
      'La Capitania do Porto de Portimão publica una regla especialmente útil: fuera de la época balnear, o durante la época balnear pero fuera de áreas concesionadas y debidamente señalizadas, no existe una norma legal general que prohíba la permanencia y circulación de animales en las playas. Eso no convierte todas las playas en “playas para perros”: las zonas autorizadas, el edital y la señalización concreta siguen mandando. En Sagres, Mareta, Tonel, Martinhal y Beliche publican temporada balnear del 1 de junio al 30 de septiembre.',
    sourceLabel: 'Autoridade Marítima Nacional — Capitania do Porto de Portimão',
    sourceUrl: 'https://www.amn.pt/DGAM/Capitanias/Portimao/Paginas/Capitania-do-porto-de-Portimao.aspx'
  },
  practicalRule: {
    eyebrow: 'La diferencia está en el terreno',
    title: 'Con perro, Sagres se disfruta mejor planificando rutas y horarios',
    summary:
      'Rota Vicentina recomienda caminar entre septiembre y junio porque en verano se superan con frecuencia los 30 ºC. Además, el Trilho dos Pescadores discurre junto a acantilados, fauna sensible, ganado y perros pastores. Si viajas en verano, conviene reservar las caminatas para las horas frescas y no contar con las playas como única actividad para el perro durante la temporada balnear.',
    sourceLabel: 'Rota Vicentina — Guia de Ajuda',
    sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
  },
  alerts: [
    {
      title: '🐕 Rota Vicentina: perro sí, pero con correa',
      summary: 'La organización confirma que puedes caminar con tu perro y recomienda llevarlo siempre sujeto. La razón no es solo normativa: cita la protección de fauna, el pisoteo y los encuentros inevitables con ganado y perros pastores.',
      sourceLabel: 'Rota Vicentina — FAQ caminar con perro',
      sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
    },
    {
      title: '☀️ La temporada recomendada para caminar es septiembre–junio',
      summary: 'Rota Vicentina desaconseja el verano como época principal de senderismo por el calor, con temperaturas que pueden superar los 30 ºC. Con perro esto es todavía más relevante: hay tramos expuestos y largos sin sombra continua.',
      sourceLabel: 'Rota Vicentina — Guia de Ajuda',
      sourceUrl: 'https://rotavicentina.com/guia-de-ajuda/'
    },
    {
      title: '⚠️ Acantilados: no salirse del recorrido',
      summary: 'El manual de los senderos junto al mar recuerda que los acantilados están en erosión permanente y existe peligro de caída. También pide evitar perturbar aves que nidifican en las paredes. Con perro, correa y distancia del borde son especialmente importantes.',
      sourceLabel: 'Rota Vicentina — Manual de Trilhos Pedestres',
      sourceUrl: 'https://rotavicentina.com/wp-content/uploads/2023/01/Manual-dos-Trilhos-Pedestres-Rota-Vicentina-Sinaletica-e-Manutencao-compressed.pdf'
    },
    {
      title: '🏖️ Del 1 de junio al 30 de septiembre cambia el uso de las playas principales',
      summary: 'Mareta, Tonel, Martinhal y Beliche publican temporada balnear en esas fechas. Antes de bajar con perro hay que comprobar qué parte está concesionada, el edital y la señalización del día.',
      sourceLabel: 'Município de Vila do Bispo — Praias',
      sourceUrl: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/mareta'
    }
  ],
  sources: [
    { label: 'ICNF — Parque Natural do Sudoeste Alentejano e Costa Vicentina', url: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/parquesnaturais/pnsudoestealentejanoecostavicentina' },
    { label: 'Turismo de Portugal — Fortaleza de Sagres', url: 'https://www.visitportugal.com/es/content/fortaleza-de-sagres' },
    { label: 'Turismo de Portugal — Cabo de São Vicente', url: 'https://www.visitportugal.com/es/NR/exeres/7AF1F623-BB51-4D12-A880-BFECB8AC66C9' },
    { label: 'Município de Vila do Bispo — Praia da Mareta', url: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/mareta' },
    { label: 'Município de Vila do Bispo — Praia do Tonel', url: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/tonel' },
    { label: 'Município de Vila do Bispo — Praia do Martinhal', url: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/martinhal' },
    { label: 'Município de Vila do Bispo — Praia do Beliche', url: 'https://www.cm-viladobispo.pt/visitar/o-que-visitar/praias/beliche' },
    { label: 'Autoridade Marítima Nacional — Capitania do Porto de Portimão', url: 'https://www.amn.pt/DGAM/Capitanias/Portimao/Paginas/Capitania-do-porto-de-Portimao.aspx' },
    { label: 'Rota Vicentina — Guia de Ajuda', url: 'https://rotavicentina.com/guia-de-ajuda/' },
    { label: 'Rota Vicentina — FAQ caminar con perro', url: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina' },
    { label: 'Município de Vila do Bispo — Passeio Pedestre Arqueológico', url: 'https://www.cm-viladobispo.pt/agenda/passeio-pedestre-arqueologico-vila-do-bispo-sagres' }
  ]
};