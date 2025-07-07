/*Global Data */
const jobdata = [
  {
  id: 1,
  title: "Web Developer",
  salary: "$900 - $1200/m",
  type: "Full Time",
    company: "Google",
    src: "assets/images/googleicon.png",
    description: "Develop and maintain web applications using modern frameworks. Collaborate with cross-functional teams to deliver high-quality products."
  },
  {
  id: 2,
    title: "Digital Marketing Specialist",
  salary: "$900 - $1200/m",
  type: "Part Time",
    company: "Facebook",
    src: "assets/images/facebookicon.png",
    description: "Plan and execute digital marketing campaigns. Analyze performance metrics and optimize strategies for better reach."
  },
  {
  id: 3,
    title: "Freelance Graphic Designer",
    salary: "$400 - $600/m",
  type: "Freelancer",
    company: "Yahoo",
    src: "assets/images/yahooicon.png",
    description: "Create visual concepts and designs for various digital platforms. Work closely with clients to meet their branding needs."
},
{
  id: 4,
  title: "Business Associate",
  salary: "$900 - $1200/m",
  type: "Full Time",
    company: "LinkedIn",
    src: "assets/images/linkedinicon.png",
    description: "Support business operations and strategy. Conduct market research and assist in project management."
},
{
  id: 5,
    title: "UX/UI Designer",
  salary: "$900 - $1200/m",
  type: "Part Time",
    company: "Uber",
    src: "assets/images/ubericon.png",
    description: "Design user interfaces and experiences for mobile and web apps. Conduct user research and usability testing."
  },
  {
    id: 6,
    title: "Backend Developer",
    salary: "$1,200 - $1,800/m",
    type: "Full Time",
    company: "Amazon",
    src: "assets/images/amazon.png",
    description: "Build and maintain server-side logic, databases, and APIs. Ensure high performance and responsiveness."
  },
  {
    id: 7,
    title: "Data Analyst",
    salary: "$1,000 - $1,500/m",
    type: "Full Time",
    company: "Spotify",
    src: "assets/images/spotify.png",
    description: "Analyze large datasets to extract insights. Create reports and dashboards for business stakeholders."
  },
  {
    id: 8,
    title: "Cyber Security Expert",
    salary: "$1,500 - $2,000/m",
    type: "Full Time",
    company: "Cisco",
    src: "assets/images/cisco.png",
    description: "Monitor and secure network infrastructure. Implement security protocols and respond to incidents."
  },
  {
    id: 9,
    title: "Mobile App Developer",
    salary: "$1,100 - $1,600/m",
    type: "Full Time",
    company: "AMD",
    src: "assets/images/amd.png",
    description: "Develop and maintain mobile applications for Android and iOS. Collaborate with designers and backend teams."
  },
  {
    id: 10,
    title: "Content Writer",
    salary: "$700 - $1,000/m",
    type: "Freelancer",
    company: "Logitech",
    src: "assets/images/logitech.png",
    description: "Write engaging content for blogs, websites, and social media. Research topics and ensure SEO best practices."
  },
  {
    id: 11,
    title: "Frontend Developer",
    salary: "$800 - $1,100/m",
    type: "Full Time",
    company: "Microsoft",
    src: "assets/images/amazon.png",
    description: "Build responsive and interactive user interfaces. Work with modern JavaScript frameworks and CSS."
  },
  {
    id: 12,
    title: "Social Media Manager",
    salary: "$500 - $800/m",
    type: "Part Time",
    company: "Instagram",
    src: "assets/images/facebookicon.png",
    description: "Manage social media accounts and create engaging content. Monitor trends and engage with followers."
  },
  {
    id: 13,
    title: "Video Editor",
    salary: "$300 - $500/m",
    type: "Freelancer",
    company: "YouTube",
    src: "assets/images/spotify.png",
    description: "Edit and produce high-quality video content. Work with various video editing software and tools."
  },
  {
    id: 14,
    title: "Product Manager",
    salary: "$1,800 - $2,500/m",
    type: "Full Time",
    company: "Apple",
    src: "assets/images/amazon.png",
    description: "Lead product development from conception to launch. Coordinate with engineering, design, and marketing teams."
  },
  {
    id: 15,
    title: "SEO Specialist",
    salary: "$600 - $900/m",
    type: "Part Time",
    company: "Bing",
    src: "assets/images/googleicon.png",
    description: "Optimize websites for search engines. Conduct keyword research and implement SEO strategies."
  },
  {
    id: 16,
    title: "DevOps Engineer",
    salary: "$1,600 - $2,200/m",
    type: "Full Time",
    company: "Netflix",
    src: "assets/images/spotify.png",
    description: "Manage infrastructure and deployment pipelines. Ensure system reliability and scalability."
  },
  {
    id: 17,
    title: "Copywriter",
    salary: "$400 - $700/m",
    type: "Freelancer",
    company: "Twitter",
    src: "assets/images/linkedinicon.png",
    description: "Create compelling copy for advertisements and marketing materials. Write engaging content for various platforms."
  },
  {
    id: 18,
    title: "Data Scientist",
    salary: "$1,400 - $1,900/m",
    type: "Full Time",
    company: "IBM",
    src: "assets/images/amd.png",
    description: "Analyze complex data sets and build predictive models. Develop machine learning algorithms and solutions."
  },
  {
    id: 19,
    title: "Customer Support",
    salary: "$400 - $600/m",
    type: "Part Time",
    company: "Zendesk",
    src: "assets/images/cisco.png",
    description: "Provide excellent customer service and support. Handle inquiries and resolve customer issues."
  },
  {
    id: 20,
    title: "Illustrator",
    salary: "$300 - $500/m",
    type: "Freelancer",
    company: "Behance",
    src: "assets/images/yahooicon.png",
    description: "Create original illustrations and artwork. Work on various projects from concept to final delivery."
  },
  {
    id: 21,
    title: "Software Architect",
    salary: "$2,000 - $3,000/m",
    type: "Full Time",
    company: "Oracle",
    src: "assets/images/amazon.png",
    description: "Design and oversee software architecture. Make high-level design choices and technical standards."
  },
  {
    id: 22,
    title: "Email Marketing Specialist",
    salary: "$500 - $800/m",
    type: "Part Time",
    company: "Mailchimp",
    src: "assets/images/facebookicon.png",
    description: "Create and manage email marketing campaigns. Analyze performance and optimize for better results."
  },
  {
    id: 23,
    title: "3D Animator",
    salary: "$600 - $900/m",
    type: "Freelancer",
    company: "Pixar",
    src: "assets/images/spotify.png",
    description: "Create 3D animations and visual effects. Work on various projects from commercials to films."
  },
  {
    id: 24,
    title: "Cloud Engineer",
    salary: "$1,300 - $1,800/m",
    type: "Full Time",
    company: "AWS",
    src: "assets/images/amazon.png",
    description: "Design and implement cloud infrastructure solutions. Manage cloud services and ensure security."
  },
  {
    id: 25,
    title: "Brand Strategist",
    salary: "$800 - $1,200/m",
    type: "Part Time",
    company: "Nike",
    src: "assets/images/linkedinicon.png",
    description: "Develop brand strategies and positioning. Create brand guidelines and marketing campaigns."
  },
  {
    id: 26,
    title: "Translator",
    salary: "$200 - $400/m",
    type: "Freelancer",
    company: "Duolingo",
    src: "assets/images/googleicon.png",
    description: "Translate content between different languages. Ensure accuracy and cultural appropriateness."
  },
  {
    id: 27,
    title: "AI/ML Engineer",
    salary: "$1,800 - $2,500/m",
    type: "Full Time",
    company: "OpenAI",
    src: "assets/images/amd.png",
    description: "Develop artificial intelligence and machine learning models. Implement AI solutions for various applications."
  },
  {
    id: 28,
    title: "Event Coordinator",
    salary: "$600 - $900/m",
    type: "Part Time",
    company: "Eventbrite",
    src: "assets/images/ubericon.png",
    description: "Plan and coordinate events and conferences. Manage logistics and ensure successful execution."
  },
  {
    id: 29,
    title: "Voice Actor",
    salary: "$300 - $600/m",
    type: "Freelancer",
    company: "Audible",
    src: "assets/images/spotify.png",
    description: "Provide voice-over services for various media. Record audio content for commercials and projects."
  },
  {
    id: 30,
    title: "Blockchain Developer",
    salary: "$1,500 - $2,200/m",
    type: "Full Time",
    company: "Coinbase",
    src: "assets/images/cisco.png",
    description: "Develop blockchain applications and smart contracts. Work with cryptocurrency and decentralized systems."
  },
  {
    id: 31,
    title: "Photographer",
    salary: "$400 - $700/m",
    type: "Part Time",
    company: "Shutterstock",
    src: "assets/images/yahooicon.png",
    description: "Capture high-quality photographs for various purposes. Edit and retouch images for professional use."
  },
  {
    id: 32,
    title: "Game Developer",
    salary: "$1,200 - $1,700/m",
    type: "Full Time",
    company: "Epic Games",
    src: "assets/images/amazon.png",
    description: "Develop video games and interactive experiences. Work with game engines and programming languages."
  },
  {
    id: 33,
    title: "Podcast Producer",
    salary: "$500 - $800/m",
    type: "Freelancer",
    company: "Spotify",
    src: "assets/images/spotify.png",
    description: "Produce and edit podcast episodes. Manage recording sessions and audio post-production."
  },
  {
    id: 34,
    title: "Network Administrator",
    salary: "$1,000 - $1,400/m",
    type: "Full Time",
    company: "Cisco",
    src: "assets/images/cisco.png",
    description: "Manage and maintain network infrastructure. Monitor network performance and troubleshoot issues."
  },
  {
    id: 35,
    title: "Fitness Trainer",
    salary: "$400 - $700/m",
    type: "Part Time",
    company: "Peloton",
    src: "assets/images/ubericon.png",
    description: "Provide fitness training and coaching services. Create workout plans and motivate clients."
  },
  {
    id: 36,
    title: "Virtual Assistant",
    salary: "$200 - $400/m",
    type: "Freelancer",
    company: "Upwork",
    src: "assets/images/linkedinicon.png",
    description: "Provide administrative support remotely. Handle scheduling, emails, and various tasks."
  },
  {
    id: 37,
    title: "System Administrator",
    salary: "$1,100 - $1,500/m",
    type: "Full Time",
    company: "Microsoft",
    src: "assets/images/amazon.png",
    description: "Manage and maintain computer systems and servers. Ensure system security and performance."
  },
  {
    id: 38,
    title: "Market Research Analyst",
    salary: "$700 - $1,000/m",
    type: "Part Time",
    company: "Nielsen",
    src: "assets/images/googleicon.png",
    description: "Conduct market research and analyze consumer behavior. Provide insights for business decisions."
  },
  {
    id: 39,
    title: "Logo Designer",
    salary: "$300 - $500/m",
    type: "Freelancer",
    company: "99designs",
    src: "assets/images/yahooicon.png",
    description: "Create unique and memorable logo designs. Work with clients to develop brand identity."
  },
  {
    id: 40,
    title: "Database Administrator",
    salary: "$1,300 - $1,800/m",
    type: "Full Time",
    company: "Oracle",
    src: "assets/images/amazon.png",
    description: "Manage and maintain database systems. Ensure data security, integrity, and performance."
  }
];

