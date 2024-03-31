const apikey = "b70b8c7ee4ce549fc371c07a3f7b8204";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "https://graph.org/file/03c80e5caf28773a99b7e.jpg";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "https://graph.org/file/5ec3fe26f4451cf210f09.jpg";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "https://graph.org/file/e3a703d3b68194c45c507.jpg";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "https://graph.org/file/f3eeba2673c9c360fda08.jpg";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "https://graph.org/file/345921dcf2f70b62fe1b8.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
