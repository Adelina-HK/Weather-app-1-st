function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#cityName");
  let cityInput = document.querySelector("#cityInput");
  let city = cityInput.value;
  cityName.innerHTML = city;
  let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(`${url}&appid=${apiKey}`).then(showResponse);
}
//let actualTemp=document.querySelector("#tempChange");
let form = document.querySelector("#searchingForm");
form.addEventListener("submit", search);

function showResponse(response) {
  console.log(response.data.main.temp);
  console.log(response.data.name);

  let cityTemp = Math.round(response.data.main.temp);
  let tempChange = document.querySelector("#tempChange");
  tempChange.innerHTML = `${cityTemp} ℃`;
  let currentCity = response.data.name;
  let currentCityName = document.querySelector("#cityName");
  currentCityName.innerHTML = currentCity;
  let humidityElement = response.data.main.humidity;
  let humidityElementInfo = document.querySelector("#humidity");
  humidityElementInfo.innerHTML = `humidity: ${humidityElement} %`;
  let windSpeed = response.data.wind.speed;
  let windSpeedInfo = document.querySelector("#wind");
  windSpeedInfo.innerHTML = `windspeed: ${windSpeed} meter/sec`;
  let weather = response.data.weather[0].main;
  let weatherInfo = document.querySelector("#weatherDiscription");
  weatherInfo.innerHTML = weather;
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
  let currentCity = document.querySelector("#cityName");
  currentCity.innerHTML = `${currentCity.value}`;
}
let buttonCurrentPosition = document.querySelector("#buttonCurrentPosition");
buttonCurrentPosition.addEventListener("click", getCurrentPosition);

function currentPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(`${url}&appid=${apiKey}`).then(showResponse);
}

//function celsiusLink(event) {
// event.preventDefault();
// }
//let actualTempC=actualTemp;
//actualTempC.innerHTML=actualTemp.value;
//let linkC = document.querySelector("#celsius-temp-link");
//linkC.addEventListener("click", celsiusLink);

//function fahrenheitLink(event) {
//event.preventDefault();

// }
//let linkF = document.querySelector("#fahrenheit-temp-link");
//linkF.addEventListener("click", fahrenheitLink);

let now = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let weekDay = week[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayTime = document.querySelector("#currentDayOfWeek");

dayTime.innerHTML = `${weekDay} ${hours}:${minutes}`;
//
