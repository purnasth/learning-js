console.log("Default Parameters \n");

let sum = (x = 3, y = 5) => {
  return x + y;
};

console.log(sum(5, 5));
console.log(sum(2));
console.log(sum());

// Explanation :

// sum(5, 5) // returns 10 because x = 5 and y = 5, when both parameters are passed x takes 5 and y takes 5.
// sum(2) // returns 7 because x = 2 and y = 5, when only one parameter is passed x takes 2 and y takes default value 5.
// sum() // returns 8 because x = 3 and y = 5, when no parameter is passed x takes default value 3 and y takes default value 5.

console.log("Passing Functions Value as default Value \n");

const add = () => 15;

const calculate = function (x, y = x * add()) {
  return x + y;
};

console.log(calculate(10));

// Using Expressions as Default Values
// It is also possible to provide expressions as default values.

// Example 1: Passing Parameter as Default Values

const sumOne = (a = 1, b = a, c = a + b) => {
  return a + b + c;
};
console.log(sumOne());

// !NOTE: If you reference the parameter that has not been initialized yet, you will get an error. For example,

const sumTwo = (a = b, b = 1) => {
  return a + b;
};
console.log(sumTwo());
