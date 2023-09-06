console.log("Recursion \n");
// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// The syntax for recursive function is:

// function recurse() {
//     recurse();
// }

// recurse();

console.log("JS program to set the countdown\n");

function countDown(number) {
  console.log(number);

  let newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}
countDown(4);

console.log("JS program to find the factorial of a number\n");
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
const num = 5;
console.log("number = ", num);

if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}.`);
}
