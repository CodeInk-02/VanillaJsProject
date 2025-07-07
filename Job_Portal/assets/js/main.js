/* Main Application Script */
// Import all section scripts
// Note: In a real project, you would use ES6 modules or a bundler
// For now, we'll assume all section scripts are loaded before this one

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing Job Portal Application...');
  
  // Initialize all sections
  initializeApplication();
  
  // Setup search functionality
  setupSearch();
  
  // Setup contact form
  setupContactForm();
  
  // Setup FAQ functionality
  setupFAQ();
  
  console.log('Application initialized successfully!');
});

// Main application initialization
function initializeApplication() {
  console.log('Initializing application components...');
  
  // Initialize header functionality
  if (window.headerFunctions) {
    console.log('Header functions loaded');
  }
  
  // Jobs are now initialized automatically via DOMContentLoaded in jobs.js
      console.log('Jobs will be initialized automatically');
  
  // Initialize slider functionality
  if (window.sliderFunctions) {
    console.log('Slider functions loaded');
  }
  
  // Initialize animation functionality
  if (window.animationFunctions) {
    console.log('Animation functions loaded');
  }
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.querySelector('.hero .search input');
  const searchButton = document.querySelector('.hero .search button');
  
  if (searchInput && searchButton) {
    // Search on button click
    searchButton.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query) {
        if (window.jobsFunctions && window.jobsFunctions.searchJobs) {
          window.jobsFunctions.searchJobs(query);
        }
        // Scroll to jobs section
        const jobsSection = document.querySelector('.jobs');
        if (jobsSection) {
          jobsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          if (window.jobsFunctions && window.jobsFunctions.searchJobs) {
            window.jobsFunctions.searchJobs(query);
          }
          // Scroll to jobs section
          const jobsSection = document.querySelector('.jobs');
          if (jobsSection) {
            jobsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}

// Setup FAQ functionality
function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Close other open answers
      const openAnswers = document.querySelectorAll('.faq-answer');
      openAnswers.forEach(openAnswer => {
        if (openAnswer !== answer) {
          openAnswer.style.display = 'none';
          const openIcon = openAnswer.previousElementSibling.querySelector('i');
          if (openIcon) {
            openIcon.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Toggle current answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
      } else {
        answer.style.display = 'block';
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Global utility functions
window.utils = {
  // Debounce function for performance
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function for performance
  throttle: function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Format currency
  formatCurrency: function(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },
  
  // Format date
  formatDate: function(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  },
  
  // Generate random ID
  generateId: function() {
    return Math.random().toString(36).substr(2, 9);
  },
  
  // Check if element is in viewport
  isInViewport: function(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  // Smooth scroll to element
  scrollToElement: function(element, offset = 100) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Performance monitoring
window.addEventListener('load', function() {
  // Log performance metrics
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('📊 Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    console.log('📊 DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
  }
});

// Error handling
window.addEventListener('error', function(e) {
      console.error('Application Error:', e.error);
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
      console.error('Unhandled Promise Rejection:', e.reason);
});

// Export main functions
window.mainFunctions = {
  initializeApplication,
  setupSearch,
  setupContactForm,
  setupFAQ,
  isValidEmail
}; 