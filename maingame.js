var inquirer = require("inquirer");
var game = require("./randomwords.js");
var Letter = require("./letter.js");

console.log("===============================================")
console.log("Guess One of Hero\'s Favorite Sports Teams")
console.log("===============================================")
console.log("May Need Letters, Numbers, and Spaces")
console.log("------------------------------------------------")


var word = game.chooseWord();
var chosenWord = word.word;
var letters = [];
for (var i=0; i<chosenWord.length; i++) {
  letters.push(new Letter(chosenWord.charAt(i)));
}
var guessesLeft = 5;
guessLetter();

function guessLetter() {
  displayWord();
  inquirer.prompt({name: "letter", message: "Please enter a letter:"}).then(function(answer) {
    if (word.verifyLetter(answer.letter, letters) == true) {
      console.log("Correct!");

    }
    else {
      guessesLeft--;
      if (guessesLeft > 0) {
        console.log("Wrong. You have " + guessesLeft + " lives.");
      }
      else {
        console.log("Sorry. Game over!");
      }
    }
    if (word.verifySolved(letters) == false) {
      if (guessesLeft > 0) {
        guessLetter();
      }
    }
    else {
      displayWord();
      console.log("You are a world champion!");
    }
  });
}

function displayWord() {
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}