function updateWeather(response){
    let temperatureElement = document.querySelector("#weather-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[date.getDay()];

    if (minutes < 10 )
        minutes = `0${minutes}`;

    if (hours < 10){
        hours = `0${hours}`;

    }

    return `${day} ${hours}:${minutes}`;
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
