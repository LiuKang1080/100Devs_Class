//Arrays
/*
Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list
and prints it to the console.
*/
function reverse_array(array) {
    console.log(array.reverse());
}


/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element
in a is strictly greater than the sum of the cubes of each element in b.
*/
function array_sum_check(arr_a, arr_b) {
    /*
        - Manual approach:
        - Time complexity O(n x m): where n is the length of array a, and m is the length of array b.
        - Space complexity O(n || m): Here the maximum space complexity is the length of the highest array.
    */
    let arr_a_sum = 0;
    let arr_b_sum = 0;

    // loop through array a:
    for (let i = 0; i < arr_a.length; i++) {
        arr_a_sum += (Math.pow(arr_a[i], 2));
    }

    // loop through array b:
    for (let i = 0; i < arr_b.length; i++) {
        arr_b_sum += (Math.pow(arr_b[i], 3));
    }

    if (arr_a_sum > arr_b_sum) {
        return true;
    } else {
        return false;
    }
}


// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function array_multiple(arr) {
    // declare variables
    let array_multiple = [];

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // if the element is completely divisible by the current index, add that element to array_multiple
        if (arr[i] % i === 0) {
            array_multiple.push(arr[i]);
        }
    }

    return array_multiple;
}

console.log(array_multiple([22, -6, 32, 82, 9, 25]));


/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer
as a number.
*/
function array_convert_sum(arr) {
    // declare variables
    let total = 0;

    // loop through the array, convert strings into number, and then add it to the total
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "string") {
            // convert current element into number, and then add it to the total
            total += Number(arr[i]);
        } else {
            // it's already a number, add it to the total
            total += arr[i];
        }
    }

    return total
}

/*
    - We could have used the built in methods like map(), filter(), and reduce()
*/
