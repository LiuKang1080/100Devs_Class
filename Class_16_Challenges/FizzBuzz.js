// FizzBuzz in JavaScript


function print_fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (((i % 3) === 0) && ((i % 5) === 0)) {
            console.log("Current number: " + i + " : Fizz Buzz");
        } else if ((i % 3) === 0) {
            console.log("Current number: " + i + " : Fizz");
        } else if ((i % 5) === 0) {
            console.log("Current number: " + i + " : Buzz");
        }
    }
}


print_fizzbuzz();
