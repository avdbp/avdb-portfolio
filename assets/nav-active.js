/**
 * Marca el enlace activo del navbar según la URL actual
 */
(function() {
  function setNavActive() {
    const path = window.location.pathname;
    const menu = document.getElementById('nav-menu');
    if (!menu) return;

    // Quitar active de todos
    menu.querySelectorAll('a').forEach(function(a) {
      a.removeAttribute('aria-current');
      a.classList.remove('active');
    });

    // Determinar cuál es la página actual
    let activeLink = null;
    if (path === '/' || path === '/index.html') {
      activeLink = menu.querySelector('a[href="/"], a[href="/index.html"]');
    } else if (path.includes('projects')) {
      activeLink = menu.querySelector('a[href*="projects"]');
    } else if (path.includes('about')) {
      activeLink = menu.querySelector('a[href*="about"]');
    } else if (path.includes('contact')) {
      activeLink = menu.querySelector('a[href*="contact"]');
    }

    if (activeLink) {
      activeLink.setAttribute('aria-current', 'page');
      activeLink.classList.add('active');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setNavActive);
  } else {
    setNavActive();
  }
})();
