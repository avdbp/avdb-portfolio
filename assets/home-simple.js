// Home Simple JavaScript - Solo para index.html
console.log('=== HOME SIMPLE JS LOADED ===');

// Función para configurar toggle de idioma
function setupLanguageToggle() {
  console.log('🔄 Configurando toggle de idioma...');
  
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) {
    console.log('ℹ️ No se encontró lang-toggle');
    return;
  }
  
  langToggle.addEventListener('click', () => {
    const currentLang = langToggle.textContent;
    const newLang = currentLang === 'EN' ? 'ES' : 'EN';
    langToggle.textContent = newLang;
    
    console.log('🔄 Cambiando idioma a:', newLang);
    
    // Actualizar contenido basado en idioma
    updateLanguage(newLang.toLowerCase());
  });
  
  console.log('✅ Toggle de idioma configurado');
}

// Función para actualizar contenido basado en idioma
function updateLanguage(lang) {
  console.log('🔄 Actualizando idioma a:', lang);
  
  if (!window.portfolioData) {
    console.error('❌ window.portfolioData no está disponible');
    return;
  }
  
  const data = window.portfolioData[lang];
  if (!data) {
    console.error('❌ No se encontraron datos para el idioma:', lang);
    return;
  }
  
  console.log('✅ Datos encontrados para idioma:', lang);
  
  // Actualizar navegación
  const navElements = document.querySelectorAll('[data-nav]');
  navElements.forEach(element => {
    const key = element.getAttribute('data-nav');
    if (data.nav && data.nav[key]) {
      element.textContent = data.nav[key];
      console.log(`✅ Nav actualizado: ${key} = ${data.nav[key]}`);
    }
  });
  
  // Actualizar contenido del hero
  if (data.home && data.home.hero) {
    const titleEl = document.querySelector('[data-hero="title"]');
    const subtitleEl = document.querySelector('[data-hero="subtitle"]');
    const descriptionEl = document.querySelector('[data-hero="description"]');
    const ctaEl = document.querySelector('[data-hero="cta"]');
    
    if (titleEl) {
      titleEl.textContent = data.home.hero.title;
      console.log('✅ Hero title actualizado:', data.home.hero.title);
    }
    if (subtitleEl) {
      subtitleEl.textContent = data.home.hero.subtitle;
      console.log('✅ Hero subtitle actualizado:', data.home.hero.subtitle);
    }
    if (descriptionEl) {
      descriptionEl.textContent = data.home.hero.description;
      console.log('✅ Hero description actualizado:', data.home.hero.description);
    }
    if (ctaEl) {
      ctaEl.textContent = data.home.hero.cta;
      console.log('✅ Hero CTA actualizado:', data.home.hero.cta);
    }
  }
  
  // Actualizar contenido del footer
  if (data.footer) {
    const descriptionEl = document.querySelector('[data-footer="description"]');
    const copyrightEl = document.querySelector('[data-footer="copyright"]');
    
    if (descriptionEl) {
      descriptionEl.textContent = data.footer.description;
      console.log('✅ Footer description actualizado:', data.footer.description);
    }
    if (copyrightEl) {
      copyrightEl.textContent = data.footer.copyright;
      console.log('✅ Footer copyright actualizado:', data.footer.copyright);
    }
  }
  
  console.log('✅ Idioma actualizado completamente a:', lang);
}

// Función para configurar navegación móvil
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
    
    // Actualizar texto del botón
    navToggle.innerHTML = isExpanded ? '☰' : '✕';
    console.log('✅ Navegación móvil toggle:', !isExpanded);
  });
  
  // Cerrar menú móvil al hacer clic en links
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '☰';
        console.log('✅ Menú móvil cerrado');
      }
    });
  });
  
  console.log('✅ Navegación móvil configurada');
}

// Función para esperar datos y inicializar
function waitAndInitialize() {
  console.log('⏳ Esperando datos del portafolio...');
  
  let attempts = 0;
  const maxAttempts = 25; // 5 segundos total
  
  function checkData() {
    attempts++;
    console.log(`🔍 Intento ${attempts}/${maxAttempts}`);
    
    if (window.portfolioData) {
      console.log('🎉 portfolioData encontrado!');
      console.log('portfolioData:', window.portfolioData);
      
      // Inicializar funcionalidad
      setupLanguageToggle();
      setupMobileNav();
      
      // Actualizar contenido al idioma por defecto (inglés)
      updateLanguage('en');
      
      console.log('✅ Todo inicializado correctamente en el home!');
    } else if (attempts < maxAttempts) {
      console.log('⏰ portfolioData no disponible, esperando...');
      setTimeout(checkData, 200);
    } else {
      console.error('💥 Timeout: portfolioData no se cargó después de 5 segundos');
      
      // Mostrar mensaje de error
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.innerHTML = `
          <div class="container center">
            <h1 style="color: #c51d15;">Error de Carga</h1>
            <p>No se pudieron cargar los datos del portafolio. Por favor, recarga la página.</p>
            <button onclick="location.reload()" style="background: #c51d15; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer;">Recargar Página</button>
          </div>
        `;
      }
    }
  }
  
  checkData();
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM listo en home, iniciando...');
  waitAndInitialize();
});

console.log('=== HOME SIMPLE JS CONFIGURADO ===');

