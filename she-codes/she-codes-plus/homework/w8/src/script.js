// Main function that is called when the form is submitted or the page is loaded
function getCity(event) {
  if (event) {
    event.preventDefault();
  }

  // Capture the city value or use "Perth" as the default
  let cityInput = document.querySelector(".search-input").value || "Perth";

  // Build the API URL with the city and call the function to fetch the data
  let apiURL = buildAPIUrl(cityInput);
  fetchWeatherData(apiURL);
}

// Function to build the API URL
function buildAPIUrl(city) {
  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let unit = "metric";
  return `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;
}

// Function to manipulate the API result and display the data
function displayTemp(response) {
  let tempValue = document.querySelector(".current-temperature-value");
  let cityText = document.querySelector(".current-city");
  let conditionValue = document.querySelector(".condition");
  let humidityValue = document.querySelector(".humidity");
  let windValue = document.querySelector(".wind");
  let iconValue = document.querySelector(".current-temperature-icon");
  let date = document.querySelector(".current-details .date");

  let newDate = new Date();
  let namedayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  tempValue.innerHTML = Math.round(response.data.temperature.current);
  cityText.innerHTML = response.data.city;
  conditionValue.innerHTML = response.data.condition.description;
  humidityValue.innerHTML = response.data.temperature.humidity;
  windValue.innerHTML = response.data.wind.speed;

  let icon = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
  iconValue.innerHTML = icon;

  date.innerHTML = `${namedayWeek[newDate.getDay()]} ${newDate.getHours()}:${newDate.getMinutes()}`;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHTML = ""

  days.forEach(function (day) {
    forecastHTML = forecastHTML + `
    <div class="forecast-day">
    <div class="forecast-date">${day}</div>
    <div class="forecast-icon">☀️</div>
    <div class="forecast-temperatures">
      <div class="forecast-temperature"><strong>15°</strong></div>
      <div class="forecast-temperature">9°</div>
    </div>
    </div>`;
  })

  forecastElement.innerHTML = forecastHTML
}

// Function to fetch data from the API
function fetchWeatherData(apiURL) {
  axios.get(apiURL).then(displayTemp);
}

// Add submit event to the form
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", getCity);

// Automatically execute with the default value "Perth" when the page loads
document.addEventListener("DOMContentLoaded", function () {
  getCity();  // Initial call to load Perth's weather forecast when the page opens
});

displayForecast();