document.getElementById("fetchDestination").addEventListener("click", searchButton);

const apiKey = "f23ee9deb4e1a7450f3157c44ed020e1";
const ulEl = document.querySelector(".ulEl");

function searchButton() {
  ulEl.innerHTML = ""; // clear previous results

  const destination = document.getElementById("destination").value.trim();

  if (destination) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${destination}&limit=1&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Destination not found");
        }
        return response.json();
      })
      .then((data) => {
        renderDestination(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a destination");
  }
}

function renderDestination(results) {
  const destination = document.getElementById("destination").value;

  results.forEach((result) => {
    const latitude = result.lat;
    const longitude = result.lon;

    console.log("Coordinates:", latitude, longitude);

    if (latitude && longitude) {
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(url2)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Weather not found");
          }
          return response.json();
        })
        .then((data) => {
          renderWeather(data);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else {
      console.log("No coordinates found.");
    }

    const userDestination = document.createElement("li");
    userDestination.textContent = `Destination: ${destination}`;
    ulEl.appendChild(userDestination);
  });
}

function renderWeather(weather) {
  const temperature = weather.main.temp;
  const feelsLike = weather.main.feels_like;
  const windSpeed = weather.wind.speed;
  const humidity = weather.main.humidity;

  console.log("Weather:", temperature, feelsLike, windSpeed, humidity);

  const userWeather = document.createElement("li");
  userWeather.textContent = `Temperature: ${temperature}°C`;
  ulEl.appendChild(userWeather);

  const userFeelsLike = document.createElement("li");
  userFeelsLike.textContent = `Feels Like: ${feelsLike}°C`;
  ulEl.appendChild(userFeelsLike);

  const userWindSpeed = document.createElement("li");
  userWindSpeed.textContent = `Wind Speed: ${windSpeed} m/s`;
  ulEl.appendChild(userWindSpeed);

  const userHumidity = document.createElement("li");
  userHumidity.textContent = `Humidity: ${humidity}%`;
  ulEl.appendChild(userHumidity);
}
