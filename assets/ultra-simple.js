  // Function to render projects (only for projects page, not home)
  function renderProjects() {
    console.log('🔄 Intentando renderizar proyectos...');
    console.log('📍 Path actual:', window.location.pathname);
    
    // Get the container
    const container = document.getElementById('project-grid');
    if (!container) {
      console.log('ℹ️ No se encontró project-grid (no es página de proyectos)');
      console.log('✅ Esto es correcto para el home - no hay proyectos aquí');
      return;
    }
    
    console.log('✅ Container encontrado:', container);
    
    // Check if projects data is available
    if (!window.projects) {
      console.error('❌ window.projects no está disponible');
      container.innerHTML = '<p style="color: red;">Error: No se pudieron cargar los proyectos</p>';
      return;
    }
    
    console.log('✅ Proyectos disponibles:', window.projects.length);
    
    // Only show projects on projects page, not home
    const isProjectsPage = window.location.pathname === '/projects.html';
    if (!isProjectsPage) {
      console.log('ℹ️ No es página de proyectos, no renderizando proyectos');
      return;
    }
    
    const projectsToShow = window.projects;
    console.log('📊 Proyectos a mostrar:', projectsToShow.length);
    
    if (projectsToShow.length === 0) {
      console.warn('⚠️ No hay proyectos para mostrar');
      container.innerHTML = '<p>No se encontraron proyectos para mostrar.</p>';
      return;
    }
    
    // Create HTML for each project
    const htmlContent = projectsToShow.map((project, index) => {
      console.log(`📝 Proyecto ${index + 1}:`, project.title.en || project.title);
      
      const title = project.title.en || project.title;
      const description = project.description.en || project.description;
      
      return `
        <article class="project-card" style="border: 1px solid #e0e0e0; margin: 20px 0; padding: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease; background: white; cursor: pointer;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'">
          <div class="project-image" style="background: #f8f9fa; height: 200px; display: flex; align-items: center; justify-content: center; margin: 0; position: relative;">
            <img src="${project.image}" alt="${title}" style="max-width: 100%; max-height: 100%; object-fit: cover;" onerror="this.style.display='none'">
            ${project.featured ? '<span style="position: absolute; top: 12px; right: 12px; background: #c51d15; color: white; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600;">Featured</span>' : ''}
          </div>
          <div class="project-content" style="padding: 20px;">
            <h3 style="margin: 0 0 12px 0; color: #1a1a1a; font-size: 1.25rem; font-weight: 600;">${title}</h3>
            <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5; font-size: 0.95rem;">${description}</p>
            
            <div style="margin-bottom: 20px;">
              ${project.tags.map(tag => {
                // Categorizar tags por tipo
                let tagStyle = '';
                if (tag.includes('React') || tag.includes('JavaScript') || tag.includes('Node.js')) {
                  tagStyle = 'background: #e3f2fd; color: #1976d2; border: 1px solid #bbdefb;';
                } else if (tag.includes('HTML') || tag.includes('CSS')) {
                  tagStyle = 'background: #f3e5f5; color: #7b1fa2; border: 1px solid #e1bee7;';
                } else if (tag.includes('Backend') || tag.includes('API')) {
                  tagStyle = 'background: #e8f5e8; color: #388e3c; border: 1px solid #c8e6c9;';
                } else if (tag.includes('Email') || tag.includes('Marketing')) {
                  tagStyle = 'background: #fff3e0; color: #f57c00; border: 1px solid #ffcc02;';
                } else {
                  tagStyle = 'background: #f5f5f5; color: #616161; border: 1px solid #e0e0e0;';
                }
                return `<span style="${tagStyle} padding: 6px 10px; border-radius: 6px; margin-right: 8px; margin-bottom: 8px; font-size: 11px; font-weight: 500; display: inline-block;">${tag}</span>`;
              }).join('')}
            </div>
            
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${project.links.website ? `<a href="${project.links.website}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background: #c51d15; color: white; text-decoration: none; border-radius: 6px; font-size: 0.9rem; font-weight: 500; transition: all 0.2s ease;" onmouseover="this.style.background='#a0150f'" onmouseout="this.style.background='#c51d15'">🌐 Website</a>` : ''}
              ${project.links.github ? `<a href="${project.links.github}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background: transparent; color: #333; border: 1px solid #ddd; text-decoration: none; border-radius: 6px; font-size: 0.9rem; font-weight: 500; transition: all 0.2s ease;" onmouseover="this.style.background='#f5f5f5'; this.style.borderColor='#c51d15'" onmouseout="this.style.background='transparent'; this.style.borderColor='#ddd'">📁 GitHub</a>` : ''}
              ${project.links.deploy ? `<a href="${project.links.deploy}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; background: #10b981; color: white; text-decoration: none; border-radius: 6px; font-size: 0.9rem; font-weight: 500; transition: all 0.2s ease;" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">🚀 Live Demo</a>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
    
    // Insert HTML into container
    console.log('📤 Insertando HTML en el container...');
    container.innerHTML = htmlContent;
    
    console.log('✅ Proyectos renderizados exitosamente!');
  }
