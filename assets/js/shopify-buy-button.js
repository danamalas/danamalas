// Renders a Shopify Buy Button into `node` for `product`, or an "Enquire"
// fallback link if Shopify isn't configured yet (see shopify-config.js).
function renderBuyButton(node, product) {
  if (!isShopifyConfigured() || !product.shopifyProductId) {
    renderEnquireFallback(node, product);
    return;
  }

  loadShopifyBuySdk().then(() => {
    const client = ShopifyBuy.buildClient({
      domain: SHOPIFY_CONFIG.domain,
      storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
    });

    ShopifyBuy.UI.onReady(client).then((ui) => {
      ui.createComponent("product", {
        id: product.shopifyProductId,
        node,
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "checkout",
            contents: { img: false, title: false, price: false },
            styles: {
              button: {
                "background-color": "#161616",
                ":hover": { "background-color": "#000000" },
                "border-radius": "0px",
                "font-family": "Bodoni Moda, serif",
              },
            },
            text: { button: "Add to cart" },
          },
        },
      });
    });
  });
}

function renderEnquireFallback(node, product) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-enquire";
  btn.textContent = t("product.enquire");

  const form = document.createElement("form");
  form.className = "enquire-form";
  form.hidden = true;
  form.innerHTML = `
    <input type="email" name="email" required placeholder="${t("newsletter.email")}" aria-label="${t("newsletter.emailAria")}">
    <textarea name="message" rows="3" placeholder="${t("contact.form.message")}" aria-label="${t("contact.form.message")}"></textarea>
    <button type="submit">${t("product.enquireSubmit")}</button>
    <p class="newsletter-status" hidden></p>
  `;

  btn.addEventListener("click", () => {
    btn.hidden = true;
    form.hidden = false;
  });

  const status = form.querySelector(".newsletter-status");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    if (!email) return;

    submitBtn.disabled = true;
    status.hidden = false;
    status.className = "newsletter-status";
    status.textContent = t("newsletter.sending");

    submitToWeb3Forms({
      subject: "Enquiry: " + product.name,
      from_name: "ABÔ Atelier Website",
      email: email,
      message: message || "(no message provided)",
    }).then((result) => {
      submitBtn.disabled = false;
      if (result.ok) {
        status.className = "newsletter-status is-success";
        status.textContent = t("contact.form.success");
        form.reset();
      } else {
        status.className = "newsletter-status is-error";
        status.textContent = t("newsletter.error");
      }
    });
  });

  node.appendChild(btn);
  node.appendChild(form);
}

let sdkPromise = null;
function loadShopifyBuySdk() {
  if (window.ShopifyBuy) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://sdks.shopifycdn.com/buy-button/latest/buybutton.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return sdkPromise;
}
