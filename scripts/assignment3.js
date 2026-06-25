function convertTemperature() {

    const temperature = Number(document.querySelector(".temperature").value);
    const scale = document.querySelector(".scale").value;

    const mainTemp = document.querySelector(".main-temp");
    const convertedTemp = document.querySelector(".converted-temp");
    const weatherFeel = document.querySelector(".weather-feel");
    const weatherLevel = document.querySelector(".weather-level");
    const weatherIcon = document.querySelector(".weather-icon");
    const weatherText = document.querySelector(".weather-text");

    let converted;

    mainTemp.className = "main-temp";

    if (scale === "F") {
    converted = (temperature - 32) * 5 / 9;
    convertedTemp.textContent = temperature + "°F = " + converted.toFixed(1) + "°C";
    }
    else {
    converted = (temperature * 9 / 5) + 32;
    convertedTemp.textContent = temperature + "°C = " + converted.toFixed(1) + "°F";
    }

    mainTemp.textContent = temperature + "°";
    weatherFeel.textContent = "Feels Like " + temperature + "°";

    if ((scale === "F" && temperature <= 49) || (scale === "C" && temperature <= 9)) {
        mainTemp.classList.add("cold");
        weatherLevel.textContent = "Cold Weather";
        weatherIcon.textContent = "❄️";
        weatherText.textContent = "Cold";
    }
    else if ((scale === "F" && temperature <= 77) || (scale === "C" && temperature <= 25)) {
        mainTemp.classList.add("comfortable");
        weatherLevel.textContent = "Comfortable Weather";
        weatherIcon.textContent = "⛅";
        weatherText.textContent = "Partly Cloudy";
    }
    else {
        mainTemp.classList.add("hot");
        weatherLevel.textContent = "Hot Weather";
        weatherIcon.textContent = "☀️";
        weatherText.textContent = "Sunny";
    }
}