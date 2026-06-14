# Guía MVP — Arte en Luz

## Posicionamiento y venta sin backend ni pasarela

---

## 1. Reemplazar el número de WhatsApp

Buscar `34XXXXXXXXX` en todos los archivos y cambiarlo por tu número real:

```bash
# Ejemplo con tu número (sin +):
sed -i 's/34XXXXXXXXX/34600123456/g' *.html
```

El número aparece en:
- `index.html`, `catalog.html`, `bts.html`, `moments.html`, `contact.html`, `inspo.html` → botón flotante de consulta
- `builder.html` → botón flotante + enlace "Comprar Ahora" con datos del pedido

---

## 2. Posicionamiento gratuito (hacer hoy)

### 2.1 Google Business Profile

1. Ir a https://business.google.com
2. Crear perfil como tienda online (no física)
3. Categoría: "Tienda de artículos de regalo" o "Decoración del hogar"
4. Añadir:
   - Horario (aunque sea solo online)
   - Fotos de los 6 cuadros iluminados
   - Enlace a `catalog.html`
   - Descripción: "Cuadros iluminados personalizados. Transformamos tus fotos en regalos únicos con luz LED."
5. Pedir a 5-10 amigos/familiares que dejen reseña

Resultado: apareces en Google Maps y búsqueda local en < 48h.

### 2.2 Google Search Console

1. Ir a https://search.google.com/search-console
2. Añadir tu dominio
3. Crear `sitemap.xml` en la raíz del sitio con este contenido:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://tudominio.com/index.html</loc><priority>1.0</priority></url>
  <url><loc>https://tudominio.com/catalog.html</loc><priority>0.9</priority></url>
  <url><loc>https://tudominio.com/builder.html</loc><priority>0.8</priority></url>
  <url><loc>https://tudominio.com/moments.html</loc><priority>0.8</priority></url>
  <url><loc>https://tudominio.com/bts.html</loc><priority>0.7</priority></url>
  <url><loc>https://tudominio.com/contact.html</loc><priority>0.6</priority></url>
  <url><loc>https://tudominio.com/inspo.html</loc><priority>0.6</priority></url>
</urlset>
```

4. Subirlo a la raíz y enviarlo a Search Console
5. Ir a "Inspección de URL" → pedir indexación de `catalog.html`

### 2.3 Pinterest (canal orgánico más rápido)

1. Crear cuenta Business en https://business.pinterest.com
2. Crear 3 tableros:
   - "Regalos Originales para Bodas"
   - "Regalos para el Día de la Madre / Padre"
   - "Decoración con Fotos para el Hogar"
3. Subir 3-4 pins por tablero con las imágenes de los cuadros
4. Cada pin debe enlazar a `catalog.html` (nunca al builder)
5. En la descripción del pin: "Cuadro iluminado personalizado [nombre]. Sube tu foto y recíbelo listo para regalar. Envío a toda España."

Pinterest indexa en 1-3 días y puede mandar tráfico desde la semana 1.

### 2.4 Meta tags (ya están puestas)

Si quieres compartir en redes sociales con vista previa bonita, añadir en el `<head>` de `index.html`:

```html
<meta property="og:title" content="Arte en Luz — Cuadros Iluminados Personalizados">
<meta property="og:description" content="Transformamos tus fotos en cuadros iluminados LED. El regalo perfecto.">
<meta property="og:image" content="https://tudominio.com/og-image.jpg">
<meta property="og:url" content="https://tudominio.com">
```

---

## 3. Venta sin pasarela

### 3.1 Flujo de pedido completo

```
Cliente ve producto → hace clic en "Lo Quiero" / "Comprar Ahora"
  → se abre WhatsApp con mensaje pre-escrito
  → tú recibes el mensaje con los detalles
  → respondes confirmando disponibilidad y precio
  → cliente paga por Bizum o Transferencia
  → tú confirmas el pago y produces el cuadro
  → envías foto del resultado por WhatsApp antes de enviar
  → envías el paquete con número de seguimiento
```

### 3.2 Bizum (recomendado)

- El pago llega al instante a tu banco
- No hay comisiones (para pagos de persona a persona)
- El cliente solo necesita tu número de móvil

Pasos:
1. Activar Bizum en tu banco (si no lo tienes ya)
2. Cuando un cliente confirme: "Mi número es el XXX, haz el Bizum al mismo número"
3. Confirmas cuando veas el ingreso

### 3.3 Transferencia bancaria

- Alternativa si el cliente no tiene Bizum
- Dar IBAN y pedir confirmación con el justificante por WhatsApp

### 3.4 Facturación simple (sin backend)

Usar una **plantilla editable** en Google Docs:

1. Ir a https://docs.google.com
2. Crear un documento con:
   - Tu logo y datos fiscales
   - Número de factura (F-001, F-002...)
   - Nombre del producto, cantidad, precio
   - IVA (21%) si aplica
   - Total
3. Para cada venta: duplicar la plantilla, rellenar, exportar a PDF, enviar por WhatsApp

O aún más rápido: usar **https://invoice-generator.com** (gratis, sin registro)

### 3.5 Seguimiento de pedidos

Usar una **tabla en Google Sheets** con columnas:

| Fecha | Cliente | Producto | Tamaño | Marco | Precio | Pagado? | Enviado? | Tracking |
|-------|---------|----------|--------|-------|--------|---------|----------|----------|
| 14/06 | Ana García | Recuerdo Eterno | 10x15 | Nogal | 49,90€ | ✅ Sí | ❌ No | - |

Compartes la hoja contigo mismo, la abres en el móvil y actualizas.

---

## 4. Resumen semanal

| Día | Acción | Tiempo |
|-----|--------|--------|
| Día 1 | Crear Google Business Profile + reseñas | 1h |
| Día 1 | Search Console + sitemap | 30min |
| Día 1 | Publicar 6-10 pins en Pinterest | 1h |
| Día 1 | Preparar plantilla de factura en Google Docs | 30min |
| Día 1 | Crear Google Sheets de pedidos | 15min |
| Día 2-7 | Compartir en grupos de WhatsApp / Instagram | 15min/día |
| Día 2-7 | Responder leads que lleguen por WhatsApp | según demanda |

---

## 5. Próximo paso cuando quieras escalar

- **Typeform + Google Sheets** para automatizar captura de pedidos
- **Stripe / PayPal** como pasarela de pago
- **Cuenta atrás** (empresa real con facturación automatizada)
