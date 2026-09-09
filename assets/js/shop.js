const grid = document.getElementById("shop-grid");

function cardHtml(product) {
  return `
    <div class="product-card">
      <span class="product-card-img product-card-blank" aria-hidden="true">
        <span class="product-card-coming-soon">Coming Soon</span>
      </span>
      <span class="product-card-name">${product.name}</span>
    </div>
  `;
}

grid.innerHTML = PRODUCTS.map(cardHtml).join("");
