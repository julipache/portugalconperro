import type { APIRoute } from 'astro';
import { destinations } from '../data/destinations';

export const prerender = true;

const staticPaths = ['/', '/alojamientos/'];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://portugalconperro.com');
  const destinationPaths = destinations
    .filter((destination) => destination.guideStatus === 'verified')
    .map((destination) => `/destinos/${destination.slug}/`);
  const paths = [...new Set([...staticPaths, ...destinationPaths])];

  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, baseUrl).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
