console.log("\n\n");
console.log("DAY 3 window.prompt\n\n");

let userInput = window.prompt("Enter your name: ");

console.log("\nDATA TYPE typeof\n\n");
console.log("User Input = ", userInput);

console.log("typeof userInput = ", typeof userInput);

// ? NOTE: Null. In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object.

// here, if the input is number it still shows a string so .. let's see type conversion
userInput = Number(userInput);
console.log("User Input = ", userInput);
console.log("typeof userInput = ", typeof userInput);

console.log("\n\n");
