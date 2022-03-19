//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array.
// (do not use map or filter)


function generate_even_num_array(arr) {
    // return an array containing only even elements from the given array
    let even_array = [];

    arr.forEach( (element) => {
        if (element % 2 === 0) {
            even_array.push(element);
        }
    });

    return even_array;
}

let my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(generate_even_num_array(my_array));
