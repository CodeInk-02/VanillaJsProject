// API Configuration
const API_KEY = "53ed5cf255f029fa4cfe549609e42413";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEOCODING_URL = "https://api.openweathermap.org/geo/1.0/direct";

// DOM Elements
const weatherContent = document.getElementById('weather-content');
const cityInput = document.getElementById('city');

// Weather icon mapping with more dynamic options
const weatherIcons = {
    'Clear': {
        day: 'https://img.icons8.com/fluency/96/sun.png',
        night: 'https://img.icons8.com/fluency/96/moon.png'
    },
    'Few clouds': {
        day: 'https://img.icons8.com/color/96/partly-cloudy-day.png',
        night: 'https://img.icons8.com/color/96/partly-cloudy-night.png'
    },
    'Scattered clouds': {
        day: 'https://img.icons8.com/color/96/clouds.png',
        night: 'https://img.icons8.com/color/96/clouds.png'
    },
    'Broken clouds': {
        day: 'https://img.icons8.com/color/96/clouds.png',
        night: 'https://img.icons8.com/color/96/clouds.png'
    },
    'Clouds': {
        day: 'https://img.icons8.com/color/96/clouds.png',
        night: 'https://img.icons8.com/color/96/clouds.png'
    },
    'Rain': {
        day: 'https://img.icons8.com/color/96/rain--v1.png',
        night: 'https://img.icons8.com/color/96/rain--v1.png'
    },
    'Drizzle': {
        day: 'https://img.icons8.com/color/96/rain--v1.png',
        night: 'https://img.icons8.com/color/96/rain--v1.png'
    },
    'Thunderstorm': {
        day: 'https://img.icons8.com/color/96/storm.png',
        night: 'https://img.icons8.com/color/96/storm.png'
    },
    'Snow': {
        day: 'https://img.icons8.com/color/96/snow.png',
        night: 'https://img.icons8.com/color/96/snow.png'
    },
    'Mist': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Smoke': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Haze': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Dust': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Fog': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Sand': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Ash': {
        day: 'https://img.icons8.com/color/96/fog-day.png',
        night: 'https://img.icons8.com/color/96/fog-night.png'
    },
    'Squall': {
        day: 'https://img.icons8.com/color/96/storm.png',
        night: 'https://img.icons8.com/color/96/storm.png'
    },
    'Tornado': {
        day: 'https://img.icons8.com/color/96/storm.png',
        night: 'https://img.icons8.com/color/96/storm.png'
    }
};

// Dynamic weather background images
const weatherBackgrounds = {
    'Clear': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'Clouds': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop',
    'Rain': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=600&fit=crop',
    'Drizzle': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=600&fit=crop',
    'Thunderstorm': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&h=600&fit=crop',
    'Snow': 'https://images.unsplash.com/photo-1491002052546-bf38f186d456?w=800&h=600&fit=crop',
    'Mist': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Smoke': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Haze': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Dust': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Fog': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Sand': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Ash': 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&h=600&fit=crop',
    'Squall': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&h=600&fit=crop',
    'Tornado': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&h=600&fit=crop'
};

// Utility icons
const utilityIcons = {
    wind: 'https://img.icons8.com/clouds/100/wind.png',
    humidity: 'https://img.icons8.com/pulsar-gradient/96/humidity.png',
    pressure: 'https://img.icons8.com/color/96/pressure.png',
    visibility: 'https://img.icons8.com/fluency/96/eye.png'
};

// Popular cities with states and countries for examples
const popularCities = [
    { city: 'New York', state: 'New York', country: 'US' },
    { city: 'Los Angeles', state: 'California', country: 'US' },
    { city: 'London', state: 'England', country: 'GB' },
    { city: 'Paris', state: 'Île-de-France', country: 'FR' },
    { city: 'Tokyo', state: 'Tokyo', country: 'JP' },
    { city: 'Sydney', state: 'New South Wales', country: 'AU' },
    { city: 'Toronto', state: 'Ontario', country: 'CA' },
    { city: 'Mumbai', state: 'Maharashtra', country: 'IN' },
    { city: 'Berlin', state: 'Berlin', country: 'DE' },
    { city: 'Rome', state: 'Lazio', country: 'IT' },
    { city: 'Madrid', state: 'Madrid', country: 'ES' },
    { city: 'Amsterdam', state: 'North Holland', country: 'NL' },
    { city: 'Vienna', state: 'Vienna', country: 'AT' },
    { city: 'Stockholm', state: 'Stockholm', country: 'SE' },
    { city: 'Copenhagen', state: 'Capital Region', country: 'DK' }
];

