const weather = document.querySelector("#weather");
const weatherInfo = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "0429f309bfb865d017f39c75a4ed27b3";

function onGeoOk(position){
    const weatherIcon = {
        '01' : 'fas fa-sun',
        '02' : 'fas fa-cloud-sun',
        '03' : 'fas fa-cloud',
        '04' : 'fas fa-cloud-meatball',
        '09' : 'fas fa-cloud-rain',
        '10' : 'fas fa-cloud-showers-heavy',
        '11' : 'fas fa-poo-storm',
        '13' : 'fas fa-snowflake',
        '50' : 'fas fa-smog'
    };


    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const icon = data.weather[0].icon.substr(0, 2);
            
            city.innerText = data.name;
            weatherInfo.innerText = `${Math.floor(data.main.temp)}ºC`;
            let i = document.createElement("i");
            i.className = weatherIcon[`${icon}`];
            weather.append(i);
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);