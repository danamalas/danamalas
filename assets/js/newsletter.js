(function () {
  function bindForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('input[name="name"]').value.trim();
      var email = form.querySelector('input[name="email"]').value.trim();
      var phoneCountry = form.querySelector('select[name="phoneCountry"]');
      var phone = form.querySelector('input[name="phone"]').value.trim();
      var fullPhone = (phoneCountry ? phoneCountry.value + " " : "") + phone;
      if (!email) return;
      var subject = encodeURIComponent("Newsletter signup");
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + fullPhone);
      window.location.href = "mailto:support@aboatelier.com?subject=" + subject + "&body=" + body;
      var popup = form.closest(".newsletter-popup");
      if (popup) popup.hidden = true;
    });
  }

  document.querySelectorAll(".newsletter-form").forEach(bindForm);

  var badge = document.getElementById("newsletterBadge");
  var popup = document.getElementById("newsletterPopup");
  var tooltip = document.getElementById("newsletterTooltip");
  var tooltipClose = document.getElementById("newsletterTooltipClose");
  var popupClose = document.getElementById("newsletterClose");

  var TOOLTIP_KEY = "aboNewsletterTooltipDismissed";

  // A page refresh should bring the tooltip back, but simply navigating to
  // another page (Shop, Our Story, etc.) should not — sessionStorage persists
  // across navigations within the tab, so we only clear it on an actual reload.
  try {
    var navEntries = performance.getEntriesByType && performance.getEntriesByType("navigation");
    var isReload = navEntries && navEntries.length && navEntries[0].type === "reload";
    if (isReload) sessionStorage.removeItem(TOOLTIP_KEY);
  } catch (e) {}

  if (tooltip) {
    try {
      if (sessionStorage.getItem(TOOLTIP_KEY)) tooltip.hidden = true;
    } catch (e) {}
  }

  if (badge && popup) {
    badge.addEventListener("click", function () {
      popup.hidden = !popup.hidden;
    });
  }

  if (tooltip && popup) {
    tooltip.addEventListener("click", function () {
      popup.hidden = !popup.hidden;
    });
  }

  if (popupClose && popup) {
    popupClose.addEventListener("click", function (e) {
      e.stopPropagation();
      popup.hidden = true;
    });
  }

  if (tooltip && tooltipClose) {
    tooltipClose.addEventListener("click", function (e) {
      e.stopPropagation();
      tooltip.hidden = true;
      try {
        sessionStorage.setItem(TOOLTIP_KEY, "1");
      } catch (err) {}
    });
  }
})();
