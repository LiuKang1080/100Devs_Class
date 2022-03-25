//Create a mouse object that has four properties and three methods
let mouse = {};
mouse.brand = "Logitech";
mouse.color = "Black";
mouse.model = "G502";
mouse.wireless = true;

mouse.left_click = () => {
    console.log("Left click");
}

mouse.right_click = () => {
    console.log("Right click");
}

mouse.scroll = () => {
    console.log("Scroll");
}


// Car Constructor
function Make_car(car_make, car_model, car_color, door_num) {
    // properties
    this.make = car_make;
    this.model = car_model;
    this.color = car_color;
    this.doors = door_num;
    
    // methods
    this.honk = () => {
        return ("BEEP BEEP!");
    }

    this.lock = () => {
        return (`Locked ${this.doors} doors!`);
    }
}

let honda_civic = new Make_car("Honda", "Civic", "Red", 4);
