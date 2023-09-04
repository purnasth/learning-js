console.log("DAY 16 Hoisting error\n\n");

console.log("\n\nHoisting Check if on function only\n\n");

checkFunction("before");

function checkFunction(position) {
  console.log(`Hello from "${position}" the functions.`);
}

checkFunction("after");

console.log("\n\nHoisting Error\n\n");
//? check hoisting
hoisting("before"); //hoisting error is occurs.. says cannot access 'hoisting' before initialization.

const hoisting = function checkHoisting(position) {
  console.log(`Hello from "${position}" function hoisting.`);
};

hoisting("after");
checkHoisting("From checkHoisting"); //says checkHoisting is not defined.
