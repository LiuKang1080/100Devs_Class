//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

// let age = 17;

function age_checker(age) {
    if (16 > age) {
        return ("You cannot drive");
    } else if (16 <= age && age < 18) {
        return ("can't hate from outside the club, because they can't even get in");
    } else if (18 <= age && age < 21) {
        return ("can not drink");
    } else if (21 <= age && age < 25) {
        return ("can not rent cars affordably");
    } else if (25 <= age && age < 30) {
        return ("can not rent fancy cars affordably");
    } else {
        return ("There is nothing else to look forward to. SAD!");
    }
}

function click_h1() {
    let value = document.querySelector("#danceDanceRevolution").value;
    let result = age_checker(value);

    document.querySelector("p").innerText = result;
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector("h1").addEventListener("click", click_h1)
