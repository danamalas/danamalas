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
  const a = document.createElement("a");
  a.className = "btn-enquire";
  a.href = `mailto:hello@aboatelier.com?subject=${encodeURIComponent("Enquiry: " + product.name)}`;
  a.textContent = "Enquire about this piece";
  node.appendChild(a);
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
