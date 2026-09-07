# Portugal con Perro

Guía especializada para viajar por Portugal con perro: alojamientos realmente pet-friendly, destinos, playas, rutas y restaurantes.

## Enfoque

No queremos ser otro listado de alojamientos con el filtro “admite mascotas”. La web se centrará en información útil para decidir de verdad: jardín privado, jardín completamente vallado, número y tamaño de perros admitidos, suplementos, piscina, posibilidad de dejar al perro solo y servicios dog friendly en el entorno.

## Stack inicial

- Astro 6, siguiendo la línea técnica de `eclipse2027spain`.
- Sitio estático y SEO-first preparado para Vercel.
- Supabase será la fuente de datos cuando conectemos el inventario real.
- Integraciones previstas: Interhome y otros partners/afiliados compatibles.

## Desarrollo

```bash
npm install
npm run dev
```

Variables opcionales preparadas en `.env.example`.

## V1

- Home con propuesta de valor y búsqueda.
- Directorio de alojamientos con filtros específicos para perros.
- Páginas SEO de destinos.
- Modelo de datos que almacena evidencia y nivel de verificación.
- Sustitución posterior de los datos de demostración por inventario real.

Consulta `docs/data-model.md` para el modelo previsto.
