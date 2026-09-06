(function () {
  var TOOLTIP_KEY = "aboNewsletterTooltipDismissed";

  function bindForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('input[name="name"]').value.trim();
      var email = form.querySelector('input[name="email"]').value.trim();
      var phone = form.querySelector('input[name="phone"]').value.trim();
      if (!email) return;
      var subject = encodeURIComponent("Newsletter signup");
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone);
      window.location.href = "mailto:hello@aboatelier.com?subject=" + subject + "&body=" + body;
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
    var dismissed = false;
    try {
      dismissed = localStorage.getItem(TOOLTIP_KEY) === "1";
    } catch (e) {}
    if (dismissed) {
      tooltip.hidden = true;
    }
    tooltipClose.addEventListener("click", function (e) {
      e.stopPropagation();
      try {
        localStorage.setItem(TOOLTIP_KEY, "1");
      } catch (e) {}
      tooltip.hidden = true;
    });
  }
})();
