console.log("\n\n");
console.log("DAY 11 do while loop\n\n");

let userName = "Purna";

console.log(userName, "is a global variable.");

if (true) {
  let fullName = "Purna Shrestha";
  console.log(fullName, "is a local variable.");
}

console.log("Calling a global variable outside the block : ", userName);
console.log("Calling a local variable outside the block : ", fullName); //shows error saying fullName is not defined.

console.log("\n\n");
