(function () {
  var STORAGE_KEY = "shareplate-theme";
  var btn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (btn) {
    var icon = btn.querySelector("i");
    if (icon) icon.className = "ti " + (theme === "dark" ? "ti-sun" : "ti-moon");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
}
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  if (btn) {
    applyTheme(currentTheme());
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();