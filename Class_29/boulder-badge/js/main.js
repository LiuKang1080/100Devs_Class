// Variables
/*
You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least
once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and
weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your 
pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that
sums all the rare candies you would need. 
*/
let bulbasaur = 5;
let caterpie = 1;
let weedle = 1;
let totalCandies = 0;

function add_candies(bulbasaur_level, caterpie_level, weedle_level) {
    totalCandies += bulbasaur_level - bulbasaur;
    totalCandies += caterpie_level - caterpie;
    totalCandies += weedle_level - weedle;

    return totalCandies;
}

console.log(add_candies(16, 7, 7));


//Conditionals And Functions
/*
You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one 
function that converts a Fahrenheit value to Celcius and another fuction that tells you whether or not charmander can battle
*/
function temp_converter(fahrenheit) {
    // convert Fahrenheit value to a Celcius value
    // returns celcius value
    return (fahrenheit - 32) / 1.8000;
}

function charmander_check(temp) {
    if (temp_converter(temp) > 0) {
        console.log("Charmander can battle!");
    } else {
        console.log("Charmander cannot battle");
    }
}


//Loops
/*
You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console
"Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party.
*/
let str = "";

function send_pikachu(party_size) {
    for (let i = 1; i <= party_size; i++ ) {
        str += "Pikachu I choose you! ";
    }

    console.log(str);
}

send_pikachu(6);
