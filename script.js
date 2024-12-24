const apiKey = "248505e32a9be9e155ca9665d466e0ee" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;
let search = document.querySelector(".search input")
let btn = document.querySelector(".search button")
let weather = document.querySelector(".weather-icon")
let w = document.querySelector(".weather");
let e =  document.querySelector(".error");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status== 404){
      e.innerHTML = `<p>Invalid CIty Name</p>`
    }
    else{
        e.innerHTML = `Here the Conditions!`
    }
   let a = document.querySelector(".city");
   a.innerHTML = data.name 
   let b = document.querySelector(".temp");
   b.innerHTML = Math.round(data.main.temp ) + "°c";
   let c = document.querySelector(".humidity") ;
   c.innerHTML = data.main.humidity  + "%";
   let d = document.querySelector(".wind") ;
   d.innerHTML = data.wind.speed + "km/h" ;
   if(data.weather[0].main == "Clouds"){
    weather.src = "clouds-weather-svgrepo-com.svg"
   }
   else if(data.weather[0].main == "Clear"){
    weather.src = "weather-clear-svgrepo-com.svg"
   }
   else if(data.weather[0].main == "Rain"){
    weather.src = "rain-svgrepo-com.svg"
   }
   else if(data.weather[0].main == "Smoke"){
    weather.src = "mist-svgrepo-com.svg"
   }
   else if(data.weather[0].main == "Haze"){
    weather.src = "snowing-frost-svgrepo-com.svg" ;
   }


    
     
}
btn.addEventListener("click"  , function(){
    checkWeather(search.value);
    
});
