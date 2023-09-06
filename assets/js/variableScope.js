console.log("\n\n");
console.log("DAY 11 Global & Local Variable.\n\n");

let userName = "Purna";

console.log(userName, "is a global variable.");

if (true) {
  let fullName = "Purna Shrestha";
  console.log(fullName, "is a local variable.");
}

console.log("Calling a global variable outside the block : ", userName);
console.log("Calling a local variable outside the block : ", fullName); //shows error saying fullName is not defined.

console.log("\n\n");

console.log("block-scoped concept");
// global variable
let a = "Hello";

function greet() {
  // local variable
  let b = "World";

  console.log(a + " " + b);

  if (b == "World") {
    // block-scoped variable
    let c = "hello";

    console.log(a + " " + b + " " + c);
  }

  // variable c cannot be accessed here
  console.log(a + " " + b + " " + c);
}

greet();
