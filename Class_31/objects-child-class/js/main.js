//Create an a class and extend it - Can be anything you would like it to be! 
class Animal {
    // constructor
    constructor(name) {
        this._name = name;
    }

    // getter
    get name() {
        return this._name;
    }

    // methods
    speak() {
        console.log(`${this.name} makes a sound!`);
    }
}

class Dog extends Animal {
    // constructor
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}


let simba = new Dog("Simba", "Sheperd");
console.log(simba.name);
// we get simba

simba.name = "Bob";
// nothing happens

/*
    - Here _name is meant to be private, but in JS it is not strict! Things can still change it unlike in languages like C++.
        We instead follow general guidelines and assume always that _variables are private properties and should not be
        changed.
*/
