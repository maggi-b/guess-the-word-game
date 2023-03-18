//unordered list where the player’s guessed letters will appear
const guessedLettersList = document.querySelector(".guessed-letters");
//button with the text “Guess!” in it
const guessButton = document.querySelector("button");
//text input where the player will guess a letter
const letterInput = document.querySelector(".letter");
//empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
//span inside the paragraph where the remaining guesses will display
const remainingSpan = document.querySelector(".remaining span");
//empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

//shows placeholders for each letter that has not been guessed
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    };
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    message.innerText = "";
    const goodGuess = checkInput(guess);
    console.log(goodGuess);
    if (goodGuess) {
        makeGuess(guess);
    };
    letterInput.value = "";
});

const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    //Is the input empty?
    if (input.length === 0){
        message.innerText = "Please enter a letter.";
    //Did you type more than one letter?
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    //Did you enter a character that is not a letter?
    }  else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
    //A single letter was entered.
    return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);   
        console.log(guessedLetters);
    }

};