// Job Favorites System
let favoriteJobs = JSON.parse(localStorage.getItem('favoriteJobs')) || [];

// Add experience level and work type to job data
jobdata.forEach(job => {
  // Extract the first number from salary (e.g., "$900 - $1200/m" -> 900)
  const salaryMatch = job.salary.match(/\$?(\d+)/);
  const salary = salaryMatch ? parseInt(salaryMatch[1]) : 0;
  
  // Add experience level based on salary (for demo purposes)
  if (salary < 800) {
    job.experienceLevel = 'entry';
  } else if (salary < 1200) {
    job.experienceLevel = 'mid';
  } else if (salary < 1800) {
    job.experienceLevel = 'senior';
  } else {
    job.experienceLevel = 'expert';
  }
  
  // Add work type (for demo purposes)
  const workTypes = ['remote', 'onsite', 'hybrid'];
  job.workType = workTypes[Math.floor(Math.random() * workTypes.length)];
  
  // Debug: Log a few jobs to verify properties
  if (job.id <= 5) {
    console.log(`Job ${job.id}: ${job.title} - Experience: ${job.experienceLevel}, Work Type: ${job.workType}, Salary: ${job.salary} (parsed: ${salary})`);
  }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initializeApp();
  
  // Initialize freelancer slider
  setTimeout(() => {
    initializeFreelancerSlider();
  }, 200);
});

