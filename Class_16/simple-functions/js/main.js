//---Easy
// Create a function that subtracts two numbers and alerts the difference
function subtract(x, y) {
    alert(x - y);
}

// Create a function that divides three numbers and console logs the quotient
function divide(x, y, z) {
    if ((y !== 0) || (z !== 0)) {
        console.log(x / y / z);
    } else {
        alert("ERROR: Division by zero!");
    }
}

// Create a function that multiplys three numbers and returns the product
function multiply(x, y, z) {
    return (x * y * z);
}

//---Medium
// Create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the 
// first two numbers by the third number
function return_remainder(x, y, z) {
    if (z !== 0) {
        return ((x + y) / z);
    }
}

//---Hard
// Create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of 
// the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two 
// numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of 
// dividing the fourth number
function special_func(a, b, c, d) {
    if ((a * b) > 100) {
        console.log(c + d);
    } else if ((a * b) < 100) {
        console.log(c - d);
    } else if ((a * b) === 100) {
        alert((a * b *c) % d);
    }
}
