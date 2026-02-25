// app.js
(function () {
  const root = document.documentElement;
  const btn = () => document.querySelector("[data-theme-toggle]");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const b = btn();
    if (b) b.textContent = theme === "dark" ? "🌙 Dark" : "☀️ Light";
  }

  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return setTheme(saved);

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-theme-toggle]");
    if (!t) return;
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  initTheme();
})();

