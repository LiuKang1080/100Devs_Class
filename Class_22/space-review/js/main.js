//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function square_elements(arr) {
    let squared_arr = [];

    arr.forEach( (element) => {
        squared_arr.push(element**2);
    });

    return squared_arr;
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverse_string(str) {
    return str.split("").reverse().join("");
}

console.log(reverse_string("Hello World!"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    let reverse_str = str.split("").reverse().join("");

    if (str === reverse_str) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }
}

palindrome("racecar");
