//search inputs
let searchValue;
const searchBtn = document.querySelector(".container button");

//display parts
const container = document.querySelector(".container");
const invalidSection = document.querySelector(".not-found");
const weatherInfo = document.querySelector(".weather-info");

//info that will change
let weatherImg = document.querySelector(".weather-img");
let temperature = document.querySelector(".temp #temp-numb");
let discription = document.querySelector(".description");
let humidity = document.querySelector(".humidity .text span");
let wind = document.querySelector(".wind .text span");

//fetching the api
const key="147a68d2288382c78b422fcde7c7ea89";
searchBtn.addEventListener("click",()=>{
    searchValue = document.querySelector("#search-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${key}`;
    if(searchValue===''){
        return;
    }
    else{
        fetch(url).then((resp)=> resp.json()).then((data)=>{
            if(data.cod==='404'){
                container.style.height="425px";
                invalidSection.style.display="flex";
                invalidSection.classList.add("fadeIn");
                weatherInfo.style.display="none";
                weatherInfo.classList.remove("fadeIn");
                return;
            }
            container.style.height="600px";
            invalidSection.style.display="none";
            switch(data.weather[0].main){
                case "Rain":    
                    weatherImg.setAttribute("src","images/rain.png");
                    break;
                case "Snow":
                    weatherImg.setAttribute("src","images/snow.png");
                    break;
                case "Clear":
                    weatherImg.setAttribute("src","images/clear.png");
                    break;
                case "Clouds":
                    weatherImg.setAttribute("src","images/clouds.png");
                    break;
                case "Drizzle":
                    weatherImg.setAttribute("src","images/drizzle.png");
                    break;
                case "Mist":
                    weatherImg.setAttribute("src","images/mist.png");
                    break;
                default:
                    return;
            }
            temperature.innerHTML= parseInt(data.main.temp) ;
            discription.innerHTML=`${data.weather[0].description}`;
            humidity.innerHTML=`${data.main.humidity}%`;
            wind.innerHTML=`${data.wind.speed}Km/h`;
    
            invalidSection.classList.remove("fadeIn");
            weatherInfo.classList.add("fadeIn");
            weatherInfo.style.display="flex";
        });
    }
});



