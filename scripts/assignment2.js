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
let mondayF = celsiusToFar(mondayC);
let tuesdayF = celsiusToFar(tuesdayC);
let wednesdayF = celsiusToFar(wednesdayC);
let thursdayF = celsiusToFar(thursdayC);
let fridayF = celsiusToFar(fridayC);
let saturdayF = celsiusToFar(saturdayC);
let sundayF = celsiusToFar(sundayC);



// 4. Call the output
let output = "";
output =`<h2>${city} </h2>`;
output += `<p>Monday ${mondayC} - ${mondayF}</p>`;
output += `<p>Tuesday ${tuesdayC} - ${tuesdayF}</p>`;
output += `<p>Wednesday ${wednesdayC} - ${wednesdayF}</p>`;
output += `<p>Thursday ${thursdayC} - ${thursdayF}</p>`;
output += `<p>Friday ${fridayC} - ${fridayF}</p>`;
output += `<p>Saturday ${saturdayC} - ${saturdayF}</p>`;
output += `<p>Sunday ${sundayC} - ${sundayF}</p>`;
document.getElementById("forecast").innerHTML=output;