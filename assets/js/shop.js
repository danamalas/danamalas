const grid = document.getElementById("shop-grid");

function cardHtml(product) {
  return `
    <div class="product-card">
      <span class="product-card-img product-card-blank" aria-hidden="true"></span>
      <span class="product-card-name">${product.name}</span>
      <span class="product-card-price">Coming Soon</span>
    </div>
  `;
}

grid.innerHTML = PRODUCTS.map(cardHtml).join("");
