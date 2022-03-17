//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number
// as seperate elements


function create_array(upper_limit) {
    let arr = [];

    for (let i = 1; i <= upper_limit; i++) {
        arr.push(i);
    }

    return arr;
}
