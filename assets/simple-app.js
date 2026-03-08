// Rocket Media Portfolio - Simple JavaScript
// Simplified version to ensure projects render correctly

document.addEventListener('DOMContentLoaded', () => {
  console.log('=== SIMPLE APP LOADED ===');
  
  // Wait a bit for portfolio-data.js to load
  setTimeout(() => {
    console.log('Verificando datos...');
    console.log('portfolioData:', window.portfolioData);
    console.log('projects:', window.projects);
    
    if (window.projects && Array.isArray(window.projects)) {
      console.log('✅ Datos disponibles, renderizando proyectos...');
      renderProjects();
    } else {
      console.error('❌ No se encontraron proyectos');
      showFallback();
    }
  }, 100);
});

function renderProjects() {
  const projectGrid = document.getElementById('project-grid');
  if (!projectGrid) {
    console.error('No se encontró project-grid');
    return;
  }
  
  // Filter featured projects for home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const projectsToShow = isHomePage ? window.projects.filter(p => p.featured) : window.projects;
  
  console.log('Proyectos a mostrar:', projectsToShow.length);
  
  if (projectsToShow.length === 0) {
    projectGrid.innerHTML = '<p>No se encontraron proyectos para mostrar.</p>';
    return;
  }
  
  const htmlContent = projectsToShow.map(project => {
    const title = project.title.en || project.title;
    const description = project.description.en || project.description;
    
    return `
      <article class="project-card" data-animate="fade-up">
        <div class="project-image">
          <img src="${project.image}" alt="${title}" loading="lazy">
          ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
        </div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-description">${description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.links.website ? `<a href="${project.links.website}" target="_blank" rel="noopener" class="btn btn--outline">Website</a>` : ''}
            ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener" class="btn btn--outline">GitHub</a>` : ''}
            ${project.links.deploy ? `<a href="${project.links.deploy}" target="_blank" rel="noopener" class="btn btn--primary">Live Demo</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  projectGrid.innerHTML = htmlContent;
  console.log('✅ Proyectos renderizados exitosamente');
}

function showFallback() {
  const projectGrid = document.getElementById('project-grid');
  const fallbackProjects = document.getElementById('fallback-projects');
  
  if (projectGrid) {
    projectGrid.style.display = 'none';
  }
  
  if (fallbackProjects) {
    fallbackProjects.style.display = 'block';
  }
}

// Language toggle functionality
function setupLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = langToggle.textContent;
      const newLang = currentLang === 'EN' ? 'ES' : 'EN';
      langToggle.textContent = newLang;
      
      // Update content based on language
      updateLanguage(newLang);
    });
  }
}

function updateLanguage(lang) {
  if (!window.portfolioData) return;
  
  const data = window.portfolioData[lang.toLowerCase()];
  if (!data) return;
  
  // Update navigation
  const navElements = document.querySelectorAll('[data-nav]');
  navElements.forEach(element => {
    const key = element.getAttribute('data-nav');
    if (data.nav && data.nav[key]) {
      element.textContent = data.nav[key];
    }
  });
  
  // Update hero
  if (data.home && data.home.hero) {
    const titleEl = document.querySelector('[data-hero="title"]');
    const subtitleEl = document.querySelector('[data-hero="subtitle"]');
    const descriptionEl = document.querySelector('[data-hero="description"]');
    const ctaEl = document.querySelector('[data-hero="cta"]');
    
    if (titleEl) titleEl.textContent = data.home.hero.title;
    if (subtitleEl) subtitleEl.textContent = data.home.hero.subtitle;
    if (descriptionEl) descriptionEl.textContent = data.home.hero.description;
    if (ctaEl) ctaEl.textContent = data.home.hero.cta;
  }
  
  // Update footer
  if (data.footer) {
    const descriptionEl = document.querySelector('[data-footer="description"]');
    const copyrightEl = document.querySelector('[data-footer="copyright"]');
    
    if (descriptionEl) descriptionEl.textContent = data.footer.description;
    if (copyrightEl) copyrightEl.textContent = data.footer.copyright;
  }
}

// Initialize language toggle
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
});

