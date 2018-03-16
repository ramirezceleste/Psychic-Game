

// Create an array that lists all the options that the computer can choose 
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to keep score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Function runs whenever user presses a key
document.onkeyup = function (event) {

// Determines which key was pressed
var userGuess = event.key;

// Create variable so computer can select a letter from the array
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// Create variable for user options
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variable to reset game
var reset = function () {
    guessesLeft = 9;
    guessesSoFar = [];
}

// Create the if and else now for when the user guesses correctly and incorrectly
if (userOptions.indexOf(userGuess) >= 0) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
            updateHTML();
        }

        else {
            guessesLeft--;
            guessesSoFar.push(userGuess);
            updateHTML();
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessesSoFar = [];
            updateHTML();
            reset();
        }
    }

function updateHTML() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector("#guessesSoFar").innerHTML = "Guesses so far: " + guessesSoFar;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

};













