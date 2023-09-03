console.log("DAY 12 dice roll using functions\n\n");

function rollDice() {
  let randomNumber = Math.ceil(Math.random() * 6);
  console.log(`Dice roll = ${randomNumber}`);
}

let times = Number(
  window.prompt("How many times you want to roll the dice : ")
);

for (let i = 0; i < times; i++) {
  rollDice();
}
