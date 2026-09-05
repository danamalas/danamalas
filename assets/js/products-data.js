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
    id: "mended-hoops",
    name: "Mended Hoops",
    price: 420,
    currency: "USD",
    material: "14k recycled gold",
    image: "assets/img/products/mended-hoops.jpg",
    description:
      "Small, close hoops with a hand-soldered seam left visible rather than polished away — a quiet nod to the house's mend-with-gold motif.",
    shopifyProductId: null,
  },
  {
    id: "scarline-cuff",
    name: "Scarline Cuff",
    price: 610,
    currency: "USD",
    material: "Recycled sterling silver",
    image: "assets/img/products/scarline-cuff.jpg",
    description:
      "An open cuff with three fine incised lines across the outer face, each cut by hand and never quite identical from one piece to the next.",
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
