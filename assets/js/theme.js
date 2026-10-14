(function () {
  'use strict';
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function render() {
    var dark = root.getAttribute('data-theme') === 'dark';
    var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', dark ? '#111111' : '#ffffff');
  }

  button.addEventListener('click', function () {
    var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('site-theme', theme); } catch (error) {}
    render();
  });
  window.addEventListener('storage', function (event) {
    if (event.key === 'site-theme' || event.key === null) {
      root.setAttribute('data-theme', event.newValue === 'dark' ? 'dark' : 'light');
      render();
    }
  });
  render();
  button.hidden = false;
  window.dispatchEvent(new Event('resize'));
}());
