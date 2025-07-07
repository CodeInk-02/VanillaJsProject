/* Animations and Effects */
document.addEventListener('DOMContentLoaded', function() {
  initializeScrollAnimations();
  initializeParallaxEffects();
  initializeHoverEffects();
});

// Initialize scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(`
    .scroll-animate-fade-in,
    .scroll-animate-slide-left,
    .scroll-animate-slide-right,
    .scroll-animate-scale-in,
    .scroll-animate-rotate-in,
    .scroll-animate-bounce-in,
    .scroll-animate-flip-in,
    .fade-in,
    .loading,
    .stagger-animate
  `);

  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Stagger animation for cards
  const staggerElements = document.querySelectorAll('.stagger-animate');
  staggerElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize parallax effects
function initializeParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Initialize hover effects
function initializeHoverEffects() {
  // Add hover lift effect to cards
  const cards = document.querySelectorAll('.jlist, .team-box, .options-icons');
  cards.forEach(card => {
    card.classList.add('hover-lift');
  });

  // Add hover glow effect to buttons
  const buttons = document.querySelectorAll('button, .filter-btn, .slider-btn');
  buttons.forEach(button => {
    button.classList.add('hover-glow');
  });
}

// Smooth scroll to element
function smoothScrollTo(element, duration = 1000) {
  const targetPosition = element.offsetTop - 100;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Add loading animation
function addLoadingAnimation(element) {
  element.classList.add('loading');
  setTimeout(() => {
    element.classList.add('animate');
  }, 100);
}

// Remove loading animation
function removeLoadingAnimation(element) {
  element.classList.remove('loading', 'animate');
}

// Pulse animation
function addPulseAnimation(element, duration = 2000) {
  element.classList.add('pulse');
  setTimeout(() => {
    element.classList.remove('pulse');
  }, duration);
}

// Bounce animation
function addBounceAnimation(element, duration = 2000) {
  element.classList.add('bounce');
  setTimeout(() => {
    element.classList.remove('bounce');
  }, duration);
}

// Shake animation
function addShakeAnimation(element) {
  element.classList.add('shake');
  setTimeout(() => {
    element.classList.remove('shake');
  }, 800);
}

// Slide in animation
function addSlideInAnimation(element, direction = 'left') {
  element.classList.add(`slide-in-${direction}`);
  setTimeout(() => {
    element.classList.remove(`slide-in-${direction}`);
  }, 800);
}

// Fade in animation
function addFadeInAnimation(element, duration = 600) {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    element.style.transition = `all ${duration}ms ease-out`;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 100);
}

// Scale animation
function addScaleAnimation(element, duration = 2000) {
  element.classList.add('scale');
  setTimeout(() => {
    element.classList.remove('scale');
  }, duration);
}

// Rotate animation
function addRotateAnimation(element, duration = 2000) {
  element.classList.add('rotate');
  setTimeout(() => {
    element.classList.remove('rotate');
  }, duration);
}

// Float animation
function addFloatAnimation(element, duration = 3000) {
  element.classList.add('float');
  setTimeout(() => {
    element.classList.remove('float');
  }, duration);
}

// Typewriter effect
function addTypewriterEffect(element, text, speed = 100) {
  element.textContent = '';
  element.classList.add('typewriter');
  
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      element.classList.remove('typewriter');
    }
  }, speed);
}

// Gradient animation
function addGradientAnimation(element, duration = 4000) {
  element.classList.add('gradient-animate');
  setTimeout(() => {
    element.classList.remove('gradient-animate');
  }, duration);
}

// Stagger animation for multiple elements
function addStaggerAnimation(elements, animationClass, delay = 100) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, index * delay);
  });
}

// Remove stagger animation
function removeStaggerAnimation(elements, animationClass) {
  elements.forEach(element => {
    element.classList.remove(animationClass);
  });
}

// Animate on scroll (custom implementation)
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      const animationType = element.dataset.animate;
      element.classList.add(animationType);
    }
  });
}

// Initialize scroll listener for custom animations
window.addEventListener('scroll', animateOnScroll);

// Export animation functions
window.animationFunctions = {
  smoothScrollTo,
  addLoadingAnimation,
  removeLoadingAnimation,
  addPulseAnimation,
  addBounceAnimation,
  addShakeAnimation,
  addSlideInAnimation,
  addFadeInAnimation,
  addScaleAnimation,
  addRotateAnimation,
  addFloatAnimation,
  addTypewriterEffect,
  addGradientAnimation,
  addStaggerAnimation,
  removeStaggerAnimation
};

// Make functions available globally
window.smoothScrollTo = smoothScrollTo;
window.addLoadingAnimation = addLoadingAnimation;
window.removeLoadingAnimation = removeLoadingAnimation;
window.addPulseAnimation = addPulseAnimation;
window.addBounceAnimation = addBounceAnimation;
window.addShakeAnimation = addShakeAnimation;
window.addSlideInAnimation = addSlideInAnimation;
window.addFadeInAnimation = addFadeInAnimation;
window.addScaleAnimation = addScaleAnimation;
window.addRotateAnimation = addRotateAnimation;
window.addFloatAnimation = addFloatAnimation;
window.addTypewriterEffect = addTypewriterEffect;
window.addGradientAnimation = addGradientAnimation;
window.addStaggerAnimation = addStaggerAnimation;
window.removeStaggerAnimation = removeStaggerAnimation; 