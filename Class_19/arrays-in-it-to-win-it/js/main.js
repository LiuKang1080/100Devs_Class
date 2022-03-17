//Create an array of movies with at least three movies.
let movies = ["Spider-Man 1", "Spider-Man 2", "Spider-Man 3"];

//Using the array from above, store the first movie in a variable
const first_movie = movies[0];

//Get the length of the original array and store it in a new variable
let arr_length = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
const last_movie = movies[movies.length - 1];
console.log(last_movie);
