// The this Keyword, and Methods in JavaScript

// Task 1
/*
Here the function makeUser returns an object.
What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

// We need to turn ref into a function for this to work.

// Task 2
/*
Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
    read() {
        this.x = +prompt("x?", 0);
        this.y = +prompt("y?", 0);
    },

    sum() {
        return (this.x + this.y);
    },

    mul() {
        return (this.x * this.y)
    }
};
