// Create the variable (array)
let temps = [];
let convertedTemps = [];
const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// step 1 - Create a function
function convertTemp(){
    console.log("Converting ...");

    let scale = prompt("Enter C or F");
    scale = scale.toUpperCase();
    console.log(scale);

    let total = 0;

    let hottestTemp = null;
    let coldestTemp = null;
    let hottestDay = "";
    let coldestDay = "";

    for(let i=0;i<7;i++){
        let temp = parseFloat(prompt("Enter the Temp for " + WeekDays[i]));
        console.log(temp);

        temps.push(temp);
        total = total + temp;

        if(hottestTemp === null || temp > hottestTemp){
            hottestTemp = temp;
            hottestDay = WeekDays[i];
        }

        if(coldestTemp === null || temp < coldestTemp){
            coldestTemp = temp;
            coldestDay = WeekDays[i];
        }

        let converted;

        if(scale === "C"){
            converted = celsiusToFar(temp);
        } else {
            converted = farToCelsius(temp);
        }

        convertedTemps.push(converted);
    }

    for(let i=0;i<7;i++){
        let label = "";

    if(scale == "C"){
    if(temps[i] > 25){
        label = "Hot";
    }
    else if(temps[i] >= 10){
        label = "Comfortable";
    }
    else{
        label = "Cold";
    }
    }
else{
    if(temps[i] > 77){
        label = "Hot";
    }
    else if(temps[i] >= 50){
        label = "Comfortable";
    }
    else{
        label = "Cold";
    }
}

    document.getElementById("temperatures").innerHTML +=
    `<div class="forecast-row">
    <div class="day">${WeekDays[i]}</div>
    <div class="icon">⛈️</div>
    <div class="chance">${label}</div>
    <div class="condition">${temps[i]}° -> ${convertedTemps[i].toFixed(1)}°</div>
    <div class="bar"></div>
    </div>`;
}

    let average = total / 7;

document.getElementById("temperatures").innerHTML +=
`<div class="summary">
    <p>Weekly Average: ${average.toFixed(1)}</p>
    <p>Hottest Day: ${hottestDay} - ${hottestTemp}</p>
    <p>Coldest Day: ${coldestDay} - ${coldestTemp}</p>
</div>`;
}

// use an if to display converted temp
function celsiusToFar(celsius){
    return (celsius * 9/5) + 32;
}

function farToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}