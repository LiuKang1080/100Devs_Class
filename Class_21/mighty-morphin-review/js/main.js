// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let fav_holiday = "HALLOWEEN";
console.log(fav_holiday);

// Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Hello World!";
console.log(str.slice(str.length - 3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function abs_value(a, b, c, d, e) {
    let temp = a - b - c - d - e;

    console.log(Math.abs(100 - (temp)));
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function min_max(x, y, z) {
    let arr = [x, y, z];

    console.log("Minimum is: " + Math.min(...arr));
    console.log("Maximum is: " + Math.max(...arr));
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function flip_coin() {
    // Here min is 0 max is 1:
    let result = Math.floor(Math.random() * 2);

    if (result === 0) {
        return "Heads";
    } else {
        return "Tails";
    }
}

//*Loops*
// Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x
// is the number passed into the function. Call the function.
function toss_coin(n) {
    for (let i = 1; i <= n; i++) {
        console.log(flip_coin());
    }
}

toss_coin(2);