function initializeApp() {
  // Initialize DOM elements
const Ham_btn = document.getElementById('Hambug');
  const menu = document.getElementById('menu');
  const allbtn = document.querySelectorAll('.jobs-id li');
  const jobModal = document.getElementById('job-modal');
  const jobModalBody = document.getElementById('job-modal-body');
  const jobModalClose = document.getElementById('job-modal-close');
  const searchInput = document.querySelector('.hero .search input');
  const searchButton = document.querySelector('.hero .search button');
  const applyFiltersBtn = document.getElementById('apply-filters');
  const clearFiltersBtn = document.getElementById('clear-filters');
  const salaryRangeSelect = document.getElementById('salary-range');
  const experienceLevelSelect = document.getElementById('experience-level');
  const workTypeSelect = document.getElementById('work-type');

  // Set initial loading state
  const jobcontainer = document.querySelector('.jobs-container');
  if (jobcontainer) {
    jobcontainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--accent-color);">
      <h3>Loading jobs...</h3>
      <p>Please wait while we load the available positions.</p>
    </div>`;
  }

  // Handle Navbar Hamburger Menu
  if (Ham_btn && menu) {
Ham_btn.addEventListener('click', ()=>{
 menu.classList.toggle('active');
 Ham_btn.classList.toggle('active');
    });
  }

  // Handle Job Id buttons
  if (allbtn.length > 0) {
    allbtn.forEach((btn)=>{
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
    allbtn.forEach((btn)=>{
      btn.classList.remove('active');
        });
        // Add active class to clicked button
    btn.classList.add('active');
        
        const data_target = btn.getAttribute('data-target');
        console.log('Job tab clicked:', data_target);
        
        // Handle different job types
        if (data_target === "favorites") {
          showFavorites();
        } else {
          handlejobcontainer(data_target);
        }
      });
    });
  }

  // Modal logic
  function openJobModal(job) {
    if (jobModalBody && jobModal) {
      jobModalBody.innerHTML = `
        <h2>${job.title}</h2>
        <div class="job-company">${job.company}</div>
        <div class="job-type">${job.type}</div>
        <div class="job-salary">${job.salary}</div>
        <div class="job-description">${job.description}</div>
      `;
      jobModal.style.display = 'flex';
    }
  }

  function closeJobModal() {
    if (jobModal) {
      jobModal.style.display = 'none';
    }
  }

  if (jobModalClose) {
    jobModalClose.addEventListener('click', closeJobModal);
  }

  window.addEventListener('click', function(e) {
    if (e.target === jobModal) closeJobModal();
  });

  // Search functionality
  function searchJobs(query) {
    if (!query.trim()) {
handlejobcontainer("all");
      return;
    }
    
    const filtered = jobdata.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.type.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displaySearchResults(filtered, query);
    
    // Scroll to jobs section after search
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  function displaySearchResults(jobs, query) {
    // Use slider to display search results
    displayJobsWithSlider(jobs);
  }

  // Search event listeners
  if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
      searchJobs(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchJobs(searchInput.value);
      }
    });
  }

  // Initialize filters
  console.log('DOM loaded, initializing filters...');
  
  // Add event listeners for advanced filters
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyAdvancedFilters);
    console.log('Apply filters button listener added');
  }
  
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    console.log('Clear filters button listener added');
  }
  
  // Add change event listeners to individual filter selects
  if (salaryRangeSelect) {
    salaryRangeSelect.addEventListener('change', function() {
      console.log('Salary range changed:', this.value);
      if (this.value || experienceLevelSelect?.value || workTypeSelect?.value) {
        applyAdvancedFilters();
      } else {
        handlejobcontainer('all');
      }
    });
  }
  
  if (experienceLevelSelect) {
    experienceLevelSelect.addEventListener('change', function() {
      console.log('Experience level changed:', this.value);
      if (this.value || salaryRangeSelect?.value || workTypeSelect?.value) {
        applyAdvancedFilters();
      } else {
        handlejobcontainer('all');
      }
    });
  }
  
  if (workTypeSelect) {
    workTypeSelect.addEventListener('change', function() {
      console.log('Work type changed:', this.value);
      if (this.value || salaryRangeSelect?.value || experienceLevelSelect?.value) {
        applyAdvancedFilters();
      } else {
        handlejobcontainer('all');
      }
    });
  }
  
  // Initialize the page with slider
  console.log('Initializing jobs display...');
  console.log('jobdata length:', jobdata.length);
  console.log('currentJobData length:', currentJobData.length);
  
  // Set the 'all' tab as active by default
  const allTab = document.querySelector('[data-target="all"]');
  if (allTab) {
    allTab.classList.add('active');
  }
  
  // Small delay to ensure DOM is fully ready
  setTimeout(() => {
    if (jobdata && jobdata.length > 0) {
      displayJobsWithSlider(jobdata);
      console.log('Jobs displayed successfully');
    } else {
      console.error('No job data available!');
      // Show a fallback message
      const jobcontainer = document.querySelector('.jobs-container');
      if (jobcontainer) {
        jobcontainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--accent-color);">
          <h3>Loading jobs...</h3>
          <p>Please wait while we load the available positions.</p>
        </div>`;
      }
    }
  }, 100);
  
  updateFavoritesCount();
}

