// *Variables*
// Create a variable and console log the value
let x = 25;
console.log(x);

// Create a variable, add 10 to it, and alert the value
let y = 100;
y += 10;

console.log(y);
// alert(y);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a, b, c, d) {
    alert(a - b - c - d);
}

// Create a function that divides one number by another and returns the remainder
function modulo(x, y) {
    return(x % y);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addition(x, y) {
    if ((x + y) > 50) {
        alert("Jumanji");
    } else {
        console.log(x + y);
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(x, y, z) {
    let prod = x * y * z;

    if (prod % 3 === 0) {
        alert("ZEBRA");
    }
}

let n = [];
n.push(50);

console.log(n[0]);
