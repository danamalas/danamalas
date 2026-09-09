(function () {
  var wizard = document.getElementById("storyWizard");
  if (!wizard) return;

  var steps = Array.prototype.slice.call(wizard.querySelectorAll(".wizard-step"));
  var progressFill = document.getElementById("wizardProgressFill");
  var current = 0;

  // Steps that count toward the progress bar (excludes intro and the final screen).
  var progressSteps = ["about", "story", "today", "participation", "consent", "review"];

  function stepName(el) {
    return el.getAttribute("data-step");
  }

  function showStep(index) {
    steps.forEach(function (el, i) {
      el.hidden = i !== index;
    });
    current = index;

    var name = stepName(steps[index]);
    var progressIndex = progressSteps.indexOf(name);
    if (progressFill) {
      if (progressIndex === -1) {
        progressFill.style.width = name === "done" ? "100%" : "0%";
      } else {
        progressFill.style.width = Math.round(((progressIndex + 1) / progressSteps.length) * 100) + "%";
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (name === "review") renderReview();
  }

  function goToStepName(name) {
    var index = steps.findIndex(function (el) {
      return stepName(el) === name;
    });
    if (index !== -1) showStep(index);
  }

  function showError(step, message) {
    var errorEl = step.querySelector(".wizard-error");
    if (!errorEl) return;
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      errorEl.hidden = true;
    }
  }

  function fieldValue(name) {
    var field = wizard.querySelector('[name="' + name + '"]');
    return field ? field.value.trim() : "";
  }

  function checkedRadioLabel(name) {
    var field = wizard.querySelector('[name="' + name + '"]:checked');
    if (!field) return "";
    var label = field.closest("label");
    return label ? label.textContent.trim() : field.value;
  }

  function validateStep(step) {
    var name = stepName(step);

    if (name === "about") {
      var email = wizard.querySelector('[name="email"]');
      if (!email.value.trim() || !email.checkValidity()) {
        showError(step, "Please share a valid email so we can reach you if your story is chosen.");
        email.focus();
        return false;
      }
    }

    if (name === "story") {
      if (!fieldValue("story")) {
        showError(step, "Please share at least a few words about your scar.");
        return false;
      }
    }

    if (name === "today") {
      if (!fieldValue("today")) {
        showError(step, "Please share what strength you've found through your scar.");
        return false;
      }
    }

    if (name === "participation") {
      if (!wizard.querySelector('[name="participation"]:checked')) {
        showError(step, "Please choose one option.");
        return false;
      }
    }

    if (name === "consent") {
      var reviewConsent = wizard.querySelector('[name="consentReview"]');
      if (!reviewConsent.checked) {
        showError(step, "Please confirm you're comfortable with ABÔ Atelier reviewing your submission.");
        return false;
      }
    }

    showError(step, null);
    return true;
  }

  wizard.querySelectorAll("[data-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var step = btn.closest(".wizard-step");
      if (!validateStep(step)) return;
      showStep(current + 1);
    });
  });

  wizard.querySelectorAll("[data-back]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showStep(current - 1);
    });
  });

  wizard.querySelectorAll("[data-goto]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      goToStepName(btn.getAttribute("data-goto"));
    });
  });

  function renderReview() {
    var list = document.getElementById("wizardReviewList");
    if (!list) return;

    var rows = [
      { label: "First name", value: fieldValue("firstName") || "—", goto: "about" },
      { label: "City / Country", value: fieldValue("location") || "—", goto: "about" },
      { label: "Email", value: fieldValue("email"), goto: "about" },
      { label: "Your story", value: fieldValue("story"), goto: "story" },
      { label: "Strength found through your scar", value: fieldValue("today"), goto: "today" },
      { label: "How you'd like to share", value: checkedRadioLabel("participation"), goto: "participation" },
      { label: "Consent", value: "Reviewing submission: Yes", goto: "consent" },
    ];

    list.innerHTML = "";
    rows.forEach(function (row) {
      var li = document.createElement("li");
      li.className = "wizard-review-item";
      li.innerHTML =
        '<div class="wizard-review-body">' +
        '<span class="wizard-review-label">' + row.label + "</span>" +
        '<div class="wizard-review-value"></div>' +
        "</div>" +
        '<button type="button" class="wizard-review-edit" data-goto="' + row.goto + '">Edit</button>';
      li.querySelector(".wizard-review-value").textContent = row.value;
      list.appendChild(li);

      li.querySelector("[data-goto]").addEventListener("click", function () {
        goToStepName(row.goto);
      });
    });
  }

  var submitBtn = document.getElementById("wizardSubmit");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      var subject = encodeURIComponent("The Scar Project — story submission");
      var bodyLines = [
        "First name: " + (fieldValue("firstName") || "—"),
        "City / Country: " + (fieldValue("location") || "—"),
        "Email: " + fieldValue("email"),
        "",
        "Their story:",
        fieldValue("story"),
        "",
        "Strength found through their scar:",
        fieldValue("today"),
        "",
        "How they'd like to share: " + checkedRadioLabel("participation"),
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = "mailto:hello@aboatelier.com?subject=" + subject + "&body=" + body;

      goToStepName("done");
    });
  }

  showStep(0);
})();
