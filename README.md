# 🚀 Rocket Media Portfolio

Un portafolio moderno y elegante para Rocket Media, estudio de desarrollo y diseño web. Diseñado con un enfoque minimalista, responsive y accesible.

## ✨ Características

- **🎨 Diseño Moderno**: Paleta de colores rojo (#c51d15), blanco y negro
- **🌍 Multilenguaje**: Soporte completo para inglés y español
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Código limpio y optimizado
- **♿ Accesible**: Cumple estándares de accesibilidad web
- **🔧 PWA Ready**: Manifest y funcionalidades de aplicación web progresiva
- **🎭 Animaciones**: Transiciones suaves y efectos de scroll

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Fuentes**: Inter (Google Fonts)
- **Iconos**: SVG inline
- **Hosting de Imágenes**: Cloudinary
- **PWA**: Manifest.json, Service Worker ready

## 📁 Estructura del Proyecto

```
rocket-media-portfolio/
├── index.html              # Página principal
├── projects.html           # Portafolio de proyectos
├── about.html              # Acerca de Rocket Media
├── contact.html            # Formulario de contacto
├── manifest.json           # Configuración PWA
├── assets/
│   ├── styles.css          # Estilos principales
│   ├── app.js              # JavaScript principal
│   ├── portfolio-data.js   # Datos del portafolio
│   └── img/
│       └── work/           # Imágenes de proyectos
└── README.md
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd rocket-media-portfolio
   ```

2. **Abrir en el navegador**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Acceder al sitio**
   - Abre `http://localhost:8000` en tu navegador

## 🌍 Funcionalidades Multilenguaje

El sitio incluye soporte completo para inglés y español:

- **Toggle de idioma**: Botón en la navegación para cambiar entre EN/ES
- **Contenido dinámico**: Todos los textos se actualizan automáticamente
- **Datos del portafolio**: Proyectos con descripciones en ambos idiomas
- **Navegación**: Menús y enlaces adaptados al idioma seleccionado

### Cambiar idioma
- Haz clic en el botón "ES" o "EN" en la navegación
- El idioma se mantiene durante la sesión
- Todos los textos se actualizan instantáneamente

## 📱 Responsive Design

El sitio está optimizado para todos los dispositivos:

- **Desktop**: Layout completo con grid de 3 columnas
- **Tablet**: Adaptación automática a pantallas medianas
- **Mobile**: Navegación hamburguesa, grid de 1 columna
- **Breakpoints**: 768px (tablet), 480px (mobile)

## 🎨 Personalización

### Colores
```css
:root {
  --color-primary: #c51d15;      /* Rojo principal */
  --color-primary-dark: #a01810; /* Rojo oscuro */
  --color-white: #ffffff;        /* Blanco */
  --color-black: #000000;        /* Negro */
}
```

### Fuentes
- **Principal**: Inter (Google Fonts)
- **Fallbacks**: System fonts (San Francisco, Segoe UI, etc.)

### Espaciado
```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-3xl: 6rem;    /* 96px */
}
```

## 📊 Proyectos Incluidos

### Sitios Web Profesionales
- **Woodrock**: Sitio de bienes raíces
- **InspireAI**: Plataforma de IA creativa
- **PPMFLA**: Servicios profesionales
- **9 Sentits**: Agencia creativa

### Aplicaciones Técnicas
- **Sales Scorekeeper**: App de seguimiento de ventas
- **MetroX**: Plataforma de transporte
- **LaWash**: Servicios de lavandería
- **ROI Calculator**: Calculadora empresarial

### Herramientas y Utilidades
- **Email Signatures**: Plantillas de firmas
- **Marketing Emails**: Plantillas de correo
- **React Demo SSK**: Demostración de React
- **Lottie Animations**: Colección de animaciones

## 🔧 Desarrollo

### Agregar Nuevos Proyectos

1. **Editar `assets/portfolio-data.js`**
   ```javascript
   {
     id: "nuevo-proyecto",
     title: {
       en: "New Project",
       es: "Nuevo Proyecto"
     },
     description: {
       en: "Project description in English",
       es: "Descripción del proyecto en español"
     },
     image: "/assets/img/work/nuevo-proyecto.webp",
     tags: ["Tag1", "Tag2"],
     links: {
       website: "https://example.com",
       github: "https://github.com/user/repo",
       deploy: "https://deploy-url.com"
     },
     featured: false
   }
   ```

2. **Agregar imagen del proyecto**
   - Coloca la imagen en `assets/img/work/`
   - Formato recomendado: WebP (con fallback a PNG/JPG)

3. **Actualizar categorías si es necesario**
   - Los tags se usan para filtrado automático

### Modificar Estilos

1. **Variables CSS**: Edita `:root` en `assets/styles.css`
2. **Componentes**: Modifica las clases específicas
3. **Responsive**: Ajusta los media queries según necesites

### Agregar Nuevos Idiomas

1. **Editar `assets/portfolio-data.js`**
   ```javascript
   fr: {
     nav: { /* Traducciones en francés */ },
     home: { /* Contenido en francés */ },
     // ... más traducciones
   }
   ```

2. **Actualizar `assets/app.js`**
   - Modificar la lógica de cambio de idioma
   - Agregar el nuevo idioma al toggle

## 📈 Performance

### Optimizaciones Implementadas

- **Lazy Loading**: Imágenes se cargan solo cuando son visibles
- **CSS Variables**: Reutilización eficiente de estilos
- **Minificación**: Código optimizado para producción
- **Fonts**: Precarga de fuentes críticas
- **Images**: Formato WebP para mejor compresión

### Lighthouse Score Objetivo

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

## ♿ Accesibilidad

### Características Implementadas

- **Skip Links**: Navegación por teclado mejorada
- **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
- **Focus States**: Indicadores visuales claros de foco
- **Semantic HTML**: Estructura semántica correcta
- **Color Contrast**: Contraste adecuado según WCAG AA

### Navegación por Teclado

- **Tab**: Navegar entre elementos interactivos
- **Enter/Space**: Activar botones y enlaces
- **Escape**: Cerrar menús móviles
- **Arrow Keys**: Navegar en formularios

## 🚀 Despliegue

### Opciones de Hosting

1. **GitHub Pages**
   ```bash
   git push origin main
   # Activar GitHub Pages en Settings > Pages
   ```

2. **Netlify**
   - Drag & drop de la carpeta del proyecto
   - O conectar repositorio de GitHub

3. **Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

4. **Servidor Web Tradicional**
   - Subir archivos via FTP/SFTP
   - Configurar servidor web (Apache/Nginx)

### Configuración del Servidor

**Apache (.htaccess)**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Cache para archivos estáticos
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

**Nginx**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}

