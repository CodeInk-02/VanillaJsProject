/**
 * Job Portal - Complete Job Management System
 * Clean, tested, and modern implementation with slider functionality
 */

// Simple Job Management System - Direct Implementation
console.log('🚀 Loading Job Management System...');

// Job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full Time",
    experience: "Senior",
    description: "Build modern web applications using React, TypeScript, and modern CSS.",
    skills: ["React", "TypeScript", "CSS3", "JavaScript"],
    posted: "2024-01-15",
    logo: "assets/images/googleicon.png",
    isNew: true
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    salary: "$80,000 - $100,000",
    type: "Full Time",
    experience: "Mid",
    description: "Create beautiful and functional user interfaces.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    posted: "2024-01-14",
    logo: "assets/images/facebookicon.png"
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DataFlow",
    location: "New York, NY",
    salary: "$110,000 - $140,000",
    type: "Full Time",
    experience: "Senior",
    description: "Develop scalable backend services using Node.js and PostgreSQL.",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Docker"],
    posted: "2024-01-13",
    logo: "assets/images/amazon.png"
  },
  {
    id: 4,
    title: "Content Writer",
    company: "ContentHub",
    location: "Remote",
    salary: "$50,000 - $70,000",
    type: "Part Time",
    experience: "Entry",
    description: "Write engaging content for blogs, websites, and social media.",
    skills: ["Content Writing", "SEO", "Social Media", "Research"],
    posted: "2024-01-12",
    logo: "assets/images/yahooicon.png"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    salary: "$130,000 - $160,000",
    type: "Full Time",
    experience: "Senior",
    description: "Manage cloud infrastructure and deployment pipelines.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    posted: "2024-01-11",
    logo: "assets/images/spotify.png"
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Seattle, WA",
    salary: "$100,000 - $130,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop mobile applications for iOS and Android.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    posted: "2024-01-10",
    logo: "assets/images/ubericon.png"
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    salary: "$120,000 - $150,000",
    type: "Full Time",
    experience: "Senior",
    description: "Analyze complex datasets and build predictive models.",
    skills: ["Python", "Machine Learning", "Statistics", "SQL"],
    posted: "2024-01-09",
    logo: "assets/images/linkedinicon.png"
  },
  {
    id: 8,
    title: "Graphic Designer",
    company: "CreativeAgency",
    location: "Los Angeles, CA",
    salary: "$60,000 - $80,000",
    type: "Freelancer",
    experience: "Mid",
    description: "Create visual concepts and designs for various platforms.",
    skills: ["Adobe Creative Suite", "Illustration", "Branding", "Typography"],
    posted: "2024-01-08",
    logo: "assets/images/cisco.png"
  },
  {
    id: 9,
    title: "Product Manager",
    company: "InnovateLab",
    location: "Chicago, IL",
    salary: "$140,000 - $180,000",
    type: "Full Time",
    experience: "Senior",
    description: "Lead product development from conception to launch.",
    skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
    posted: "2024-01-07",
    logo: "assets/images/amd.png"
  },
  {
    id: 10,
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Denver, CO",
    salary: "$80,000 - $100,000",
    type: "Full Time",
    experience: "Mid",
    description: "Test software applications for bugs and issues.",
    skills: ["Testing", "Automation", "Selenium", "JIRA"],
    posted: "2024-01-06",
    logo: "assets/images/logitech.png"
  },
  {
    id: 11,
    title: "Social Media Manager",
    company: "SocialBoost",
    location: "Remote",
    salary: "$45,000 - $60,000",
    type: "Part Time",
    experience: "Entry",
    description: "Manage social media accounts and create engaging content.",
    skills: ["Social Media", "Content Creation", "Analytics", "Community Management"],
    posted: "2024-01-05",
    logo: "assets/images/facebookicon.png"
  },
  {
    id: 12,
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "Washington, DC",
    salary: "$110,000 - $140,000",
    type: "Full Time",
    experience: "Senior",
    description: "Monitor and secure network infrastructure.",
    skills: ["Cybersecurity", "Network Security", "Incident Response", "Compliance"],
    posted: "2024-01-04",
    logo: "assets/images/cisco.png"
  },
  {
    id: 13,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Miami, FL",
    salary: "$90,000 - $120,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop complete web applications from frontend to backend.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    posted: "2024-01-03",
    logo: "assets/images/googleicon.png"
  },
  {
    id: 14,
    title: "Digital Marketing Specialist",
    company: "MarketGrow",
    location: "Remote",
    salary: "$55,000 - $75,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop and execute digital marketing strategies.",
    skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
    posted: "2024-01-02",
    logo: "assets/images/facebookicon.png"
  },
  {
    id: 15,
    title: "AI/ML Engineer",
    company: "AITech",
    location: "San Jose, CA",
    salary: "$140,000 - $180,000",
    type: "Full Time",
    experience: "Senior",
    description: "Develop artificial intelligence and machine learning solutions.",
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
    posted: "2024-01-01",
    logo: "assets/images/amazon.png"
  },
  {
    id: 16,
    title: "Video Editor",
    company: "MediaPro",
    location: "Remote",
    salary: "$40,000 - $60,000",
    type: "Freelancer",
    experience: "Mid",
    description: "Edit and produce high-quality video content.",
    skills: ["Adobe Premiere", "After Effects", "Color Grading", "Motion Graphics"],
    posted: "2023-12-31",
    logo: "assets/images/spotify.png"
  },
  {
    id: 17,
    title: "Blockchain Developer",
    company: "CryptoCorp",
    location: "Remote",
    salary: "$130,000 - $160,000",
    type: "Full Time",
    experience: "Senior",
    description: "Develop blockchain applications and smart contracts.",
    skills: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
    posted: "2023-12-30",
    logo: "assets/images/ubericon.png"
  },
  {
    id: 18,
    title: "SEO Specialist",
    company: "SearchOptimize",
    location: "Remote",
    salary: "$50,000 - $70,000",
    type: "Part Time",
    experience: "Mid",
    description: "Optimize websites for search engines and improve rankings.",
    skills: ["SEO", "Google Analytics", "Keyword Research", "Link Building"],
    posted: "2023-12-29",
    logo: "assets/images/yahooicon.png"
  },
  {
    id: 19,
    title: "Game Developer",
    company: "GameStudio",
    location: "Los Angeles, CA",
    salary: "$80,000 - $110,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop engaging video games for multiple platforms.",
    skills: ["Unity", "C#", "Game Design", "3D Modeling"],
    posted: "2023-12-28",
    logo: "assets/images/amd.png"
  },
  {
    id: 20,
    title: "Technical Writer",
    company: "DocTech",
    location: "Remote",
    salary: "$60,000 - $80,000",
    type: "Full Time",
    experience: "Mid",
    description: "Create technical documentation and user guides.",
    skills: ["Technical Writing", "Documentation", "API Docs", "User Guides"],
    posted: "2023-12-27",
    logo: "assets/images/cisco.png"
  },
  {
    id: 21,
    title: "Cloud Architect",
    company: "CloudBuild",
    location: "Seattle, WA",
    salary: "$150,000 - $190,000",
    type: "Full Time",
    experience: "Senior",
    description: "Design and implement cloud infrastructure solutions.",
    skills: ["AWS", "Azure", "GCP", "Terraform"],
    posted: "2023-12-26",
    logo: "assets/images/amazon.png"
  },
  {
    id: 22,
    title: "UI Developer",
    company: "InterfaceLab",
    location: "Austin, TX",
    salary: "$70,000 - $90,000",
    type: "Full Time",
    experience: "Mid",
    description: "Create responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    posted: "2023-12-25",
    logo: "assets/images/googleicon.png"
  },
  {
    id: 23,
    title: "Data Analyst",
    company: "DataInsights",
    location: "Remote",
    salary: "$65,000 - $85,000",
    type: "Full Time",
    experience: "Mid",
    description: "Analyze data and create actionable insights.",
    skills: ["SQL", "Excel", "Tableau", "Data Visualization"],
    posted: "2023-12-24",
    logo: "assets/images/linkedinicon.png"
  },
  {
    id: 24,
    title: "Copywriter",
    company: "WordCraft",
    location: "Remote",
    salary: "$45,000 - $65,000",
    type: "Freelancer",
    experience: "Mid",
    description: "Write compelling copy for marketing and advertising.",
    skills: ["Copywriting", "Marketing", "Brand Voice", "Creative Writing"],
    posted: "2023-12-23",
    logo: "assets/images/facebookicon.png"
  },
  {
    id: 25,
    title: "System Administrator",
    company: "SysTech",
    location: "Dallas, TX",
    salary: "$75,000 - $95,000",
    type: "Full Time",
    experience: "Mid",
    description: "Manage and maintain IT infrastructure and systems.",
    skills: ["Linux", "Windows Server", "Networking", "Security"],
    posted: "2023-12-22",
    logo: "assets/images/cisco.png"
  },
  {
    id: 26,
    title: "Frontend Architect",
    company: "FrontendPro",
    location: "San Francisco, CA",
    salary: "$160,000 - $200,000",
    type: "Full Time",
    experience: "Senior",
    description: "Lead frontend architecture and development strategy.",
    skills: ["React", "Vue.js", "Angular", "Architecture"],
    posted: "2023-12-21",
    logo: "assets/images/googleicon.png"
  },
  {
    id: 27,
    title: "E-commerce Manager",
    company: "ShopOnline",
    location: "Remote",
    salary: "$70,000 - $90,000",
    type: "Full Time",
    experience: "Mid",
    description: "Manage online store operations and sales strategies.",
    skills: ["Shopify", "E-commerce", "Analytics", "Customer Service"],
    posted: "2023-12-20",
    logo: "assets/images/amazon.png"
  },
  {
    id: 28,
    title: "3D Artist",
    company: "VisualArts",
    location: "Remote",
    salary: "$50,000 - $70,000",
    type: "Freelancer",
    experience: "Mid",
    description: "Create stunning 3D models and animations.",
    skills: ["Blender", "Maya", "3D Modeling", "Texturing"],
    posted: "2023-12-19",
    logo: "assets/images/amd.png"
  },
  {
    id: 29,
    title: "Network Engineer",
    company: "NetConnect",
    location: "Houston, TX",
    salary: "$85,000 - $105,000",
    type: "Full Time",
    experience: "Mid",
    description: "Design and maintain network infrastructure.",
    skills: ["Cisco", "Networking", "Routing", "Switching"],
    posted: "2023-12-18",
    logo: "assets/images/cisco.png"
  },
  {
    id: 30,
    title: "Mobile UI/UX Designer",
    company: "MobileDesign",
    location: "Remote",
    salary: "$80,000 - $100,000",
    type: "Full Time",
    experience: "Mid",
    description: "Design intuitive mobile app interfaces.",
    skills: ["Figma", "Sketch", "Mobile Design", "User Testing"],
    posted: "2023-12-17",
    logo: "assets/images/ubericon.png"
  },
  {
    id: 31,
    title: "Database Administrator",
    company: "DataBase",
    location: "Phoenix, AZ",
    salary: "$90,000 - $110,000",
    type: "Full Time",
    experience: "Mid",
    description: "Manage and optimize database systems.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
    posted: "2023-12-16",
    logo: "assets/images/linkedinicon.png"
  },
  {
    id: 32,
    title: "Content Strategist",
    company: "ContentPro",
    location: "Remote",
    salary: "$75,000 - $95,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop content strategies and editorial calendars.",
    skills: ["Content Strategy", "Editorial Planning", "SEO", "Analytics"],
    posted: "2023-12-15",
    logo: "assets/images/yahooicon.png"
  },
  {
    id: 33,
    title: "Software Test Engineer",
    company: "TestLab",
    location: "Portland, OR",
    salary: "$85,000 - $105,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop and execute software testing strategies.",
    skills: ["Selenium", "JUnit", "Test Automation", "Quality Assurance"],
    posted: "2023-12-14",
    logo: "assets/images/logitech.png"
  },
  {
    id: 34,
    title: "Brand Designer",
    company: "BrandStudio",
    location: "Remote",
    salary: "$60,000 - $80,000",
    type: "Freelancer",
    experience: "Mid",
    description: "Create brand identities and visual systems.",
    skills: ["Branding", "Logo Design", "Visual Identity", "Adobe Creative Suite"],
    posted: "2023-12-13",
    logo: "assets/images/facebookicon.png"
  },
  {
    id: 35,
    title: "API Developer",
    company: "APITech",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full Time",
    experience: "Mid",
    description: "Design and develop RESTful APIs and microservices.",
    skills: ["REST APIs", "GraphQL", "Node.js", "PostgreSQL"],
    posted: "2023-12-12",
    logo: "assets/images/spotify.png"
  },
  {
    id: 36,
    title: "Growth Hacker",
    company: "GrowthLab",
    location: "Remote",
    salary: "$80,000 - $100,000",
    type: "Full Time",
    experience: "Mid",
    description: "Develop and execute growth marketing strategies.",
    skills: ["Growth Marketing", "A/B Testing", "Analytics", "User Acquisition"],
    posted: "2023-12-11",
    logo: "assets/images/ubericon.png"
  },
  {
    id: 37,
    title: "Security Engineer",
    company: "SecureTech",
    location: "Atlanta, GA",
    salary: "$120,000 - $150,000",
    type: "Full Time",
    experience: "Senior",
    description: "Implement security measures and protect systems.",
    skills: ["Cybersecurity", "Penetration Testing", "Security Tools", "Compliance"],
    posted: "2023-12-10",
    logo: "assets/images/cisco.png"
  },
  {
    id: 38,
    title: "Product Designer",
    company: "ProductLab",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Full Time",
    experience: "Mid",
    description: "Design user-centered digital products.",
    skills: ["Product Design", "User Research", "Prototyping", "Design Systems"],
    posted: "2023-12-09",
    logo: "assets/images/googleicon.png"
  },
  {
    id: 39,
    title: "Data Engineer",
    company: "DataPipeline",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Full Time",
    experience: "Senior",
    description: "Build and maintain data pipelines and infrastructure.",
    skills: ["Python", "Apache Spark", "Kafka", "Data Warehousing"],
    posted: "2023-12-08",
    logo: "assets/images/amazon.png"
  },
  {
    id: 40,
    title: "Community Manager",
    company: "CommunityHub",
    location: "Remote",
    salary: "$50,000 - $70,000",
    type: "Part Time",
    experience: "Mid",
    description: "Build and manage online communities and engagement.",
    skills: ["Community Management", "Social Media", "Event Planning", "Communication"],
    posted: "2023-12-07",
    logo: "assets/images/facebookicon.png"
  }
];

