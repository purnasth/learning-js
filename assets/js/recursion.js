console.log("Recursion \n");
// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// The syntax for recursive function is:

// function recurse() {
//     recurse();
// }

// recurse();

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}
