// Global variables
let birthDate = null;
let updateInterval = null;
let isLiveUpdateActive = false;

// Initialize the calculator
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for Enter key
    document.getElementById('day').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAge();
    });
    document.getElementById('month').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAge();
    });
    document.getElementById('year').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAge();
    });
    
    // Add input validation
    addInputValidation();
});

// Add input validation
function addInputValidation() {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    
    dayInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value > 31) this.value = 31;
        // Do not clear for < 1 while typing
    });
    dayInput.addEventListener('blur', function() {
        const value = parseInt(this.value);
        if (value < 1 || isNaN(value)) this.value = '';
    });
    
    monthInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value > 12) this.value = 12;
    });
    monthInput.addEventListener('blur', function() {
        const value = parseInt(this.value);
        if (value < 1 || isNaN(value)) this.value = '';
    });
    
    yearInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        const currentYear = new Date().getFullYear();
        if (value > currentYear) this.value = currentYear;
    });
    yearInput.addEventListener('blur', function() {
        const value = parseInt(this.value);
        if (value < 1900 || isNaN(value)) this.value = '';
    });
}

// Main calculation function
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validation
    if (!day || !month || !year) {
        showNotification('Please enter your full date of birth.', 'error');
        return;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear || month < 1 || month > 12 || day < 1 || day > 31) {
        showNotification('Entered date is out of a valid range.', 'error');
        return;
    }

    // Create birth date object
    const dob = new Date(year, month - 1, day);
    
    // Validate if the date is correct (handles leap years, etc.)
    if (dob.getFullYear() !== year || dob.getMonth() !== (month - 1) || dob.getDate() !== day) {
        showNotification('Entered date is incorrect.', 'error');
        return;
    }

    // Check if birth date is in the future
    const today = new Date();
    if (dob > today) {
        showNotification('Birth date cannot be in the future.', 'error');
        return;
    }

    // Store birth date for live updates
    birthDate = dob;
    
    // Calculate and display age
    updateAgeDisplay();
    
    // Start live updates
    startLiveUpdates();
    
    // Show success message
    showNotification('Age calculated successfully! Live updates activated.', 'success');
}

// Calculate age difference
function calculateAgeDifference(birthDate, currentDate) {
    const diffTime = currentDate - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate years, months, and days
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    
    // Adjust for negative months or days
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
        if (months < 0) {
            months = 11;
            years--;
        }
    }
    
    // Calculate detailed breakdown
    const totalSeconds = Math.floor(diffTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = diffDays;
    
    return {
        years,
        months,
        days,
        totalDays,
        totalHours,
        totalMinutes,
        totalSeconds
    };
}

// Update age display
function updateAgeDisplay() {
    if (!birthDate) return;
    
    const now = new Date();
    const ageData = calculateAgeDifference(birthDate, now);
    
    // Update main age display with animation
    updateElementWithAnimation('years-box', ageData.years, 'Years');
    updateElementWithAnimation('months-box', ageData.months, 'Months');
    updateElementWithAnimation('days-box', ageData.days, 'Days');
    
    // Update detailed breakdown
    updateElementWithAnimation('total-days', ageData.totalDays, null, true);
    updateElementWithAnimation('total-hours', ageData.totalHours, null, true);
    updateElementWithAnimation('total-minutes', ageData.totalMinutes, null, true);
    updateElementWithAnimation('total-seconds', ageData.totalSeconds, null, true);
    
    // Show result container
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.add('show');
}

// Update element with animation
function updateElementWithAnimation(elementId, value, label = null, isBreakdown = false) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    if (isBreakdown) {
        // For breakdown numbers
        const currentValue = parseInt(element.textContent) || 0;
        if (currentValue !== value) {
            element.textContent = value.toLocaleString();
            element.classList.add('counting');
            setTimeout(() => element.classList.remove('counting'), 500);
        }
    } else {
        // For main age boxes
        const numberElement = element.querySelector('.number');
        const labelElement = element.querySelector('.label');
        
        if (numberElement) {
            const currentValue = parseInt(numberElement.textContent) || 0;
            if (currentValue !== value) {
                numberElement.textContent = value;
                numberElement.classList.add('counting');
                setTimeout(() => numberElement.classList.remove('counting'), 500);
            }
        }
        
        if (labelElement && label) {
            labelElement.textContent = label;
        }
    }
}

// Start live updates
function startLiveUpdates() {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
    
    updateInterval = setInterval(() => {
        if (birthDate) {
            updateAgeDisplay();
        }
    }, 1000);
    
    isLiveUpdateActive = true;
    document.getElementById('live-update').classList.add('show');
}

// Stop live updates
function stopLiveUpdates() {
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
    
    isLiveUpdateActive = false;
    document.getElementById('live-update').classList.remove('show');
}

// Reset calculator
function resetCalculator() {
    // Clear inputs
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    
    // Reset birth date
    birthDate = null;
    
    // Stop live updates
    stopLiveUpdates();
    
    // Hide result container
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('show');
    
    // Reset all displays
    const elementsToReset = [
        'years-box', 'months-box', 'days-box',
        'total-days', 'total-hours', 'total-minutes', 'total-seconds'
    ];
    
    elementsToReset.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id.includes('total-')) {
                element.textContent = '0';
            } else {
                const numberElement = element.querySelector('.number');
                if (numberElement) {
                    numberElement.textContent = '0';
                }
            }
        }
    });
    
    showNotification('Calculator reset successfully!', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Get notification icon
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

// Get notification color
function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#28a745';
        case 'error': return '#dc3545';
        case 'warning': return '#ffc107';
        default: return '#667eea';
    }
}

// Format large numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Add some fun facts about age
function getAgeFunFact(ageData) {
    const facts = [
        `You've lived through approximately ${Math.floor(ageData.totalDays / 365.25)} years!`,
        `That's about ${formatNumber(ageData.totalHours)} hours of life experience!`,
        `You've been alive for ${formatNumber(ageData.totalMinutes)} minutes!`,
        `Every second counts - you've lived ${formatNumber(ageData.totalSeconds)} seconds!`
    ];
    
    return facts[Math.floor(Math.random() * facts.length)];
}

// Export functions for global access
window.calculateAge = calculateAge;
window.resetCalculator = resetCalculator;
