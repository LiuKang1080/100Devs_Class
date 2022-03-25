// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string,
// and print the value to the console
let fav_drink = " Coke ";
fav_drink = fav_drink.trim();
console.log(fav_drink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "Testing Hello World!";

if (str.search("apple") < 0) {
    console.log("The word 'apple' is not in the sentence.");
} else {
    console.log("The word 'apple' is in the sentence!");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rock_paper_scissors() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function play_game(user_choice) {
    user_choice = user_choice.toLowerCase();

    // get result from bot
    bot_choice = rock_paper_scissors();

    if (
        ( (user_choice === "rock") && (bot_choice === "scissors") ) ||
        ( (user_choice === "paper") && (bot_choice === "rock") ) ||
        ( (user_choice === "scissors") && (bot_choice === "paper")) ) {

        console.log("You Win!");
    } else if (user_choice === bot_choice) {
        console.log("You Tied!");
    } else {
        console.log("You Lose!");
    }
}

play_game("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function play_multiple_times(user_choice_array) {
    user_choice_array.forEach( choice => {
        play_game(choice);
    });
}

let user_choice_array = ["rock", "paper", "scissors"];
play_multiple_times(user_choice_array);
