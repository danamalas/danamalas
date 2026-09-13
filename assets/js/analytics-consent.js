// Google Analytics only loads after the visitor accepts the cookie banner —
// nothing from Google is requested until then. Replace GA_MEASUREMENT_ID
// with the real Measurement ID from Google Analytics (Admin > Data Streams
// > your web stream, looks like "G-XXXXXXXXXX").
(function () {
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
  var STORAGE_KEY = "abo-cookie-consent";

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
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
    var acceptBtn = document.getElementById("cookieConsentAccept");
    var declineBtn = document.getElementById("cookieConsentDecline");
    if (!banner) return;

    var consent = getConsent();
    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (consent !== "declined") {
      banner.hidden = false;
    }

    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent("accepted");
        banner.hidden = true;
        loadGoogleAnalytics();
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener("click", function () {
        setConsent("declined");
        banner.hidden = true;
      });
    }
  });
})();