// Global filter functions
function applyAdvancedFilters() {
  console.log('applyAdvancedFilters called');
  
  const salaryRangeSelect = document.getElementById('salary-range');
  const experienceLevelSelect = document.getElementById('experience-level');
  const workTypeSelect = document.getElementById('work-type');
  
  const salaryRange = salaryRangeSelect ? salaryRangeSelect.value : '';
  const experienceLevel = experienceLevelSelect ? experienceLevelSelect.value : '';
  const workType = workTypeSelect ? workTypeSelect.value : '';
  
  console.log('Filter values:', { salaryRange, experienceLevel, workType });
  
  // Check if any filter is selected
  const hasAnyFilter = salaryRange || experienceLevel || workType;
  
  if (!hasAnyFilter) {
    console.log('No filters selected, showing all jobs');
    handlejobcontainer('all');
    return;
  }
  
  let filtered = [...jobdata]; // Create a copy of the original array
  console.log('Starting with', filtered.length, 'jobs');
  
  // Filter by salary range
  if (salaryRange) {
    console.log('Processing salary filter:', salaryRange);
    
    filtered = filtered.filter(job => {
      // Extract the first number from salary (e.g., "$900 - $1200/m" -> 900)
      const salaryMatch = job.salary.match(/\$?(\d+)/);
      if (!salaryMatch) return false;
      
      const salary = parseInt(salaryMatch[1]);
      console.log(`Job: ${job.title}, Salary: ${salary}, Range: ${salaryRange}`);
      
      if (salaryRange === '2000+') {
        return salary >= 2000;
      } else if (salaryRange.includes('-')) {
        const [min, max] = salaryRange.split('-').map(s => parseInt(s.replace(/[^0-9]/g, '')));
        return salary >= min && salary <= max;
      }
      return false;
    });
    console.log('Jobs after salary filter:', filtered.length);
  }
  
  // Filter by experience level
  if (experienceLevel) {
    console.log('Filtering by experience level:', experienceLevel);
    console.log('Available experience levels in job data:', [...new Set(jobdata.map(job => job.experienceLevel))]);
    
    filtered = filtered.filter(job => {
      console.log(`Job: ${job.title}, Experience: ${job.experienceLevel}, Filter: ${experienceLevel}, Match: ${job.experienceLevel === experienceLevel}`);
      return job.experienceLevel === experienceLevel;
    });
    console.log('Jobs after experience filter:', filtered.length);
  }
  
  // Filter by work type
  if (workType) {
    console.log('Filtering by work type:', workType);
    console.log('Available work types in job data:', [...new Set(jobdata.map(job => job.workType))]);
    
    filtered = filtered.filter(job => {
      console.log(`Job: ${job.title}, Work Type: ${job.workType}, Filter: ${workType}, Match: ${job.workType === workType}`);
      return job.workType === workType;
    });
    console.log('Jobs after work type filter:', filtered.length);
  }
  
  console.log('Final filtered jobs:', filtered.length);
  console.log('Filtered jobs:', filtered.map(job => job.title));
  
  // Display the filtered results
  displayFilteredResults(filtered);
  
  // Update active tab
  document.querySelectorAll('.jobs-id li').forEach(btn => btn.classList.remove('active'));
}

