//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function multiply_array(arr) {
    let product = 1;

    // loop through the array and multiply product by the element
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    console.log("Total product is: " + product);
    // alert("Total product is: " + product);
}

let my_array = [1, 2, 3, 4, 5];
multiply_array(my_array);

// We can also use the forEach() method to do the same thing.
// remmeber the forEach() method takes in 3 things: 1) the element itself as a variable. 2) the index in a variable.
// 3) the array itself if we need it

function multiply_array_each(arr) {
    let product = 1;

    arr.forEach((element) => {
        product *= element
    });

    console.log("Total product is: " + product);
}

multiply_array_each(my_array);
