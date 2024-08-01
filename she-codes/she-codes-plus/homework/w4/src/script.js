function getCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input").value;
  let cityText = document.querySelector(".current-city");
  cityText.innerHTML = cityInput;

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

  date.innerHTML = `${
    namedayWeek[newDate.getDay()]
  } ${newDate.getHours()}:${newDate.getMinutes()}`;
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", getCity);
