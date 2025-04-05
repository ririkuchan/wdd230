const apiKey = "071c97104361a3ae2b0b6fe174df10da";
const lat = 35.694726233045834;
const lon = 139.74695418489208;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("weather-info");
        container.innerHTML = `
      <p><strong>Location:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
    })
    .catch(err => {
        console.error("Error fetching weather:", err);
    });