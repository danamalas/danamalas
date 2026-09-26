(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var status = form.querySelector(".newsletter-status");
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.querySelector('input[name="name"]').value.trim();
    var email = form.querySelector('input[name="email"]').value.trim();
    var message = form.querySelector('textarea[name="message"]').value.trim();
    if (!email || !message) return;

    if (submitBtn) submitBtn.disabled = true;
    if (status) {
      status.hidden = false;
      status.className = "newsletter-status";
      status.textContent = t("newsletter.sending");
    }

    submitToWeb3Forms({
      subject: "Contact form — ABÔ Atelier",
      from_name: "ABÔ Atelier Website",
      name: name,
      email: email,
      message: message,
    }).then(function (result) {
      if (submitBtn) submitBtn.disabled = false;
      if (!status) return;
      if (result.ok) {
        status.className = "newsletter-status is-success";
        status.textContent = t("contact.form.success");
        form.reset();
      } else {
        status.className = "newsletter-status is-error";
        status.textContent = t("newsletter.error");
      }
    });
  });
})();
