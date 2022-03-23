//Arrays
//Create and array of tv shows. Loop through and print each show to the console
let tv_shows = ["Spider-Man", "Power Rangers", "Breaking Bad"];
tv_shows.forEach( (ele) => {
    console.log(ele);
});

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let old_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_arr = [];

for (let i = 0; i < old_arr.length; i++) {
    if (old_arr[i] % 2 === 0) {
        new_arr.push(old_arr[i]);
    }
}

console.log(new_arr);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function find_second_highest(arr) {
    let highest = 0;
    let second_highest = 0;

    // sort the array
    arr.sort( (a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    // set the highest and second highest variables using indicies
    highest = arr[arr.length - 1];
    second_highest = arr[arr.length - 2];

    return second_highest;
}

function find_second_lowest(arr) {
    let lowest = 0;
    let second_lowest = 0;

    // sort the array
    arr.sort( (a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    // set the highest and second highest variables using indicies
    lowest = arr[0];
    second_lowest = arr[1];

    return second_lowest;
}

function find_sum(arr) {
    let second_highest = find_second_highest(arr);
    let second_lowest = find_second_lowest(arr);

    return second_highest + second_lowest;
}

console.log(find_sum(old_arr));
