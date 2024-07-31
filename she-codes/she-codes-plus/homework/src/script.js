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
      text: "Rainning",
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
  
  // write your code here
  let city = prompt("Enter a city name");
  city = city.toLowerCase();
  
  // verify if city exists in the weather
  if (weather[city]) {
    alert(
      `It is currently ${weather[city].temp}°C in ${capitalizeWords(
        city
      )} with a humidity of ${weather[city].humidity}%.`
    );
  } else {
    alert(
      `Sorry we do not know the weather for ${capitalizeWords(
        city
      )} , try going to https://www.google.com/search?q=weather+${city}`
    );
  }
  