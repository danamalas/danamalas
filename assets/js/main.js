document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const navBackdrop = document.getElementById("navBackdrop");

function closeNav() {
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  if (navBackdrop) navBackdrop.classList.remove("is-visible");
  const shopItem = siteNav.querySelector(".nav-item-shop");
  if (shopItem) {
    shopItem.classList.remove("is-open");
    const shopLink = shopItem.querySelector("a");
    if (shopLink) shopLink.setAttribute("aria-expanded", "false");
  }
}

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  if (navBackdrop) navBackdrop.classList.toggle("is-visible", isOpen);
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});
if (navBackdrop) {
  navBackdrop.addEventListener("click", closeNav);
}

(function buildShopDropdown() {
  const shopLink = siteNav.querySelector('a[href="shop.html"]');
  if (!shopLink) return;
  shopLink.removeEventListener("click", closeNav);

  const wrapper = document.createElement("span");
  wrapper.className = "nav-item-shop";
  shopLink.parentNode.insertBefore(wrapper, shopLink);
  wrapper.appendChild(shopLink);

  shopLink.setAttribute("aria-haspopup", "true");
  shopLink.setAttribute("aria-expanded", "false");
  shopLink.setAttribute("aria-controls", "navShopMenu");

  const menu = document.createElement("div");
  menu.className = "nav-shop-menu";
  menu.id = "navShopMenu";
  const menuInner = document.createElement("div");
  menuInner.className = "nav-shop-menu-inner";
  [
    ["shop.html?category=jewelry", "shop.tabJewelry"],
    ["shop.html?category=coins", "shop.tabCoins"],
    ["the-scar-project.html", "nav.scarProject"],
  ].forEach(([href, key]) => {
    const a = document.createElement("a");
    a.href = href;
    a.setAttribute("data-i18n", key);
    a.addEventListener("click", closeNav);
    menuInner.appendChild(a);
  });
  menu.appendChild(menuInner);
  wrapper.appendChild(menu);

  const isMobileNav = () => window.matchMedia("(max-width: 1280px)").matches;

  shopLink.addEventListener("click", (e) => {
    if (!isMobileNav()) {
      closeNav();
      return;
    }
    e.preventDefault();
    const isOpen = wrapper.classList.toggle("is-open");
    shopLink.setAttribute("aria-expanded", String(isOpen));
  });

  if (window.ABO_I18N) window.ABO_I18N.applyDom();
})();

const shopIntroBg = document.getElementById("shopIntroBg");
if (shopIntroBg) {
  const updateParallax = () => {
    const section = shopIntroBg.parentElement;
    const rect = section.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
    const maxShift = rect.height * 0.24;
    shopIntroBg.style.transform = `translateY(${(-progress * maxShift).toFixed(1)}px)`;
  };
  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
}

const revealTargets = document.querySelectorAll(".story, .contact-section");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
