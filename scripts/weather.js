const apiKey = "071c97104361a3ae2b0b6fe174df10da";
const lat = 35.6844;
const lon = 139.7528;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(weatherURL);
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        console.error("Failed to fetch weather data");
    }
}

function displayWeather(data) {
    const temp = document.querySelector("#temperature");
    const desc = document.querySelector("#description");
    const icon = document.querySelector("#weather-icon");

    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

    temp.innerHTML = Math.round(data.main.temp);
    desc.textContent = data.weather[0].description;
    icon.setAttribute("src", iconURL);
    icon.setAttribute("alt", data.weather[0].description);
}

getWeather();