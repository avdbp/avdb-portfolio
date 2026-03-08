# 🔒 Security Guide - Rocket Media Portfolio

## EmailJS Credentials Protection

### ⚠️ IMPORTANTE: Credenciales Sensibles

Este proyecto usa EmailJS para el formulario de contacto. Las credenciales están protegidas del repositorio público.

### 📁 Archivos de Configuración

#### ✅ Archivos SEGUROS (en repositorio):
- `assets/emailjs-config.example.js` - Ejemplo sin credenciales reales
- `assets/contact-form.js` - Lógica del formulario (sin credenciales)

#### 🔒 Archivos PRIVADOS (NO en repositorio):
- `assets/emailjs-config.js` - Configuración real con credenciales
- `.env` - Variables de entorno (si se usan)

### 🚀 Configuración Local

#### 1. Copiar archivo de ejemplo:
```bash
cp assets/emailjs-config.example.js assets/emailjs-config.js
```

#### 2. Editar credenciales reales:
```javascript
// En assets/emailjs-config.js
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "TU_CLAVE_PUBLICA_REAL",
  SERVICE_ID: "TU_SERVICE_ID_REAL", 
  TEMPLATE_ID: "TU_TEMPLATE_ID_REAL"
};
```

#### 3. Verificar .gitignore:
```gitignore
# EmailJS Configuration (contains sensitive credentials)
assets/emailjs-config.js
*.config.js
```

### 🔍 Verificación de Seguridad

#### ✅ Verificar que las credenciales NO estén en el repo:
```bash
# Buscar credenciales en el código
grep -r "ppTI8ZSqq8q1h-z52" .
grep -r "service_pshogy5" .
grep -r "template_l0nr1y7" .
```

#### ✅ Verificar que .gitignore esté funcionando:
```bash
# Ver archivos que Git está trackeando
git ls-files | grep emailjs
```

### 🚨 Si las Credenciales se Expusieron

#### 1. Cambiar credenciales en EmailJS Dashboard:
- Ir a https://dashboard.emailjs.com/admin
- Regenerar Public Key
- Cambiar Service ID si es necesario

#### 2. Limpiar historial de Git:
```bash
# Remover archivo del tracking
git rm --cached assets/emailjs-config.js

# Commit de la limpieza
git commit -m "🔒 Remove exposed credentials"

# Push cambios
git push origin master
```

### 🌐 Para Producción

#### Opción 1: Variables de Entorno
```bash
# En el servidor de producción
EMAILJS_PUBLIC_KEY=tu_clave_real
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
```

#### Opción 2: Configuración del Hosting
- Netlify: Environment Variables
- Vercel: Environment Variables  
- Heroku: Config Vars

### 📋 Checklist de Seguridad

- [ ] `emailjs-config.js` está en `.gitignore`
- [ ] `emailjs-config.example.js` está en el repositorio
- [ ] No hay credenciales hardcodeadas en el código
- [ ] `.gitignore` está actualizado y funcionando
- [ ] Las credenciales funcionan localmente
- [ ] Documentación de seguridad actualizada

### 🆘 Soporte

Si tienes problemas con la configuración de seguridad:
1. Verificar que `.gitignore` esté funcionando
2. Confirmar que `emailjs-config.js` no esté en el repositorio
3. Verificar que las credenciales funcionen localmente
4. Revisar la consola del navegador para errores

---

**🔒 Recuerda: La seguridad es responsabilidad de todos. Nunca subas credenciales reales al repositorio público.**
