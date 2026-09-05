// Placeholder catalog. Swap image paths, prices, and descriptions for the
// real collection, and set each product's `shopifyProductId` once the
// matching product exists in your Shopify store (see shopify-config.js).
const PRODUCTS = [
  {
    id: "signet-ring",
    name: "Signet Ring",
    price: 780,
    currency: "USD",
    material: "Solid 14k recycled gold",
    image: "assets/img/products/signet-ring.jpg",
    description:
      "A weighted, close-set signet cast in solid recycled gold. Left plain by design — a piece meant to pick up its own history in scratches and wear rather than arrive pre-aged.",
    shopifyProductId: null,
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
    id: "fracture-stud-gold",
    name: "Fracture Stud Earrings — Gold",
    price: 420,
    currency: "USD",
    material: "14k recycled gold",
    image: "assets/img/products/fracture-stud-gold.jpg",
    description:
      "A pair of solid gold bar studs, each cut through with a single fine fracture — the house's scar motif carried in miniature.",
    shopifyProductId: null,
  },
  {
    id: "fracture-stud-silver",
    name: "Fracture Stud Earrings — Silver",
    price: 340,
    currency: "USD",
    material: "Recycled sterling silver",
    image: "assets/img/products/fracture-stud-silver.jpg",
    description:
      "The same bar stud in sterling silver, its surface split by one hand-finished fracture line running the length of the piece.",
    shopifyProductId: null,
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
    id: "recovery-band",
    name: "Recovery Band",
    price: 1050,
    currency: "USD",
    material: "Platinum",
    image: "assets/img/products/recovery-band.jpg",
    description:
      "A heavy, single-cast platinum band, left entirely unadorned. Built to be the one piece that outlasts every other.",
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
