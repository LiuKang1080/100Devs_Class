// JavaScript Arrow Functions Basics

/*
Arrow Function Basics:
    - General syntax for arrow functions:

        let my_func = (arg1, arg2, argN) => { expression };

    - This creates a function called my_func, it accepts arguments arg1, arg2, and argN, It then runs the expression on the right
        side of the arrow operator => and then returns the result of the expression.

    - Ex)

        let sum = (a, b) => a + b; 

        // This is the exact same thing as:
        let sum = function(a, b) {
            return (a + b);
        }

        console.log(sum(1,2)); // 3

    - We can use Arrow Functions to dynamically create a function:
        
        let age = prompt("What is your age?", 18);

        let welcome = (age < 18) ?
            () => alert("Hello") :
            () => alert("Greetings");

        welcome();

Multiline Arrow Functions:
    - We can use { } to do multi-line arrow functions

        let sum = (x, y) => {
            let result = x + y;
            return result;
        };

        alert(sum(1,2)); // 3
*/

let sum = (x, y) => x + y;
console.log(sum(2, 3));

/*
    - Rewrite the following function using Arrow Functions:
        
        function ask(question, yes, no) {
            if (confirm(question)) {
                yes()
            } else {
                no()
            }
        }

        ask(
            "Do you agree?",
            function() { alert("You Agree"); },
            function() { alert("You Don't Agree"); }
        );
*/
/*
    - Solution

        ask(
            "Do you agree?",
            () => alert("You Agree"),
            () => alert("You Don't Agree"),
        );
*/