let currentFilter = 'all';
let currentSlide = 0;
let jobsPerSlide = 3;
let favorites = [];
let heroSearchQuery = '';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing job system...');
  
  // Clear the jobs container first
  const jobsContainer = document.querySelector('.jobs-container');
  if (jobsContainer) {
    jobsContainer.innerHTML = '';
    console.log('Cleared jobs container');
  }
  
  // Create slider structure
  createJobSlider();
  
  // Setup filter buttons
  setupFilters();
  
  // Setup advanced filters
  setupAdvancedFilters();
  
  // Setup hero search
  setupHeroSearch();
  
  // Initial render
  renderJobs();
  
      console.log('Job system initialized successfully');
});

function createJobSlider() {
  const jobsContainer = document.querySelector('.jobs-container');
  if (!jobsContainer) return;
  
  jobsContainer.innerHTML = `
    <div class="slider-status">
              <span class="slider-badge">SLIDER ACTIVE</span>
      <span class="job-count">Showing <span id="job-count">0</span> jobs</span>
    </div>
    <div class="job-slider-wrapper">
      <div class="job-slider-track" id="job-slider-track"></div>
      <div class="job-slider-nav">
        <button class="job-slider-btn prev" id="job-prev-btn">❮</button>
        <button class="job-slider-btn next" id="job-next-btn">❯</button>
      </div>
      <div class="job-slider-dots" id="job-slider-dots"></div>
    </div>
  `;
  
  // Setup slider navigation
  const prevBtn = document.getElementById('job-prev-btn');
  const nextBtn = document.getElementById('job-next-btn');
  
  if (prevBtn) prevBtn.addEventListener('click', () => prevSlide());
  if (nextBtn) nextBtn.addEventListener('click', () => nextSlide());
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.jobs-id li');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.getAttribute('data-target');
      currentSlide = 0;
      renderJobs();
    });
  });
}

