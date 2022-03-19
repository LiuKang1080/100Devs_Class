// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fav_food = "pizza";
// alert(fav_food);
console.log(fav_food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello World";
// alert(str);
console.log(str);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. 
// Call the function.
function mult_div(x, y, z) {
    if (y === 0) {
        console.log("Division by zero ERROR!");
    } else {
        console.log((x / y) * z);
    }
}

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
// We can use the cube root function that is a method of the Math object built into JavaScript
function cube_root(num) {
    console.log(Math.cbrt(num));
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer_month(month) {
    // create an arrays with the months
    let spring_months = ["febuary", "march", "april"];
    let summer_months = ["may", "june", "july"];
    let autumn_months = ["august", "september", "october"];
    let winter_months = ["november", "december", "january"];

    // convert the month into all lowercase
    month = month.toLowerCase();

    // we use the array method includes() to check to see if an element in within an array
    if (summer_months.includes(month)) {
        console.log("YAY");
    } else if (spring_months.includes(month) || autumn_months.includes(month) || winter_months.includes(month)) {
        console.log("Booo");
    } else {
        console.log("Error. Enter a proper month.");
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loop_multiple_5(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 5 === 0) {
            continue;
        }

        console.log(i);
    }
}
