//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    brand: "Nike",
    color: "Black",
    current_time: 0,
    stored_time: 0,

    start_stopwatch: () => {
        console.log("Starting stopwatch!");
    },

    stop_stopwatch: () => {
        console.log("Stopping stopwatch!");
    },

    print_brand: () => {
        console.log("The stopwatch's brand is: " + stopwatch.brand);
    }
}

stopwatch.print_brand();
