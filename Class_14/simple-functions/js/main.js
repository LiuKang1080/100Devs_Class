//create a function that adds two numbers and alerts the sum
function addition(x, y) {
    alert(x + y);
}

//create a function that multiplys three numbers and console logs the product
function multiply(x, y, z) {
    console.log(x * y * z);
}

//create a function that divides two numbers and returns the ???
function division(x, y) {
    /*
        - It will be x divided by y.
        - Check to see if y is 0, if it's zero, log out division by zero error
    */

    if (y === 0) {
        console.log("Division by zero error!");
        alert("Division by zero error!");
    }

    return x / y;
}
