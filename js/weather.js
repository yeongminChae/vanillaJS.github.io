const API_KEY = "ec74d06fb2bca2591dec48b86ada147f";
function onGeoOk(position){
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
        });
    
}
function onGeoError(){
    alert("we can't find where r u , there is no weather for iu")
}

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);
