const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon =  document.querySelector('.weather-icon');


const apikey = "b87abf895c511c59dbf662c17d489357";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{

        var data = await response.json();
        console.log(data);

        // for city name
        const city1 = data.name;
        document.querySelector('.city').innerHTML = `${city1}`;

        // for temperature
       const temp = Math.round((data.main.temp));
       document.querySelector('.temp').innerHTML = `${temp}°C`;

    // for Humidity
    const humidity = data.main.humidity;
    document.querySelector('.humidity').innerHTML = `${humidity}%`;


    //wind
    const wind = data.wind.speed;
    document.querySelector('.wind').innerHTML = `${wind} km/h`;

    if(data.weather[0].main == "Clouds")
    {
      weatherIcon.src = "clouds.png";  
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"; 
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"; 
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"; 
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"; 
    }
    // document.querySelector('.weather').classList.add("weather-show");
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
    }       
}
searchBtn.addEventListener('click',()=>{
    const value = searchBox.value;
    checkweather(value);
})

