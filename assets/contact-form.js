// Contact Form Management
console.log('=== CONTACT FORM JS LOADED ===');

// EmailJS Configuration - Simple and direct
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "ppTI8ZSqq8q1h-z52",
  SERVICE_ID: "service_pshogy5",
  TEMPLATE_ID: "template_l0nr1y7"        // Template para ti (recibir mensaje)
};

console.log('📋 EmailJS config loaded:', EMAILJS_CONFIG);

// Notification System
function showNotification(message, type = 'success', duration = 4000) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  
  if (!notification || !notificationText) return;
  
  // Set message and type
  notificationText.textContent = message;
  notification.className = `notification ${type}`;
  
  // Show notification
  notification.style.display = 'block';
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Hide after duration
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.style.display = 'none';
    }, 300);
  }, duration);
}

// Initialize EmailJS
function initializeEmailJS() {
  // Check if EmailJS is available
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized');
    return true;
  } else {
    console.error('❌ EmailJS not loaded');
    return false;
  }
}

// Setup Contact Form
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) {
    console.log('📝 Contact form not found');
    return;
  }

  // Initialize EmailJS
  if (!initializeEmailJS()) {
    console.error('❌ Failed to initialize EmailJS');
    return;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('📧 Form submitted');
    
    // Get form data
    const formData = {
      name: form.querySelector('#name').value,
      email: form.querySelector('#email').value,
      message: form.querySelector('#message').value
    };
    
    console.log('📋 Form data:', formData);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Por favor completa todos los campos.', 'info');
      return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Send email to you (main message only)
    console.log('📤 Sending email...');
    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      user_name: formData.name,
      user_email: formData.email,
      subject: `Mensaje de ${formData.name} desde la web`,
      message: formData.message
    })
    .then(function(response) {
      console.log('✅ Email sent successfully:', response);
      showNotification('¡Mensaje enviado exitosamente!', 'success');
      form.reset();
    })
    .catch(function(error) {
      console.error('❌ Email send failed:', error);
      showNotification('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
    })
    .finally(function() {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  });
  
  console.log('✅ Contact form setup complete');
}

// Initialize when DOM is ready
function initializeContact() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupContactForm);
  } else {
    setupContactForm();
  }
}

// Start initialization
console.log('🚀 Starting contact form initialization...');
initializeContact();
console.log('🏁 Contact form initialization script completed');

