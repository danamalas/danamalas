// Google Analytics only loads once the visitor has made a choice that
// enables it (Accept All, or Save with the Analytics toggle on) — nothing
// from Google is requested before that.
(function () {
  var GA_MEASUREMENT_ID = "G-STYPEB9N73";
  var STORAGE_KEY = "abo-cookie-consent"; // stores JSON: {"analytics": true|false}

  // Reuses the existing checkout Worker's /currency endpoint, which already
  // returns the visitor's country (via Cloudflare's request.cf.country) for
  // currency detection. We piggyback on it to decide whether a consent
  // banner is required at all: EU/EEA/UK/US visitors see it; everyone else
  // gets analytics enabled automatically since consent isn't required there.
  var GEO_ENDPOINT = "https://abo-checkout.sparkling-field-ca14.workers.dev/currency";
  var GEO_STORAGE_KEY = "abo-geo-consent-required"; // sessionStorage cache: "true" | "false"

  var CONSENT_REQUIRED_COUNTRIES = {
    // EU-27
    AT: 1, BE: 1, BG: 1, HR: 1, CY: 1, CZ: 1, DK: 1, EE: 1, FI: 1, FR: 1,
    DE: 1, GR: 1, HU: 1, IE: 1, IT: 1, LV: 1, LT: 1, LU: 1, MT: 1, NL: 1,
    PL: 1, PT: 1, RO: 1, SK: 1, SI: 1, ES: 1, SE: 1,
    // EEA
    NO: 1, IS: 1, LI: 1,
    // UK
    GB: 1,
    // US
    US: 1,
  };

  // Resolves true if the visitor's country requires showing the banner.
  // Caches the result per browser session. Defaults to true (show the
  // banner) on any failure or timeout, since that's the safer assumption.
  function checkConsentRequired() {
    try {
      var cached = sessionStorage.getItem(GEO_STORAGE_KEY);
      if (cached !== null) return Promise.resolve(cached === "true");
    } catch (e) {}

    var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timeoutId = controller ? setTimeout(function () { controller.abort(); }, 4000) : null;

    return fetch(GEO_ENDPOINT, controller ? { signal: controller.signal } : {})
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (timeoutId) clearTimeout(timeoutId);
        var required = !!CONSENT_REQUIRED_COUNTRIES[data.country];
        try {
          sessionStorage.setItem(GEO_STORAGE_KEY, required ? "true" : "false");
        } catch (e) {}
        return required;
      })
      .catch(function () {
        if (timeoutId) clearTimeout(timeoutId);
        return true;
      });
  }

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(analyticsEnabled) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: !!analyticsEnabled }));
    } catch (e) {}
  }

  function loadGoogleAnalytics() {
    if (window.__aboGaLoaded || GA_MEASUREMENT_ID.indexOf("XXXX") !== -1) return;
    window.__aboGaLoaded = true;

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookieConsent");
    if (!banner) return;

    var mainView = document.getElementById("cookieConsentMain");
    var settingsView = document.getElementById("cookieConsentSettings");
    var acceptBtn = document.getElementById("cookieConsentAccept");
    var rejectBtn = document.getElementById("cookieConsentReject");
    var manageBtn = document.getElementById("cookieConsentManage");
    var saveBtn = document.getElementById("cookieConsentSave");
    var analyticsToggle = document.getElementById("cookieToggleAnalytics");

    var consent = getConsent();
    if (consent) {
      if (consent.analytics) loadGoogleAnalytics();
    } else {
      checkConsentRequired().then(function (required) {
        if (required) {
          banner.hidden = false;
        } else {
          loadGoogleAnalytics();
        }
      });
    }

    function closeBanner() {
      banner.hidden = true;
    }

    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent(true);
        loadGoogleAnalytics();
        closeBanner();
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        setConsent(false);
        closeBanner();
      });
    }

    if (manageBtn && mainView && settingsView) {
      manageBtn.addEventListener("click", function () {
        mainView.hidden = true;
        settingsView.hidden = false;
      });
    }

    if (analyticsToggle) {
      analyticsToggle.addEventListener("click", function () {
        var isOn = analyticsToggle.getAttribute("aria-checked") === "true";
        analyticsToggle.setAttribute("aria-checked", isOn ? "false" : "true");
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        var analyticsEnabled = !!analyticsToggle && analyticsToggle.getAttribute("aria-checked") === "true";
        setConsent(analyticsEnabled);
        if (analyticsEnabled) loadGoogleAnalytics();
        closeBanner();
      });
    }
  });
})();
