//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


// constructor function
function Make_StreetFighter_character(punch, kick, catch_phrase, special_move) {
    // properties
    this.punch = punch;
    this.kick = kick;
    this.catch_phrase = catch_phrase;
    this.special_move = special_move;

    // methods
    this.taunt = () => {
        return (`You will die by my ${this.special_move}`);
    }

    this.winning = () => {
        return (`HA HA ${this.catch_phrase}`);
    }

    this.dash = () => {
        return ("WHOOP! Missed me!");
    }
}


// create objects
let ryu = new Make_StreetFighter_character("High Punch", "High Kick", "Get over here!", "Haduken!");
console.log(ryu.dash());
console.log(ryu.winning());
console.log(ryu.taunt());
