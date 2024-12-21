const apiKey="c55d1161144308e6b1bc921005d68ec6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector("#weather .weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.getElementById("weather").style.display="none";
    }else{
        const data = await response.json();
        console.log(data);

        
    if(data.weather[0].main=="clouds"){
        weatherIcon.src="img/cloud.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="img/drizzle.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="img/sun.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="img/storm.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="img/mist.png"
    }
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".description").innerHTML=data.weather[0].description;
    document.querySelector("#country").innerHTML=data.sys.country;
    document.querySelector(".temp").innerHTML=data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".tempminmax").innerHTML=data.main.temp_min+"/"+data.main.temp_max;
    document.querySelector(".sunrise").innerHTML=data.sys.sunrise;
    document.querySelector(".sunset").innerHTML=data.sys.sunset;
    document.querySelector(".pressure").innerHTML=data.main.pressure;
    
    
    document.getElementById("weather").style.display="block";
    document.querySelector(".error").style.display="none";

    } 
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

