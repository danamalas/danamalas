const grid = document.getElementById("shop-grid");

function cardHtml(product) {
  const variantId = product.variants ? product.variants[0].id : null;
  const view = resolveVariant(product, variantId);

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
      <span class="product-card-price">${formatPrice(view.price, view.currency)}</span>
      ${swatches}
    </div>
  `;
}

function render() {
  grid.innerHTML = PRODUCTS.map(cardHtml).join("");
}

render();
document.addEventListener("abo:langchange", render);

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".swatch");
  if (!btn) return;

  const card = btn.closest(".product-card");
  const product = getProduct(card.dataset.product);
  const variantId = btn.dataset.variant;
  const view = resolveVariant(product, variantId);

  card.dataset.variant = variantId;
  card.querySelector(".product-card-price").textContent = formatPrice(view.price, view.currency);
  card.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-selected", s.dataset.variant === variantId));
});
