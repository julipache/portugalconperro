# Modelo de datos inicial

La ventaja competitiva de Portugal con Perro será almacenar datos que los buscadores generalistas no tratan bien y conservar la evidencia de cada afirmación.

## `properties`

Campos mínimos previstos:

- `id`
- `source`
- `source_property_id`
- `source_url`
- `name`
- `slug`
- `description`
- `latitude`
- `longitude`
- `destination_id`
- `property_type`
- `pets_allowed`
- `dogs_max`
- `dog_max_weight_kg`
- `pet_fee_amount`
- `pet_fee_notes`
- `garden`
- `garden_private`
- `garden_fenced`
- `fence_height_cm`
- `fence_notes`
- `pool`
- `pool_private`
- `pool_fenced_separately`
- `dogs_can_stay_alone`
- `verification_status`
- `last_checked_at`

## Evidencias

Los atributos sensibles a interpretación no deberían guardarse solo como booleanos. Se propone `property_evidence`:

- `property_id`
- `attribute`
- `value`
- `source_type`
- `source_url`
- `source_excerpt`
- `confidence`
- `checked_at`

Ejemplo: `attribute = garden_fenced`, `value = true`, `source_excerpt = "fully enclosed garden"`.

## Niveles de verificación

1. `inferred`: detección automática que requiere revisión.
2. `source_confirmed`: una fuente lo declara explícitamente.
3. `owner_verified`: confirmado directamente por el propietario/gestor.

La interfaz pública debe distinguir estos niveles y no presentar una inferencia como hecho confirmado.
