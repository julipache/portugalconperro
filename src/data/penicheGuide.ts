import type { DestinationGuide } from './destinationGuides';

export const penicheGuide: DestinationGuide = {
  slug: 'peniche',
  intro:
    'Peniche es una base muy interesante para viajar con perro porque combina una península que se puede recorrer por costa, Baleal, grandes arenales y excursiones como Berlengas. La parte difícil está en separar el paseo exterior de la playa de baños y de las actividades con transporte: para 2026 las principales playas de Peniche tienen temporada balnear del 1 de junio al 15 de septiembre, mientras que la visita a Berlenga Grande exige registro previo y depende además del barco. En esta guía no asumimos que un paseo, una playa o una embarcación admiten perros si la fuente oficial no lo dice expresamente.',
  reviewedAt: '2026-09-08',
  places: [
    {
      name: 'Cabo Carvoeiro y costa occidental de Peniche',
      category: 'viewpoint',
      summary: 'Uno de los paisajes más reconocibles de Peniche. Turismo de Portugal recomienda recorrer la costa, detenerse en Cabo Carvoeiro y observar las formaciones rocosas, el faro y las Berlengas en el horizonte.',
      dogAccess: 'unknown',
      dogAccessNotes: 'Es un espacio exterior de carretera, miradores y costa, pero no hemos localizado una regla municipal específica que permita etiquetar todo el recorrido como acceso canino confirmado. En zonas de acantilado conviene mantener control físico del perro.',
      sourceLabel: 'Turismo de Portugal — Peniche',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/content/peniche-0'
    },
    {
      name: 'Baleal',
      category: 'walk',
      summary: 'Núcleo costero unido al continente por una franja de arena y uno de los puntos clásicos para combinar paseo, paisaje y surf. Turismo de Portugal lo destaca como una de las zonas costeras esenciales de Peniche.',
      dogAccess: 'unknown',
      dogAccessNotes: 'El paseo por el núcleo y los accesos exteriores no debe confundirse con el acceso a los arenales. Las playas de Baleal tienen temporada balnear oficial en 2026 y su régimen para animales depende del edital y la señalización.',
      sourceLabel: 'Turismo de Portugal — Praia do Baleal',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/content/praia-do-baleal-peniche'
    },
    {
      name: 'Praias do Baleal',
      category: 'beach',
      summary: 'Baleal Campismo, Baleal Norte y Baleal Sul figuran entre las playas de baños oficiales del municipio en 2026.',
      dogAccess: 'restricted',
      dogAccessNotes: 'La temporada balnear oficial de 2026 va del 1 de junio al 15 de septiembre. Durante la época balnear la Autoridade Marítima indica que la permanencia y circulación de animales puede estar prohibida fuera de zonas autorizadas según edital y señalización. No las presentamos como playas caninas.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026 + AMN',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia do Medão — Supertubos',
      category: 'beach',
      summary: 'Uno de los arenales más conocidos de Peniche por sus olas y competiciones de surf, situado al sur de la península.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Es playa de baños del 1 de junio al 15 de septiembre de 2026. El acceso con perro al arenal debe comprobarse mediante edital y señalización; la clasificación como gran playa de surf no implica que sea dog-friendly.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Praia da Consolação',
      category: 'beach',
      summary: 'Zona costera al sur de Peniche que Turismo de Portugal destaca junto a Baleal por sus condiciones para surf y bodyboard.',
      dogAccess: 'restricted',
      dogAccessNotes: 'Consolação y Consolação Norte tienen temporada balnear del 1 de junio al 15 de septiembre de 2026. Durante ese periodo hay que seguir el edital y la señalización específica respecto a animales.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      name: 'Ciclovia Peniche → Baleal',
      category: 'walk',
      summary: 'El guía oficial municipal propone recorrer la ciclovía entre Peniche y Baleal para disfrutar del paisaje dunar, convirtiéndola en una opción clara para moverse sin depender del arenal.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La fuente municipal recomienda el recorrido, pero no publica una política específica para perros. La tratamos como paseo exterior útil, sin marcar acceso canino confirmado.',
      sourceLabel: 'Município de Peniche — Guia Oficial',
      sourceUrl: 'https://www.cm-peniche.pt/cmpeniche/uploads/writer_file/document/8711/web_eventguide_pt.pdf'
    },
    {
      name: 'Rota Natura do Oeste',
      category: 'walk',
      summary: 'El guía municipal recomienda esta ruta desde Cabo Carvoeiro hacia el sur, pasando por Supertubos, Consolação y São Bernardino, como forma de recorrer una parte amplia de la costa.',
      dogAccess: 'unknown',
      dogAccessNotes: 'La ruta aparece recomendada por el municipio, pero no hemos localizado una norma específica de acceso con perro para todo el trazado. Las reglas de los arenales por los que pasa deben considerarse por separado.',
      sourceLabel: 'Município de Peniche — Guia Oficial',
      sourceUrl: 'https://www.cm-peniche.pt/cmpeniche/uploads/writer_file/document/8711/web_eventguide_pt.pdf'
    },
    {
      name: 'Reserva Natural das Berlengas',
      category: 'natural_area',
      summary: 'Archipiélago protegido frente a Cabo Carvoeiro. Solo Berlenga Grande puede visitarse y el ICNF limita a 550 personas la capacidad simultánea en tierra; el acceso exige BerlengasPass y pago de tasa.',
      dogAccess: 'unknown',
      dogAccessNotes: 'No hemos encontrado una autorización general para acceder con perro ni una política común de mascotas en los operadores marítimo-turísticos. Antes de reservar barco y BerlengasPass hay que confirmar ambas condiciones de forma específica.',
      sourceLabel: 'ICNF — Reserva Natural das Berlengas',
      sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/reservasnaturais/rnberlengas'
    }
  ],
  walks: [
    {
      name: 'Vuelta costera por la península → Cabo Carvoeiro',
      summary: 'Turismo de Portugal recomienda recorrer la costa antes de entrar en la ciudad y pasar por Cabo Carvoeiro. Es una propuesta especialmente útil con perro porque permite disfrutar del paisaje sin depender de entrar a una playa; en acantilados y puntos expuestos conviene extremar el control.',
      sourceLabel: 'Turismo de Portugal — Peniche',
      sourceUrl: 'https://www.visitportugal.com/pt-pt/content/peniche-0'
    },
    {
      name: 'Ciclovia Peniche → Baleal',
      summary: 'Recorrido recomendado por el municipio entre Peniche y Baleal junto al paisaje dunar. No hemos encontrado distancia ni política canina oficial en la fuente consultada, así que evitamos inventarlas.',
      sourceLabel: 'Município de Peniche — Guia Oficial',
      sourceUrl: 'https://www.cm-peniche.pt/cmpeniche/uploads/writer_file/document/8711/web_eventguide_pt.pdf'
    },
    {
      name: 'Rota Natura do Oeste · Cabo Carvoeiro → São Bernardino',
      summary: 'Ruta costera señalada por el municipio que enlaza Cabo Carvoeiro con Supertubos, Consolação y São Bernardino. Es útil como itinerario panorámico, pero las reglas de acceso a cada playa deben comprobarse individualmente.',
      sourceLabel: 'Município de Peniche — Guia Oficial',
      sourceUrl: 'https://www.cm-peniche.pt/cmpeniche/uploads/writer_file/document/8711/web_eventguide_pt.pdf'
    }
  ],
  beachRule: {
    summary:
      'Para 2026, Baleal Campismo, Baleal Norte, Baleal Sul, Consolação, Consolação Norte, Cova da Alfarroba, Gamboa, Medão-Supertubos, Molhe Leste, Peniche de Cima y São Bernardino tienen temporada balnear del 1 de junio al 15 de septiembre. La Autoridade Marítima recuerda que durante la época balnear la prohibición o autorización de animales depende del edital de playa, las zonas autorizadas y la señalización, y que la restricción se aplica independientemente de la hora cuando esté establecida. Por eso no etiquetamos ninguna como playa para perros sin confirmación específica.',
    sourceLabel: 'Portaria 204-A/2026 + Autoridade Marítima Nacional',
    sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
  },
  practicalRule: {
    eyebrow: 'La clave de Peniche',
    title: 'Separa paseo, arenal y excursión en barco',
    summary:
      'Peniche ofrece mucho paisaje exterior sin necesidad de bajar a una playa. En temporada balnear, conviene diseñar el día alrededor de paseos por la península, Cabo Carvoeiro y conexiones terrestres, y tratar las playas como espacios con reglas propias. Para Berlengas hay una segunda capa: además de las normas de la reserva, hay que confirmar la política del operador de barco antes de contar con esa excursión si viajas con perro.',
    sourceLabel: 'Turismo de Portugal + ICNF + AMN',
    sourceUrl: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/reservasnaturais/rnberlengas'
  },
  alerts: [
    {
      title: '🏖️ Temporada balnear 2026: 1 de junio → 15 de septiembre',
      summary: 'Es el periodo oficial de las principales playas de baños de Peniche. En esas fechas hay que comprobar siempre el edital y la señalización específica sobre animales antes de entrar al arenal.',
      sourceLabel: 'Diário da República — Portaria 204-A/2026',
      sourceUrl: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728'
    },
    {
      title: '⛴️ Berlengas: no reserves el barco sin comprobar la política de mascotas',
      summary: 'El ICNF exige BerlengasPass para acceder a Berlenga Grande y limita la capacidad humana simultánea. No hemos encontrado una regla común para perros en todos los barcos, así que el transporte debe confirmarse con el operador antes de planificar la excursión.',
      sourceLabel: 'ICNF — BerlengasPass',
      sourceUrl: 'https://berlengaspass.icnf.pt/faq'
    },
    {
      title: '⚠️ Revisa los editais de la Capitania antes de bajar a la costa',
      summary: 'La Capitania do Porto de Peniche publica avisos e interdicciones temporales para playas y zonas costeras. Es una fuente que conviene revisar el mismo día, especialmente tras temporal, obras o cambios de seguridad.',
      sourceLabel: 'Capitania do Porto de Peniche',
      sourceUrl: 'https://www.amn.pt/DGAM/Capitanias/Peniche/Paginas/Capitania-do-Porto-de-Peniche.aspx'
    }
  ],
  sources: [
    { label: 'Turismo de Portugal — Peniche', url: 'https://www.visitportugal.com/pt-pt/content/peniche-0' },
    { label: 'Turismo de Portugal — Praia do Baleal', url: 'https://www.visitportugal.com/pt-pt/content/praia-do-baleal-peniche' },
    { label: 'Município de Peniche — Guia Oficial', url: 'https://www.cm-peniche.pt/cmpeniche/uploads/writer_file/document/8711/web_eventguide_pt.pdf' },
    { label: 'Diário da República — Portaria 204-A/2026', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/204-a-2026-1102518728' },
    { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' },
    { label: 'Capitania do Porto de Peniche', url: 'https://www.amn.pt/DGAM/Capitanias/Peniche/Paginas/Capitania-do-Porto-de-Peniche.aspx' },
    { label: 'ICNF — Reserva Natural das Berlengas', url: 'https://www.icnf.pt/conservacao/rnapareasprotegidas/reservasnaturais/rnberlengas' },
    { label: 'ICNF — BerlengasPass', url: 'https://berlengaspass.icnf.pt/faq' }
  ]
};
