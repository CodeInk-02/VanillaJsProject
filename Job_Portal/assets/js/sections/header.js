/* Header and Navigation Functionality */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.Hambug');
  const menu = document.querySelector('.navbar .menu');
  
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  const menuLinks = document.querySelectorAll('.navbar .menu li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Close mobile menu when clicking on the close button
  const closeButton = document.querySelector('.mobile-menu-close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar .menu li a');

  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.style.background = 'rgba(35, 41, 70, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)';
      header.style.backdropFilter = 'none';
    }

    // Hide/show header on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
});

// Export functions for use in other modules
window.headerFunctions = {
  toggleMobileMenu: function() {
    const hamburger = document.querySelector('.Hambug');
    const menu = document.querySelector('.navbar .menu');
    if (hamburger && menu) {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    }
  },
  
  closeMobileMenu: function() {
    const hamburger = document.querySelector('.Hambug');
    const menu = document.querySelector('.navbar .menu');
    if (hamburger && menu) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
  }
}; 