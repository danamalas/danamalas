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

  const wrapper = document.createElement("span");
  wrapper.className = "nav-item-shop";
  shopLink.parentNode.insertBefore(wrapper, shopLink);
  wrapper.appendChild(shopLink);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav-shop-toggle";
  toggle.setAttribute("aria-haspopup", "true");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("data-i18n-aria", "nav.shopToggleAria");

  const menu = document.createElement("ul");
  menu.className = "nav-shop-menu";
  menu.hidden = true;
  [
    ["jewelry", "shop.tabJewelry"],
    ["coins", "shop.tabCoins"],
    ["scar-project", "nav.scarProject"],
  ].forEach(([category, key]) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `shop.html?category=${category}`;
    a.setAttribute("data-i18n", key);
    li.appendChild(a);
    menu.appendChild(li);
  });

  wrapper.appendChild(toggle);
  wrapper.appendChild(menu);

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.hidden;
    menu.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  document.addEventListener("click", () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
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
