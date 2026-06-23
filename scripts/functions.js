console.log("This is the console");

// 1. Delcare the function (create the fn)
function login(){
    console.log("Welcome to the system");
}

// 2. Call fn (code, console, user)
login();

// Ex. 2. 1 parameter
function logout(user){
    console.log("Goodbye " + user + " See you later");
}

logout("Jey");
logout("Edwin");
logout("Austin");

// EX. 3 - 2-3 parameter
function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of the exam: ${totalPoints}`);
}

gradeExam("Austin", 10,0.33);
gradeExam("Jey", 12,0.33)
gradeExam("Edwin",13,0.33)

function doubleNumber(num){
    let total = num * 2;
    console.log(total);
}

doubleNumber(4);
doubleNumber(10);

// EX. 4 Return
function add(num1,num2){
    let total = num1 + num2;
    return total;
    console.log("This is not working");
}

let x = add(4,6);
console.log(`The result is: ${x}`);