// Debounce function to limit API calls
let searchTimeout;
let currentSuggestions = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Add enter key support
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if any
            handlecity();
        }
    });
    
    // Add input focus event to show examples
    cityInput.addEventListener('focus', showCityExamples);
    
    // Add input blur event to hide examples after a delay
    cityInput.addEventListener('blur', () => {
        setTimeout(() => {
            hideCityExamples();
            hideSuggestions();
        }, 200);
    });
    
    // Add input event for real-time search suggestions
    cityInput.addEventListener('input', handleSearchInput);
    
    // Focus on input for better UX
    cityInput.focus();
});

// Handle search input for real-time suggestions
const handleSearchInput = (e) => {
    const query = e.target.value.trim();
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    // Hide suggestions if input is empty
    if (!query) {
        hideSuggestions();
        showCityExamples();
        return;
    }
    
    // Hide examples when user starts typing
    hideCityExamples();
    
    // Debounce the API call
    searchTimeout = setTimeout(() => {
        if (query.length >= 2) {
            fetchCitySuggestions(query);
        } else {
            hideSuggestions();
        }
    }, 300);
};

// Fetch city suggestions from Geocoding API
const fetchCitySuggestions = async (query) => {
    try {
        const url = `${GEOCODING_URL}?q=${encodeURIComponent(query)}&limit=8&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok && data.length > 0) {
            currentSuggestions = data;
            showSuggestions(data);
        } else {
            hideSuggestions();
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        hideSuggestions();
    }
};

// Show search suggestions
const showSuggestions = (suggestions) => {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.remove();
    }
    
    const container = document.createElement('div');
    container.id = 'search-suggestions';
    container.className = 'search-suggestions';
    
    const title = document.createElement('h3');
    title.textContent = 'Search Results:';
    title.className = 'suggestions-title';
    
    const suggestionsList = document.createElement('div');
    suggestionsList.className = 'suggestions-list';
    
    suggestions.forEach((suggestion, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.innerHTML = `
            <div class="suggestion-content">
                <span class="city-name">${suggestion.name}</span>
                <span class="city-location">${suggestion.state || ''}${suggestion.state && suggestion.country ? ', ' : ''}${suggestion.country}</span>
            </div>
            <i class='bx bx-search suggestion-icon'></i>
        `;
        
        // Add click event to fill the input
        suggestionItem.addEventListener('click', () => {
            cityInput.value = suggestion.name;
            hideSuggestions();
            cityInput.focus();
        });
        
        // Add keyboard navigation
        suggestionItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                cityInput.value = suggestion.name;
                hideSuggestions();
                cityInput.focus();
            }
        });
        
        suggestionsList.appendChild(suggestionItem);
    });
    
    container.appendChild(title);
    container.appendChild(suggestionsList);
    
    // Insert after the search container
    const searchSection = document.querySelector('.search-section');
    searchSection.appendChild(container);
    
    // Animate the appearance
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
};

// Hide search suggestions
const hideSuggestions = () => {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.opacity = '0';
        suggestionsContainer.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            suggestionsContainer.remove();
        }, 300);
    }
};

// Main weather function
const handlecity = async () => {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    hideCityExamples();
    hideSuggestions();
    showLoading();
    
    try {
        const weatherData = await fetchWeatherData(city);
        displayWeather(weatherData);
    } catch (error) {
        console.error('Weather fetch error:', error);
        showError(error.message || 'Failed to fetch weather data');
    }
};

// Show city examples
const showCityExamples = () => {
    const examplesContainer = document.getElementById('city-examples');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    // Don't show examples if suggestions are visible
    if (suggestionsContainer) {
        return;
    }
    
    if (examplesContainer) {
        examplesContainer.style.display = 'block';
        return;
    }
    
    // Create examples container if it doesn't exist
    const container = document.createElement('div');
    container.id = 'city-examples';
    container.className = 'city-examples';
    
    const title = document.createElement('h3');
    title.textContent = 'Popular Cities:';
    title.className = 'examples-title';
    
    const examplesList = document.createElement('div');
    examplesList.className = 'examples-list';
    
    // Show first 6 examples
    const displayExamples = popularCities.slice(0, 6);
    
    displayExamples.forEach(cityData => {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'example-item';
        exampleItem.innerHTML = `
            <span class="city-name">${cityData.city}</span>
            <span class="city-location">${cityData.state}, ${cityData.country}</span>
        `;
        
        // Add click event to fill the input
        exampleItem.addEventListener('click', () => {
            cityInput.value = cityData.city;
            cityInput.focus();
        });
        
        examplesList.appendChild(exampleItem);
    });
    
    container.appendChild(title);
    container.appendChild(examplesList);
    
    // Insert after the search container
    const searchSection = document.querySelector('.search-section');
    searchSection.appendChild(container);
    
    // Animate the appearance
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
};

// Hide city examples
const hideCityExamples = () => {
    const examplesContainer = document.getElementById('city-examples');
    if (examplesContainer) {
        examplesContainer.style.opacity = '0';
        examplesContainer.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            examplesContainer.style.display = 'none';
        }, 300);
    }
};

// Fetch weather data from API
const fetchWeatherData = async (city) => {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
        if (data.cod === '404') {
            throw new Error('City not found. Please check the spelling and try again.');
        } else if (data.cod === '401') {
            throw new Error('API key error. Please contact support.');
        } else {
            throw new Error(data.message || 'Failed to fetch weather data');
        }
    }
    
    return data;
};

// Check if it's day or night based on API data or current time
const isDayTime = (weatherData) => {
    if (weatherData && weatherData.sys) {
        const now = Math.floor(Date.now() / 1000);
        const sunrise = weatherData.sys.sunrise;
        const sunset = weatherData.sys.sunset;
        return now >= sunrise && now <= sunset;
    }
    // Fallback to local time if API data not available
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18; // Day: 6 AM to 6 PM
};

// Get appropriate weather icon based on time and weather
const getWeatherIcon = (weatherMain, weatherData) => {
    // Map weather descriptions to icon keys
    const weatherMapping = {
        'clear sky': 'Clear',
        'few clouds': 'Few clouds',
        'scattered clouds': 'Scattered clouds',
        'broken clouds': 'Broken clouds',
        'shower rain': 'Rain',
        'rain': 'Rain',
        'thunderstorm': 'Thunderstorm',
        'snow': 'Snow',
        'mist': 'Mist',
        'smoke': 'Smoke',
        'haze': 'Haze',
        'dust': 'Dust',
        'fog': 'Fog',
        'sand': 'Sand',
        'ash': 'Ash',
        'squall': 'Squall',
        'tornado': 'Tornado'
    };
    
    // Get the mapped weather type or use the original
    const mappedWeather = weatherMapping[weatherMain.toLowerCase()] || weatherMain;
    const weatherIconSet = weatherIcons[mappedWeather] || weatherIcons['Clear'];
    const timeOfDay = isDayTime(weatherData) ? 'day' : 'night';
    return weatherIconSet[timeOfDay];
};

// Display weather information
const displayWeather = (data) => {
    const {
        name: city,
        main: { temp, humidity, pressure },
        weather: [{ main: weatherMain, description }],
        wind: { speed: windSpeed },
        visibility,
        sys: { country }
    } = data;
    
    const weatherIcon = getWeatherIcon(description, data);
    const backgroundImage = weatherBackgrounds[weatherMain] || weatherBackgrounds['Clear'];
    
    // Update body background with weather-specific image
    updateWeatherBackground(backgroundImage, weatherMain);
    
    weatherContent.innerHTML = `
        <div class="weather-display">
            <div class="weather-main">
                <div class="weather-icon">
                    <img src="${weatherIcon}" alt="${weatherMain}" loading="lazy">
                </div>
                <div class="weather-type">${weatherMain}</div>
                <div class="temperature">${Math.round(temp)}°C</div>
                <div class="city-name">${city}, ${country}</div>
                <div class="weather-description">${description}</div>
            </div>
            
            <div class="weather-details">
                <div class="detail-item">
                    <img src="${utilityIcons.wind}" alt="Wind" loading="lazy">
                    <div class="detail-value">${windSpeed} m/s</div>
                    <div class="detail-label">Wind Speed</div>
                </div>
                
                <div class="detail-item">
                    <img src="${utilityIcons.humidity}" alt="Humidity" loading="lazy">
                    <div class="detail-value">${humidity}%</div>
                    <div class="detail-label">Humidity</div>
                </div>
                
                <div class="detail-item">
                    <img src="${utilityIcons.pressure}" alt="Pressure" loading="lazy">
                    <div class="detail-value">${pressure} hPa</div>
                    <div class="detail-label">Pressure</div>
                </div>
                
                <div class="detail-item">
                    <img src="${utilityIcons.visibility}" alt="Visibility" loading="lazy">
                    <div class="detail-value">${(visibility / 1000).toFixed(1)} km</div>
                    <div class="detail-label">Visibility</div>
                </div>
            </div>
        </div>
    `;
    
    // Add animation class for smooth transition
    setTimeout(() => {
        const weatherDisplay = weatherContent.querySelector('.weather-display');
        if (weatherDisplay) {
            weatherDisplay.style.opacity = '1';
            weatherDisplay.style.transform = 'translateY(0)';
        }
    }, 100);
};

// Update weather background
const updateWeatherBackground = (imageUrl, weatherType) => {
    const body = document.body;
    
    // Create a new background element
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'weather-background-overlay';
    backgroundOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${imageUrl}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 1s ease;
        z-index: -1;
    `;
    
    // Remove existing background overlay
    const existingOverlay = document.querySelector('.weather-background-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    
    // Add new background overlay
    body.appendChild(backgroundOverlay);
    
    // Fade in the new background
    setTimeout(() => {
        backgroundOverlay.style.opacity = '0.3';
    }, 100);
    
    // Update body gradient based on weather
    const weatherGradients = {
        'Clear': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'Clouds': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
        'Rain': 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
        'Drizzle': 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
        'Thunderstorm': 'linear-gradient(135deg, #2d3436 0%, #000000 100%)',
        'Snow': 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%)',
        'Mist': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Smoke': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Haze': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Dust': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Fog': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Sand': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Ash': 'linear-gradient(135deg, #b2bec3 0%, #74b9ff 100%)',
        'Squall': 'linear-gradient(135deg, #2d3436 0%, #000000 100%)',
        'Tornado': 'linear-gradient(135deg, #2d3436 0%, #000000 100%)'
    };
    
    const gradient = weatherGradients[weatherType] || weatherGradients['Clear'];
    body.style.background = gradient;
};

// Show loading state
const showLoading = () => {
    weatherContent.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <h2>Loading weather data...</h2>
            <p>Please wait while we fetch the latest information</p>
        </div>
    `;
};

// Show error state
const showError = (message) => {
    weatherContent.innerHTML = `
        <div class="error-state">
            <i class='bx bx-error-circle' style="font-size: 4rem; margin-bottom: 20px; color: #e74c3c;"></i>
            <h2>Oops! Something went wrong</h2>
            <p>${message}</p>
        </div>
    `;
};

// Show welcome state (fallback)
const showWelcome = () => {
    weatherContent.innerHTML = `
        <div class="welcome-state">
            <i class='bx bx-sun welcome-icon'></i>
            <h2>Welcome to Weather App</h2>
            <p>Enter a city name to get current weather information</p>
            <p style="font-size: 0.9rem; color: #999; margin-top: 10px;">
                <i class='bx bx-info-circle'></i> 
                Click on the search box to see popular city examples
            </p>
            <p style="font-size: 0.85rem; color: #999; margin-top: 5px;">
                <i class='bx bx-search'></i> 
                Start typing to get real-time city suggestions
            </p>
        </div>
    `;
};

// Add some utility functions for future enhancements
const formatTemperature = (temp, unit = 'C') => {
    return `${Math.round(temp)}°${unit}`;
};

const formatWindSpeed = (speed, unit = 'm/s') => {
    return `${speed} ${unit}`;
};

const formatHumidity = (humidity) => {
    return `${humidity}%`;
};

// Export functions for potential future use
window.WeatherApp = {
    handlecity,
    showWelcome,
    showError,
    showLoading,
    showCityExamples,
    hideCityExamples,
    showSuggestions,
    hideSuggestions
};