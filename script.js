// API Key
let apiKey = "&appid=669c0f7254691885e5857e6d51c66279";
console.log("in script");
// DOM Elements
let inputEl = document.querySelector(".input");
let searchBtnEl = document.querySelector(".search-button");
console.log(inputEl);
console.log(searchBtnEl);
// Sets the cityName in localStorage
let cityName = localStorage.getItem("cityNameStore");
console.log(cityName);
// URL for current day parameters (city name + weather units of measurements)
let URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + apiKey;
console.log(URLWeather);
// URL for 5-days forecast parameters (city name + weather units of measurements)
let URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial" + apiKey;
console.log(URLForecast);
// Sets the input value in localStorage
function recordCityData() {
  localStorage.setItem("cityNameStore", inputEl.value);
}
// Event Listener for search button
searchBtnEl.addEventListener("click", recordCityData);
// Displays the date
let currentDay = moment().format("dddd, MMMM Do");
function functionDay() {
  $(".current-date").text(currentDay);
}
functionDay();
// Current Day Forecast function
$.ajax({
  url: URLWeather,
  method: "GET",
}).then(function (response) {
  console.log("RESPONSE: " + response);
  // Add weather info to page
  $(".city").html("<h2>" + response.name + "</h2>");
  $(".weather-icon").html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
  $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
  $(".humidity").text("Humidity: " + response.main.humidity + "%");
  $(".temperature").text("Temperature: " + response.main.temp + " F");
});
// 5 Days Forecast function
$.ajax({
  url: URLForecast,
  method: "GET",
}).then(function (response) {
  let dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
  // Adds day 1 data to page
  $(".day-one-temperature").text("Temp: " + response.list[0].main.temp + " F");
  $(".day-one-date").html("<h6>" + dayOne + "</h6>");
  $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
  let dayTwo = moment(response.list[8].dt_txt).format("ddd, MMM D");
  // Adds day 2 data to page
  $(".day-two-temperature").text("Temp: " + response.list[8].main.temp + " F");
  $(".day-two-date").html("<h6>" + dayTwo + "</h6>");
  $(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");
  let dayThree = moment(response.list[16].dt_txt).format("ddd, MMM D");
  // Adds day 3 data to page
  $(".day-three-temperature").text("Temp: " + response.list[16].main.temp + " F");
  $(".day-three-date").html("<h6>" + dayThree + "</h6>");
  $(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");
  let dayFour = moment(response.list[24].dt_txt).format("ddd, MMM D");
  // Adds day 4 data to page
  $(".day-four-temperature").text("Temp: " + response.list[24].main.temp + " F");
  $(".day-four-date").html("<h6>" + dayFour + "</h6>");
  $(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");
  let dayFive = moment(response.list[32].dt_txt).format("ddd, MMM D");
  // Adds day 5 data to page
  $(".day-five-temperature").text("Temp: " + response.list[32].main.temp + " F");
  $(".day-five-date").html("<h6>" + dayFive + "</h6>");
  $(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
  $(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");
});
