// *Variables*
// Create a variable and console log the value
let x = 10;

// Create a variable, add 10 to it, and alert the value
x += 10;

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
    alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder
function division(x, y) {
    if (y !== 0) {
        return (x % y);
    } else {
        console.log("Error: Division by zero!");
    }
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add_if(x, y) {
    if ((x + y) > 50) {
        alert("Jumanji!");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply_nums(x, y, z) {
    let prod = x * y * z;

    if ((prod % 3) === 0) {
        alert("ZEBRA");
    } else {
        console.log("Product is not divisible by 3.");
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function print_string(string, n) {
    /*
        - Print the string n number of times
    */
    
    for (let i = 1; i <= n; i++) {
        console.log(string);
    }
}