function setupAdvancedFilters() {
  const applyBtn = document.querySelector('.advanced-filters .filter-btn:not(.clear)');
  const clearBtn = document.querySelector('.advanced-filters .filter-btn.clear');
  
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      console.log('🔍 Applying advanced filters...');
      currentSlide = 0;
      renderJobs();
    });
  }
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      console.log('🧹 Clearing all filters...');
      document.getElementById('salary-range').value = 'all';
      document.getElementById('experience-level').value = 'all';
      document.getElementById('work-type').value = 'all';
      currentSlide = 0;
      renderJobs();
    });
  }
  
  // Add real-time filtering on select change
  const filterSelects = document.querySelectorAll('.advanced-filters select');
  filterSelects.forEach(select => {
    select.addEventListener('change', () => {
              console.log('Filter changed:', select.id, select.value);
      currentSlide = 0;
      renderJobs();
    });
  });
}

function setupHeroSearch() {
  const heroSearchInput = document.getElementById('hero-search');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      performHeroSearch();
    });
  }
  
  if (heroSearchInput) {
    // Search on Enter key
    heroSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performHeroSearch();
      }
    });
    
    // Real-time search (optional - uncomment if you want instant search)
    // heroSearchInput.addEventListener('input', (e) => {
    //   heroSearchQuery = e.target.value;
    //   currentSlide = 0;
    //   renderJobs();
    // });
  }
}

