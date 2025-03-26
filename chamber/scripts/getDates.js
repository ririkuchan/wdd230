const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}
if (lastModified) {
    lastModified.textContent = document.lastModified;
}

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=071c97104361a3ae2b0b6fe174df10da';

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('weather-desc').textContent = data.weather[0].description;
        document.getElementById('temp').textContent = `${data.main.temp} ℃`;
    } catch (error) {
        document.getElementById('weather-desc').textContent = '天気を取得できませんでした';
    }
}

getWeather();