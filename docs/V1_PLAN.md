# Portugal con Perro — Plan V1

> Documento vivo para decidir, ejecutar y revisar la V1. La prioridad de esta primera versión es **publicar alojamientos reales usando únicamente datos estructurados o explícitos de proveedores**, sin enriquecimiento manual ni inferencias de IA.

## 1. Objetivo de la V1

Construir una web útil y monetizable que permita descubrir alojamientos en Portugal que admiten perros y filtrarlos por características que el proveedor ya declara de forma estructurada, especialmente:

- admite mascotas;
- vallado;
- casa / apartamento / chalet / casa rural;
- independiente;
- piscina;
- aire acondicionado;
- WiFi;
- terraza o balcón;
- cocina;
- lavadora;
- habitaciones y baños;
- distancia al agua;
- valoración;
- precio y disponibilidad cuando la integración lo permita.

La V1 **no intentará averiguar** altura de valla, número máximo de perros, tamaño/peso permitido, si el perro puede quedarse solo, si la piscina está separada del jardín, etc., salvo que el proveedor los entregue como datos explícitos y reutilizables.

---

## 2. Principio de datos

### Regla principal

**Si el proveedor no lo afirma, nosotros no lo afirmamos.**

Ejemplos:

- Interhome marca `Vallado` → podemos mostrar “Vallado”.
- Interhome marca `Mascotas permitidas` → podemos mostrar “Admite mascotas”.
- La foto parece tener una valla → no se convierte en dato.
- Una descripción parece sugerir que el terreno está cerrado → no se convierte en dato en la V1.

### Fuente de verdad

En V1, la fuente de verdad será el proveedor de inventario. Supabase almacenará una copia normalizada de los campos que podamos usar conforme al acuerdo/API.

### Datos derivados permitidos

Sí podemos derivar información matemática u organizativa a partir de datos fiables, por ejemplo:

- agrupación por destino o región;
- distancia calculada a partir de coordenadas;
- combinación de filtros;
- etiquetas SEO basadas en atributos estructurados;
- ordenación interna.

No convertiremos deducciones visuales o interpretaciones ambiguas en hechos.

---

## 3. Arquitectura V1

```text
Interhome / proveedor
        │
        ▼
   Importador
        │
        ▼
 Normalización
        │
        ▼
    Supabase
        │
        ├── alojamientos
        ├── destinos
        ├── atributos
        └── enlaces de afiliado
        │
        ▼
 Astro / Vercel
        │
        ├── buscador
        ├── filtros
        ├── fichas
        └── páginas SEO
```

Supabase no será una fuente inventada de datos: será **nuestra capa de almacenamiento, búsqueda y normalización**.

---

## 4. Fases y seguimiento

Estados utilizados:

- ⬜ pendiente
- 🟨 en curso
- ✅ terminado
- ⛔ bloqueado
- 🧪 validando

### Fase 0 — Base técnica

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ✅ | Repositorio GitHub | Proyecto creado y accesible |
| ✅ | Base Astro | Home, alojamientos y destinos construyen correctamente |
| ✅ | CI | Build de GitHub Actions pasa |
| ✅ | Vercel | Primera versión desplegada |
| ✅ | Modelo inicial | Existe `docs/data-model.md` |
| ✅ | Plan V1 | Este documento queda como referencia del proyecto |

### Fase 1 — Confirmar Interhome

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| 🟨 | Alta como partner | Interhome responde y activa o revisa la cuenta |
| ⬜ | Confirmar acceso API/feed | Sabemos exactamente qué integración nos ofrecen |
| ⬜ | Confirmar atributo `Vallado` | Sabemos si API/feed expone el filtro/atributo de vallado |
| ⬜ | Confirmar mascotas | Sabemos cómo llega el atributo de mascotas |
| ⬜ | Confirmar enlaces afiliados | Sabemos cómo generar URLs con atribución de partner |
| ⬜ | Confirmar condiciones de uso | Sabemos qué campos, imágenes y textos podemos almacenar/publicar |
| ⬜ | Confirmar precios/disponibilidad | Sabemos si son en tiempo real, cacheables y con qué frecuencia |

#### Preguntas prioritarias a Interhome

1. Does the Distribution API/feed expose the **Fenced / Fenced Garden** attribute available on Interhome.com?
2. Which field identifies **pets allowed**?
3. Can properties be filtered by these attributes server-side?
4. Are property descriptions and photos licensed for display on partner websites?
5. Can we store property content in our database, and for how long?
6. How should affiliate/deep links be generated?
7. What is the commission model for our account?
8. Are prices and availability available through the same API?

