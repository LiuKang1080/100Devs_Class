class Animal {
    // constructor:
    constructor(name) {
        this._name = name;
    }

    // getters:
    get name() {
        return this._name;
    }

    // methods:
    speak() {
        console.log(`${this._name} makes a sound!`);
    }
}

class Dog extends Animal {
    // constructor:
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    // getters:
    get breed() {
        return this._breed;
    }

    // methods:
    speak() {
        super.speak();
        console.log(`${this.name} barks!`);
    }
}

class Cat extends Animal {
    // constructor:
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }

    // getters:
    get breed() {
        return this._breed;
    }

    // methods:
    speak() {
        super.speak();
        console.log(`${this.name} meows!`);
    } 
}


let simba = new Dog('Simba', 'Shepard');
let machi = new Dog('The Machine', 'Pitbull');
let salem = new Cat('Salem', 'American Shorthair');

let farm = [simba, machi, salem];

for( a of farm ){
    a.speak();
}
