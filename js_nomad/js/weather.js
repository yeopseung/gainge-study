// 위치를 가져오는 데에 성공했을 경우 콜백 함수
// GeoLocationPosition position
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    

    });
}

// 위치를 가져오지 못 했을 경우 콜백 함수
function onGeoError() {
    alert("Can't find you. No weather for you")
}

 
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);