function performHeroSearch() {
  const heroSearchInput = document.getElementById('hero-search');
  if (heroSearchInput) {
    heroSearchQuery = heroSearchInput.value;
    console.log('🔍 Hero search performed:', heroSearchQuery);
    
    // Scroll to jobs section
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Reset to first slide and render
    currentSlide = 0;
    renderJobs();
    
    // Update slider badge to show search is active
    updateSliderBadge();
  }
}

function updateSliderBadge() {
  const sliderBadge = document.querySelector('.slider-badge');
  if (sliderBadge) {
    if (heroSearchQuery.trim() !== '') {
      sliderBadge.innerHTML = `🔍 SEARCH: "${heroSearchQuery}"`;
      sliderBadge.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
    } else {
      sliderBadge.innerHTML = 'SLIDER ACTIVE';
      sliderBadge.style.background = 'linear-gradient(45deg, #00b894, #00cec9)';
    }
  }
}

function getFilteredJobs() {
  let filtered = jobs;
  
  // Get filter values
  const salaryRange = document.getElementById('salary-range')?.value || 'all';
  const experienceLevel = document.getElementById('experience-level')?.value || 'all';
  const workType = document.getElementById('work-type')?.value || 'all';
  
  // Apply hero search filter
  if (heroSearchQuery.trim() !== '') {
    const searchTerm = heroSearchQuery.toLowerCase().trim();
    filtered = filtered.filter(job => 
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
      job.description.toLowerCase().includes(searchTerm)
    );
  }
  
  // Apply type filter (from tabs)
  if (currentFilter === 'favorites') {
    filtered = filtered.filter(job => favorites.includes(job.id));
  } else if (currentFilter !== 'all') {
    filtered = filtered.filter(job => job.type === currentFilter);
  }
  
  // Apply advanced filters
  if (salaryRange !== 'all') {
    filtered = filtered.filter(job => {
      const salary = job.salary;
      if (salaryRange === 'low') {
        return salary.includes('$0') || salary.includes('$50') || salary.includes('$60') || salary.includes('$70') || salary.includes('$80');
      } else if (salaryRange === 'medium') {
        return salary.includes('$80') || salary.includes('$90') || salary.includes('$100') || salary.includes('$110') || salary.includes('$120');
      } else if (salaryRange === 'high') {
        return salary.includes('$120') || salary.includes('$130') || salary.includes('$140') || salary.includes('$150') || salary.includes('$160') || salary.includes('$180') || salary.includes('$190') || salary.includes('$200');
      }
      return true;
    });
  }
  
  if (experienceLevel !== 'all') {
    filtered = filtered.filter(job => job.experience === experienceLevel);
  }
  
  if (workType !== 'all') {
    filtered = filtered.filter(job => job.type === workType);
  }
  
  return filtered;
}

