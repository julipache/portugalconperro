# Portugal con Perro — Plan de contenido

> Documento vivo para avanzar en contenido mientras esperamos la integración de alojamientos. La prioridad es construir guías útiles y SEO-first basadas en lugares reales y fuentes fiables, sin inventar condiciones dog-friendly.

## 1. Estrategia

Empezaremos por la **costa de norte a sur**, porque concentra gran parte del turismo, búsquedas con intención de viaje y futuras combinaciones con alojamientos. En paralelo mantendremos **Gerês** como gran excepción interior por su encaje natural con viajes con perro.

No intentaremos cubrir todo Portugal a la vez. Trabajaremos por **clusters geográficos** y completaremos uno antes de pasar al siguiente.

Orden general:

1. Costa Norte
2. Área de Porto y Aveiro
3. Costa Centro
4. Lisboa, Sintra y Cascais
5. Setúbal y Comporta
6. Costa Vicentina
7. Algarve occidental
8. Algarve central
9. Algarve oriental
10. Gerês y otros destinos interiores prioritarios

---

## 2. Qué contiene cada guía de destino

Cada página `/destinos/{slug}/` seguirá una plantilla común.

### Bloques V1

1. **Resumen del destino**
   - por qué puede interesar viajando con perro;
   - tipo de viaje: playa, naturaleza, urbano, escapada, etc.;
   - mejor época en términos generales.

2. **Lugares de interés**
   - miradores;
   - paseos marítimos;
   - parques;
   - centros históricos y zonas exteriores;
   - espacios naturales;
   - pueblos cercanos que merecen excursión.

3. **Paseos y rutas**
   - recorridos sencillos y populares;
   - longitud/dificultad cuando exista fuente fiable;
   - restricciones relevantes si las hay.

4. **Playas y costa**
   - listado de playas de interés;
   - el acceso con perro solo se afirmará cuando exista una fuente fiable y actual;
   - distinguir temporada de baño / fuera de temporada cuando proceda.

5. **Consejos prácticos**
   - calor/sombra;
   - zonas concurridas;
   - aparcamiento o accesibilidad cuando tenga especial relevancia;
   - precauciones naturales específicas del entorno.

6. **Alojamientos**
   - inicialmente bloque preparado pero sin inventario;
   - cuando llegue Interhome, se alimentará automáticamente con alojamientos reales del destino.

### Fuera de esta primera fase editorial

- restaurantes dog-friendly sin confirmación actual;
- afirmaciones sobre acceso de perros basadas en reseñas antiguas;
- veterinarios como catálogo masivo;
- contenidos genéricos escritos solo para alargar la página.

---

## 3. Regla editorial

**Un lugar turístico puede aparecer aunque no sea específicamente dog-friendly.**

La guía explicará qué puede hacer una persona que viaja con perro alrededor del lugar, pero no diremos que el perro puede entrar en un monumento, playa, parque o establecimiento salvo que esté confirmado.

Estados recomendados para accesos:

- `allowed`: una fuente fiable confirma acceso;
- `restricted`: existen condiciones o temporadas;
- `not_allowed`: prohibición confirmada;
- `unknown`: no tenemos confirmación suficiente.

`unknown` es preferible a adivinar.

---

## 4. Roadmap geográfico

### Cluster 1 — Costa Norte

Estado: ⬜ pendiente

Destinos base:

- Viana do Castelo
- Caminha
- Vila Praia de Âncora
- Esposende

Objetivo: 4 guías completas y un conjunto compartido de lugares de interés de costa, paseos y naturaleza.

### Cluster 2 — Porto y Aveiro

Estado: ⬜ pendiente

Destinos base:

- Porto
- Vila Nova de Gaia
- Matosinhos
- Espinho
- Aveiro
- Costa Nova

### Cluster 3 — Costa Centro

Estado: ⬜ pendiente

Destinos base:

- Figueira da Foz
- São Pedro de Moel
- Nazaré
- São Martinho do Porto
- Peniche
- Baleal
- Óbidos

Nazaré será uno de los primeros destinos prioritarios porque ya forma parte de la V1 visual del sitio.

### Cluster 4 — Lisboa, Sintra y Cascais

Estado: ⬜ pendiente

Destinos base:

- Ericeira
- Sintra
- Cascais
- Lisboa
- Costa da Caparica

### Cluster 5 — Setúbal y Comporta

Estado: ⬜ pendiente