### Fase 2 — Supabase

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | Crear proyecto / seleccionar proyecto | URL y claves de entorno disponibles |
| ⬜ | Tabla `properties` | Almacena el alojamiento normalizado |
| ⬜ | Tabla `destinations` | Regiones/localidades reutilizables |
| ⬜ | Tabla `property_sources` | Identifica proveedor e ID externo |
| ⬜ | Tabla `amenities` | Catálogo normalizado de atributos |
| ⬜ | Relación property/amenity | Permite filtrar eficientemente |
| ⬜ | Índices | Búsquedas por destino, mascotas, vallado, piscina y tipo rápidas |
| ⬜ | Campos de sincronización | `source_updated_at`, `synced_at`, estado activo/inactivo |

#### Campos mínimos de `properties`

- `id`
- `source`
- `source_property_id`
- `source_url`
- `affiliate_url`
- `name`
- `slug`
- `latitude`
- `longitude`
- `destination_id`
- `property_type`
- `pets_allowed`
- `fenced`
- `independent`
- `pool`
- `air_conditioning`
- `wifi`
- `terrace_or_balcony`
- `kitchen`
- `washing_machine`
- `bedrooms`
- `bathrooms`
- `distance_to_water_m`
- `rating`
- `price_from`
- `currency`
- `active`
- `source_updated_at`
- `synced_at`

El esquema definitivo se adaptará a lo que realmente entregue Interhome. **No diseñar campos ficticios alrededor de una API que aún no conocemos.**

### Fase 3 — Importador de inventario

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | Cliente Interhome | Podemos obtener un lote de alojamientos |
| ⬜ | Mapeo de atributos | Campos del proveedor → campos Supabase |
| ⬜ | Upsert | Una segunda importación actualiza sin duplicar |
| ⬜ | Desactivación | Alojamientos retirados dejan de mostrarse |
| ⬜ | Logs | Podemos saber cuántos entraron, cambiaron o fallaron |
| ⬜ | Sincronización programada | Se ejecuta con la frecuencia permitida por el proveedor |
| ⬜ | Muestra inicial | Al menos 50 alojamientos reales de Portugal importados correctamente |

### Fase 4 — Buscador V1 real

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | Eliminar datos demo | Ninguna ficha pública depende de `propertySeeds` |
| ⬜ | Listado desde Supabase | `/alojamientos/` muestra inventario real |
| ⬜ | Filtro mascotas | Funciona sobre datos reales |
| ⬜ | Filtro vallado | Funciona sobre el atributo real del proveedor |
| ⬜ | Filtro tipo | Casa, apartamento, chalet, etc. |
| ⬜ | Filtro piscina | Funciona sobre datos reales |
| ⬜ | Filtro distancia al agua | Si el proveedor entrega el dato |
| ⬜ | Ordenación | Relevancia / valoración / precio si están disponibles |
| ⬜ | Estados vacíos | Búsquedas sin resultados tienen UX útil |

### Fase 5 — Ficha de alojamiento

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | URL propia | `/alojamientos/{slug}/` |
| ⬜ | Características reales | Solo se muestran atributos recibidos del proveedor |
| ⬜ | Fuente clara | La ficha identifica al proveedor cuando corresponda |
| ⬜ | CTA afiliado | “Ver precio y disponibilidad” lleva al enlace atribuido |
| ⬜ | Imágenes | Solo si el acuerdo permite reutilizarlas |
| ⬜ | SEO técnico | title, description, canonical y datos estructurados adecuados |

### Fase 6 — Destinos y SEO

La V1 no necesita una guía editorial enorme. Primero crearemos páginas útiles a partir del inventario real.

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | Destinos prioritarios | Algarve, Gerês, Nazaré, Cascais, Sintra y Comporta |
| ⬜ | Conteo real | Cada destino muestra alojamientos reales disponibles |
| ⬜ | Páginas por atributo | Solo se crean si hay suficiente inventario |
| ⬜ | Sitemap | Incluye únicamente URLs válidas e indexables |
| ⬜ | Canonicals | Evitan indexar combinaciones de filtros sin valor |
| ⬜ | Search Console | Propiedad conectada al dominio definitivo |

#### Primeras páginas SEO candidatas

Solo se publican cuando haya resultados suficientes:

- `/portugal/alojamientos-con-perro/`
- `/portugal/casas-valladas-para-perros/`
- `/algarve/alojamientos-con-perro/`
- `/algarve/casas-valladas-para-perros/`
- `/algarve/casas-con-piscina-que-admiten-perros/`
- páginas equivalentes para destinos con inventario real.

Evitar generar miles de páginas vacías o casi idénticas.

### Fase 7 — Monetización

