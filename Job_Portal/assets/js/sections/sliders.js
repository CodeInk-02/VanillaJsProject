/* Team Slider Functionality */
class TeamSlider {
  constructor() {
    this.container = document.querySelector('.team-slider-container');
    this.track = document.querySelector('.team-slider-track');
    this.slides = document.querySelectorAll('.team-slider-track .team-box');
    this.prevBtn = document.getElementById('team-prev-btn');
    this.nextBtn = document.getElementById('team-next-btn');
    
    this.currentSlide = 0;
    this.slidesPerView = this.getSlidesPerView();
    this.totalSlides = this.slides.length;
    this.maxSlide = Math.max(0, this.totalSlides - this.slidesPerView);
    
    this.init();
  }
  
  init() {
    console.log('Initializing Team Slider...');
    console.log('Container:', this.container);
    console.log('Track:', this.track);
    console.log('Slides count:', this.slides.length);
    console.log('Prev button:', this.prevBtn);
    console.log('Next button:', this.nextBtn);
    
    if (!this.container || !this.track || this.slides.length === 0) {
      console.error('Team slider elements not found');
      return;
    }
    
    console.log('Team slider elements found, setting up...');
    this.setupEventListeners();
    this.updateSlider();
    this.updateButtons();
    console.log('Team slider initialized successfully');
  }
  
  getSlidesPerView() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 900) return 2;
    if (width < 1200) return 3;
    return 4;
  }
  
  setupEventListeners() {
    console.log('Setting up event listeners...');
    
    if (this.prevBtn) {
      console.log('Adding prev button listener');
      this.prevBtn.addEventListener('click', () => {
        console.log('Prev button clicked');
        this.prev();
      });
    } else {
      console.error('Prev button not found');
    }
    
    if (this.nextBtn) {
      console.log('Adding next button listener');
      this.nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        this.next();
      });
    } else {
      console.error('Next button not found');
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
      console.log('Window resized, updating slider...');
      this.slidesPerView = this.getSlidesPerView();
      this.maxSlide = Math.max(0, this.totalSlides - this.slidesPerView);
      this.currentSlide = Math.min(this.currentSlide, this.maxSlide);
      this.updateSlider();
      this.updateButtons();
    });
  }
  
  updateSlider() {
    if (!this.track) {
      console.error('Track not found for slider update');
      return;
    }
    
    const slideWidth = this.slides[0]?.offsetWidth || 300;
    const gap = 32; // 2rem gap
    const translateX = -(this.currentSlide * (slideWidth + gap));
    
    console.log('Updating slider:', {
      currentSlide: this.currentSlide,
      slideWidth: slideWidth,
      gap: gap,
      translateX: translateX
    });
    
    this.track.style.transform = `translateX(${translateX}px)`;
  }
  
  updateButtons() {
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentSlide === 0;
    }
    
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentSlide >= this.maxSlide;
    }
  }
  
  prev() {
    console.log('Moving to previous slide...');
    if (this.currentSlide > 0) {
      this.currentSlide--;
      console.log('Moved to slide:', this.currentSlide);
      this.updateSlider();
      this.updateButtons();
    } else {
      console.log('Already at first slide');
    }
  }
  
  next() {
    console.log('Moving to next slide...');
    if (this.currentSlide < this.maxSlide) {
      this.currentSlide++;
      console.log('Moved to slide:', this.currentSlide);
      this.updateSlider();
      this.updateButtons();
    } else {
      console.log('Already at last slide');
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure all elements are properly rendered
  setTimeout(() => {
    // Initialize team slider
    try {
      new TeamSlider();
    } catch (error) {
      console.error('Error initializing team slider:', error);
    }
  }, 200);
});

// Export functions for global use
window.sliderFunctions = {
  TeamSlider
};

// Make functions globally available
window.TeamSlider = TeamSlider;

 