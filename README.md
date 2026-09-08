# Portugal con Perro

Guía especializada para viajar por Portugal con perro: alojamientos realmente pet-friendly, destinos, playas, rutas y restaurantes.

## Plan V1

El roadmap operativo y las decisiones de alcance se mantienen en [`docs/V1_PLAN.md`](docs/V1_PLAN.md).

**Decisión actual:** la V1 se construirá sin enriquecimiento manual ni inferencias de IA. Solo se publicarán como hechos los atributos que el proveedor entregue de forma estructurada o explícita.

## Enfoque

No queremos ser otro listado de alojamientos con el filtro “admite mascotas”. La web se centrará en información útil para decidir de verdad: jardín privado, jardín completamente vallado, número y tamaño de perros admitidos, suplementos, piscina, posibilidad de dejar al perro solo y servicios dog friendly en el entorno.

En V1 empezaremos por los atributos que Interhome/proveedores puedan suministrar de forma fiable. El enriquecimiento adicional queda para fases posteriores.

## Stack inicial

- Astro 6, siguiendo la línea técnica de `eclipse2027spain`.
- Sitio estático y SEO-first preparado para Vercel.
- Supabase será la capa normalizada de datos cuando conectemos el inventario real.
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
- Inventario real procedente del proveedor.
- Supabase como capa de normalización y búsqueda.
- Sin inferencias de IA ni datos deducidos en la primera versión.

Consulta también `docs/data-model.md` para el modelo de datos previsto.
