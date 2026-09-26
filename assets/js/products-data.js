// Placeholder catalog. Swap image paths, prices, and descriptions for the
// real collection, and set each product's `shopifyProductId` once the
// matching product exists in your Shopify store (see shopify-config.js).
//
// A product with a `variants` array (instead of its own price/image/etc.)
// renders as a single card with a color picker — see resolveVariant().
const PRODUCTS = [
  {
    id: "fracture-cuff",
    name: "Fracture Cuff",
    currency: "USD",
    variants: [
      {
        id: "gold",
        label: "Gold",
        swatch: "#c9a227",
        price: 780,
        material: "14k recycled gold",
        image: "assets/img/products/fracture-cuff-gold.jpg",
        description:
          "An open gold cuff with a single fracture cut into its face, the scar left polished and open rather than smoothed away.",
        shopifyProductId: null,
      },
      {
        id: "silver",
        label: "Silver",
        swatch: "#c7c9cc",
        price: 620,
        material: "Recycled sterling silver",
        image: "assets/img/products/fracture-cuff-silver.jpg",
        description:
          "The same open cuff in sterling silver, its surface split by one hand-finished fracture line running across the face.",
        shopifyProductId: null,
      },
      {
        id: "rose",
        label: "Rose Gold",
        swatch: "#d9b6a3",
        price: 780,
        material: "14k recycled rose gold",
        image: "assets/img/products/fracture-cuff-rose.jpg",
        description:
          "The same open cuff in rose gold, its surface split by one hand-finished fracture line running across the face.",
        shopifyProductId: null,
      },
    ],
  },
  {
    id: "wound-gold-pendant",
    name: "Wound & Gold Pendant",
    price: 890,
    currency: "USD",
    material: "14k recycled gold, sapphire",
    image: "assets/img/products/wound-gold-pendant.jpg",
    description:
      "A small sapphire set into a hand-carved gold pendant along a single fractured line — the house's clearest piece on the subject of mending.",
    shopifyProductId: null,
  },
  {
    id: "gift-card",
    name: "Gift Card",
    currency: "USD",
    image: "assets/img/products/gift-card.png",
    available: true,
    description:
      "An ABÔ Atelier gift card, delivered by email and redeemable toward any piece in the collection. Never expires.",
    variants: [
      { id: "10", label: "$10", price: 10, stripePriceId: "price_1UJz533GX1etDYL8zKIc5wZX", shopifyProductId: null },
      { id: "20", label: "$20", price: 20, stripePriceId: "price_1UJz533GX1etDYL85b8Uwxrx", shopifyProductId: null },
      { id: "30", label: "$30", price: 30, stripePriceId: "price_1UJz533GX1etDYL8801Q5ETG", shopifyProductId: null },
      { id: "50", label: "$50", price: 50, shopifyProductId: null },
      { id: "70", label: "$70", price: 70, shopifyProductId: null },
      { id: "100", label: "$100", price: 100, shopifyProductId: null },
      { id: "130", label: "$130", price: 130, shopifyProductId: null },
      { id: "150", label: "$150", price: 150, shopifyProductId: null },
      { id: "170", label: "$170", price: 170, shopifyProductId: null },
      { id: "200", label: "$200", price: 200, shopifyProductId: null },
      { id: "250", label: "$250", price: 250, shopifyProductId: null },
      { id: "300", label: "$300", price: 300, shopifyProductId: null },
      { id: "350", label: "$350", price: 350, shopifyProductId: null },
      { id: "400", label: "$400", price: 400, shopifyProductId: null },
      { id: "500", label: "$500", price: 500, shopifyProductId: null },
      { id: "700", label: "$700", price: 700, shopifyProductId: null },
      { id: "1000", label: "$1,000", price: 1000, shopifyProductId: null },
      { id: "1500", label: "$1,500", price: 1500, shopifyProductId: null },
      { id: "2000", label: "$2,000", price: 2000, shopifyProductId: null },
    ],
  },
];

// Unreleased pieces shown only as a homepage teaser and their own product
// page (photo, name, quote) — deliberately kept out of PRODUCTS so they
// never appear in the shop grid or need a price/buy flow.
const TEASER_PRODUCTS = {
  "sillage-earrings": {
    id: "sillage-earrings",
    name: "Sillage Earrings",
    image: "assets/img/products/fracture-earrings-gold.jpg",
    quote: "[The trace that is left behind]",
  },
  "eden-bracelet": {
    id: "eden-bracelet",
    name: "Eden Bracelet",
    image: "assets/img/products/fracture-bracelet-gold.jpg",
    quote: "[Paradise, found within]",
  },
  "solea-ring": {
    id: "solea-ring",
    name: "Solèa Ring",
    image: "assets/img/products/fracture-ring-gold.jpg",
    quote: "[Wear the light you became]",
  },
  "kandai-necklace": {
    id: "kandai-necklace",
    name: "Kandai Necklace",
    image: "assets/img/products/fracture-necklace-gold.jpg",
    quote: "[The peace of accepting imperfection]",
  },
  "espoir-earrings": {
    id: "espoir-earrings",
    name: "Espoir Earrings",
    image: "assets/img/products/espoir-earrings-gold.jpg",
    quote: "[Let hope lead you forward]",
  },
  "galene-necklace": {
    id: "galene-necklace",
    name: "Galène Necklace",
    image: "assets/img/products/galene-necklace-gold.jpg",
    quote: "[I am the promise that after the storm, peace remains]",
  },
  "statera-anklet": {
    id: "statera-anklet",
    name: "Statera Anklet",
    image: "assets/img/products/fracture-bracelet-gold.jpg",
    quote: "[Balance in every step]",
  },
};

function formatPrice(amount, currency) {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
  } catch (e) {
    return `${currency} ${amount}`;
  }
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

// Returns { amount, currency } for a resolved product view, using its
// per-currency `prices` map when the requested currency is available there,
// falling back to the view's default price/currency otherwise.
function getDisplayPrice(view, currency) {
  if (view.prices && view.prices[currency]) {
    return { amount: view.prices[currency], currency };
  }
  return { amount: view.price, currency: view.currency };
}

// Merges a product's shared fields with one of its variants (or returns the
// product as-is when it has no variants), so rendering code can treat every
// product the same way.
function resolveVariant(product, variantId) {
  if (!product.variants) {
    return { ...product, variantId: null, variants: null };
  }
  const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];
  const { id, ...variantFields } = variant;
  return { ...product, ...variantFields, variantId: id };
}
