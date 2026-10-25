let displayCurrency = "USD";

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

// Mounts a filterable product grid into `grid`. `tabs`, when given, is a
// `.shop-tabs` nav whose `.shop-tab[data-category]` buttons switch the
// active category (and whose state can be preset via a `?category=`
// query param). `defaultCategory` sets the category shown with no tabs
// (or before any tab is clicked).
function mountShopGrid(grid, tabs, defaultCategory) {
  if (!grid) return;
  let activeCategory = defaultCategory || "jewelry";

  function inActiveCategory(product) {
    return !product.category || product.category === activeCategory;
  }

  function render() {
    grid.innerHTML =
      Object.values(TEASER_PRODUCTS).filter(inActiveCategory).map(teaserCardHtml).join("") +
      PRODUCTS.filter(inActiveCategory).map(cardHtml).join("");
  }

  if (tabs) {
    const requested = new URLSearchParams(window.location.search).get("category");
    const match = requested && tabs.querySelector(`.shop-tab[data-category="${requested}"]`);
    if (match) {
      activeCategory = requested;
      tabs.querySelectorAll(".shop-tab[data-category]").forEach((t) => t.classList.toggle("is-active", t === match));
    }
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
}

// After a successful Stripe Checkout redirect (shop.html?checkout=success),
// show a thank-you view instead of the shop, and clear the cart.
(function handleCheckoutSuccess() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("checkout") !== "success") return;

  const successEl = document.getElementById("checkoutSuccess");
  if (!successEl) return;

  successEl.hidden = false;
  const introEl = document.getElementById("shopIntroSection");
  const tabsEl = document.getElementById("shopTabs");
  const gridEl = document.getElementById("shop-grid");
  if (introEl) introEl.hidden = true;
  if (tabsEl) tabsEl.hidden = true;
  if (gridEl) gridEl.hidden = true;

  const sessionId = params.get("session_id");
  const refEl = document.getElementById("checkoutSuccessRef");
  if (sessionId && refEl) {
    refEl.textContent = `${t("checkout.success.refLabel")}: ${sessionId}`;
    refEl.hidden = false;
  }

  if (typeof writeCart === "function") writeCart([]);

  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("checkout");
  cleanUrl.searchParams.delete("session_id");
  window.history.replaceState({}, "", cleanUrl.toString());
})();

mountShopGrid(document.getElementById("shop-grid"), document.getElementById("shopTabs"));
mountShopGrid(document.getElementById("scarShopGrid"), null, "scar-project");
