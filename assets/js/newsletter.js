(function () {
  function bindForm(form) {
    var status = form.querySelector(".newsletter-status");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('input[name="name"]').value.trim();
      var email = form.querySelector('input[name="email"]').value.trim();
      var phoneCountry = form.querySelector('[name="phoneCountry"]');
      var phone = form.querySelector('input[name="phone"]').value.trim();
      var fullPhone = (phoneCountry ? phoneCountry.value + " " : "") + phone;
      if (!email) return;

      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.hidden = false;
        status.className = "newsletter-status";
        status.textContent = t("newsletter.sending");
      }

      submitToWeb3Forms({
        subject: "Newsletter signup — ABÔ Atelier",
        from_name: "ABÔ Atelier Website",
        name: name,
        email: email,
        phone: fullPhone,
      }).then(function (result) {
        if (submitBtn) submitBtn.disabled = false;
        if (!status) return;
        if (result.ok) {
          status.className = "newsletter-status is-success";
          status.textContent = t("newsletter.success");
          form.reset();
        } else {
          status.className = "newsletter-status is-error";
          status.textContent = t("newsletter.error");
        }
      });
    });
  }

  document.querySelectorAll(".newsletter-form").forEach(bindForm);

  var badge = document.getElementById("newsletterBadge");
  var popup = document.getElementById("newsletterPopup");
  var popupClose = document.getElementById("newsletterClose");

  if (badge && popup) {
    badge.addEventListener("click", function () {
      popup.hidden = !popup.hidden;
    });
  }

  if (popupClose && popup) {
    popupClose.addEventListener("click", function (e) {
      e.stopPropagation();
      popup.hidden = true;
    });
  }

  var openBtn = document.getElementById("newsletterOpenBtn");
  if (openBtn && popup) {
    openBtn.addEventListener("click", function () {
      popup.hidden = false;
    });
  }
})();
