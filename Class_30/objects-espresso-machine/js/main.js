//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class Espresso_Machine {
    // constructor
    constructor(color, make, model, price, cup_size) {
        this.color = color;
        this.make = make;
        this.model = model;
        this.price = price;
        this.cup_size = cup_size;
    }

    // methods
    turn_on() {
        console.log("Good day! Ready to make coffee!");
    }

    brew() {
        console.log("Making coffee . . .");
    }

    pour_drink() {
        console.log(`Pouring drink into a ${this.cup_size} cup!`);
    }
}


let gaggia = new Espresso_Machine("black", "Gaggia", "Classic Pro", 400);
