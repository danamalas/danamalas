document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

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
