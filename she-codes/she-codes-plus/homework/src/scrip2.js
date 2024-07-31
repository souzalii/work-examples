function capitalizeWords(string) {
  return string
    .split(" ") // Divide a string em um array de palavras
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
    .join(" "); // Junta as palavras de volta em uma string
}

let weather = {
  paris: {
    temp: 24,
    humidity: 78,
    precipitation: 100,
    wind: 13,
    text: "Raining",
  },
  tokyo: {
    temp: 34,
    humidity: 61,
    precipitation: 10,
    wind: 8,
    text: "Clear sky",
  },
  lisbon: {
    temp: 19,
    humidity: 87,
    precipitation: 3,
    wind: 6,
    text: "Partly cloudy",
  },
  "san francisco": {
    temp: 15,
    humidity: 94,
    precipitation: 5,
    wind: 26,
    text: "Partly cloudy",
  },
  oslo: {
    temp: 15,
    humidity: 63,
    precipitation: 2,
    wind: 13,
    text: "Clear sky",
  },
};

// Função que atualiza a página com informações climáticas da cidade
function updateWeather(city) {
  const cityInfo = weather[city];

  if (cityInfo) {
    document.querySelector("h1").textContent = capitalizeWords(city);
    document.querySelector(".number").textContent = cityInfo.temp;
    document.querySelector(".prec").textContent = cityInfo.precipitation;
    document.querySelector(".hum").textContent = cityInfo.humidity;
    document.querySelector(".wind").textContent = cityInfo.wind;
    document.querySelector(".row ul li:nth-child(2)").textContent =
      cityInfo.text;
  } else {
    alert(
      `Sorry, we do not know the weather for ${capitalizeWords(
        city
      )}. Try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}

// Captura o evento de submissão do formulário
document.querySelector(".search").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário padrão
  let city = document.querySelector(".search-input").value.toLowerCase();
  updateWeather(city);
});
