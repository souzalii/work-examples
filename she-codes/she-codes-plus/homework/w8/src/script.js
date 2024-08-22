// Main function that is called when the form is submitted or the page is loaded
function getCity(event) {
  if (event) {
    event.preventDefault();
  }

  // Capture the city value or use "Perth" as the default
  let cityInput = document.querySelector(".search-input").value || "Perth";

  // Build the API URL with the city and call the function to fetch the data
  getCurrent(cityInput);
  getForecast(cityInput)
  
}

// Function to build the API URL
function getCurrent(city) {
  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let unit = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

function getForecast(city){
  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let unit = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=${unit}`;
  axios.get(apiURL).then(displayForecast);
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

function displayForecast(response) {
  console.log(response);
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

// Add submit event to the form
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", getCity);

// Automatically execute with the default value "Perth" when the page loads
getCity();  // Initial call to load Perth's weather forecast when the page opens
