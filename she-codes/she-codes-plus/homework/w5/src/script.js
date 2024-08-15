function getCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector(".search-input").value;
  let cityText = document.querySelector(".current-city");
  let tempValue =  document.querySelector(".current-temperature-value");
  let date = document.querySelector(".current-details .date");
  let newDate = new Date();
  let namedayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let key = "2fa4a0atfa4ff94791bo43444f20ff3a";
  let unit = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${key}&units=${unit}`;

  function displayTemp(response) {
    let cityAPI = response.data.city;
    let tempAPI = response.data.temperature.current;
    
    tempValue.innerHTML = tempAPI;
    cityText.innerHTML = cityAPI;

    date.innerHTML = `${
      namedayWeek[newDate.getDay()]
    } ${newDate.getHours()}:${newDate.getMinutes()}`;

  }
  axios.get(apiURL).then(displayTemp);
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", getCity);


