document.getElementById("fetchDestination").addEventListener("click", searchButton);
const apiKey = "f23ee9deb4e1a7450f3157c44ed020e1";
const ulEl = document.querySelector(".ulEl")
const destination = document.getElementById("destination").value;

function searchButton() {
  const destination = document.getElementById("destination").value;

  if (destination) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${destination}&limit=1&appid=f23ee9deb4e1a7450f3157c44ed020e1`;

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

const renderDestination = (render) => {
  const destination = document.getElementById("destination").value;

    render.forEach((rend) => {
        let latitude = rend.lat
        let longitude = rend.lon
      console.log(latitude, longitude);

  if (latitude, longitude) {
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f23ee9deb4e1a7450f3157c44ed020e1&units=metric`;

    fetch(url2)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather Not Found");
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
    console.log("Please enter a destination");
  }

  let userDestination = document.createElement("li");
      userDestination.textContent = `Destination: ${destination}`;
      ulEl.appendChild(userDestination);

  const renderWeather = (render) => {
      let temperature = render.main.temp;
      let windSpeed = render.wind.speed;
      let humidity = render.main.humidity;
      let feelsLike = render.main.feels_like;
      console.log(temperature);
      console.log(windSpeed);
      console.log(humidity);
      console.log(feelsLike);

      let userWeather = document.createElement("li");
      userWeather.textContent = `Temperature: ${temperature}°C`;
      ulEl.appendChild(userWeather);

      let userFeelsLike = document.createElement("li");
      userFeelsLike.textContent = `Feels Like: ${feelsLike}°C`;
      ulEl.appendChild(userFeelsLike);

      let userWindSpeed = document.createElement("li");
      userWindSpeed.textContent = `Wind Speed: ${windSpeed}m/s`;
      ulEl.appendChild(userWindSpeed);

      let userHumidity = document.createElement("li");
      userHumidity.textContent = `Humidity: ${humidity}%`;
      ulEl.appendChild(userHumidity);

      document.getElementById("fetchDestination").addEventListener("click", searchButton);
      function searchButton () {
       ulEl.innerHTML = "";
    };
    }
  });
  };