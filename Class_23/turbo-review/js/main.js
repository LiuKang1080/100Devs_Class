// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const str = "Hello World!";
if (str[str.length - 1] === "?") {
    console.log("Variable ends in a '?'");
} else {
    console.log("Variable does not ends in a '?'");
}

// We can also use the .endsWith() method
console.log(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiple_words = "Hello, I am a jr. dev";
let result = multiple_words.replaceAll("jr. dev", "software engineer");
console.log(result);

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
