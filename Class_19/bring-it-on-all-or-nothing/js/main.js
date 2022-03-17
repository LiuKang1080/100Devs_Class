// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let var_status = true;
// alert(var_status);

// Declare a variable, reassign it to your favorite color, and console log the value
let fav_color = "red";
console.log(fav_color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth.
// Return the result. Call the function.
function sum_divide(a, b, c, d) {
    return (a + b + c) / d
}

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power_func(x, y) {
    console.log(x**y);
    // console.log(Math.pow(x, y));
}

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false,
// console log the string
function alert_or_log(bool, str) {
    if (bool) {
        alert(str)
    } else {
        console.log(str);
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log
// "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizz_buzz(upper_limit) {
    for (let i = 1; i <= upper_limit; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("Fizz Buzz");
        } else if ((i % 3) === 0) {
            console.log("Fizz");
        } else if ((i % 5) === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizz_buzz(100);