function displayFilteredResults(filtered) {
  // Use slider to display filtered results
  displayJobsWithSlider(filtered);
}

function clearAllFilters() {
  console.log('clearAllFilters called');
  
  const salaryRangeSelect = document.getElementById('salary-range');
  const experienceLevelSelect = document.getElementById('experience-level');
  const workTypeSelect = document.getElementById('work-type');
  
  if (salaryRangeSelect) salaryRangeSelect.value = '';
  if (experienceLevelSelect) experienceLevelSelect.value = '';
  if (workTypeSelect) workTypeSelect.value = '';
  
  handlejobcontainer('all');
  
  // Reset active tab
  document.querySelectorAll('.jobs-id li').forEach(btn => btn.classList.remove('active'));
  const allTab = document.querySelector('[data-target="all"]');
  if (allTab) allTab.classList.add('active');
}

//Handle Job container list
function handlejobcontainer(data_target){
  const jobcontainer = document.querySelector('.jobs-container');
  if (!jobcontainer) return;
  
  let filtered = [];
  
   if(data_target == "all"){
    filtered = jobdata;
  } else if(data_target == "freelancer"){
    filtered = jobdata.filter(item => item.type === "Freelancer");
  } else if(data_target == "fulltime"){
    filtered = jobdata.filter(item => item.type === "Full Time");
  } else if(data_target == "parttime"){
    filtered = jobdata.filter(item => item.type === "Part Time");
  } else if(data_target == "favorites"){
    filtered = jobdata.filter(item => favoriteJobs.includes(item.id));
  }
  
  console.log(`Filtered jobs for "${data_target}":`, filtered.length);
  
  // Use slider to display jobs
  displayJobsWithSlider(filtered);
}

function toggleFavorite(jobId) {
  const index = favoriteJobs.indexOf(jobId);
  if (index > -1) {
    favoriteJobs.splice(index, 1);
  } else {
    favoriteJobs.push(jobId);
  }
  localStorage.setItem('favoriteJobs', JSON.stringify(favoriteJobs));
  updateFavoriteButton(jobId);
  updateFavoritesCount();
}

function isFavorite(jobId) {
  return favoriteJobs.includes(jobId);
}

function updateFavoriteButton(jobId) {
  const button = document.querySelector(`[data-favorite="${jobId}"]`);
  if (button) {
    if (isFavorite(jobId)) {
      button.innerHTML = '<i class="bx bxs-heart" style="color: #ff6b6b;"></i>';
      button.title = 'Remove from favorites';
    } else {
      button.innerHTML = '<i class="bx bx-heart"></i>';
      button.title = 'Add to favorites';
    }
  }
}

function updateFavoritesCount() {
  const count = favoriteJobs.length;
  const badge = document.getElementById('favorites-count');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
  }
}

function showFavorites() {
  const favoriteJobsData = jobdata.filter(job => favoriteJobs.includes(job.id));
  // Use slider to display favorites
  displayJobsWithSlider(favoriteJobsData);
  
  // Update active tab
  document.querySelectorAll('.jobs-id li').forEach(btn => btn.classList.remove('active'));
  const favoritesTab = document.querySelector('[data-target="favorites"]');
  if (favoritesTab) favoritesTab.classList.add('active');
}

// Global variables for job slider
let currentSlide = 0;
let jobsPerSlide = 6; // Default: Show 6 jobs per slide (2 rows of 3 jobs each)
let currentJobData = []; // Will be initialized with jobdata

// Function to update jobs per slide based on screen size
function updateJobsPerSlide() {
  if (window.innerWidth <= 480) {
    jobsPerSlide = 2; // 2 rows of 1 job on very small mobile
  } else if (window.innerWidth <= 600) {
    jobsPerSlide = 4; // 2 rows of 2 jobs on mobile
  } else if (window.innerWidth <= 768) {
    jobsPerSlide = 6; // 2 rows of 3 jobs on tablet
  } else {
    jobsPerSlide = 6; // 2 rows of 3 jobs on desktop
  }
}

