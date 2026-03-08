// Configuration Management
// 📝 Este archivo maneja la configuración de la aplicación

// Función para cargar variables de entorno del navegador
function loadBrowserEnvVars() {
  // Intentar cargar desde un script tag con variables de entorno
  const envScript = document.querySelector('script[data-env-vars]');
  if (envScript) {
    try {
      const envVars = JSON.parse(envScript.textContent);
      window.ENV = envVars;
      console.log('✅ Environment variables loaded from script tag');
      return true;
    } catch (e) {
      console.error('❌ Failed to parse environment variables');
    }
  }
  
  // Fallback: crear un objeto ENV vacío
  window.ENV = {};
  console.log('⚠️ No environment variables found, using defaults');
  return false;
}

// Función para obtener configuración
function getConfig(key, defaultValue = null) {
  // Priority 1: Browser environment variables
  if (window.ENV && window.ENV[key]) {
    return window.ENV[key];
  }
  
  // Priority 2: Default value
  return defaultValue;
}

// Cargar variables de entorno al cargar la página
if (typeof window !== 'undefined') {
  loadBrowserEnvVars();
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadBrowserEnvVars, getConfig };
}
