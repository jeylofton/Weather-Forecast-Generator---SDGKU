// Constants
const city = "Panamá City";

// 1. Create the fn that convert C to F
function celsiusToFar(celsius){
    return (celsius * 9/5) + 32;
}
// 2. Create the variable for each day
let mondayC = 30;
let tuesdayC = 28;
let wednesdayC =25;
let thursdayC = 20;
let fridayC = 35;
let saturdayC = 30;
let sundayC = 29;

// 3. Call the fn for everyday
let mondayF = celsiusToFar(mondayC).toFixed(1);
let tuesdayF = celsiusToFar(tuesdayC);
let wednesdayF = celsiusToFar(wednesdayC);
let thursdayF = celsiusToFar(thursdayC);
let fridayF = celsiusToFar(fridayC);
let saturdayF = celsiusToFar(saturdayC);
let sundayF = celsiusToFar(sundayC);



// 4. Call the output
let output = "";
output =`<h2>${city} </h2>`;
output +=`<div class="forecast-row">`;
output += 
`<div class="day-card">
    <h3>Mon</h3>
    <div class="icon">☀️</div>
    <p>${mondayC} °C</p>
    <p>${mondayF} °F</p>
</div>`;

output += `<div class="day-card">
<h3>Tues</h3>
<div class="icon">⛈️</div>
<p> ${tuesdayC} °C </p> 
<p>${tuesdayF} °F</p>
</div>`;

output += `<div class="day-card"> 
<h3>Wed</h3> 
<div class="icon">☁️</div>
<p>${wednesdayC} °C</p> 
<p>${wednesdayF} °F</p>
</div>`;
output += `<div class="day-card">
<h3>Thurs</h3> 
<div class="icon">☁️</div>
<p>${thursdayC} °C </p>
<p>${thursdayF} °F</p>
</div>`;
output += `<div class="day-card">
<h3>Fri</h3> 
<div class="icon">☀️</div>
<p>${fridayC} °C</p>
<p>${fridayF} °F</p>
</div>`;
output += `<div class="day-card">
<h3>Sat</h3>
<div class="icon">☀️</div>
<p>${saturdayC} °C</p>
<p>${saturdayF} °F</p>
</div>`;
output += `<div class="day-card">
<h3>Sun</h3>
<div class="icon">⛈️</div>
<p>${sundayC} °C </p>
<p>${sundayF} °F</p>
</div>`;

output += `</div>`
document.getElementById("forecast").innerHTML=output;