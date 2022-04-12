//Create a Pizza Object that has four properties and three methods. Do not a use a constructor.


let pizza = {};

// properties:
pizza.size = "large";
pizza.crust = "normal";
pizza.sauce = "tomato";
pizza.extra_cheese = false;
pizza.pan_style = true;
pizza.toppings = ["mushrooms", "black olives"];

// methods:
pizza.delivery_time = () => console.log("Calculating");
pizza.eat = () => console.log(Yum);

// If we wanted to make another pizza, we need to copy and paste the top again, changing the data we want.
// Instead we should use a defualt constructor.

// general syntax:
function Make_Pizza(size, crust, sauce, toppings) {
    // properties
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;

    // methods
    this.delivery_time = () => console.log("Calculating. . .");
    this.eat = () => console.log("Yum!");
}

// create a new pizza object, and pass in properties making this object unique.
let my_pizza = new Make_Pizza("medium", "normal", "extra", ["extra cheese", "chicken"]);
