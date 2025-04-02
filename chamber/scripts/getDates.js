// scripts/discover.js

// Hamburger Menu
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// Year & Last Modified
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}
if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// Weather API (Optional - if displaying weather)
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=071c97104361a3ae2b0b6fe174df10da';

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('temp').textContent = `${data.main.temp} ℃`;
    } catch (error) {
        document.getElementById('weather-desc').textContent = 'Unable to get the weather data.';
    }
}

// Only call if weather elements exist
if (document.getElementById('weather-desc') && document.getElementById('temp')) {
    getWeather();
}

// LocalStorage Last Visit Message
const visitDisplay = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit-ls');
const now = Date.now();

if (visitDisplay) {
    if (lastVisit) {
        const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            visitDisplay.textContent = "Back so soon! Awesome!";
        } else if (days === 1) {
            visitDisplay.textContent = "You last visited 1 day ago.";
        } else {
            visitDisplay.textContent = `You last visited ${days} days ago.`;
        }
    } else {
        visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
    }
    localStorage.setItem('lastVisit-ls', now);
}