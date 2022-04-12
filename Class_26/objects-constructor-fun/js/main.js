//Create a constructor with 4 properties and 3 methods


function Pizza_machine(size, toppings, sauce, crust) {
    // properties:
    this.size = size;
    this.toppings = toppings;
    this.sauce = sauce;
    this.crust = crust;

    // methods:
    this.delivery_time = () => console.log("Calculating. . . ");
    
    this.eat = () => console.log("Yum!");
    
    this.frisbee = () => console.log("YEET!");
}


let my_pizza = new Pizza_machine("large", ["extra cheese", "mushrooms"], "white garlic sauce", "deep dish");


// New ES6+ Class syntax:
class Make_Car {
    constructor(make, model, color, door_num) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.door_num = door_num;
    }

    // methods
    drive() {
        console.log(`Your ${this.make} ${this.model} is driving!`);
    }

    shut_down() {
        console.log(`The ${this.make} ${this.model} is turned off`);
    }
}

// create a new car object:
let my_car = new Make_Car("Toyota", "Camry", "Black", 4);
my_car.drive();
