//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function stop_snacking() {
    let num = Number(document.querySelector("input").value);
    let text_field = document.querySelector("#stops");

    // first clear the texdt field:
    text_field.innerText = "";

    // populate the text field with the text:
    for (let i = 1; i <= num; i++) {
        text_field.innerText += " Stop Snacking! ";
    }
}

document.querySelector("#help").addEventListener("click", stop_snacking);
