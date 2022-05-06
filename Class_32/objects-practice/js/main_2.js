// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
class Contractor {
    constructor(name, role) {
        this._name = name;
        this._role = role;
    }

    get name() {
        return this._name;
    }
    
    get role() {
        return this._role;
    }

    sayHello() {
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!`);
    }

    sayBye() {
        console.log(`It has been a pleasure working with you!`);
    }
}

class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }

    get tech() {
        return this._tech; 
    }

    sayHello() {
        console.log(`Hello, I am ${this._name} and I work on the Front-end!`);
    }
}

class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }

    get tech() {
        return this._tech; 
    }

    sayHello() {
        console.log(`Hello, I am ${this._name} and I work on the Back-end!`);
    }
}

let machi = new Front('The Machine', 'Front-end', 'React');
let simba = new Back('Simba', 'Back-end', 'Node');
let agencyList = [machi, simba];

for (robotUnicorn of agencyList) {
    robotUnicorn.sayHello();
}

/*
class Contractor{
    constructor(name, role) {
        this._name = name;
        this._role = role;
    }

    get name() {
        return this._name;
    }

    get role() {
        return this._role;
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`);
    }
}

class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }

    get tech() {
        return this._tech;
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`);
    }
}

class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role);
        this._tech = tech;
    }

    get tech() {
        return this._tech;
    }

    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`);
    }
}

let bob_2 = new Contractor('Bob', 'Front-end');
let simba_2 = new Front('Simba', 'Front-end', 'React');
let machi_2 = new Back('The Machine', 'Back-end', 'Node');
let agency_2 = [bob_2, simba_2, machi_2];

for (person of agency_2) {
    person.sayHello();
}
*/
