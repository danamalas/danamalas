const grid = document.getElementById("shop-grid");

function cardHtml(product) {
  const variantId = product.variants ? product.variants[0].id : null;
  const view = resolveVariant(product, variantId);
  const href = `product.html?id=${encodeURIComponent(product.id)}${variantId ? `&color=${variantId}` : ""}`;

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
    <a class="product-card" href="${href}" data-product="${product.id}" data-variant="${variantId || ""}">
      <img src="${view.image}" alt="" class="product-card-img">
      <span class="product-card-name">${product.name}</span>
      <span class="product-card-price">${formatPrice(view.price, view.currency)}</span>
      ${swatches}
    </a>
  `;
}

grid.innerHTML = PRODUCTS.map(cardHtml).join("");

grid.querySelectorAll(".swatch").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const card = btn.closest(".product-card");
    const product = getProduct(card.dataset.product);
    const variantId = btn.dataset.variant;
    const view = resolveVariant(product, variantId);

    card.dataset.variant = variantId;
    card.href = `product.html?id=${encodeURIComponent(product.id)}&color=${variantId}`;
    card.querySelector(".product-card-img").src = view.image;
    card.querySelector(".product-card-price").textContent = formatPrice(view.price, view.currency);
    card.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-selected", s.dataset.variant === variantId));
  });
});
