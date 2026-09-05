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
  document.getElementById("pageTitle").textContent = `${product.name} — ABÔ Atelier`;

  container.innerHTML = `
    <div class="product-media">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="product-price">${formatPrice(product.price, product.currency)}</p>
      <p class="product-material">${product.material}</p>
      <p class="product-description">${product.description}</p>
      <div class="product-buy" id="productBuy"></div>
    </div>
  `;

  renderBuyButton(document.getElementById("productBuy"), product);
}
