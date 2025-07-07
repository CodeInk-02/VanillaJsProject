// Legacy variables (kept for compatibility)
let alldata = [];
let completeddata = [];
const pendingdata = [];
let namelist;

// Game State Management
let gameState = {
  tasks: [],
  level: 1,
  xp: 0,
  completedTasks: 0,
  achievements: []
};

// XP and Level System
const XP_PER_TASK = 10;
const XP_PER_LEVEL = 100;

// Achievement System
const achievements = {
  firstTask: { id: 'firstTask', title: 'First Mission', description: 'Complete your first mission', icon: '🎯' },
  levelUp: { id: 'levelUp', title: 'Level Up!', description: 'Reach a new level', icon: '⭐' },
  taskMaster: { id: 'taskMaster', title: 'Task Master', description: 'Complete 10 tasks', icon: '🏆' },
  speedRunner: { id: 'speedRunner', title: 'Speed Runner', description: 'Complete 5 tasks in one session', icon: '⚡' },
  editor: { id: 'editor', title: 'Editor', description: 'Edit your first task', icon: '✏️' }
};

// Edit functionality
let editingTaskId = null;

// Initialize the game
window.onload = function() {
  // Load legacy data for compatibility
  const storedData = localStorage.getItem('alldata');
  if (storedData) {
    alldata = JSON.parse(storedData);
  }
  
  // Initialize new game system
  loadGameState();
  createParticles();
  updateUI();
  renderTasks();
  
  // Ensure "All Missions" is active by default
  const allMissionsBtn = document.querySelector('.filter-btn');
  if (allMissionsBtn) {
    allMissionsBtn.classList.add('active');
  }
};

function handleData() {
  const inputdata = document.getElementById('input-task');
  const taskdata = inputdata.value.trim();
  inputdata.value = "";

  if (taskdata === "") return;
  
  // Create new task with unique ID
  const newTask = {
    id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    text: taskdata,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // Add to game state
  gameState.tasks.push(newTask);
  
  // Save to localStorage
  saveGameState();
  
  // Update UI and render tasks
  updateUI();
  renderTasks();
  
  // Add visual feedback
  addTaskAnimation();
  
  // Hide empty state if it's showing
  const emptyState = document.getElementById('empty-state');
  if (emptyState) {
    emptyState.style.display = 'none';
  }
}

// Legacy function - now handled by new system
function alldatahandle() {
  renderTasks();
}

// Legacy function - now handled by toggleTaskStatus()
function handlecheckbox(event) {
  // This function is kept for compatibility but the actual functionality
  // is now handled by the new toggleTaskStatus() function
}

// Legacy function - now handled by new system
function handlecompletedata() {
  renderTasks();
}

// Legacy function - now handled by new system
function handlependingdata() {
  renderTasks();
}

// Legacy function - now handled by the new handleNavClick()
function handleNavClick(clickedBtn, type) {
  // This function is kept for compatibility but the actual functionality
  // is now handled by the new handleNavClick() function without the type parameter
}

// Legacy function - now handled by new system
function handleclearall() {
  if (confirm('Are you sure you want to clear all missions? This action cannot be undone.')) {
    gameState.tasks = [];
    gameState.completedTasks = 0;
    saveGameState();
    updateUI();
    renderTasks();
  }
}

// Legacy function - now handled by deleteTask()
function handledeletelist(event) {
  // This function is kept for compatibility but the actual functionality
  // is now handled by the new deleteTask() function
}

// Load game state from localStorage
function loadGameState() {
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
    gameState = JSON.parse(savedState);
  }
}

// Save game state to localStorage
function saveGameState() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

// Update UI elements
function updateUI() {
  const levelElement = document.getElementById('level');
  const xpElement = document.getElementById('xp');
  const taskCountElement = document.getElementById('task-count');
  
  if (levelElement) levelElement.textContent = gameState.level;
  if (xpElement) xpElement.textContent = gameState.xp;
  if (taskCountElement) taskCountElement.textContent = gameState.tasks.length;
}

