//--- Easy
//create a variable and assign it a number
let num = 25;

//minus 10 from that number
num - 10;

//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let input_value = document.querySelector("#danceDanceRevolution").value;

//add 25 to that number
input_value + 25;

//alert that number
alert(input_value);

//--- Hard
//create a variable that holds the h1
let header_1 = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
// We need to first convert input_value to a proper number since on page load it has already gotten the value of "", an empty
// string, we then add number 25, which will convert the number to a string. Convert this string to a number before the addition
// happens. We will also use an lambda arrow function to call the function for the click event listener.
header_1.addEventListener("click", () => {console.log(num + Number(input_value));} );

// direct way of creating the function and then calling it in the event listener.
// header_1.addEventListener("click", sum);

// function sum() {
//     console.log(num + Number(input_value));
// }
