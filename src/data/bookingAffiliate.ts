const CJ_BOOKING_CLICK_BASE = 'https://www.tkqlhce.com/click-101879858-11891543';

function bookingSearchUrl(search: string) {
  const params = new URLSearchParams({ ss: search });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

function sidFromParts(search: string, placement: string) {
  const slug = `${placement}-${search}`
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);

  return `portugalconperro-${slug || 'booking'}`;
}

export function bookingUrl(search: string, placement = 'site') {
  const destination = encodeURIComponent(bookingSearchUrl(search));
  const sid = sidFromParts(search, placement);
  return `${CJ_BOOKING_CLICK_BASE}?url=${destination}&sid=${encodeURIComponent(sid)}`;
}

export function bookingSearchForDestination(name: string) {
  return `${name}, Portugal`;
}

export const bookingAffiliateDisclosure =
  'Los enlaces de Booking.com son enlaces de afiliación. Si reservas a través de ellos, Portugal con Perro puede recibir una comisión sin coste adicional para ti.';
