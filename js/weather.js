const API_KEY = "f3711f7f4f467acb81593c5d7fb08584";

function onGeoOk(obj) {
  const lat = obj.coords.latitude;
  const lon = obj.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");
      name.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("no weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
