// Placeholder catalog. Swap image paths, prices, and descriptions for the
// real collection, and set each product's `shopifyProductId` once the
// matching product exists in your Shopify store (see shopify-config.js).
//
// A product with a `variants` array (instead of its own price/image/etc.)
// renders as a single card with a color picker — see resolveVariant().
const PRODUCTS = [
  {
    id: "fracture-bar-studs",
    name: "Fracture Bar Studs",
    currency: "USD",
    variants: [
      {
        id: "gold",
        label: "Gold",
        swatch: "#c9a227",
        price: 440,
        material: "14k recycled gold",
        image: "assets/img/products/fracture-bar-gold.jpg",
        description:
          "A pair of solid gold bar studs with a single fracture cut into the face, shown here with their post and butterfly back.",
        shopifyProductId: null,
      },
      {
        id: "silver",
        label: "Silver",
        swatch: "#c7c9cc",
        price: 360,
        material: "Recycled sterling silver",
        image: "assets/img/products/fracture-bar-silver.jpg",
        description:
          "The silver version of the fracture bar stud, shown here with their post and butterfly back.",
        shopifyProductId: null,
      },
    ],
  },
  {
    id: "fracture-necklace",
    name: "Fracture Necklace",
    price: 560,
    currency: "USD",
    material: "Recycled sterling silver",
    image: "assets/img/products/fracture-necklace.jpg",
    description:
      "A fine chain carrying a single hand-finished pendant, its surface deliberately left with the faint tool marks of the bench it was cast on.",
    shopifyProductId: null,
  },
  {
    id: "fracture-stud-earrings",
    name: "Fracture Stud Earrings",
    currency: "USD",
    variants: [
      {
        id: "gold",
        label: "Gold",
        swatch: "#c9a227",
        price: 420,
        material: "14k recycled gold",
        image: "assets/img/products/fracture-stud-gold.jpg",
        description:
          "A pair of solid gold bar studs, each cut through with a single fine fracture — the house's scar motif carried in miniature.",
        shopifyProductId: null,
      },
      {
        id: "silver",
        label: "Silver",
        swatch: "#c7c9cc",
        price: 340,
        material: "Recycled sterling silver",
        image: "assets/img/products/fracture-stud-silver.jpg",
        description:
          "The same bar stud in sterling silver, its surface split by one hand-finished fracture line running the length of the piece.",
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
];

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
