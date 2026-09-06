(function () {
  var STORAGE_KEY = "aboNewsletterDismissed";

  function bindForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]').value.trim();
      if (!email) return;
      var subject = encodeURIComponent("Newsletter signup");
      var body = encodeURIComponent("Please add this email to the newsletter list: " + email);
      window.location.href = "mailto:hello@aboatelier.com?subject=" + subject + "&body=" + body;
      var popup = form.closest(".newsletter-popup");
      if (popup) popup.hidden = true;
    });
  }

  document.querySelectorAll(".newsletter-form").forEach(bindForm);

  var widget = document.getElementById("newsletterWidget");
  if (!widget) return;

  var dismissed = false;
  try {
    dismissed = localStorage.getItem(STORAGE_KEY) === "1";
  } catch (e) {}
  if (dismissed) return;

  widget.hidden = false;

  var badge = document.getElementById("newsletterBadge");
  var popup = document.getElementById("newsletterPopup");
  var closeBtn = document.getElementById("newsletterClose");

  badge.addEventListener("click", function () {
    popup.hidden = !popup.hidden;
  });

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
    widget.remove();
  });
})();
