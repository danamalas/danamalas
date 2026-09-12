const ABO_CHECKOUT_ENDPOINT = "https://abo-checkout.sparkling-field-ca14.workers.dev/";
const ABO_CART_STORAGE_KEY = "abo-cart";

function readCart() {
  try {
    const raw = localStorage.getItem(ABO_CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCart(items) {
  try {
    localStorage.setItem(ABO_CART_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // ignore storage failures (private browsing, quota, etc.)
  }
  renderCart();
  updateCartBadge();
}

function addToCart(item) {
  const items = readCart();
  const existing = items.find((i) => i.productId === item.productId && i.variantId === item.variantId);
  if (existing) {
    existing.quantity += 1;
  } else {
    items.push({ ...item, quantity: 1 });
  }
  writeCart(items);
}

function removeFromCart(index) {
  const items = readCart();
  items.splice(index, 1);
  writeCart(items);
}

function setCartQuantity(index, quantity) {
  const items = readCart();
  if (!items[index]) return;
  items[index].quantity = Math.min(Math.max(quantity, 1), 10);
  writeCart(items);
}

function cartCount() {
  return readCart().reduce((sum, i) => sum + i.quantity, 0);
}

function cartSubtotal() {
  const items = readCart();
  if (items.length === 0) return { amount: 0, currency: null };
  return { amount: items.reduce((sum, i) => sum + i.price * i.quantity, 0), currency: items[0].currency };
}

function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach((el) => {
    const count = cartCount();
    el.textContent = String(count);
    el.hidden = count === 0;
  });
}

let cartDrawer, cartBackdrop, cartList, cartFooter, cartEmpty;

function buildCartDrawer() {
  cartBackdrop = document.createElement("div");
  cartBackdrop.className = "cart-backdrop";
  cartBackdrop.id = "cartBackdrop";

  cartDrawer = document.createElement("aside");
  cartDrawer.className = "cart-drawer";
  cartDrawer.id = "cartDrawer";
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.innerHTML = `
    <div class="cart-drawer-header">
      <p class="cart-drawer-title" data-i18n="cart.title">Your Cart</p>
      <button type="button" class="cart-drawer-close" id="cartClose" data-i18n-aria="cart.closeAria" aria-label="Close cart">&times;</button>
    </div>
    <p class="cart-empty" id="cartEmpty" data-i18n="cart.empty">Your cart is empty.</p>
    <ul class="cart-list" id="cartList"></ul>
    <div class="cart-drawer-footer" id="cartFooter" hidden>
      <div class="cart-subtotal-row">
        <span data-i18n="cart.subtotal">Subtotal</span>
        <span id="cartSubtotalValue"></span>
      </div>
      <button type="button" class="cart-checkout-btn" id="cartCheckoutBtn" data-i18n="cart.checkout">Checkout</button>
      <p class="cart-checkout-error" id="cartCheckoutError" hidden></p>
    </div>
  `;

  document.body.appendChild(cartBackdrop);
  document.body.appendChild(cartDrawer);

  cartList = cartDrawer.querySelector("#cartList");
  cartFooter = cartDrawer.querySelector("#cartFooter");
  cartEmpty = cartDrawer.querySelector("#cartEmpty");

  cartDrawer.querySelector("#cartClose").addEventListener("click", closeCartDrawer);
  cartBackdrop.addEventListener("click", closeCartDrawer);
  cartDrawer.querySelector("#cartCheckoutBtn").addEventListener("click", startCheckout);

  if (window.ABO_I18N) applyTranslations(cartDrawer);
}

function openCartDrawer() {
  cartDrawer.classList.add("is-open");
  cartBackdrop.classList.add("is-visible");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("is-open");
  cartBackdrop.classList.remove("is-visible");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function applyTranslations(root) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
}

function renderCart() {
  if (!cartList) return;
  const items = readCart();

  cartEmpty.hidden = items.length > 0;
  cartFooter.hidden = items.length === 0;

  cartList.innerHTML = items
    .map(
      (item, index) => `
      <li class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          ${item.variantLabel ? `<p class="cart-item-variant">${item.variantLabel}</p>` : ""}
          <p class="cart-item-price">${formatPrice(item.price, item.currency)}</p>
          <div class="cart-item-qty">
            <button type="button" class="cart-qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" class="cart-qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-index="${index}" data-i18n-aria="cart.removeAria" aria-label="Remove item">&times;</button>
      </li>
    `
    )
    .join("");

  const subtotal = cartSubtotal();
  const subtotalEl = document.getElementById("cartSubtotalValue");
  if (subtotalEl && subtotal.currency) {
    subtotalEl.textContent = formatPrice(subtotal.amount, subtotal.currency);
  }

  cartList.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.index)));
  });
  cartList.querySelectorAll(".cart-qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const items = readCart();
      const index = Number(btn.dataset.index);
      const current = items[index].quantity;
      setCartQuantity(index, btn.dataset.action === "increase" ? current + 1 : current - 1);
    });
  });
}

function startCheckout() {
  const items = readCart();
  if (items.length === 0) return;

  const errorEl = document.getElementById("cartCheckoutError");
  const btn = document.getElementById("cartCheckoutBtn");
  errorEl.hidden = true;
  btn.disabled = true;
  const originalLabel = btn.textContent;
  btn.textContent = t("cart.checkingOut");

  fetch(ABO_CHECKOUT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: items.map((i) => ({ price: i.priceId, quantity: i.quantity })),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Checkout failed");
      }
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = originalLabel;
      errorEl.textContent = t("cart.checkoutError");
      errorEl.hidden = false;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  buildCartDrawer();
  renderCart();
  updateCartBadge();

  document.querySelectorAll(".cart-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });
});

document.addEventListener("abo:langchange", () => {
  if (cartDrawer) applyTranslations(cartDrawer);
  renderCart();
});

window.aboCart = { addToCart, openCartDrawer };
