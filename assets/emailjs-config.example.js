// EmailJS Configuration Example
// 📝 INSTRUCCIONES DE SEGURIDAD:
// 
// 1. COPIA este archivo como 'emailjs-config.js'
// 2. AGREGA tus credenciales reales en 'emailjs-config.js'
// 3. NUNCA subas 'emailjs-config.js' a Git (ya está en .gitignore)
// 4. Solo 'emailjs-config.example.js' debe estar en el repositorio
// 
// 🔒 Para mantener las credenciales seguras:
// - emailjs-config.js = LOCAL (con credenciales reales)
// - emailjs-config.example.js = REPOSITORIO (sin credenciales)

const EMAILJS_CONFIG = {
  // Tu clave pública de EmailJS (obtener de https://dashboard.emailjs.com/admin)
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // ID del servicio de EmailJS (obtener de https://dashboard.emailjs.com/admin)
  SERVICE_ID: "YOUR_SERVICE_ID_HERE",
  
  // ID de la plantilla de EmailJS (obtener de https://dashboard.emailjs.com/admin)
  TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE"
};

// Función para inicializar EmailJS
function initializeEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS inicializado correctamente');
    return true;
  } else {
    console.error('❌ EmailJS no está disponible');
    return false;
  }
}

// Función para enviar email
function sendEmail(templateParams) {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams
  );
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EMAILJS_CONFIG, initializeEmailJS, sendEmail };
}
