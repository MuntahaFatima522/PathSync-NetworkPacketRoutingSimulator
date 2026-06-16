/* NetRoute theme — sync across pages via localStorage */
(function (global) {
  const STORAGE_KEY = 'netroute-theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
    updateToggleButtons();
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function updateToggleButtons() {
    const isDark = getTheme() === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', isDark ? 'Light mode' : 'Dark mode');
      const label = btn.querySelector('.theme-toggle-label');
      if (label) label.textContent = isDark ? 'Light' : 'Dark';
    });
  }

  function initThemeToggle() {
    updateToggleButtons();
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      if (btn.dataset.themeBound) return;
      btn.dataset.themeBound = '1';
      btn.addEventListener('click', toggleTheme);
    });
  }

  global.NetRouteTheme = { getTheme, setTheme, toggleTheme, getCssVar, initThemeToggle };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})(window);
