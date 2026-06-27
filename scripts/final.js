// Create the variable (array)
let temps = [];
const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// step 1 - Create a function
function convertTemp(){
console.log("Converting ...");
};
// step 2 - User inputs the scale C or F
let scale = prompt("Enter C or F");
console.log(scale);

for(let i=0;i<7;i++){
    let temp =prompt("Enter the Temp ");
    console.log(temp);
    let converted = celsiusToFar(temp);
    temps.push(converted);
    document.getElementById("temperatures").innerHTML +=
    `<li>${WeekDays[i]} - ${temp} -> ${temps[i]}</li$>`;
}


// use anif to display converted temp
function celsiusToFar(celsius){
    return (celsius * 9/5) + 32; 
}