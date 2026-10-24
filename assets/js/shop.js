const grid = document.getElementById("shop-grid");
const tabs = document.getElementById("shopTabs");
let displayCurrency = "USD";
let activeCategory = "jewelry";

function cardHtml(product) {
  const variantId = product.variants ? product.variants[0].id : null;
  const view = resolveVariant(product, variantId);
  const priceInfo = getDisplayPrice(view, displayCurrency);
  const priceHtml = view.price != null
    ? `<span class="product-card-price">${formatPrice(priceInfo.amount, priceInfo.currency)}</span>`
    : "";

  const swatches = product.variants && product.variants[0].swatch
    ? `<span class="product-card-swatches">${product.variants
        .map(
          (v) => `
          <button type="button" class="swatch${v.id === variantId ? " is-selected" : ""}" data-variant="${v.id}" style="background:${v.swatch}" aria-label="${v.label}"></button>
        `
        )
        .join("")}</span>`
    : "";

  const media = product.available
    ? `<img src="${product.image}" alt="${productName(product)}" class="product-card-img">`
    : `<span class="product-card-img product-card-blank" aria-hidden="true">
        <img src="assets/img/scar-mark.png" alt="" class="product-card-scar">
        <span class="product-card-coming-soon">${t("shop.comingSoon")}</span>
      </span>`;

  const tag = product.available ? "a" : "div";
  const linkAttr = product.available ? ` href="product.html?id=${product.id}"` : "";

  return `
    <${tag} class="product-card" data-product="${product.id}" data-variant="${variantId || ""}"${linkAttr}>
      ${media}
      <span class="product-card-name">${productName(product)}</span>
      ${priceHtml}
      ${swatches}
    </${tag}>
  `;
}

function teaserCardHtml(product) {
  return `
    <a href="product.html?id=${product.id}" class="product-card product-card-teaser">
      <span class="product-card-teaser-media">
        <img src="${product.image}" alt="${productName(product)}" class="product-card-teaser-img">
        <span class="product-card-coming-soon">${t("shop.comingSoon")}</span>
      </span>
      <span class="product-card-name product-card-name--teaser">${productName(product)}</span>
      <span class="product-card-quote">${product.quote}</span>
    </a>
  `;
}

function inActiveCategory(product) {
  return !product.category || product.category === activeCategory;
}

if (tabs) {
  const requested = new URLSearchParams(window.location.search).get("category");
  const match = requested && tabs.querySelector(`.shop-tab[data-category="${requested}"]`);
  if (match) {
    activeCategory = requested;
    tabs.querySelectorAll(".shop-tab[data-category]").forEach((t) => t.classList.toggle("is-active", t === match));
  }
}

function render() {
  grid.innerHTML =
    Object.values(TEASER_PRODUCTS).filter(inActiveCategory).map(teaserCardHtml).join("") +
    PRODUCTS.filter(inActiveCategory).map(cardHtml).join("");
}

render();
document.addEventListener("abo:langchange", render);

if (window.aboDetectCurrency) {
  window.aboDetectCurrency().then((currency) => {
    displayCurrency = currency;
    render();
  });
}

if (tabs) {
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".shop-tab[data-category]");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    tabs.querySelectorAll(".shop-tab[data-category]").forEach((t) => t.classList.toggle("is-active", t === btn));
    render();
  });
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".swatch");
  if (!btn) return;

  const card = btn.closest(".product-card");
  const product = getProduct(card.dataset.product);
  const variantId = btn.dataset.variant;
  const view = resolveVariant(product, variantId);
  const priceInfo = getDisplayPrice(view, displayCurrency);

  card.dataset.variant = variantId;
  card.querySelector(".product-card-price").textContent = formatPrice(priceInfo.amount, priceInfo.currency);
  card.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-selected", s.dataset.variant === variantId));
});