# Cache para archivos estáticos
location ~* \.(css|js|webp)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Imágenes no se cargan**
   - Verificar rutas en `portfolio-data.js`
   - Comprobar que las imágenes existen en `assets/img/work/`

2. **Cambio de idioma no funciona**
   - Verificar que `portfolio-data.js` se carga correctamente
   - Revisar consola del navegador para errores JavaScript

3. **Estilos no se aplican**
   - Verificar que `styles.css` se carga
   - Comprobar rutas relativas en HTML

4. **Navegación móvil no funciona**
   - Verificar que `app.js` se ejecuta
   - Comprobar IDs de elementos HTML

### Debug

1. **Consola del navegador**: F12 > Console
2. **Network tab**: Verificar carga de archivos
3. **Elements tab**: Inspeccionar HTML y CSS
4. **Lighthouse**: Auditar performance y accesibilidad

## 📝 Licencia

Este proyecto es propiedad de Rocket Media. Todos los derechos reservados.

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📞 Contacto

- **Email**: info@rocketmedia.website
- **GitHub**: [@avdbp](https://github.com/avdbp)
- **LinkedIn**: [Alejandro Van den Bussche](https://www.linkedin.com/in/alejandro-van-den-bussche)

---

**Rocket Media** - Creando experiencias web excepcionales 🚀
