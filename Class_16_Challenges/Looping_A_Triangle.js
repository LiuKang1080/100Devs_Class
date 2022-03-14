// Looping a Triangle challenge:

/*
    - Write a loop that makes seven calls to console.log to output the following triangle:
    
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/


function print_triangle(depth) {
    /*
        - depth is the triangle depth. For the challenge this will be 7.
        - Use a for loop to print the #, incrementing upwards to the limit of 7.
    */
    let triangle = "#";
    
    for (let i = 1; i <= depth; i++) {
        console.log(triangle);
        triangle += "#";
    }
}


print_triangle(7);