// Update on window resize
window.addEventListener('resize', function() {
  const oldJobsPerSlide = jobsPerSlide;
  updateJobsPerSlide();
  
  // If the number of jobs per slide changed, recalculate current slide
  if (oldJobsPerSlide !== jobsPerSlide) {
    const totalJobs = currentJobData.length;
    const totalSlides = Math.ceil(totalJobs / jobsPerSlide);
    if (currentSlide >= totalSlides) {
      currentSlide = totalSlides - 1;
    }
    displayJobsWithSlider(currentJobData, false);
  }
});

// Initialize jobs per slide on page load
updateJobsPerSlide();

// Initialize currentJobData with jobdata
currentJobData = [...jobdata];

// Test function to verify filters (for debugging)
function testFilters() {
  console.log('=== TESTING FILTERS ===');
  console.log('Total jobs:', jobdata.length);
  
  // Test experience level filter
  const entryJobs = jobdata.filter(job => job.experienceLevel === 'entry');
  const midJobs = jobdata.filter(job => job.experienceLevel === 'mid');
  const seniorJobs = jobdata.filter(job => job.experienceLevel === 'senior');
  const expertJobs = jobdata.filter(job => job.experienceLevel === 'expert');
  
  console.log('Entry level jobs:', entryJobs.length);
  console.log('Mid level jobs:', midJobs.length);
  console.log('Senior level jobs:', seniorJobs.length);
  console.log('Expert level jobs:', expertJobs.length);
  
  // Test work type filter
  const remoteJobs = jobdata.filter(job => job.workType === 'remote');
  const onsiteJobs = jobdata.filter(job => job.workType === 'onsite');
  const hybridJobs = jobdata.filter(job => job.workType === 'hybrid');
  
  console.log('Remote jobs:', remoteJobs.length);
  console.log('Onsite jobs:', onsiteJobs.length);
  console.log('Hybrid jobs:', hybridJobs.length);
  
  // Test salary filter
  const lowSalaryJobs = jobdata.filter(job => {
    const salary = parseInt(job.salary.match(/\$?(\d+)/)?.[1] || '0');
    return salary >= 0 && salary <= 500;
  });
  
  console.log('Low salary jobs (0-500):', lowSalaryJobs.length);
}

// Make test function available globally
window.testFilters = testFilters;

// Job Slider functions
function displayJobsWithSlider(jobs = currentJobData, resetSlide = true) {
  console.log('displayJobsWithSlider called with:', jobs.length, 'jobs, resetSlide:', resetSlide);
  
  const jobcontainer = document.querySelector('.jobs-container');
  if (!jobcontainer) {
    console.error('Job container not found!');
    return;
  }
  
  // Update current job data
  currentJobData = jobs;
  
  // Only reset slide if explicitly requested (for filtering/searching)
  if (resetSlide) {
    currentSlide = 0;
  }
  
  const totalJobs = jobs.length;
  const totalSlides = Math.ceil(totalJobs / jobsPerSlide);
  
  // Ensure current slide is within bounds
  if (currentSlide >= totalSlides) {
    currentSlide = totalSlides - 1;
  }
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  
  // Calculate start and end indices for current slide
  const startIndex = currentSlide * jobsPerSlide;
  const endIndex = startIndex + jobsPerSlide;
  const jobsToShow = jobs.slice(startIndex, endIndex);
  
  console.log('Slide calculation:', {
    currentSlide: currentSlide,
    jobsPerSlide: jobsPerSlide,
    startIndex: startIndex,
    endIndex: endIndex,
    jobsToShowCount: jobsToShow.length
  });
  
  let list = "";
  
  if (jobsToShow.length === 0) {
    console.log('No jobs to show for current slide');
    list = `<div class="no-results" style="text-align: center; width: 100%; padding: 2rem; color: var(--accent-color); animation: shake 0.8s ease-in-out;">
      <h3>No jobs found</h3>
      <p>Try adjusting your search criteria or filters</p>
    </div>`;
  } else {
    console.log('Jobs to show:', jobsToShow.map(job => job.title).join(', '));
    // Add jobs info at the top
    list = `<div style="margin-bottom: 1rem; padding: 1rem; background: rgba(0, 100, 148, 0.1); border-radius: 8px; text-align: center; width: 100%;">
      <strong>Showing ${startIndex + 1}-${Math.min(endIndex, totalJobs)} of ${totalJobs} jobs</strong>
    </div>`;
    
    // Add job cards container
    list += '<ul style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; list-style: none; padding: 0; margin: 0; width: 100%;">';
    
    // Add job cards
    jobsToShow.forEach((item, index) => {
      const isFav = isFavorite(item.id);
      list += `<li class="jlist" data-item="${item.type}" data-id="${item.id}" style="animation-delay: ${index * 0.1}s">
        <div class="job-header">
      <img src="${item.src}" alt="">
          <button class="favorite-btn" data-favorite="${item.id}" onclick="toggleFavorite(${item.id})" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            <i class="bx ${isFav ? 'bxs-heart' : 'bx-heart'}" style="color: ${isFav ? '#ff6b6b' : 'inherit'};"></i>
          </button>
        </div>
      <h2>${item.title}</h2>
      <p>${item.salary}</p>
      <span id="${item.id}">${item.type}</span>
        <div style="margin-top: 0.5rem; font-size: 1.2rem; color: var(--accent-color);">
          <small>Experience: ${item.experienceLevel} | Work Type: ${item.workType}</small>
        </div>
    </li>`;
    });
    
    list += '</ul>';
    

  }
  
jobcontainer.innerHTML = list;
  
  // Add click event to each job card for modal
  document.querySelectorAll('.jlist').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.closest('.favorite-btn')) return;
      
      const jobId = parseInt(card.getAttribute('data-id'));
      const job = jobdata.find(j => j.id === jobId);
      if (job) {
        const jobModal = document.getElementById('job-modal');
        const jobModalBody = document.getElementById('job-modal-body');
        if (jobModalBody && jobModal) {
          jobModalBody.innerHTML = `
            <h2>${job.title}</h2>
            <div class="job-company">${job.company}</div>
            <div class="job-type">${job.type}</div>
            <div class="job-salary">${job.salary}</div>
            <div class="job-description">${job.description}</div>
            <div style="margin-top: 1rem; padding: 0.5rem; background: rgba(0, 100, 148, 0.1); border-radius: 4px;">
              <small><strong>Experience Level:</strong> ${job.experienceLevel}</small><br>
              <small><strong>Work Type:</strong> ${job.workType}</small>
            </div>
          `;
          jobModal.style.display = 'flex';
        }
      }
    });
  });
  
  // Update slider controls if job slider exists
  if (window.jobSlider) {
    window.jobSlider.refresh();
  }
}