function renderJobs() {
  const filteredJobs = getFilteredJobs();
  const track = document.getElementById('job-slider-track');
  const jobCount = document.getElementById('job-count');
  
  if (!track) return;
  
  console.log('📊 Rendering jobs:', {
    totalJobs: jobs.length,
    filteredJobs: filteredJobs.length,
    currentFilter: currentFilter,
    salaryRange: document.getElementById('salary-range')?.value,
    experienceLevel: document.getElementById('experience-level')?.value,
    workType: document.getElementById('work-type')?.value
  });
  
  // Update job count
  if (jobCount) jobCount.textContent = filteredJobs.length;
  
  // Update slider badge
  updateSliderBadge();
  
  // Calculate slides
  const totalSlides = Math.ceil(filteredJobs.length / jobsPerSlide);
  
  // Render jobs
  track.innerHTML = filteredJobs.map((job, index) => `
    <div class="job-card ${job.isNew ? 'new-job' : ''}" style="border: 2px solid ${getJobCardColor(index)};">
      ${job.isNew ? '<div class="new-badge">🔥 NEW</div>' : ''}
      <div class="job-header">
        <img src="${job.logo}" alt="${job.company}" class="company-logo">
        <div class="job-info">
          <h3>${job.title}</h3>
          <p class="company">${job.company}</p>
          <p class="location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
        </div>
        <button class="favorite-btn" onclick="toggleFavorite(${job.id})">
          <i class="fas ${favorites.includes(job.id) ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="job-details">
        <div class="salary"><i class="fas fa-dollar-sign"></i> ${job.salary}</div>
        <div class="type"><i class="fas fa-clock"></i> ${job.type}</div>
        <div class="experience"><i class="fas fa-user"></i> ${job.experience} Level</div>
      </div>
      <div class="job-skills">
        ${job.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        ${job.skills.length > 3 ? `<span class="skill-tag">+${job.skills.length - 3} more</span>` : ''}
      </div>
      <button class="view-details-btn" onclick="showJobDetails(${job.id})">View Details</button>
    </div>
  `).join('');
  
  // Update slider
  updateSlider(totalSlides);
}

