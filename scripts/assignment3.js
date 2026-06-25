function convertTemperature(){
    let temperature = Number(document.querySelector(".temperature").value);
    let scale = document.querySelector(".scale").value;
    let result = document.querySelector(".result");
    let fill = document.querySelector(".fill");
    let bulb = document.querySelector(".bulb");

    result.className = "result";

    let converted;
    let color;
    let level;

    if(scale == "F"){
    converted = (temperature - 32) * 5/9;
    result.textContent = temperature + "°F = " + converted.toFixed(1) + "°C";

        if(temperature < 50){
            color = "blue";
            result.classList.add("cold");
            level = 25;
        }
        else if(temperature <= 77){
            color = "green";
            result.classList.add("comfortable");
            level = 55;
        }
        else{
            color = "red";
            result.classList.add("hot");
            level = 90;
        }
    }

    else{
        converted = (temperature * 9/5) + 32;
        result.textContent = temperature + "°C = " + converted.toFixed(1) + "°F";
        if(temperature < 10){
            color = "blue";
            result.classList.add("cold");
            level = 25;
        }
        else if(temperature <= 25){
            color = "green";
            result.classList.add("comfortable");
            level = 55;
        }
        else{
            color = "red";
            result.classList.add("hot");
            level = 90;
        }
    }

    fill.style.height = level + "%";
    fill.style.background = color;
    bulb.style.background = color;
}