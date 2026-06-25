function convertTemperature(){

    let temperature = Number(document.querySelector(".temperature").value);
    let scale = document.querySelector(".scale").value;

    let mainTemp = document.querySelector(".main-temp");
    let convertedTemp = document.querySelector(".converted-temp");
    let weatherFeel = document.querySelector(".weather-feel");
    let weatherLevel = document.querySelector(".weather-level");
    let weatherIcon = document.querySelector(".weather-icon");
    let weatherText = document.querySelector(".weather-text");

    mainTemp.className = "main-temp";
    convertedTemp.className = "converted-temp";
    weatherLevel.className = "weather-level";

    let converted;

    if(scale == "F"){

        converted = (temperature - 32) * 5 / 9;

        mainTemp.textContent = temperature + "°";
        convertedTemp.textContent = temperature + "°F = " + converted.toFixed(1) + "°C";
        weatherFeel.textContent = "Feels Like " + temperature + "°";

        if(temperature < 50){
            mainTemp.classList.add("cold");
            convertedTemp.classList.add("cold");
            weatherLevel.classList.add("cold");

            weatherLevel.textContent = "Cold Weather";
            weatherIcon.textContent = "❄️";
            weatherText.textContent = "Cold";
        }
        else if(temperature <= 77){
            mainTemp.classList.add("comfortable");
            convertedTemp.classList.add("comfortable");
            weatherLevel.classList.add("comfortable");

            weatherLevel.textContent = "Comfortable Weather";
            weatherIcon.textContent = "⛅";
            weatherText.textContent = "Partly Cloudy";
        }
        else{
            mainTemp.classList.add("hot");
            convertedTemp.classList.add("hot");
            weatherLevel.classList.add("hot");

            weatherLevel.textContent = "Hot Weather";
            weatherIcon.textContent = "☀️";
            weatherText.textContent = "Sunny";
        }

    }
    else if(scale == "C"){

        converted = (temperature * 9 / 5) + 32;

        mainTemp.textContent = temperature + "°";
        convertedTemp.textContent = temperature + "°C = " + converted.toFixed(1) + "°F";
        weatherFeel.textContent = "Feels Like " + temperature + "°";

        if(temperature < 10){
            mainTemp.classList.add("cold");
            convertedTemp.classList.add("cold");
            weatherLevel.classList.add("cold");

            weatherLevel.textContent = "Cold Weather";
            weatherIcon.textContent = "❄️";
            weatherText.textContent = "Cold";
        }
        else if(temperature <= 25){
            mainTemp.classList.add("comfortable");
            convertedTemp.classList.add("comfortable");
            weatherLevel.classList.add("comfortable");

            weatherLevel.textContent = "Comfortable Weather";
            weatherIcon.textContent = "⛅";
            weatherText.textContent = "Partly Cloudy";
        }
        else{
            mainTemp.classList.add("hot");
            convertedTemp.classList.add("hot");
            weatherLevel.classList.add("hot");

            weatherLevel.textContent = "Hot Weather";
            weatherIcon.textContent = "☀️";
            weatherText.textContent = "Sunny";
        }

    }

}