// Make displayJobsWithSlider globally available
window.displayJobsWithSlider = displayJobsWithSlider;



function goToSlide(slide) {
  // Use the new JobSlider class if available
  if (window.jobSlider) {
    window.jobSlider.goToSlide(slide);
    return;
  }
  
  // Fallback to old method
  currentSlide = slide;
  window.currentSlide = slide;
  
  // Get the current filtered data based on active tab
  let jobsToDisplay = currentJobData;
  
  // Check which tab is active and filter accordingly
  const activeTab = document.querySelector('.jobs-id li.active');
  if (activeTab) {
    const dataTarget = activeTab.getAttribute('data-target');
    if (dataTarget === 'favorites') {
      jobsToDisplay = jobdata.filter(job => favoriteJobs.includes(job.id));
    } else if (dataTarget === 'freelancer') {
      jobsToDisplay = jobdata.filter(item => item.type === "Freelancer");
    } else if (dataTarget === 'fulltime') {
      jobsToDisplay = jobdata.filter(item => item.type === "Full Time");
    } else if (dataTarget === 'parttime') {
      jobsToDisplay = jobdata.filter(item => item.type === "Part Time");
    } else {
      jobsToDisplay = jobdata; // All jobs
    }
  }
  
  // Update current job data and display (don't reset slide during navigation)
  currentJobData = jobsToDisplay;
  displayJobsWithSlider(jobsToDisplay, false);
  
  // Update slider buttons after display
  if (typeof window.updateJobSliderButtons === 'function') {
    window.updateJobSliderButtons();
  }
  
  // Scroll to jobs section
  const jobsSection = document.getElementById('jobs');
  if (jobsSection) {
    jobsSection.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

// Freelancer Slider functionality - Simplified approach
let currentFreelancerSlide = 0;
let freelancersPerView = 3;
let totalFreelancerSlides = 0;

function updateFreelancersPerView() {
  if (window.innerWidth <= 480) {
    freelancersPerView = 1;
  } else if (window.innerWidth <= 768) {
    freelancersPerView = 2;
  } else {
    freelancersPerView = 3;
  }
}

function initializeFreelancerSlider() {
  console.log('=== INITIALIZING FREELANCER SLIDER ===');
  
  const slider = document.getElementById('freelancer-slider');
  if (!slider) {
    console.error('Freelancer slider container not found!');
    return;
  }
  
  const freelancerBoxes = slider.querySelectorAll('.team-box');
      console.log('Found', freelancerBoxes.length, 'freelancer boxes');
  
  if (freelancerBoxes.length === 0) {
          console.error('No freelancer boxes found!');
    return;
  }
  
  updateFreelancersPerView();
  totalFreelancerSlides = Math.ceil(freelancerBoxes.length / freelancersPerView);
  currentFreelancerSlide = 0;
  
  // Reset slider position
  slider.style.transform = 'translateX(0px)';
  
  // Remove any existing event listeners
  const prevBtn = document.querySelector('.freelancer-slider-btn.prev');
  const nextBtn = document.querySelector('.freelancer-slider-btn.next');
  
  if (prevBtn) {
    prevBtn.onclick = function() {
      console.log('Prev button clicked');
      slideFreelancers('prev');
    };
  }
  
  if (nextBtn) {
    nextBtn.onclick = function() {
      console.log('Next button clicked');
      slideFreelancers('next');
    };
  }
  
  updateFreelancerSliderButtons();
  
      console.log('Freelancer slider initialized:');
  console.log('   - Total freelancers:', freelancerBoxes.length);
  console.log('   - Freelancers per view:', freelancersPerView);
  console.log('   - Total slides:', totalFreelancerSlides);
  console.log('   - Current slide:', currentFreelancerSlide);
}

function slideFreelancers(direction) {
  console.log('=== SLIDING FREELANCERS ===');
  console.log('Direction:', direction);
  console.log('Current slide:', currentFreelancerSlide);
  console.log('Total slides:', totalFreelancerSlides);
  
  const slider = document.getElementById('freelancer-slider');
  if (!slider) {
    console.error('Slider not found!');
    return;
  }
  
  // Update slide position
  if (direction === 'next' && currentFreelancerSlide < totalFreelancerSlides - 1) {
    currentFreelancerSlide++;
    console.log('Moving to next slide:', currentFreelancerSlide);
  } else if (direction === 'prev' && currentFreelancerSlide > 0) {
    currentFreelancerSlide--;
    console.log('Moving to previous slide:', currentFreelancerSlide);
  } else {
    console.log('Cannot slide further in direction:', direction);
    return;
  }
  
  // Calculate translation
  const teamBox = slider.querySelector('.team-box');
  if (!teamBox) {
    console.error('No team box found for width calculation');
    return;
  }
  
  const boxWidth = teamBox.offsetWidth;
  const gap = 32; // 2rem gap
  const slideWidth = boxWidth + gap;
  const translateX = -currentFreelancerSlide * slideWidth * freelancersPerView;
  
  console.log('Box width:', boxWidth, 'Gap:', gap, 'Slide width:', slideWidth);
  console.log('Translating by:', translateX, 'px');
  
  // Apply transform
  slider.style.transform = `translateX(${translateX}px)`;
  console.log('Applied transform:', slider.style.transform);
  
  updateFreelancerSliderButtons();
}

function updateFreelancerSliderButtons() {
  const prevBtn = document.querySelector('.freelancer-slider-btn.prev');
  const nextBtn = document.querySelector('.freelancer-slider-btn.next');
  
  if (prevBtn) {
    prevBtn.disabled = currentFreelancerSlide === 0;
    console.log('Prev button disabled:', prevBtn.disabled);
  }
  
  if (nextBtn) {
    nextBtn.disabled = currentFreelancerSlide >= totalFreelancerSlides - 1;
    console.log('Next button disabled:', nextBtn.disabled);
  }
}

// Handle window resize
window.addEventListener('resize', function() {
  const oldFreelancersPerView = freelancersPerView;
  updateFreelancersPerView();
  
  if (oldFreelancersPerView !== freelancersPerView) {
    const slider = document.getElementById('freelancer-slider');
    if (slider) {
      totalFreelancerSlides = Math.ceil(slider.querySelectorAll('.team-box').length / freelancersPerView);
      if (currentFreelancerSlide >= totalFreelancerSlides) {
        currentFreelancerSlide = totalFreelancerSlides - 1;
      }
      slideFreelancers(''); // Update position
    }
  }
});

// Make functions globally available
window.slideFreelancers = slideFreelancers;
window.initializeFreelancerSlider = initializeFreelancerSlider;

// Simple test function
function testSlider() {
  console.log('TESTING SLIDER...');
  const slider = document.getElementById('freelancer-slider');
  if (slider) {
    console.log('Slider found');
    console.log('Current transform:', slider.style.transform);
    slider.style.transform = 'translateX(-200px)';
    console.log('Applied test transform');
    setTimeout(() => {
      slider.style.transform = 'translateX(0px)';
      console.log('Reset transform');
    }, 1000);
  } else {
    console.log('Slider not found');
  }
}

window.testSlider = testSlider;

// Alternative sliding approach using scrollLeft
function slideFreelancersScroll(direction) {
  console.log('=== SLIDING WITH SCROLL ===');
  console.log('Direction:', direction);
  
  const slider = document.getElementById('freelancer-slider');
  if (!slider) {
    console.error('Slider not found!');
    return;
  }
  
  const teamBox = slider.querySelector('.team-box');
  if (!teamBox) {
    console.error('No team box found!');
    return;
  }
  
  const boxWidth = teamBox.offsetWidth;
  const gap = 32;
  const slideWidth = boxWidth + gap;
  
  console.log('Box width:', boxWidth, 'Slide width:', slideWidth);
  console.log('Current scrollLeft:', slider.scrollLeft);
  
  if (direction === 'next') {
    slider.scrollLeft += slideWidth * freelancersPerView;
    console.log('Scrolled right by:', slideWidth * freelancersPerView);
  } else if (direction === 'prev') {
    slider.scrollLeft -= slideWidth * freelancersPerView;
    console.log('Scrolled left by:', slideWidth * freelancersPerView);
  }
  
  console.log('New scrollLeft:', slider.scrollLeft);
}

// Make scroll function available
window.slideFreelancersScroll = slideFreelancersScroll;