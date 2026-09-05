const grid = document.getElementById("shop-grid");

grid.innerHTML = PRODUCTS.map(
  (p) => `
    <a class="product-card" href="product.html?id=${encodeURIComponent(p.id)}">
      <img src="${p.image}" alt="" class="product-card-img">
      <span class="product-card-name">${p.name}</span>
      <span class="product-card-price">${formatPrice(p.price, p.currency)}</span>
    </a>
  `
).join("");
