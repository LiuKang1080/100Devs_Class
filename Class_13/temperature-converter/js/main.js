//Write your pseduo code first! 
/*
    1) get celsius from the user
    2) convert into fahrenheit using the formula
    3) display result in the DOM
*/

/*
    - The formula for converting celsius to fahrenheit is:

        (C * 9/5) + 32 = F
*/


document.querySelector("#temp").addEventListener('click', convert_temp);


function convert_temp() {
    // get the celsius temp:
    const celsius = document.querySelector("#celsius").value;
    let fahren = 0;

    // check to see if celsius is less than -273.15. celsius MUST be greater than this number!
    if (celsius >= -273.15) {
        fahren = (celsius * (9 / 5)) + 32;
    } else {
        alert("Less than Absolute Zero warning! Enter a number greater than -273.15");
    }

    document.querySelector("#result").innerText = fahren;
}


function test() {
    let x = 5;
    document.querySelector("#test").innerText = x;
}

document.querySelector("#temp").addEventListener("click", test());
