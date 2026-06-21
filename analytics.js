/* =============================================================================
   Arte en Luz — Analítica, consentimiento de cookies y conversiones
   -----------------------------------------------------------------------------
   - Google Analytics 4 (GA4) con Google Consent Mode v2 (por defecto DENEGADO).
   - Banner de cookies: hasta que el usuario acepta, NO se activan cookies de
     analítica ni los píxeles publicitarios.
   - Píxeles de Meta y TikTok: pega tus IDs abajo y se activarán al aceptar.
   - Eventos de conversión automáticos (clic en crear, WhatsApp, pedido, form).

   QUÉ TIENES QUE TOCAR:
     · GA4_ID         → ya está puesto.
     · META_PIXEL_ID  → pega tu ID de Meta Pixel (o deja "" para desactivarlo).
     · TIKTOK_PIXEL_ID→ pega tu ID de TikTok Pixel (o deja "" para desactivarlo).
   ============================================================================= */

(function () {
  "use strict";

  var GA4_ID = "G-J3M39D533M";
  var META_PIXEL_ID = "1325800945712549";    // Meta Pixel
  var TIKTOK_PIXEL_ID = "";  // <-- pega aquí tu ID de TikTok Pixel, ej: "CXXXXXXXXXXXX"

  var CONSENT_KEY = "ael_cookie_consent"; // "granted" | "denied"

  /* ----------------------- Google Analytics + Consent Mode ----------------- */
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };

  // Por defecto, todo denegado (cumplimiento RGPD).
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500
  });

  // Cargar GA4 (en modo sin cookies hasta que haya consentimiento).
  var ga = document.createElement("script");
  ga.async = true;
  ga.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(ga);
  gtag("js", new Date());
  gtag("config", GA4_ID);

  /* ----------------------------- Píxeles ----------------------------------- */
  function loadMetaPixel() {
    if (!META_PIXEL_ID || window.fbq) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");
  }

  function loadTikTokPixel() {
    if (!TIKTOK_PIXEL_ID || window.ttq) return;
    !(function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
      ttq.setAndDefer = function (e, n) { e[n] = function () { e.push([n].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.load = function (e) {
        var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = n; ttq._t = ttq._t || {}; ttq._t[e] = +new Date();
        var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = n + "?sdkid=" + e + "&lib=" + t;
        var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a);
      };
      ttq.load(TIKTOK_PIXEL_ID); ttq.page();
    })(window, document, "ttq");
  }

  function grantConsent() {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted"
    });
    loadMetaPixel();
    loadTikTokPixel();
  }

  /* ----------------------------- Banner de cookies ------------------------- */
  function buildBanner() {
    var saved = null;
    try { saved = localStorage.getItem(CONSENT_KEY); } catch (e) {}
    if (saved === "granted") { grantConsent(); return; }
    if (saved === "denied") { return; }

    var css = document.createElement("style");
    css.textContent =
      "#ael-cookies{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:9999;max-width:560px;margin:0 auto;" +
      "background:#15110c;color:#f6f1e9;border:1px solid rgba(246,241,233,.12);border-radius:4px;" +
      "padding:1.1rem 1.25rem;box-shadow:0 20px 60px -20px rgba(0,0,0,.6);font-family:Manrope,system-ui,sans-serif;" +
      "display:flex;flex-direction:column;gap:.85rem;animation:aelup .6s ease}" +
      "@keyframes aelup{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}" +
      "#ael-cookies p{margin:0;font-size:.82rem;line-height:1.6;color:rgba(246,241,233,.75);font-weight:300}" +
      "#ael-cookies a{color:#c6a574;text-decoration:underline}" +
      "#ael-cookies .row{display:flex;gap:.6rem;flex-wrap:wrap}" +
      "#ael-cookies button{cursor:pointer;border-radius:9999px;font-size:.62rem;letter-spacing:.18em;" +
      "text-transform:uppercase;padding:.7rem 1.3rem;border:1px solid transparent;transition:all .3s ease}" +
      "#ael-cookies .ok{background:#a9824c;color:#f6f1e9}#ael-cookies .ok:hover{background:#c6a574}" +
      "#ael-cookies .no{background:transparent;color:rgba(246,241,233,.7);border-color:rgba(246,241,233,.2)}" +
      "#ael-cookies .no:hover{color:#f6f1e9;border-color:rgba(246,241,233,.5)}";
    document.head.appendChild(css);

    var box = document.createElement("div");
    box.id = "ael-cookies";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Aviso de cookies");
    box.innerHTML =
      '<p>Usamos cookies propias y de terceros para analizar el uso del sitio y mejorar tu experiencia. ' +
      'Puedes aceptarlas o rechazarlas. Más información en nuestra ' +
      '<a href="privacy.html">Política de Privacidad</a>.</p>' +
      '<div class="row">' +
      '<button class="ok" id="ael-accept">Aceptar</button>' +
      '<button class="no" id="ael-reject">Rechazar</button>' +
      "</div>";
    document.body.appendChild(box);

    document.getElementById("ael-accept").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "granted"); } catch (e) {}
      grantConsent();
      box.remove();
    });
    document.getElementById("ael-reject").addEventListener("click", function () {
      try { localStorage.setItem(CONSENT_KEY, "denied"); } catch (e) {}
      box.remove();
    });
  }

  /* --------------------------- Eventos de conversión ----------------------- */
  function track(name, params) {
    try { if (window.gtag) gtag("event", name, params || {}); } catch (e) {}
    try { if (window.fbq) fbq("trackCustom", name, params || {}); } catch (e) {}
    try { if (window.ttq) ttq.track(name, params || {}); } catch (e) {}
  }
  window.aelTrack = track; // disponible globalmente por si quieres llamarlo a mano

  function wireEvents() {
    document.addEventListener("click", function (e) {
      var el = e.target.closest("a, button");
      if (!el) return;
      var href = (el.getAttribute("href") || "");
      if (el.id === "addCart") { track("finalizar_pedido"); return; }
      if (href.indexOf("wa.me") !== -1) { track("clic_whatsapp"); return; }
      if (href.indexOf("builder.html") !== -1) { track("clic_crear_recuerdo"); return; }
    }, true);

    document.addEventListener("submit", function () {
      track("envio_formulario");
    }, true);
  }

  /* ------------------------------- Init ------------------------------------ */
  function init() { buildBanner(); wireEvents(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