Destinos base:

- Setúbal
- Serra da Arrábida
- Sesimbra
- Tróia
- Comporta

### Cluster 6 — Costa Vicentina

Estado: ⬜ pendiente

Destinos base:

- Sines
- Porto Covo
- Vila Nova de Milfontes
- Zambujeira do Mar
- Odeceixe

### Cluster 7 — Algarve occidental

Estado: ⬜ pendiente

Destinos base:

- Aljezur
- Sagres
- Lagos

### Cluster 8 — Algarve central

Estado: ⬜ pendiente

Destinos base:

- Portimão
- Carvoeiro
- Armação de Pêra
- Albufeira
- Vilamoura
- Quarteira

### Cluster 9 — Algarve oriental

Estado: ⬜ pendiente

Destinos base:

- Faro
- Olhão
- Tavira
- Vila Real de Santo António

### Cluster 10 — Interior prioritario

Estado: ⬜ pendiente

Primero:

- Gerês

Después, solo si vemos demanda o buen inventario de alojamientos:

- Serra da Estrela
- Douro
- Évora / Alentejo interior

---

## 5. Orden de trabajo recomendado

No seguir literalmente cada kilómetro de costa. El orden inicial será:

1. **Nazaré** — crear la plantilla definitiva de guía.
2. **Cascais** — probar destino costero + urbano.
3. **Gerês** — probar destino de naturaleza/interior.
4. **Algarve (hub regional)** — página agregadora.
5. **Lagos** — primer destino Algarve.
6. **Sintra** — destino mixto de naturaleza/cultura.
7. A partir de ahí, completar norte → sur por clusters.

Motivo: estos seis destinos ya aparecen o encajan con la estructura actual y nos permiten validar distintos tipos de página antes de producir decenas.

---

## 6. Modelo de datos editorial previsto

Cuando pasemos el contenido a Supabase, separar:

### `destinations`

- id
- slug
- name
- region
- latitude
- longitude
- summary
- intro
- published
- last_reviewed_at

### `places`

- id
- destination_id
- name
- slug
- category
- latitude
- longitude
- summary
- dog_access_status
- dog_access_notes
- source_url
- source_checked_at

Categorías iniciales:

- viewpoint
- park
- beach
- walk
- natural_area
- town
- attraction

No hace falta crear estas tablas hasta que tengamos claro el primer contenido real; este modelo sirve como dirección.

---

## 7. Proceso para crear cada destino

1. Buscar fuentes oficiales de turismo, ayuntamiento y espacios naturales.
2. Crear una lista inicial de 8–15 lugares realmente útiles.
3. Separar hechos permanentes de reglas que puedan cambiar.
4. Verificar especialmente cualquier afirmación de acceso con perro.
5. Redactar una guía breve pero útil.
6. Añadir enlaces internos a destinos cercanos.
7. Revisar manualmente antes de marcar `published`.
8. Anotar fecha de revisión de datos sensibles.

---

## 8. Criterio de “guía terminada”

Una guía puede publicarse cuando tenga como mínimo:

- [ ] introducción útil y específica;
- [ ] al menos 6 lugares de interés relevantes;
- [ ] al menos 2 opciones claras de paseo/ruta o zonas para caminar;
- [ ] información costera/playas cuando aplique;
- [ ] ninguna afirmación dog-friendly dudosa presentada como hecho;
- [ ] fuentes para las restricciones relevantes;
- [ ] title y meta description propios;
- [ ] enlaces a 2 o más destinos cercanos cuando existan;
- [ ] bloque preparado para alojamientos;
- [ ] fecha de última revisión.

---

## 9. Principio SEO

Crear primero **pocas páginas buenas**, no cientos de páginas vacías.

Jerarquía prevista:

```text
/portugal-con-perro/
/destinos/
/destinos/nazare/
/destinos/cascais/
/destinos/geres/
/destinos/lagos/
...
```

Cuando haya inventario suficiente, estas páginas enlazarán naturalmente a:

```text
/alojamientos/?destino=nazare
/alojamientos/?destino=lagos&vallado=true
```

Más adelante se podrán crear landings SEO específicas solo si tienen suficiente contenido e inventario.

---

## 10. Siguiente tarea

**Construir Nazaré como primera guía editorial real y usarla como plantilla para el resto.**

Una vez terminada, revisar estructura, longitud, fuentes y UX antes de replicarla en Cascais y Gerês.
