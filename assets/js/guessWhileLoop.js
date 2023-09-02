console.log("\n\n");
console.log("DAY 10 Number Guessing Game using while loop\n\n");

let userWins = false;

let correctNumber = 3;

while (!userWins) {
  let userGuess = window.prompt("Guess a number between 1 & 5 : ");
  userGuess = Number(userGuess);

  if (userGuess === correctNumber) {
    userWins = true;
    alert("You Won!");
  } else {
    alert("Try Again!");
  }
}

console.log("\n\n");
