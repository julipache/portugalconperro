import type { DestinationGuide } from './destinationGuides';

export const saoMartinhoDoPortoGuide: DestinationGuide = {
  slug: 'sao-martinho-do-porto',
  intro:
    'São Martinho do Porto funciona muy bien como base tranquila de Costa Centro porque la experiencia no depende únicamente del baño: la villa se desarrolla alrededor de una bahía compacta, la Avenida Marginal continúa hacia las dunas de Salir do Porto y varios miradores permiten ganar altura sin convertir el día en una excursión larga. La principal cautela con perro es la playa: en 2026 São Martinho do Porto tiene temporada balnear oficial del 13 de junio al 13 de septiembre y no hemos encontrado una autorización municipal que permita presentar el arenal como playa canina. Por eso separamos claramente paseo urbano, miradores y playa.',
  reviewedAt: '2026-09-10',
  places: [
    {
      name: 'Baía de São Martinho do Porto',
      category: 'natural_area',
      summary: 'La freguesia describe la bahía como una cuenca marítima con forma de concha comunicada con el Atlántico por una barra entre los morros do Farol y de Sant’Ana. Es el elemento que organiza prácticamente todo el paseo de la villa.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La bahía incluye paseo urbano, puerto y arenal, espacios con reglas distintas. No usamos la descripción turística de la bahía como prueba de una política general de acceso con perro.',
      sourceLabel: 'Junta de Freguesia de São Martinho do Porto',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/'
    },
    {
      name: 'Praia de São Martinho do Porto',
      category: 'beach',
      summary: 'Playa balnear principal de la villa y una de las playas del municipio que renovó la Bandeira Azul en 2026.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La temporada balnear oficial de 2026 va del 13 de junio al 13 de septiembre. No hemos localizado una autorización específica que permita etiquetarla como playa para perros; durante la temporada hay que comprobar el edital y la señalización vigente.',
      sourceLabel: 'Município de Alcobaça — calendário balnear 2026',
      sourceUrl: 'https://portaldomunicipe.cm-alcobaca.pt/73671/alcobaca-volta-a-afirmar-a-qualidade-do-seu-litoral'
    },
    {
      name: 'Avenida Marginal',
      category: 'walk',
      summary: 'La propia freguesia sitúa aquí el frente de playa y explica que la villa continúa por la Avenida Marginal hasta las dunas de Salir do Porto, convirtiéndola en el eje más evidente para pasear junto a la bahía.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La fuente describe el paseo y la continuidad urbana, pero no publica una política canina específica. Conviene tratar el paseo como espacio público y no confundirlo con el acceso al arenal.',
      sourceLabel: 'Junta de Freguesia — Parque de Campismo Baía Azul',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/parque-de-campismo/'
    },
    {
      name: 'Cruzeiro de São Martinho',
      category: 'viewpoint',
      summary: 'Mirador situado en lo alto del morro de Santo António. La Junta de Freguesia lo presenta como el mirador de São Martinho do Porto, con una amplia vista sobre la freguesia.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Es un punto exterior, pero la fuente turística no establece una regla específica para perros. Lo recomendamos por el paisaje, sin etiquetarlo como acceso canino confirmado.',
      sourceLabel: 'Junta de Freguesia — localidades y lugares de interés',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    },
    {
      name: 'Farol do Morro de Santo António',
      category: 'viewpoint',
      summary: 'Faro situado en el morro norte de la entrada de la bahía y parte del sistema de orientación marítima descrito por la freguesia.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No hemos encontrado una política oficial de acceso con perro al faro o a sus instalaciones. La referencia útil es el entorno exterior y la perspectiva sobre la entrada de la bahía.',
      sourceLabel: 'Junta de Freguesia — localidades y lugares de interés',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    },
    {
      name: 'Miradouro do Largo José Bento da Silva',
      category: 'viewpoint',
      summary: 'Mirador panorámico sobre la bahía que además conecta con el Ascensor do Outeiro, según la información turística de la freguesia.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No se publica una política específica para perros en el mirador ni en el ascensor. Si necesitas usar el elevador, conviene confirmar las condiciones in situ y tener una alternativa a pie.',
      sourceLabel: 'Junta de Freguesia — localidades y lugares de interés',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    },
    {
      name: 'Ascensor do Outeiro',
      category: 'attraction',
      summary: 'Elevador panorámico que enlaza Rua Vasco da Gama, Rua da Bela Vista y Largo Comendador José Bento da Silva, permitiendo salvar el desnivel entre el frente bajo y la zona alta.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La freguesia explica el recorrido del ascensor, pero no hemos localizado una política de mascotas publicada. No planifiques una ruta que dependa de usarlo con el perro sin comprobarlo antes.',
      sourceLabel: 'Junta de Freguesia — Ascensor do Outeiro',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    }
  ],
  walks: [
    {
      name: 'Avenida Marginal → zona de dunas hacia Salir do Porto',
      summary: 'La freguesia describe la continuidad de la villa desde la playa y la Avenida Marginal hasta las dunas de Salir do Porto. Es la opción más lógica para convertir la bahía en un paseo largo sin depender de entrar al arenal. La fuente no publica distancia ni política canina, así que no las inventamos.',
      sourceLabel: 'Junta de Freguesia — Parque de Campismo Baía Azul',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/parque-de-campismo/'
    },
    {
      name: 'Zona baja → Largo José Bento da Silva y miradores altos',
      summary: 'La información turística conecta la zona baja con Rua da Bela Vista y el Largo José Bento da Silva mediante el Ascensor do Outeiro. Con perro conviene considerar la subida a pie como alternativa hasta confirmar si el ascensor admite animales.',
      sourceLabel: 'Junta de Freguesia — localidades y lugares de interés',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    },
    {
      name: 'Morro de Santo António: Cruzeiro y entorno del faro',
      summary: 'Dos puntos altos descritos por la freguesia permiten entender la forma de la bahía y su estrecha salida al océano. No publicamos un trazado cerrado ni una distancia porque la fuente consultada no los proporciona.',
      sourceLabel: 'Junta de Freguesia — localidades y lugares de interés',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    }
  ],
  beachRule: {
    summary:
      'São Martinho do Porto tiene temporada balnear oficial del 13 de junio al 13 de septiembre de 2026. La información municipal confirma las fechas y la clasificación balnear, pero no hemos localizado una autorización específica para presentar esta playa como canina. La Autoridade Marítima recuerda que las restricciones o zonas autorizadas para animales dependen de los editais y de la señalización aplicable. Fuera de temporada tampoco asumimos acceso automático: conviene comprobar la señalización local.',
    sourceLabel: 'Município de Alcobaça + Autoridade Marítima Nacional',
    sourceUrl: 'https://portaldomunicipe.cm-alcobaca.pt/73671/alcobaca-volta-a-afirmar-a-qualidade-do-seu-litoral'
  },
  practicalRule: {
    eyebrow: 'La clave de São Martinho',
    title: 'La bahía sirve aunque el arenal no sea tu plan',
    summary:
      'La mejor forma de plantear São Martinho do Porto con perro es separar el frente urbano y los miradores del uso de la playa. La Avenida Marginal, la continuidad hacia Salir do Porto y los puntos altos permiten organizar el día sin depender de que el perro pueda entrar al arenal durante la temporada balnear.',
    sourceLabel: 'Junta de Freguesia + Município de Alcobaça',
    sourceUrl: 'https://freguesiasaomartinhodoporto.pt/parque-de-campismo/'
  },
  alerts: [
    {
      title: '🏖️ Temporada balnear 2026: 13 de junio → 13 de septiembre',
      summary: 'Es el periodo oficial publicado por el Município de Alcobaça para São Martinho do Porto. Antes de bajar al arenal con perro, comprueba el edital y la señalización vigente.',
      sourceLabel: 'Município de Alcobaça',
      sourceUrl: 'https://portaldomunicipe.cm-alcobaca.pt/73671/alcobaca-volta-a-afirmar-a-qualidade-do-seu-litoral'
    },
    {
      title: '⚠️ El ascensor no forma parte de nuestro “plan garantizado”',
      summary: 'El Ascensor do Outeiro es útil para salvar desnivel, pero no hemos encontrado una política publicada de acceso con mascotas. Si vas con perro, plantea la visita de forma que puedas continuar aunque no puedas usarlo.',
      sourceLabel: 'Junta de Freguesia',
      sourceUrl: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/'
    }
  ],
  sources: [
    { label: 'Município de Alcobaça — calendário balnear 2026', url: 'https://portaldomunicipe.cm-alcobaca.pt/73671/alcobaca-volta-a-afirmar-a-qualidade-do-seu-litoral' },
    { label: 'Município de Alcobaça — praias', url: 'https://portaldomunicipe.cm-alcobaca.pt/50720/praias' },
    { label: 'Junta de Freguesia de São Martinho do Porto', url: 'https://freguesiasaomartinhodoporto.pt/' },
    { label: 'Junta de Freguesia — turismo', url: 'https://freguesiasaomartinhodoporto.pt/turismo/' },
    { label: 'Junta de Freguesia — localidades y lugares de interés', url: 'https://freguesiasaomartinhodoporto.pt/turismo/localidades-festividades/' },
    { label: 'Junta de Freguesia — Parque Baía Azul', url: 'https://freguesiasaomartinhodoporto.pt/parque-de-campismo/' },
    { label: 'Autoridade Marítima Nacional — preguntas frecuentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' }
  ]
};
