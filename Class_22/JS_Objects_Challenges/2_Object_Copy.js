// Object References and Copying

/*
Object References:
	- Variables assigned to objects actually store the address of the object, NOT the object itself
	
		let message = "Hello";
		let phrase = message;

	- We copy message into phrase, we have 2 independent variables, each storing the string "Hello"

	- Objects are NOT like this!
	
		let user = { name: "John" };
		let admin = user;

	- We now have 2 variables storing the memory address of the object! We DO NOT have 2 objects!
	- The 2 variables both store references to the same object.
	- 2 objects are truly equal if they are the same object.

Cloning Objects:
	- In order to clone objects we need to create a new object, then replicate the structure of the existing object into the
		new one.

		let user = {
			name: "John",
			age: "age"
		};

		let clone = {};         // a new empty object

		// loop through the original object and copy to the new object
		for (let key in user) {
			clone[key] = user[key];
		}

		// Now clone is an independent object!
		clone.name = "Pete";

		console.log(user.name);
		console.log(clone.name);

Nested Cloning:
	- What if the properties are objects themselves?
	- Copy will directly work with primitives
	
		let user = {
			name: "John",
			size: {
				height: 182,
				width: 50
			}
		};

	- In order to properly clone this, we need to determine if the property is an object, and if it is replicate the structure
		as well.
	- We can use the _.cloneDeep(obj) from the JavaScript library lodash.

Spread Operator
	- We can also use the spread operator (...) to make copies
	
		let user = {
			name: "John",
			age: 30
		};

		let new_obj = {...user};
*/
