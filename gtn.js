function getRandomInteger(min, max) {
    'use strict';
    var x = Math.floor(Math.random() * max + 1)
    if (x > min-1) {
        return (x);
    } else {
        getRandomInteger(min, max)
    }
}
var number = getRandomInteger(1,10);

function compareNumbers(first, second) {
  return (first == second);
}

function guessTheNumber() {
    'use strict';
    var y = document.getElementById("number").value;
    if (y <= 10 && y > 0 && Number.isInteger(number)) {
        if (compareNumbers(number, y)) {
            window.alert("You guessed right! New number generated!" );
        } else {
            window.alert("You guessed wrong! New number generated!");
        }
    } else {
        window.alert("Invalid input, please enter an integer between 1 and 10. New number generated!");
    }
    number = getRandomInteger(1, 10);  
}

window.onload = function() {
   number = getRandomInteger(1,10);
}