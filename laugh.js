/*
 * Programming Quiz: Laugh (5-4)
 * 
 * Directions:
    Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */


let laugh = function (num) {
    let message = "";
    for (var i = 0; i < num; i++) {
        message += "ha";
    }
    return message + "!";
};

console.log(laugh(3)); // prints hahaha