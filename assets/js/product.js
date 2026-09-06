const params = new URLSearchParams(window.location.search);
const product = getProduct(params.get("id"));
const container = document.getElementById("productDetail");

if (!product) {
  container.innerHTML = `
    <p class="product-not-found">
      We couldn't find that piece. <a href="shop.html">Return to the Shop.</a>
    </p>
  `;
} else {
  const requestedColor = params.get("color");
  let variantId = product.variants
    ? product.variants.some((v) => v.id === requestedColor)
      ? requestedColor
      : product.variants[0].id
    : null;

  function render() {
    const view = resolveVariant(product, variantId);
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
        <span class="coming-soon">Coming Soon</span>
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-price">${formatPrice(view.price, view.currency)}</p>
        <p class="product-material">${view.material}</p>
        ${swatches}
        <p class="product-description">${view.description}</p>
        <div class="product-buy" id="productBuy"></div>
      </div>
    `;

    renderBuyButton(document.getElementById("productBuy"), view);

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
}
