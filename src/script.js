function updateWeather(response){
    let temperatureElement = document.querySelector("#weather-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
 
}


function searchCity(city){
let apiKey = "o2719tc03b80c7441be54fbaafcfc88f";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(updateWeather);
}


function handleSearchSubmit(event){
event.preventDefault();
let inputText = document.querySelector("#input-text");

searchCity(inputText.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
