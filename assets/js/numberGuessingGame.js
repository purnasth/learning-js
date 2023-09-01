console.log("\n\n");
console.log("Day 6 Project I\n");
console.log("Number Guessing Game\n");

let userInput = window.prompt("Enter a number in between 1 and 3: ");

userInput = Number(userInput);
// userInput = parseInt(userInput);
// console.log(typeof userInput);

console.log("User input = ", userInput);

let computerGuess = Math.ceil(Math.random() * 3);

console.log("Computer guess = ", computerGuess);

if (userInput === computerGuess) {
  console.log("You guessed the correct number!");
} else {
  console.log("Sorry, try again.");
}

console.log("\n\n");
