# Guía de Crecimiento — Arte en Luz

Complemento de `GUIA_MVP.md`. Aquí está **todo lo necesario para que la venta funcione** de verdad y sea sostenible, ordenado por prioridad.

---

## 0. Estado actual de la web (hecho)

- Google Analytics (GA4 `G-J3M39D533M`) + **Consent Mode** y banner de cookies (`analytics.js`).
- `sitemap.xml`, `robots.txt`, `404.html`.
- Páginas legales: `privacy.html`, `terms.html`, `aviso-legal.html` (con **placeholders** de datos fiscales por rellenar).
- Flujo Builder → `order.html` → `tracking.html`.
- Blog (`blog.html` / `article.html`) listo para conectar a una API.
- Seguimiento de conversiones básico (clics en "Crear mi recuerdo", WhatsApp, "Finalizar pedido", formulario) vía `analytics.js`.

### Pendientes que dependen de ti (rellenar en el código)
- **Número de WhatsApp:** `sed -i 's/34XXXXXXXXX/34TUNUMERO/g' *.html`
- **Datos fiscales** en `privacy.html`, `terms.html`, `aviso-legal.html` (busca `[Razón social]`, `[NIF/CIF]`, `[Tu dirección]`).
- **IDs de píxeles** en `analytics.js` (`META_PIXEL_ID`, `TIKTOK_PIXEL_ID`).

---

## 1. Imprescindibles antes de vender (legal + base)

- **Alta de autónomo + Hacienda** (modelo 036/037). Vender de forma recurrente sin alta es ilegal. Una gestoría online (~50–80 €/mes) gestiona IVA trimestral (303), IRPF, etc.
- **Datos fiscales reales** en las 3 páginas legales (obligatorio por la LSSI-CE).
- **Banner de cookies / Consent Mode** — ya montado; revisa textos.
- **Dominio + correo profesional:** registrar `arteenluz.es`, conectarlo a Firebase Hosting (dominio personalizado + SSL) y crear `contacto@arteenluz.es` (Zoho Mail gratis o Google Workspace ~6 €/mes).
- **WhatsApp Business real** (no el normal) y sustituirlo en la web.

---

## 2. Los números (economía unitaria)

Antes de promocionar, define:
- **Coste por pieza** (material + tiempo + packaging) → **margen objetivo 65–75%** (sano en regalo personalizado).
- **Precio:** los 89–139 € actuales encajan en premium; valida con coste real.
- **Sube el ticket medio (AOV)** con extras: marco premium (+15 €), tarjeta dedicatoria, packaging regalo (+5–8 €), peana/luz, packs de 2–3 piezas.
- **Envío:** coste real (3–6 € península). "Envío gratis" sube conversión (incorpóralo al precio).
- Con el margen sabrás tu **CAC máximo** (cuánto puedes pagar por captar un cliente).

---

## 3. Perfiles a crear (canales), por impacto

1. **Instagram Business** — nº1. Reels del efecto apagado→encendido + reacciones reales.
2. **TikTok** — mismo contenido; potencial viral del efecto revelación.
3. **WhatsApp Business** — perfil de empresa, **catálogo**, respuestas rápidas, mensaje de bienvenida, **etiquetas** (Nuevo/Pagado/Enviado).
4. **Etsy** — mercado clave de regalos personalizados; tráfico ya de compra.
5. **Pinterest** + **Google Business Profile** (ver GUIA_MVP).
6. **Facebook Page** (necesaria para Meta Ads) + opcional Marketplace.

Para todos: mismo `@arteenluz`, logo y bio ("Convertimos tus recuerdos en luz · Regalo personalizado · Envíos a toda España").

---

## 4. Campaña de marketing inicial

**Activo estrella:** 3–5 vídeos verticales (10–20 s) del efecto día→noche + reacción de quien lo recibe. Sin esto, los ads no rinden.

**Orgánico (semana 0, 0 €):**
- Regala 3–5 piezas a microinfluencers (bodas/maternidad/mascotas/decoración, 10k–50k) a cambio de un Reel.
- Publica el efecto revelación a diario durante el lanzamiento.

**Pago (con vídeo + píxel + web pulida), 150–300 € de arranque:**
- **Meta Ads** objetivo *mensajes a WhatsApp* o tráfico a `catalog.html`.
- Segmentación: intereses regalo/aniversario/bodas/mascotas + **públicos similares** + **retargeting** a visitantes (requiere píxel).
- Empieza con 5–10 €/día, mide y escala lo que convierte.

**Calendario estacional** (preparar 3–4 semanas antes, con deadline de pedido):
San Valentín · Día de la Madre · Día del Padre · bodas (may–sep) · Navidad.

---

## 5. Web / conversión

- **Banner cookies + Consent Mode** — hecho (`analytics.js`).
- **Meta Pixel + TikTok Pixel** — estructura lista; pega los IDs en `analytics.js`.
- **Eventos GA4** — hecho: `clic_crear_recuerdo`, `clic_whatsapp`, `finalizar_pedido`, `envio_formulario`. Márcalos como conversiones en GA4 (Administrar → Eventos).
- **Captura de email + email marketing** (Brevo/Mailerlite gratis): bloque "10% en tu primer recuerdo" → automatiza bienvenida y recupera indecisos. *(Pendiente de conectar a tu herramienta.)*
- **Reseñas reales** en la home (sustituir las de ejemplo).
- **Stripe Payment Links / Bizum:** cobra con tarjeta sin backend mandando un enlace por WhatsApp. *(Pendiente: crear los links en tu Stripe.)*
- Señales de confianza visibles: plazo de envío, "Hecho a mano en España", garantía, opiniones.

---

## 6. Operativa y logística

- **Producción y plazos:** capacidad/semana + plazo realista (producción + envío) mostrado en la web; gestiona picos de campañas.
- **Packaging premium:** el *unboxing* es parte del regalo (caja, lazo, tarjeta) y genera contenido.
- **Envío:** transportista con seguimiento y seguro (Correos/GLS/SEUR); zonas y plazos definidos.
- **Foto del cliente:** la recibes por WhatsApp/email; guárdala con permiso (ya en la política de privacidad).
- **Control de calidad** + foto de aprobación antes de enviar.
- **Devoluciones:** lo personalizado está excluido del desistimiento (ya en términos); política clara para defectos.

---

## 7. Postventa y fidelización

- Agradecimiento + **petición de reseña** (Google y web) con foto.
- **Referidos:** "Recomienda y os lleváis 10% los dos".
- Recordatorios estacionales por email a clientes.

---

## 8. Métricas semanales

Visitas → leads (chats) → ventas → **conversión**, **AOV**, **CAC**, **ROAS** (ingresos/gasto en ads).

---

## 9. Hoja de ruta

- **Semana 1:** autónomo · dominio+correo · datos legales reales · WhatsApp real + Business con catálogo · revisar banner cookies · grabar 3 vídeos del efecto.
- **Semanas 2–3:** IG/TikTok/Pinterest/Etsy + Google Business · sembrar microinfluencers · captar emails · primeras reseñas reales.
- **Mes 2:** pegar IDs de píxeles · marcar conversiones GA4 · Stripe Payment Links · primera campaña Meta (150–300 €) con retargeting · email de bienvenida.
- **Mes 3+:** tienda real (Shopify/Woo o checkout propio) si el volumen lo pide · automatizar pedidos · campañas estacionales.
