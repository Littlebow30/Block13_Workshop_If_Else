// Is Truthy

let value = "";

//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
if (value === false) {
    console.log("The boolean value false is falsy");
}
//"The null value is falsy";
else if (value === null) {
    console.log("The null value is falsy");
}
//"undefined is falsy";
else if (value === undefined) {
    console.log("undifined is falsy");
}
//"The number 0 is falsy (the only falsy number)";
else if (value === 0) {
    console.log("The number 0 is falsy");
}
//"The empty string is falsy (the only falsy string)";
else if (value === "") {
    console.log("The empty string is falsy");
}
//If the value is truthy, print true;
else {
    console.log(true);
}

// Number Line
let num1 = 99;
let num2 = -2;
let sum = num1 + num2;
// take the sum of two numbers
// wrie if/else statments for the following:
// sum + " is less than -1000";
if (sum < -1000) {
    console.log(sum + "is less than -1000");
}
// sum + " is a negative number";
else if (sum < 0) {
    console.log(sum + " is a negative number");
}
// sum + " is equal to 0";
else if (sum === 0) {
    console.log(sum + " is equal to 0");
}
// sum + " is larger than 0";
else if (sum > 0) {
    console.log(sum + " is larger than 0");
}
// sum + " is greater than 100";
else if (sum > 100) {
    console.log(sum + " is greater than 100");
}

// Greater than or Equal to 5 
let parm1 = 6;
let parm2 = 4;

// print true if both parameters are greater than or equal to 5 
if (parm1 && parm2 >= 5) {
    console.log(true);
}
else {
    console.log(false);
}

// Pare and Compare
let param1A = "cat";
let param1B = "catt";
let param2A = 6;
let param2B = "6";

//compare two sets of two values
if (param1A === param1B || param2A === param2B) {
    //if at least one of the pairs is true them print true
    console.log(true);
}
//if both are false, print false
else {
    console.log(false)
}

