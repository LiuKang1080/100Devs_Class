// JavaScript Function Expressions Tasks

/*
Function Expressions:
    - Function Expressions allow us to create a function in the middle of any expression

        let say_hello = function() {
            alert("Hello");
        };

    - We can omit the name for the function in Function Expressions.
    - "Create a function and put it into the variable called say_hello"
    
    - In JavaScript functions ARE values!
    - No matter how a function is created, a function will always be a value.
    
        function say_hello() {
            console.log("Hello");
        }

        alert(say_hello);
        // this will show the function code
        // this will NOT run the function! There is no () after the function name in the alert()
        
    - We can also perform function callbacks:

        function ask(question, yes, no) {
            // We will ask the question, we will run the yes() function if the user says yes, else we will run the no() function.

            if (confirm(question)) {
                yes()
            } else {
                no()
            }
        }

        function show_ok() {
            alert("You agree");
        }

        function show_cancel() {
            alert("You don't agree");
        }

        ask("Do you agree?", show_ok, show_cancel);

    - Function Declaration vs. Function Expression:
        
        - Function Declaration:
        function sum(a, b) {
            return (a + b);
        }

        - Function Expression
        let sum = function(a, b) {
            return (a + b);
        };
*/

let say_hello = function(x, y) {
    return (x + y);
};

console.log(say_hello);
