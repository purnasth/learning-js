// Random Numbers

/*
Math.random()
Math.round()
Math.floor()
Math.ceil()
*/

//! Math.random()
// let randomNumber = Math.random(); //? random number between 0 (including) and 1 (excluding)
// console.log(randomNumber);
// document.write(randomNumber);
// document.write("<br>");
// //? display only upto the 4th decimal place
// randomNumber = randomNumber.toFixed(4);
// document.write(randomNumber);

//! Math.round()
// //? Generate a random number between 0 (inclusive) and 10 (exclusive)
// let randomNumber = Math.random() * 10;

// console.log("Random number without rounding:", randomNumber);

// //? Round the random number to the nearest integer
// let roundedNumber = Math.round(randomNumber);

// console.log("Random number after rounding:", roundedNumber);

// ! Maths.floor()

// let randomNumber = Math.random() * 10; //? random number between 0 (including) and 10 (excluding)

// console.log("Random number without floor function:", randomNumber);

// let randomNumberAfterFloor = Math.floor(randomNumber);

// console.log("Random number after floor function:", randomNumberAfterFloor);

// ! Maths.ceil()

// let randomNumber = Math.random() * 10; //? random number between 0 (including) and 10 (excluding)

// console.log("Random number without ceil function:", randomNumber);

// let randomNumberAfterCeil = Math.ceil(randomNumber);

// console.log("Random number after ceil function:", randomNumberAfterCeil);

let number1 = 7.893456;
console.log("Number 1 = ", number1);
console.log("Random Number (0 <= x < 10) = ", Math.random() * 10);
console.log("Used toFixed(2) = ", number1.toFixed(2));
console.log("Used Round() = ", Math.round(number1));
console.log("Used floor() = ", Math.floor(number1));
console.log("Used ceil() = ", Math.ceil(number1));

console.log("\n");

let number2 = 4.267891;
console.log("Number 2 = ", number2);
console.log("Random Number (0 <= x < 10) = ", Math.random() * 10);
console.log("Used toFixed(3) = ", number2.toFixed(3));
console.log("Used Round() = ", Math.round(number2));
console.log("Used floor() = ", Math.floor(number2));
console.log("Used ceil() = ", Math.ceil(number2));
