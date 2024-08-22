// Main function that is called when the form is submitted or the page is loaded
function getCity(event) {
  if (event) {
    event.preventDefault();
  }

  // Capture the city value or use "Perth" as the default
  let cityInput = document.querySelector(".search-input").value || "Perth";

  // Build the API URL with the city and call the function to fetch the data
  getCurrent(cityInput);
  
}

//format date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function formatDay(timeStamp){
  let date = new Date(timeStamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}


// Function to build the API URL
function getCurrent(city) {
  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiURL).then(displayTemp);
}

function getForecast(city){
  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
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

  tempValue.innerHTML = Math.round(response.data.temperature.current);
  cityText.innerHTML = response.data.city;
  conditionValue.innerHTML = response.data.condition.description;
  humidityValue.innerHTML = response.data.temperature.humidity;
  windValue.innerHTML = response.data.wind.speed;
  date.innerHTML = formatDate(new Date(response.data.time * 1000));
  iconValue.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
  
  getForecast(response.data.city);
}

function displayForecast(response) {
  let forecastHTML = ""

  response.data.daily.forEach(function (day, index) {
    if (index > 0 & index < 6){
      forecastHTML = forecastHTML + `
      <div class="forecast-day">
      <div class="forecast-date">${formatDay(day.time)}</div>
      <div class="forecast-icon">
        <img src="${day.condition.icon_url}" />
      </div>
      <div class="forecast-temperatures">
        <div class="forecast-temperature"><strong>${Math.round(day.temperature.maximum)}°</strong></div>
        <div class="forecast-temperature">${Math.round(day.temperature.minimum)}°</div>
      </div>
      </div>`;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML
}

// Add submit event to the form
let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", getCity);

getCity();
