const ABO_CURRENCY_ENDPOINT = "https://abo-checkout.sparkling-field-ca14.workers.dev/currency";
const ABO_CURRENCY_STORAGE_KEY = "abo-currency";

// Resolves to a currency code (e.g. "USD", "EUR", "AED") based on the
// visitor's detected location, cached in sessionStorage so we only ask
// once per browser session. Falls back to "USD" on any failure.
function detectCurrency() {
  try {
    const cached = sessionStorage.getItem(ABO_CURRENCY_STORAGE_KEY);
    if (cached) return Promise.resolve(cached);
  } catch (e) {
    // ignore storage access failures
  }

  return fetch(ABO_CURRENCY_ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      const currency = data.currency || "USD";
      try {
        sessionStorage.setItem(ABO_CURRENCY_STORAGE_KEY, currency);
      } catch (e) {
        // ignore storage access failures
      }
      return currency;
    })
    .catch(() => "USD");
}

window.aboDetectCurrency = detectCurrency;
