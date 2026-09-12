// ── Shopify Buy Button setup ──────────────────────────────────────────────
// This site's cart + checkout is powered by Shopify's Buy Button SDK, so no
// custom backend or payment handling lives in this repo — Shopify does that.
//
// To go live:
//   1. Create a Shopify store (any plan that includes online store / Buy
//      Button works) at https://www.shopify.com.
//   2. In Shopify admin, add a product for each real piece you're selling.
//   3. Go to Sales channels → find "Buy Button" (install it from the
//      Shopify App Store if it's not already a channel on your plan).
//   4. In Settings → Apps and sales channels → Buy Button → Manage, generate
//      a Storefront API access token, and note your store's *.myshopify.com
//      domain.
//   5. Fill in the two values below.
//   6. For each product in assets/js/products-data.js, set
//      `shopifyProductId` to the numeric product ID Shopify gives that
//      product (visible in the product's admin URL, or via the Buy Button
//      channel's embed code generator).
//
// Until domain/storefrontAccessToken are filled in, product pages show an
// "Enquire about this piece" link instead of a live Buy button, so the site
// stays fully honest — nothing pretends to sell before checkout actually works.

const SHOPIFY_CONFIG = {
  domain: "", // e.g. "abo-atelier.myshopify.com"
  storefrontAccessToken: "", // Storefront API access token from the Buy Button channel
};

function isShopifyConfigured() {
  return Boolean(SHOPIFY_CONFIG.domain && SHOPIFY_CONFIG.storefrontAccessToken);
}
