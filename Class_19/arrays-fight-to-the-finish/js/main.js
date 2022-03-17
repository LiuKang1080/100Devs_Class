//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ["Spider-Man 1", "Spider-Man 2", "Spider-Man 3"];

for (let i = 0; i < movies.length; i++) {
    document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
    nums[i] += 3;
    console.log(nums[i]);
}

// OR
// nums.forEach((ele, i) => {
//     nums[i] = item + 3;
// });

//Find the average of all the numbers from question two
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log("Average is: " + (sum / nums.length));
