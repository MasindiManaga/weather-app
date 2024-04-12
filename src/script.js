function handleSearchSubmit(event){
event.preventDefault();
let inputText = document.querySelector("#input-text");
let cityElement = document.querySelector("#weather-app-city");
cityElement.innerHTML = inputText.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
