// Google Analytics only loads once the visitor has made a choice that
// enables it (Accept All, or Save with the Analytics toggle on) — nothing
// from Google is requested before that. Replace GA_MEASUREMENT_ID with the
// real Measurement ID from Google Analytics (Admin > Data Streams > your
// web stream, looks like "G-XXXXXXXXXX").
(function () {
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
  var STORAGE_KEY = "abo-cookie-consent"; // stores JSON: {"analytics": true|false}

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
      banner.hidden = false;
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
