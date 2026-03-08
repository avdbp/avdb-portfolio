// Ultra Working JavaScript - Rocket Media Portfolio
// This will work immediately without complex dependencies

console.log('=== ULTRA WORKING JS LOADED ===');

// Simple function to update content
function updateContent() {
  console.log('🔄 Actualizando contenido...');
  
  // Update hero content
  const heroTitle = document.querySelector('[data-hero="title"]');
  const heroSubtitle = document.querySelector('[data-hero="subtitle"]');
  const heroDescription = document.querySelector('[data-hero="description"]');
  const heroCta = document.querySelector('[data-hero="cta"]');
  
  if (heroTitle) {
    heroTitle.textContent = 'Rocket Media Portfolio';
    console.log('✅ Hero title actualizado');
  }
  
  if (heroSubtitle) {
    heroSubtitle.textContent = 'Web Development & Design Studio';
    console.log('✅ Hero subtitle actualizado');
  }
  
  if (heroDescription) {
    heroDescription.textContent = 'Creating modern, responsive websites and web applications with clean code and exceptional user experience.';
    console.log('✅ Hero description actualizado');
  }
  
  if (heroCta) {
    heroCta.textContent = 'View Projects';
    console.log('✅ Hero CTA actualizado');
  }
  
  // Update navigation
  const navElements = document.querySelectorAll('[data-nav]');
  navElements.forEach(element => {
    const key = element.getAttribute('data-nav');
    if (key === 'home') element.textContent = 'Home';
    if (key === 'projects') element.textContent = 'Projects';
    if (key === 'about') element.textContent = 'About';
    if (key === 'contact') element.textContent = 'Contact';
  });
  console.log('✅ Navegación actualizada');
  
  // Update footer
  const footerDescription = document.querySelector('[data-footer="description"]');
  const footerCopyright = document.querySelector('[data-footer="copyright"]');
  
  if (footerDescription) {
    footerDescription.textContent = 'Web development and design studio creating modern, responsive websites.';
    console.log('✅ Footer description actualizado');
  }
  
  if (footerCopyright) {
    footerCopyright.textContent = '© 2025 Rocket Media. All rights reserved.';
    console.log('✅ Footer copyright actualizado');
  }
  
  console.log('✅ Todo el contenido actualizado correctamente');
}

// Simple language toggle
function setupLanguageToggle() {
  console.log('🔄 Configurando toggle de idioma...');
  
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) {
    console.log('ℹ️ No se encontró lang-toggle');
    return;
  }
  
  let isEnglish = true;
  
  langToggle.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langToggle.textContent = isEnglish ? 'ES' : 'EN';
    
    if (isEnglish) {
      // English content
      const heroTitle = document.querySelector('[data-hero="title"]');
      const heroSubtitle = document.querySelector('[data-hero="subtitle"]');
      const heroDescription = document.querySelector('[data-hero="description"]');
      const heroCta = document.querySelector('[data-hero="cta"]');
      
      if (heroTitle) heroTitle.textContent = 'Rocket Media Portfolio';
      if (heroSubtitle) heroSubtitle.textContent = 'Web Development & Design Studio';
      if (heroDescription) heroDescription.textContent = 'Creating modern, responsive websites and web applications with clean code and exceptional user experience.';
      if (heroCta) heroCta.textContent = 'View Projects';
      
      console.log('✅ Cambiado a inglés');
    } else {
      // Spanish content
      const heroTitle = document.querySelector('[data-hero="title"]');
      const heroSubtitle = document.querySelector('[data-hero="subtitle"]');
      const heroDescription = document.querySelector('[data-hero="description"]');
      const heroCta = document.querySelector('[data-hero="cta"]');
      
      if (heroTitle) heroTitle.textContent = 'Portafolio Rocket Media';
      if (heroSubtitle) heroSubtitle.textContent = 'Estudio de Desarrollo y Diseño Web';
      if (heroDescription) heroDescription.textContent = 'Creando sitios web y aplicaciones web modernas y responsivas con código limpio y experiencia de usuario excepcional.';
      if (heroCta) heroCta.textContent = 'Ver Proyectos';
      
      console.log('✅ Cambiado a español');
    }
  });
  
  console.log('✅ Toggle de idioma configurado');
}

// Simple mobile navigation
function setupMobileNav() {
  console.log('🔄 Configurando navegación móvil...');
  
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (!navToggle || !navMenu) {
    console.log('ℹ️ No se encontraron elementos de navegación móvil');
    return;
  }
  
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-open');
    
    // Update button text
    navToggle.innerHTML = isExpanded ? '☰' : '✕';
    console.log('✅ Navegación móvil toggle:', !isExpanded);
  });
  
  console.log('✅ Navegación móvil configurada');
}

// Main initialization
function initialize() {
  console.log('🚀 Inicializando...');
  
  // Update content immediately
  updateContent();
  
  // Setup functionality
  setupLanguageToggle();
  setupMobileNav();
  
  console.log('✅ Inicialización completada');
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM listo, iniciando...');
  initialize();
});

// Also try to run if DOM is already loaded
if (document.readyState === 'loading') {
  console.log('⏳ DOM aún cargando...');
} else {
  console.log('🚀 DOM ya listo, ejecutando inmediatamente...');
  initialize();
}

console.log('=== ULTRA WORKING JS CONFIGURADO ===');

