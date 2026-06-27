console.log("Loops")

document.write("<p> 2 x 0 = 0");
document.write("<p> 2 x 1 = 2");
document.write("<p> 2 x 2 = 4");
document.write("<p> 2 x 3 = 6");
document.write("<p> 2 x 4 = 8");
document.write("<p> 2 x 5 = 10");


for(let i = 0; i < 4; i++){
    document.write(" My for is working?");
}



const num = 2;
for(let i=2;i<=10;i++){
    document.write(`<p>${i} x ${num} = ${i*num}</p>`);
}

let temp1 = 30;
let temp2 = 32;
let temp3 = 31;
let temp4 = 29;
let temp5 = 32;
let temp6 = 30;
let temp7 = 31;

// temp of 7 days usign an array

// let temps = [30,32,31,29,32,30,31];
// console.log(temps[0]);
// console.log(temps[1]);
// console.log(temps[2]);

let temps = [30,32,31,29,32,30,31];

for(let i = 0; i<=6; i++){
    console.log(`Day ${i+1} = ${temps[i]}`);
}