function getJobCardColor(index) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
  return colors[index % colors.length];
}

function updateSlider(totalSlides) {
  const track = document.getElementById('job-slider-track');
  const dots = document.getElementById('job-slider-dots');
  const prevBtn = document.getElementById('job-prev-btn');
  const nextBtn = document.getElementById('job-next-btn');
  
  if (!track) return;
  
  // Update transform
  const slideWidth = 100 / jobsPerSlide;
  track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  
  // Update dots
  if (dots) {
    dots.innerHTML = Array.from({length: totalSlides}, (_, i) => 
      `<span class="dot ${i === currentSlide ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');
  }
  
  // Update buttons
  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide >= totalSlides - 1;
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    renderJobs();
  }
}

function nextSlide() {
  const filteredJobs = getFilteredJobs();
  const totalSlides = Math.ceil(filteredJobs.length / jobsPerSlide);
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    renderJobs();
  }
}

function goToSlide(slide) {
  currentSlide = slide;
  renderJobs();
}

function toggleFavorite(jobId) {
  const index = favorites.indexOf(jobId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(jobId);
  }
  renderJobs();
}

function showJobDetails(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;
  
  const modal = document.getElementById('job-modal');
  const modalBody = document.getElementById('job-modal-body');
  
  if (modal && modalBody) {
    modalBody.innerHTML = `
      <div class="job-modal-header">
        <h2>${job.title}</h2>
        <p class="company">${job.company}</p>
      </div>
      <div class="job-modal-content">
        <div class="job-info-grid">
          <div><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
          <div><i class="fas fa-dollar-sign"></i> ${job.salary}</div>
          <div><i class="fas fa-clock"></i> ${job.type}</div>
          <div><i class="fas fa-user"></i> ${job.experience} Level</div>
        </div>
        <div class="job-description">
          <h3>Job Description</h3>
          <p>${job.description}</p>
        </div>
        <div class="job-skills">
          <h3>Required Skills</h3>
          <div class="skills-container">
            ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
        <div class="job-actions">
          <button class="apply-btn">Apply Now</button>
          <button class="save-btn" onclick="toggleFavorite(${job.id})">
            <i class="fas ${favorites.includes(job.id) ? 'fa-heart' : 'fa-heart-o'}"></i>
            ${favorites.includes(job.id) ? 'Saved' : 'Save Job'}
          </button>
        </div>
      </div>
    `;
    modal.style.display = 'flex';
  }
}

// Setup modal close
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('job-modal');
  const closeBtn = modal?.querySelector('.job-modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});

// Make functions globally available
window.toggleFavorite = toggleFavorite;
window.showJobDetails = showJobDetails;
window.goToSlide = goToSlide;
window.prevSlide = prevSlide;
window.nextSlide = nextSlide; 