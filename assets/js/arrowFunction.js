console.log("Arrow function () => {} \n");

// normal function expression
let x = function (x, y) {
  return x * y;
};
console.log(x(5, 5));

// arrow function
let y = (x, y) => x * y;
console.log(y(5, 5));

//* Syntax
// () => {} // arrow function
let myFunction = (arg1, arg2, ...argN) => {
  // statements or function body
};

// let => variable declaration (ES6)
// myFunction => function name
// (arg1, arg2, ...argN) => function arguments
// equivalent to: () => { return expression; }
// { ... } => function body

//* Example 1: Arrow function with no argument

let greet = () => console.log("Hello there");
greet();

//* Example 2: Arrow function with one argument

let greetOne = (name) => console.log(`Hello ${name}`);
greetOne("Purna");

//* Example 3: Arrow function with multiple arguments

let greetTwo = (name, age) => console.log(`Hello ${name} ${age}`);
greetTwo("Purna", 21);

//* Example 4: Arrow function with return statement

let greetThree = (name) => {
  return `Hello ${name}`;
};
console.log(greetThree("Purna"));

//* Example 5: Multiple Arrow functions

let sum = (a, b) => {
  let result = a + b;
  return result;
};

let result = sum(5, 5);
console.log(result);

//* Example 6: Ternary operator in an arrow function

let age = 21;

let welcome =
  age < 18
    ? () => console.log("You aren't 18+.")
    : () => console.log("Greetings! You're 18+.");

welcome();