| Estado | Tarea | Criterio de terminado |
|---|---|---|
| ⬜ | Partner ID | Tenemos identificador de afiliado operativo |
| ⬜ | Deep links | Cada CTA genera una URL atribuida correctamente |
| ⬜ | Tracking de clic | Podemos medir clics de salida por alojamiento/destino |
| ⬜ | Analytics | Vercel Analytics u otra solución mide navegación |
| ⬜ | Conversión | Interhome permite consultar reservas/comisiones atribuidas |

### Fase 8 — Lanzamiento V1

La V1 se considera lanzada cuando:

- [ ] hay inventario real en Supabase;
- [ ] el filtro de mascotas funciona;
- [ ] el filtro de vallado funciona con datos del proveedor;
- [ ] hay al menos 50 alojamientos reales publicados;
- [ ] las fichas enlazan al proveedor con tracking de afiliado;
- [ ] no quedan datos demo indexables;
- [ ] sitemap y robots son correctos;
- [ ] el dominio definitivo apunta a Vercel;
- [ ] Analytics y Search Console están conectados;
- [ ] hemos comprobado manualmente una muestra de 20 alojamientos contra Interhome.

---

## 5. Control de calidad

Antes de publicar la V1 haremos una auditoría manual de una muestra.

### Muestra mínima

20 alojamientos elegidos al azar, comprobando:

- nombre;
- ubicación;
- admite mascotas;
- vallado;
- tipo de alojamiento;
- piscina;
- enlace de salida;
- disponibilidad del alojamiento en la fuente.

### Objetivo

**0 falsos positivos en `pets_allowed` y `fenced` dentro de la muestra.**

Si hay discrepancias, se detiene la publicación del filtro afectado hasta entender el mapeo.

---

## 6. Qué dejamos fuera de la V1

Deliberadamente fuera para no complicar el lanzamiento:

- inferencia mediante IA;
- análisis de fotografías;
- altura de vallas;
- máximo de perros si el proveedor no lo estructura;
- peso/tamaño permitido si no está estructurado;
- piscina separada del jardín;
- posibilidad de dejar al perro solo;
- restaurantes dog-friendly;
- playas y restricciones municipales;
- rutas y senderismo;
- verificaciones de propietarios;
- reseñas propias de usuarios;
- otros proveedores hasta validar primero Interhome.

Estas funciones serán candidatas para V1.1/V2 después de comprobar que el inventario y la monetización funcionan.

---

## 7. Métricas para decidir si continuar

Durante las primeras semanas con tráfico mediremos:

1. páginas indexadas;
2. impresiones y clics orgánicos;
3. búsquedas internas realizadas;
4. porcentaje de usuarios que usan `Vallado`;
5. clics hacia Interhome;
6. CTR ficha → Interhome;
7. reservas/comisiones atribuidas;
8. destinos y filtros que generan más intención.

### Hipótesis principal

El filtro **“Vallado”** y combinaciones como **“mascotas + vallado + casa + piscina”** aportan suficiente valor diferencial como para generar búsquedas orgánicas y clics de reserva.

---

## 8. Riesgos que debemos vigilar

| Riesgo | Respuesta |
|---|---|
| La API no expone `Vallado` | Revisar feed alternativo con Interhome; no simular el dato |
| Poco inventario `mascotas + vallado` | Medir antes de invertir en muchas páginas SEO |
| Restricciones de licencia | Adaptar almacenamiento y presentación al contrato |
| Precios desactualizados | Mostrar precio solo si puede sincronizarse correctamente |
| URLs SEO masivas sin contenido | Indexar únicamente combinaciones con inventario y utilidad |
| Dependencia de un proveedor | Validar Interhome primero; diversificar después si el proyecto funciona |

---

## 9. Registro de decisiones

Añadir aquí las decisiones importantes para no reabrirlas continuamente.

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-09-07 | V1 sin enriquecimiento | Queremos validar inventario, filtros y monetización antes de añadir complejidad |
| 2026-09-07 | No inferir `Vallado` | Solo publicaremos datos declarados explícitamente por el proveedor |
| 2026-09-07 | Interhome como primer proveedor | Tiene inventario pet-friendly, filtros útiles, atributo Vallado y programa de partners |
| 2026-09-07 | Supabase como capa normalizada | Facilita filtros, SEO, sincronización y futura incorporación de otros proveedores |

---

## 10. Próximo paso

**Esperar/obtener respuesta de Interhome y cerrar la Fase 1.**

Mientras llega la respuesta sí podemos preparar Supabase y la estructura del importador, pero no debemos cerrar el esquema alrededor de campos que todavía no sabemos cómo entrega la API.

Cuando Interhome responda, este documento debe actualizarse con:

- tipo de integración recibida;
- campos reales;
- restricciones de licencia;
- modelo de comisión;
- frecuencia de sincronización;
- decisión GO / NO-GO para continuar con Interhome como fuente principal.
