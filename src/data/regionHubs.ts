export interface HubArea {
  name: string;
  kicker: string;
  summary: string;
  places: string[];
  dogLens: string;
}

export interface HubDecision {
  title: string;
  summary: string;
}

export interface RegionHub {
  slug: string;
  intro: string;
  reviewedAt: string;
  areas: HubArea[];
  decisions: HubDecision[];
  routeNotes: {
    title: string;
    summary: string;
    sourceLabel: string;
    sourceUrl: string;
  }[];
  sources: { label: string; url: string }[];
}

export const regionHubs: Record<string, RegionHub> = {
  algarve: {
    slug: 'algarve',
    intro:
      'El Algarve no debería tratarse como un único destino. Para un viaje con perro importa mucho dónde te alojas: el oeste concentra acantilados, rutas y una costa más expuesta; la zona central reúne algunos de los núcleos turísticos más conocidos; y hacia el este el paisaje cambia con la Ria Formosa y sus islas. Esta división es editorial —no administrativa— y sirve para elegir base antes de conectar la oferta de alojamiento.',
    reviewedAt: '2026-09-08',
    areas: [
      {
        name: 'Algarve occidental',
        kicker: 'Costa, acantilados y senderismo',
        summary: 'Nuestra zona más desarrollada: combina Lagos, Sagres, Vila do Bispo y Aljezur con la costa más ligada a rutas como Rota Vicentina y con acceso rápido a zonas interiores.',
        places: ['Lagos', 'Sagres', 'Vila do Bispo', 'Aljezur'],
        dogLens: 'Interesa especialmente si el viaje gira alrededor de caminar y estar al aire libre. La Rota Vicentina permite caminar con perro, recomienda correa permanente y avisa de encuentros con ganado y perros pastores. No extrapolamos esa regla a todas las playas o espacios naturales.'
      },
      {
        name: 'Algarve central',
        kicker: 'Bases turísticas y costa recortada',
        summary: 'Incluye grandes bases vacacionales como Portimão, Lagoa/Carvoeiro, Albufeira y el eje de Loulé, Quarteira y Vilamoura. Ya tenemos guías verificadas de Portimão y Carvoeiro.',
        places: ['Portimão', 'Carvoeiro', 'Albufeira', 'Vilamoura y Quarteira'],
        dogLens: 'Aquí el futuro inventario de alojamientos será especialmente importante: no vamos a asumir que una localidad es “mejor con perro” por tener más oferta turística. Compararemos inventario real, vallado, tipo de alojamiento y reglas locales cuando dispongamos de esos datos.'
      },
      {
        name: 'Algarve oriental',
        kicker: 'Ria Formosa, islas y ciudades históricas',
        summary: 'Faro, Olhão, Tavira y Vila Real de Santo António forman el tramo oriental. El paisaje cambia claramente por la Ria Formosa, sus canales, marismas, islas y playas de barrera. Tavira ya tiene guía verificada.',
        places: ['Faro', 'Olhão', 'Tavira', 'Vila Real de Santo António'],
        dogLens: 'La presencia de espacios protegidos y accesos en barco obliga a revisar cada visita por separado. En Tavira, por ejemplo, Barril evita el barco mientras Ilha de Tavira, Terra Estreita y Cabanas dependen de embarcación, cuya política de mascotas hay que confirmar.'
      }
    ],
    decisions: [
      {
        title: 'Quiero hacer muchas rutas',
        summary: 'Empezaría mirando el oeste y comparando Lagos, Sagres y Aljezur. Ya tenemos las tres guías verificadas y Rota Vicentina ofrece información específica para caminar con perro.'
      },
      {
        title: 'Quiero una casa con jardín o piscina',
        summary: 'No escogeremos zona por intuición. Primero monetizaremos con enlaces afiliados cuando encajen y, cuando tengamos un feed/API con atributos suficientes, compararemos cuántos alojamientos reales cumplen mascotas + vallado + tipo de casa + piscina.'
      },
      {
        title: 'Voy en pleno verano',
        summary: 'La temporada balnear cambia las opciones de arenal con perro. Las fechas y normas deben comprobarse municipio a municipio y playa a playa; por eso nuestras guías locales tienen más valor que una afirmación genérica sobre “playas dog-friendly en Algarve”.'
      },
      {
        title: 'Quiero naturaleza pero no depender de la playa',
        summary: 'Buscaremos bases con rutas interiores y zonas forestales cercanas. En Lagos, por ejemplo, ya hemos documentado la Mata Nacional de Barão de São João y el PR1 Pedra do Galo como alternativa a la costa.'
      }
    ],
    routeNotes: [
      {
        title: 'Rota Vicentina',
        summary: 'Recorre parte de la costa sudoeste y llega hasta Lagos. La organización confirma que se puede caminar con perro, recomienda llevarlo siempre con correa y advierte de posibles encuentros con ganado y perros pastores.',
        sourceLabel: 'Rota Vicentina — FAQ caminar con perro',
        sourceUrl: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina'
      },
      {
        title: 'Via Algarviana',
        summary: 'La ruta GR13 atraviesa el interior del Algarve hasta Cabo de São Vicente y es una de las grandes alternativas a la costa. La presentamos como eje de senderismo regional, pero no afirmamos una política general para perros porque no hemos localizado una regla oficial específica que lo confirme para todo el recorrido.',
        sourceLabel: 'Turismo de Portugal — Algarve',
        sourceUrl: 'https://www.visitportugal.com/pt-pt/destinos/algarve'
      },
      {
        title: 'Playas: la regla no es igual todo el año',
        summary: 'La Autoridade Marítima Nacional indica que las condiciones de animales en playa dependen de época balnear, edital, señalización y zonas autorizadas. Nuestras guías locales verifican las fechas y evitan presentar como “playa para perros” un arenal sin autorización específica.',
        sourceLabel: 'Autoridade Marítima Nacional — Preguntas frecuentes',
        sourceUrl: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx'
      }
    ],
    sources: [
      { label: 'Turismo de Portugal — Algarve', url: 'https://www.visitportugal.com/pt-pt/destinos/algarve' },
      { label: 'Região de Turismo do Algarve — entidade oficial', url: 'https://www.gov.pt/entidades/regiao-de-turismo-do-algarve' },
      { label: 'Rota Vicentina — caminar con perro', url: 'https://rotavicentina.com/?faqs=posso-caminhar-com-o-meu-cao-na-rota-vicentina' },
      { label: 'Autoridade Marítima Nacional — Perguntas Frequentes', url: 'https://www.amn.pt/Paginas/PerguntasFrequentes.aspx' }
    ]
  }
};
