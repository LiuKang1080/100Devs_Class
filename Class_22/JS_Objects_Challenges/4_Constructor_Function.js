// Constructor Function

/*
Constructor Function:
    - We can create objects with the constrcutor function

        function User(name) {
            this.name = name;
            this.isAdmin = false;
        }

        let user = new User("Jack");

        alert(user.name); // Jack
        alert(user.isAdmin); // false

    - the new keyword, depending on the library used, it might be required, or not required! We need to pay attention to the
        documentation of the library we use to see if the "new" keyword is required.

Returning From Constructors:
    - Generally we do not return from constructors, since they're only supposed to constrcut the object. If we do need to return
        then there are 2 rules:

        - If return is called with an object, then the object is returned instead of this.
        - If return is called with a primitive, it’s ignored.

        function BigUser() {
            this.name = "John";
            return { name: "Godzilla" };  // <-- returns this object
        }

        alert( new BigUser().name );  // Godzilla, got that object

        function SmallUser() {
            this.name = "John";
            return; // <-- returns this
        }

        alert( new SmallUser().name );  // John
*/


// Task 1
/*
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
*/

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
