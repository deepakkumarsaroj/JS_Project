const inputBox=document.getElementById("input-box");
const weatherIcon = document.querySelector("weather-icon");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");


async function checkWeather(city) {

    const apiKey = "bad7888a72c26e8fc025be7e94936e45";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(`${apiUrl}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".tempp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

    // if(data.weather[0].main == "Clouds"){
    //     weatherIcon.src="images/sun.png"
    // }
    // else if(data.weather[0].main == "Clear"){
    //     weatherIcon.src="images/sun (1).png"
    // }
    // else if(data.weather[0].main == "rain"){
    //     weatherIcon.src="images/rain.png"
    // }
    // else if(data.weather[0].main == "Drizzle"){
    //     weatherIcon.src="images/weather (1).png"
    // }
    // else if(data.weather[0].main == "Mist"){
    //     weatherIcon.src="images/sun.pn
    //}

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
    
    
    }
    inputBox.value="";

    


}
// checkWeather();
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    

});

