# 🌍 Configuración de Variables de Entorno

## 📝 Instrucciones para EmailJS

### **Opción 1: Archivo .env (Recomendado para desarrollo local)**

1. **Crear archivo `.env` en la raíz del proyecto:**
   ```bash
   # En la raíz del proyecto
   touch .env
   ```

2. **Agregar las credenciales de EmailJS:**
   ```env
   # EmailJS Configuration
   EMAILJS_PUBLIC_KEY=ppTI8ZSqq8q1h-z52
   EMAILJS_SERVICE_ID=service_pshogy5
   EMAILJS_TEMPLATE_ID=template_l0nr1y7
   ```

3. **El archivo .env ya está en .gitignore, por lo que NO se subirá a Git**

### **Opción 2: Variables de Entorno del Navegador (Ya implementado)**

El sistema ya está configurado para cargar variables desde:
- `window.ENV` (si están disponibles)
- Archivo de configuración externo
- Variables de entorno de Vercel (producción)

### **Opción 3: Vercel Dashboard (Para producción)**

1. Ir a [Vercel Dashboard](https://vercel.com/dashboard)
2. Seleccionar tu proyecto
3. Ir a Settings > Environment Variables
4. Agregar:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`

## 🔒 Seguridad

- ✅ `.env` está en `.gitignore`
- ✅ `assets/emailjs-config.js` está en `.gitignore`
- ✅ Solo archivos de ejemplo están en el repositorio
- ✅ Las credenciales reales están protegidas

## 🚀 Uso

Una vez configurado, el formulario de contacto funcionará automáticamente tanto en local como en producción.