// Render tasks based on current filter
function renderTasks() {
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  
  if (!taskList) return;
  
  // Get current active filter
  const activeFilter = document.querySelector('.filter-btn.active');
  let filteredTasks = [];
  
  if (activeFilter) {
    const filterText = activeFilter.querySelector('span').textContent.toLowerCase();
    
    switch (filterText) {
      case 'all missions':
        filteredTasks = gameState.tasks;
        break;
      case 'active':
        filteredTasks = gameState.tasks.filter(task => task.status === 'pending');
        break;
      case 'completed':
        filteredTasks = gameState.tasks.filter(task => task.status === 'completed');
        break;
    }
  } else {
    // Default to all missions if no filter is active
    filteredTasks = gameState.tasks;
  }
  
  // Show/hide empty state
  if (filteredTasks.length === 0) {
    taskList.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'flex';
    }
    return;
  } else {
    if (emptyState) {
      emptyState.style.display = 'none';
    }
  }
  
  // Render tasks with inline edit functionality
  taskList.innerHTML = filteredTasks.map(task => {
    const isEditing = editingTaskId === task.id;
    
    return `
      <div class="task ${task.status === 'completed' ? 'completed' : ''}" data-id="${task.id}">
        <div class="task-data">
          <input type="checkbox" class="task-checkbox" ${task.status === 'completed' ? 'checked' : ''} 
                 onchange="toggleTaskStatus('${task.id}')">
          ${isEditing ? 
            `<input type="text" class="task-edit-input" value="${task.text}" 
                    onkeydown="handleEditKeydown(event, '${task.id}')" 
                    onblur="saveEdit('${task.id}')" 
                    onclick="event.stopPropagation()">` :
            `<span class="task-text" onclick="startEdit('${task.id}')">${task.text}</span>`
          }
        </div>
        <div class="task-actions">
          <button class="task-btn edit-btn" onclick="toggleEdit('${task.id}')" title="Edit Task">
            <i class='bx ${isEditing ? 'bx-check' : 'bx-edit'}'></i>
          </button>
          <button class="task-btn" onclick="deleteTask('${task.id}')" title="Delete Task">
            <i class='bx bx-trash'></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  // Focus on edit input if editing
  if (editingTaskId) {
    const editInput = document.querySelector('.task-edit-input');
    if (editInput) {
      editInput.focus();
      editInput.select();
    }
  }
}

// Inline edit functions
function toggleEdit(taskId) {
  if (editingTaskId === taskId) {
    // Save the edit
    saveEdit(taskId);
  } else {
    // Start editing
    startEdit(taskId);
  }
}

function startEdit(taskId) {
  editingTaskId = taskId;
  renderTasks();
  
  // Unlock editor achievement
  if (!hasAchievement('editor')) {
    unlockAchievement('editor');
  }
}

function saveEdit(taskId) {
  const editInput = document.querySelector('.task-edit-input');
  if (!editInput) return;
  
  const newText = editInput.value.trim();
  
  if (newText === '') return;
  
  const task = gameState.tasks.find(t => t.id == taskId);
  if (task) {
    task.text = newText;
    task.updatedAt = new Date().toISOString();
    saveGameState();
    
    // Show edit success effect
    showEditSuccessEffect(taskId);
  }
  
  editingTaskId = null;
  renderTasks();
}

function handleEditKeydown(event, taskId) {
  if (event.key === 'Enter') {
    saveEdit(taskId);
  } else if (event.key === 'Escape') {
    editingTaskId = null;
    renderTasks();
  }
}

// Toggle task completion status
function toggleTaskStatus(taskId) {
  const task = gameState.tasks.find(t => t.id == taskId);
  if (!task) return;
  
  if (task.status === 'pending') {
    task.status = 'completed';
    task.completedAt = new Date().toISOString();
    gameState.completedTasks++;
    
    // Award XP
    addXP(XP_PER_TASK);
    
    // Check for achievements
    checkAchievements();
    
    // Show completion effect
    showCompletionEffect(taskId);
  } else {
    task.status = 'pending';
    task.completedAt = null;
    gameState.completedTasks--;
  }
  
  saveGameState();
  updateUI();
  renderTasks();
}

// Add XP and check for level up
function addXP(amount) {
  gameState.xp += amount;
  
  // Check for level up
  const newLevel = Math.floor(gameState.xp / XP_PER_LEVEL) + 1;
  if (newLevel > gameState.level) {
    gameState.level = newLevel;
    showLevelUpEffect();
    unlockAchievement('levelUp');
  }
  
  updateUI();
}

// Delete task
function deleteTask(taskId) {
  const taskIndex = gameState.tasks.findIndex(t => t.id == taskId);
  if (taskIndex === -1) return;
  
  const task = gameState.tasks[taskIndex];
  if (task.status === 'completed') {
    gameState.completedTasks--;
  }
  
  gameState.tasks.splice(taskIndex, 1);
  saveGameState();
  updateUI();
  renderTasks();
  
  // Add delete animation
  showDeleteEffect(taskId);
}

// Achievement System
function checkAchievements() {
  // First task achievement
  if (gameState.completedTasks === 1 && !hasAchievement('firstTask')) {
    unlockAchievement('firstTask');
  }
  
  // Task master achievement
  if (gameState.completedTasks >= 10 && !hasAchievement('taskMaster')) {
    unlockAchievement('taskMaster');
  }
}

function hasAchievement(achievementId) {
  return gameState.achievements.includes(achievementId);
}

function unlockAchievement(achievementId) {
  if (hasAchievement(achievementId)) return;
  
  gameState.achievements.push(achievementId);
  saveGameState();
  showAchievement(achievementId);
}

function showAchievement(achievementId) {
  const achievement = achievements[achievementId];
  const popup = document.getElementById('achievement-popup');
  const message = document.getElementById('achievement-message');
  const icon = document.querySelector('.achievement-icon');
  
  if (!popup || !message || !icon) return;
  
  icon.textContent = achievement.icon;
  message.textContent = achievement.description;
  
  popup.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}

// Visual Effects
function addTaskAnimation() {
  const addBtn = document.querySelector('.add-btn');
  if (!addBtn) return;
  
  addBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    addBtn.style.transform = 'scale(1)';
  }, 200);
}

function showCompletionEffect(taskId) {
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  if (taskElement) {
    taskElement.style.animation = 'none';
    taskElement.offsetHeight; // Trigger reflow
    taskElement.style.animation = 'completionPulse 0.6s ease-out';
  }
}

function showDeleteEffect(taskId) {
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  if (taskElement) {
    taskElement.style.animation = 'slideOut 0.3s ease-out forwards';
  }
}

function showEditSuccessEffect(taskId) {
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  if (taskElement) {
    taskElement.style.animation = 'none';
    taskElement.offsetHeight; // Trigger reflow
    taskElement.style.animation = 'editSuccess 0.6s ease-out';
  }
}

function showLevelUpEffect() {
  // Create level up effect
  const levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.style.animation = 'levelUpPulse 1s ease-out';
  }
  
  // Show level up notification
  const notification = document.createElement('div');
  notification.className = 'level-up-notification';
  notification.innerHTML = `
    <div class="level-up-content">
      <div class="level-up-icon">⭐</div>
      <div class="level-up-text">
        <h3>LEVEL UP!</h3>
        <p>You reached level ${gameState.level}!</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Particle System
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.cssText = `
    position: absolute;
    width: 2px;
    height: 2px;
    background: ${getRandomColor()};
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
    animation: float ${Math.random() * 10 + 10}s linear infinite;
  `;
  
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 10 + 's';
  
  container.appendChild(particle);
}

function getRandomColor() {
  const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff88', '#ff4444'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Filter functions - Updated to work with new system
function alldatahandle() {
  // Set "All Missions" as active
  const allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  const allMissionsBtn = document.querySelector('.filter-btn');
  if (allMissionsBtn) allMissionsBtn.classList.add('active');
  renderTasks();
}

function handlependingdata() {
  // Set "Active" as active
  const allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelectorAll('.filter-btn')[1];
  if (activeBtn) activeBtn.classList.add('active');
  renderTasks();
}

function handlecompletedata() {
  // Set "Completed" as active
  const allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  const completedBtn = document.querySelectorAll('.filter-btn')[2];
  if (completedBtn) completedBtn.classList.add('active');
  renderTasks();
}

// Navigation click handler - Updated to work with new system
function handleNavClick(clickedBtn) {
  const allButtons = document.querySelectorAll('.filter-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
  renderTasks();
}

// Clear all tasks - Updated to work with new system
function handleclearall() {
  if (confirm('Are you sure you want to clear all missions? This action cannot be undone.')) {
    gameState.tasks = [];
    gameState.completedTasks = 0;
    saveGameState();
    updateUI();
    renderTasks();
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes completionPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); box-shadow: 0 0 30px #00ff88; }
    100% { transform: scale(1); }
  }
  
  @keyframes slideOut {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(-100%); opacity: 0; }
  }
  
  @keyframes editSuccess {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); box-shadow: 0 0 30px #ffaa00; }
    100% { transform: scale(1); }
  }
  
  @keyframes levelUpPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); color: #ffff00; }
    100% { transform: scale(1); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(-40px) translateX(-10px); }
    75% { transform: translateY(-20px) translateX(-20px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
  
  .task-edit-input {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #ffaa00;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    outline: none;
    box-shadow: 0 0 10px #ffaa00;
    flex: 1;
  }
  
  .task-edit-input:focus {
    box-shadow: 0 0 20px #ffaa00;
  }
  
  .level-up-notification {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(45deg, #ffff00, #ffaa00);
    color: #000;
    padding: 2rem 3rem;
    border-radius: 1.5rem;
    box-shadow: 0 0 50px #ffff00;
    z-index: 1001;
    animation: levelUpShow 0.5s ease-out;
  }
  
  @keyframes levelUpShow {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
  
  .level-up-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .level-up-icon {
    font-size: 3rem;
  }
  
  .level-up-text h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .level-up-text p {
    font-size: 1.4rem;
  }
`;

document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'Enter') {
    handleData();
  }
  
  if (e.key === 'Escape') {
    document.getElementById('input-task').blur();
    if (editingTaskId) {
      editingTaskId = null;
      renderTasks();
    }
  }
});

// Auto-save every 30 seconds
setInterval(() => {
  saveGameState();
}, 30000);
