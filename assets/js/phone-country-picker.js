(function () {
  if (typeof PHONE_COUNTRIES === "undefined") return;

  var openPickers = [];
  var searchInputs = [];

  function searchPlaceholder() {
    return typeof t === "function" ? t("phone.searchPlaceholder") : "Search country…";
  }

  function closeAllExcept(keep) {
    openPickers.forEach(function (p) {
      if (p !== keep) p.close();
    });
  }

  function enhance(select) {
    if (select.dataset.enhanced) return;
    select.dataset.enhanced = "true";

    var wrapper = document.createElement("div");
    wrapper.className = "phone-country-picker";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "phone-country-btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");

    var btnLabel = document.createElement("span");
    btn.appendChild(btnLabel);

    var panel = document.createElement("div");
    panel.className = "phone-country-panel";
    panel.hidden = true;

    var search = document.createElement("input");
    search.type = "text";
    search.className = "phone-country-search";
    search.placeholder = searchPlaceholder();
    search.setAttribute("aria-label", searchPlaceholder());
    search.autocomplete = "off";
    searchInputs.push(search);

    var list = document.createElement("ul");
    list.className = "phone-country-list";
    list.setAttribute("role", "listbox");

    panel.appendChild(search);
    panel.appendChild(list);

    wrapper.appendChild(btn);
    wrapper.appendChild(panel);

    select.parentNode.insertBefore(wrapper, select);
    select.hidden = true;
    wrapper.appendChild(select);

    var highlightIndex = -1;
    var filtered = PHONE_COUNTRIES.slice();

    function setValue(country) {
      select.value = country.code;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      btnLabel.textContent = country.flag + " " + country.code;
    }

    function renderList() {
      list.innerHTML = "";
      filtered.forEach(function (country, i) {
        var li = document.createElement("li");
        li.setAttribute("role", "option");
        var optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "phone-country-option" + (i === highlightIndex ? " is-highlighted" : "");
        optBtn.innerHTML =
          '<span class="phone-country-option-flag">' + country.flag + "</span>" +
          '<span class="phone-country-option-name">' + country.name + "</span>" +
          '<span class="phone-country-option-code">' + country.code + "</span>";
        optBtn.addEventListener("click", function () {
          setValue(country);
          close();
        });
        li.appendChild(optBtn);
        list.appendChild(li);
      });
      if (filtered.length === 0) {
        var empty = document.createElement("li");
        empty.className = "phone-country-empty";
        empty.textContent = "No matches";
        list.appendChild(empty);
      }
    }

    function filterCountries(query) {
      var q = query.trim().toLowerCase();
      highlightIndex = -1;
      filtered = !q
        ? PHONE_COUNTRIES.slice()
        : PHONE_COUNTRIES.filter(function (c) {
            return c.name.toLowerCase().indexOf(q) !== -1;
          });
      renderList();
    }

    function open() {
      closeAllExcept(picker);
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");

      var rect = btn.getBoundingClientRect();
      var spaceBelow = window.innerHeight - rect.bottom;
      var neededSpace = 260;
      panel.classList.toggle("opens-upward", spaceBelow < neededSpace && rect.top > spaceBelow);

      search.value = "";
      filterCountries("");
      search.focus();
    }

    function close() {
      panel.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (panel.hidden) open();
      else close();
    });

    search.addEventListener("input", function () {
      filterCountries(search.value);
    });

    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        close();
        btn.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (filtered.length) {
          highlightIndex = Math.min(highlightIndex + 1, filtered.length - 1);
          renderList();
          scrollHighlightedIntoView();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (filtered.length) {
          highlightIndex = Math.max(highlightIndex - 1, 0);
          renderList();
          scrollHighlightedIntoView();
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightIndex >= 0 && filtered[highlightIndex]) {
          setValue(filtered[highlightIndex]);
          close();
          btn.focus();
        } else if (filtered.length === 1) {
          setValue(filtered[0]);
          close();
          btn.focus();
        }
      }
    });

    function scrollHighlightedIntoView() {
      var el = list.querySelector(".is-highlighted");
      if (el) el.scrollIntoView({ block: "nearest" });
    }

    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) close();
    });

    var picker = { close: close, wrapper: wrapper };
    openPickers.push(picker);

    var initial =
      PHONE_COUNTRIES.find(function (c) {
        return c.code === select.value;
      }) || PHONE_COUNTRIES[0];
    btnLabel.textContent = initial.flag + " " + initial.code;
    select.value = initial.code;
  }

  function init() {
    document.querySelectorAll("select.newsletter-phone-code").forEach(enhance);
  }

  init();
  document.addEventListener("abo:langchange", function () {
    searchInputs.forEach(function (input) {
      input.placeholder = searchPlaceholder();
      input.setAttribute("aria-label", searchPlaceholder());
    });
  });
})();
