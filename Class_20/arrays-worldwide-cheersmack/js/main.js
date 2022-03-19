//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number
// as seperate elements


function create_array(num) {
    arr = [];

    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(create_array(10));
