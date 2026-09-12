const grid = document.getElementById("shop-grid");
let displayCurrency = "USD";

function cardHtml(product) {
  const variantId = product.variants ? product.variants[0].id : null;
  const view = resolveVariant(product, variantId);
  const priceInfo = getDisplayPrice(view, displayCurrency);

  const swatches = product.variants
    ? `<span class="product-card-swatches">${product.variants
        .map(
          (v) => `
          <button type="button" class="swatch${v.id === variantId ? " is-selected" : ""}" data-variant="${v.id}" style="background:${v.swatch}" aria-label="${v.label}"></button>
        `
        )
        .join("")}</span>`
    : "";

  return `
    <div class="product-card" data-product="${product.id}" data-variant="${variantId || ""}">
      <span class="product-card-img product-card-blank" aria-hidden="true">
        <img src="assets/img/scar-mark.png" alt="" class="product-card-scar">
        <span class="product-card-coming-soon">${t("shop.comingSoon")}</span>
      </span>
      <span class="product-card-name">${product.name}</span>
      <span class="product-card-price">${formatPrice(priceInfo.amount, priceInfo.currency)}</span>
      ${swatches}
    </div>
  `;
}

function teaserCardHtml(product) {
  return `
    <a href="product.html?id=${product.id}" class="product-card product-card-teaser">
      <span class="product-card-teaser-media">
        <img src="${product.image}" alt="${product.name}" class="product-card-teaser-img">
        <span class="product-card-coming-soon">${t("shop.comingSoon")}</span>
      </span>
      <span class="product-card-name product-card-name--teaser">${product.name}</span>
      <span class="product-card-quote">${product.quote}</span>
    </a>
  `;
}

function render() {
  grid.innerHTML =
    PRODUCTS.map(cardHtml).join("") +
    Object.values(TEASER_PRODUCTS).map(teaserCardHtml).join("");
}

render();
document.addEventListener("abo:langchange", render);

if (window.aboDetectCurrency) {
  window.aboDetectCurrency().then((currency) => {
    displayCurrency = currency;
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
