document.getElementById("fetchDestination").addEventListener("click", serachButton);
const apiKey = "f23ee9deb4e1a7450f3157c44ed020e1";

function serachButton() {
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

  const renderWeather = (render) => {
      console.log(render.main.temp);
      console.log(rend.main.feels_min);
    };
  });
  };

