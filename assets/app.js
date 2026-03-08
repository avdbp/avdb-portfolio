// Rocket Media Portfolio - Main JavaScript
// Handles language switching, navigation, and animations

class RocketMediaPortfolio {
  constructor() {
    this.currentLanguage = 'en';
    this.init();
  }

  init() {
    this.setupLanguageToggle();
    this.setupNavigation();
    this.setupScrollAnimations();
    this.setupContactForm();
    this.renderContent();
  }

  // Language switching functionality
  setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
        this.updateLanguageUI();
        this.renderContent();
      });
    }
  }

  updateLanguageUI() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.textContent = this.currentLanguage === 'en' ? 'ES' : 'EN';
      langToggle.setAttribute('aria-label', 
        this.currentLanguage === 'en' ? 'Cambiar a español' : 'Switch to English'
      );
    }
  }

  // Navigation functionality
  setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (navToggle && menu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('is-open');
        
        // Update button text
        navToggle.innerHTML = isExpanded ? '☰' : '✕';
      });
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.innerHTML = '☰';
        }
      });
    });
  }

  // Scroll animations with Intersection Observer
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
  }

  // Contact form handling
  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission();
      });
    }
  }

  handleFormSubmission() {
    const formData = new FormData(document.getElementById('contact-form'));
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = this.currentLanguage === 'en' ? 'Sending...' : 'Enviando...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      submitBtn.textContent = this.currentLanguage === 'en' ? 'Message Sent!' : '¡Mensaje Enviado!';
      submitBtn.classList.add('success');
      
      // Reset form
      document.getElementById('contact-form').reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('success');
      }, 3000);
    }, 1500);
  }

  // Render content based on current language
  renderContent() {
    const data = window.portfolioData[this.currentLanguage];
    if (!data) {
      console.error('No se encontraron datos del portafolio para el idioma:', this.currentLanguage);
      return;
    }
    
    console.log('Datos del portafolio cargados:', data);

    // Update navigation
    this.updateNavigation(data.nav);
    
    // Update page-specific content
    this.updatePageContent(data);
    
    // Update footer
    this.updateFooter(data.footer);
    
    // Setup project grid after content is rendered
    console.log('Configurando grid de proyectos...');
    this.setupProjectGrid();
  }

  updateNavigation(navData) {
    const navElements = document.querySelectorAll('[data-nav]');
    navElements.forEach(element => {
      const key = element.getAttribute('data-nav');
      if (navData[key]) {
        element.textContent = navData[key];
      }
    });
  }

  updatePageContent(data) {
    // Update hero section
    this.updateHero(data.home?.hero);
    
    // Update about section
    this.updateAbout(data.about);
    
    // Update contact section
    this.updateContact(data.contact);
    
    // Update page titles and descriptions
    this.updatePageMeta(data);
  }

  updateHero(heroData) {
    if (!heroData) return;
    
    const titleEl = document.querySelector('[data-hero="title"]');
    const subtitleEl = document.querySelector('[data-hero="subtitle"]');
    const descriptionEl = document.querySelector('[data-hero="description"]');
    const ctaEl = document.querySelector('[data-hero="cta"]');

    if (titleEl) titleEl.textContent = heroData.title;
    if (subtitleEl) subtitleEl.textContent = heroData.subtitle;
    if (descriptionEl) descriptionEl.textContent = heroData.description;
    if (ctaEl) ctaEl.textContent = heroData.cta;
  }

  updateAbout(aboutData) {
    if (!aboutData) return;
    
    const titleEl = document.querySelector('[data-about="title"]');
    const descriptionEl = document.querySelector('[data-about="description"]');
    const skillsTitleEl = document.querySelector('[data-about="skills-title"]');

    if (titleEl) titleEl.textContent = aboutData.title;
    if (descriptionEl) descriptionEl.textContent = aboutData.description;
    if (skillsTitleEl) skillsTitleEl.textContent = aboutData.skills.title;

    // Update skills list
    this.updateSkillsList(aboutData.skills.list);
  }

  updateSkillsList(skills) {
    const skillsContainer = document.querySelector('.skills-list');
    if (!skillsContainer || !skills) return;

    skillsContainer.innerHTML = skills.map(skill => 
      `<li class="skill-item" data-animate="fade-up">${skill}</li>`
    ).join('');
  }

  updateContact(contactData) {
    if (!contactData) return;
    
    const titleEl = document.querySelector('[data-contact="title"]');
    const subtitleEl = document.querySelector('[data-contact="subtitle"]');
    const nameLabelEl = document.querySelector('[data-contact="name-label"]');
    const emailLabelEl = document.querySelector('[data-contact="email-label"]');
    const messageLabelEl = document.querySelector('[data-contact="message-label"]');
    const submitEl = document.querySelector('[data-contact="submit"]');
    const directTitleEl = document.querySelector('[data-contact="direct-title"]');

    if (titleEl) titleEl.textContent = contactData.title;
    if (subtitleEl) subtitleEl.textContent = contactData.subtitle;
    if (nameLabelEl) nameLabelEl.textContent = contactData.form.name;
    if (emailLabelEl) emailLabelEl.textContent = contactData.form.email;
    if (messageLabelEl) messageLabelEl.textContent = contactData.form.message;
    if (submitEl) submitEl.textContent = contactData.form.submit;
    if (directTitleEl) directTitleEl.textContent = contactData.direct.title;

    // Update placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput) nameInput.placeholder = contactData.form.namePlaceholder;
    if (emailInput) emailInput.placeholder = contactData.form.emailPlaceholder;
    if (messageInput) messageInput.placeholder = contactData.form.messagePlaceholder;
  }

  updateFooter(footerData) {
    const descriptionEl = document.querySelector('[data-footer="description"]');
    const copyrightEl = document.querySelector('[data-footer="copyright"]');

    if (descriptionEl) descriptionEl.textContent = footerData.description;
    if (copyrightEl) copyrightEl.textContent = footerData.copyright;
  }

  // Update page meta information
  updatePageMeta(data) {
    // Update page title if it exists
    const pageTitle = document.querySelector('[data-page-title]');
    if (pageTitle) {
      pageTitle.textContent = data.home?.hero?.title || 'Rocket Media Portfolio';
    }
    
    // Update page description if it exists
    const pageDescription = document.querySelector('[data-page-description]');
    if (pageDescription) {
      pageDescription.textContent = data.home?.hero?.description || '';
    }
  }

  // Setup project grid
  setupProjectGrid() {
    console.log('=== SETUP PROJECT GRID ===');
    
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) {
      console.error('❌ No se encontró el grid de proyectos');
      return;
    }
    
    if (!window.projects || !Array.isArray(window.projects)) {
      console.error('❌ window.projects no válido:', window.projects);
      return;
    }

    console.log('✅ Proyectos encontrados:', window.projects.length);
    this.renderProjects(projectGrid);
  }

  renderProjects(container) {
    console.log('=== RENDER PROJECTS ===');
    
    const projects = window.projects;
    if (!projects || !Array.isArray(projects)) {
      console.error('❌ Proyectos no válidos:', projects);
      return;
    }

    // Filter featured projects for home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    const projectsToShow = isHomePage ? projects.filter(p => p.featured) : projects;

    if (projectsToShow.length === 0) {
      container.innerHTML = '<p>No se encontraron proyectos para mostrar.</p>';
      return;
    }

    const htmlContent = projectsToShow.map(project => {
      const title = project.title[this.currentLanguage] || project.title.en;
      const description = project.description[this.currentLanguage] || project.description.en;
      
      return `
        <article class="project-card" data-animate="fade-up" data-category="${project.tags.join(' ').toLowerCase()}">
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
    
    container.innerHTML = htmlContent;
    console.log('✅ Proyectos renderizados:', projectsToShow.length);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado, inicializando Rocket Media Portfolio...');
  
  // Verificar que los datos están disponibles
  if (window.portfolioData && window.projects) {
    console.log('Datos del portafolio disponibles:', {
      portfolioData: window.portfolioData,
      projects: window.projects
    });
    new RocketMediaPortfolio();
  } else {
    console.error('Error: Los datos del portafolio no están disponibles');
    console.log('portfolioData:', window.portfolioData);
    console.log('projects:', window.projects);
  }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
