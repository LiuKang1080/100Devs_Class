// *Variables*
// Declare a variable, assign it a value, and alert the value
let x = 5;
// alert(x);
// console.log(x);

// Create a variable, divide it by 10, and console log the value
let y = 75;
// console.log(y / 10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply(x, y, z) {
    // alert(x * y * z);
    console.log(x * y * z);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addition_subtraction(a, b, c, d) {
    let add_nums = a + b;
    let sub_nums = c - d;

    console.log("Result - Add: " + add_nums + " Sub: " + sub_nums);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third.
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function conditional_task(x, y, z) {
    let result = (100 + x - y) / z;

    if (result > 25) {
        console.log("We have a winner!");
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function day_checker(day) {
    day = day.toLowerCase();

    if ((day === "monday") || (day === "tuesday") || (day === "wednesday") || (day === "thursday") || (day === "friday")) {
        // alert("Today is a weekday");
        console.log("Today is a weekday");
    } else if ((day === "saturday") || (day === "sunday")) {
        // alert("Today is a weekend!");
        console.log("Today is a weekend!");
    } else {
        // alert("Please enter a proper day!");
        console.log("Please enter a proper day!");
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function log_values(num) {
    /* 
        - Print all values from 1 to num
        - Increment in 3s instead of incrementing by 1.
    */

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

log_values(100);
