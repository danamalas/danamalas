(function () {
  var STORAGE_KEY = 'abou-sobhi-lang';
  var html = document.documentElement;

  function applyLang(lang) {
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
      if (text !== null) el.innerHTML = text;
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var initial = 'en';
  try { initial = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
  applyLang(initial);

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(html.lang === 'ar' ? 'en' : 'ar');
    });
  }

  var burger = document.getElementById('navBurger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var storyVideo = document.getElementById('storyVideo');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (storyVideo && !reduceMotion && 'IntersectionObserver' in window) {
    var inView = false;
    var stopTimer = null;

    var observer = new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      if (!inView) storyVideo.pause();
    }, { threshold: 0.2 });
    observer.observe(storyVideo);

    window.addEventListener('scroll', function () {
      if (!inView) return;
      if (storyVideo.paused) {
        storyVideo.play().catch(function () {});
      }
      clearTimeout(stopTimer);
      stopTimer = setTimeout(function () {
        storyVideo.pause();
      }, 200);
    }, { passive: true });
  }
})();
