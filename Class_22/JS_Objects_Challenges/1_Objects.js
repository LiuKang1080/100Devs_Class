// Objects in JavaScript

/*
Objects in JavaScript:
    - An object can be created with {}, with an optional list of properties
    - Properties are key: value pairs.
    
        let user = new Object();    // this is object constructor syntax

        or

        let user = {};              // this is object literal syntax

    - We place properties within the {} as key: value paris

        let user = {
            name: "john",
            age 30
        }

    - Pay attnetion to the commas, and the quotes for the strings.
    - We can add properties just like we decalre variables

        user.is_admin = true;

    - A new property called is_admin is created and the value "true" is assigned to it.
    - We can also delete properties:
        
        delete user.age;

    - The last property can end with a comma, this is known as a trailing or hanging comma.
    
    - We can also add multiple words with spaces as the key:
        
        "likes birds": true;

    - But we will run in syntax errors when we use the . operator to call upon this property

        ex) user.likes birds DOES NOT WORK!!!

        - We need to use [] square brackets and enclose the key with quotes.
        
        user["likes birds"] = false;

    - Square brackets allows us to obtain the property as the result of an expression:
        
        let key = prompt("What would you like to know?")
        // if the user enters "name", that will now be stored into key, and we can use this variable

        alert( user[key] );

        - We can also use the .operator here

        alert( user.key );

For in Loop
    - We can walk over all of the keys of an object

        for (key in object) {
            // print the keys
            console.log(key);

            // print all of the values
            console.log(user.key);
        }
*/


// Task 1
/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:

let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

function is_empty(obj) {
    // loop through the obj, if we loop instantly return false, else we can return true
    for (let key in obj) {
        return false;
    }

    return true;
}

// Task 3
/*
We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
*/

// the object salaries will be passed in:
function sum_obj_values(obj) {
    // loop through the obj, summing all of the values
    let total = 0;

    for (let key in obj) {
        total += obj[key];
    }

    return total;
}

// Task 4
/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
P.S. Use typeof to check for a number here.
*/

function double_obj_values(obj) {
    // loop through the obj
    for (let key in obj) {
        // check to see if the value is of the type Number
        if (typeof(obj[key] === "number")) {
            obj[key] *= 2; 
        }
    }
}
