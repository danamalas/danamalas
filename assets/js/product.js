const SITE_URL = "https://aboatelier.com";

function absoluteUrl(path) {
  return `${SITE_URL}/${path}`;
}

// Fills in the static Open Graph/Twitter Card placeholders in product.html
// with this specific product's title, description, and photo, so links
// shared to it carry a real preview instead of the generic fallback.
function updateSocialMeta({ title, description, image, url }) {
  document.getElementById("ogTitle").setAttribute("content", title);
  document.getElementById("ogDescription").setAttribute("content", description);
  document.getElementById("ogImage").setAttribute("content", image);
  document.getElementById("ogUrl").setAttribute("content", url);
  document.getElementById("twitterTitle").setAttribute("content", title);
  document.getElementById("twitterDescription").setAttribute("content", description);
  document.getElementById("twitterImage").setAttribute("content", image);
}

function setProductJsonLd(data) {
  let script = document.getElementById("productJsonLd");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "productJsonLd";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

const params = new URLSearchParams(window.location.search);
const teaser = TEASER_PRODUCTS[params.get("id")];
const product = teaser || getProduct(params.get("id"));
const container = document.getElementById("productDetail");

if (!product) {
  function renderNotFound() {
    container.innerHTML = `
      <p class="product-not-found">
        ${t("product.notFound")} <a href="shop.html">${t("product.returnToShop")}</a>
      </p>
    `;
  }
  renderNotFound();
  document.addEventListener("abo:langchange", renderNotFound);
} else if (teaser) {
  function renderTeaser() {
    document.getElementById("pageTitle").textContent = `${product.name} — ABÔ Atelier`;
    container.innerHTML = `
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" class="product-media-blur">
        <span class="product-media-badge" data-i18n="shop.comingSoon">${t("shop.comingSoon")}</span>
      </div>
      <div class="product-info">
        <h1 class="product-teaser-name">${product.name}</h1>
        <p class="product-quote">${product.quote}</p>
      </div>
    `;

    const teaserDescription = `${product.quote.replace(/^\[|\]$/g, "")} — coming soon from ABÔ Atelier.`;
    updateSocialMeta({
      title: `${product.name} — ABÔ Atelier`,
      description: teaserDescription,
      image: absoluteUrl(product.image),
      url: `${SITE_URL}/product.html?id=${product.id}`,
    });
    setProductJsonLd({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: absoluteUrl(product.image),
      description: teaserDescription,
      brand: { "@type": "Brand", name: "ABÔ Atelier" },
    });
  }
  renderTeaser();
  document.addEventListener("abo:langchange", renderTeaser);
} else {
  const requestedColor = params.get("color");
  let variantId = product.variants
    ? product.variants.some((v) => v.id === requestedColor)
      ? requestedColor
      : product.variants[0].id
    : null;
  let displayCurrency = "USD";

  function render() {
    const view = resolveVariant(product, variantId);
    const priceInfo = getDisplayPrice(view, displayCurrency);
    document.getElementById("pageTitle").textContent = `${product.name} — ABÔ Atelier`;

    const swatches = product.variants
      ? `<div class="product-swatches">${product.variants
          .map(
            (v) => `
            <button type="button" class="swatch swatch--lg${v.id === variantId ? " is-selected" : ""}" data-variant="${v.id}" style="background:${v.swatch}" aria-label="${v.label}"></button>
          `
          )
          .join("")}</div>`
      : "";

    container.innerHTML = `
      <div class="product-media">
        <img src="${view.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-price">${formatPrice(priceInfo.amount, priceInfo.currency)}</p>
        <p class="product-material">${view.material}</p>
        ${swatches}
        <p class="product-description">${view.description}</p>
        <div class="product-buy" id="productBuy"></div>
      </div>
    `;

    renderBuyButton(document.getElementById("productBuy"), { ...view, price: priceInfo.amount, currency: priceInfo.currency });

    const productUrl = `${SITE_URL}/product.html?id=${product.id}`;
    updateSocialMeta({
      title: `${product.name} — ABÔ Atelier`,
      description: view.description,
      image: absoluteUrl(view.image),
      url: productUrl,
    });
    setProductJsonLd({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: absoluteUrl(view.image),
      description: view.description,
      brand: { "@type": "Brand", name: "ABÔ Atelier" },
      offers: {
        "@type": "Offer",
        url: productUrl,
        priceCurrency: priceInfo.currency,
        price: String(priceInfo.amount),
        availability: "https://schema.org/InStock",
      },
    });

    container.querySelectorAll(".swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        variantId = btn.dataset.variant;
        const url = new URL(window.location.href);
        url.searchParams.set("color", variantId);
        history.replaceState(null, "", url);
        render();
      });
    });
  }

  render();
  document.addEventListener("abo:langchange", render);

  if (window.aboDetectCurrency) {
    window.aboDetectCurrency().then((currency) => {
      displayCurrency = currency;
      render();
    });
  }
}
