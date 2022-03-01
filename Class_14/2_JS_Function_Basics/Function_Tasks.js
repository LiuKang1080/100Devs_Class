// JavaScript Function Tasks

/* 1)
    - Given the following function:
    
        function checkAge(age) {
            if (age > 18) {
                return true;
            } else {
                return confirm('Did parents allow you?');
            }
        }
    
    - Convert this function so that it uses ? as the if statement.
    - Convert this function so that it uses || as the if statement.
*/
function check_age_1(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?");
}

function check_age_2(age) {
    return (age > 18) || confirm("Did your parents allow you?");
}

/* 2)
    - Write a function min(a,b) which returns the least of two numbers a and b.
*/
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

/* 3)
    - Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the 
        result.
*/
function pow(x, n) {
    if (n < 1) {
        console.log("ERROR: Exponent power needs to be greater than 1! \n");
        return 0;
    }

    let result = x;

    for (let i = 1; i <= n; i++) {
        result *= x;
    }

    return result;
}
