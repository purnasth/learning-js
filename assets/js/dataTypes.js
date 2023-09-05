console.log("Data Types \n");

// string => "hello"
//  number => 123, 3.14
// BigInt => 1n, 900719925124740999n
// boolean => true, false
// undefined => let a;
// null => let a = null;
// symbol => let value = Symbol("Hello!")
// Object => let student = {};
let value = Symbol("Hello");
console.log(value);
console.log(typeof value);

console.log("1. String\n");
// - Single quotes - 'a' - Double quotes - "Purna" - Backticks - `Hello`
const firstName = "Purna";
const lastName = "Shrestha";
const fullName = `I am ${firstName} ${lastName}`;
console.log("First Name = ", firstName);
console.log("Second Name = ", lastName);
console.log("Full Name = ", fullName);
console.log("Data type = ", typeof fullName);

console.log("\n2. Number\n");
const number1 = 3;
const number2 = 3.14;
const number3 = 3e5; // 3 * 10^5

console.log("Number 1 = ", number1);
console.log("Number 2 = ", number2);
console.log("Number 3 = ", number3);
console.log("Data type = ", typeof number1);

console.log("\n3. BigInt\n");
const bigNumber1 = 1n;
const bigNumber2 = 900719925124740999n;
console.log("Big Number 1 = ", bigNumber1);
console.log("Big Number 2 = ", bigNumber2);
console.log("Data type = ", typeof bigNumber1);

//?NOTE: Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// const sum = bigNumber1 + number1;
// console.log("Sum = ", sum);

console.log("\n4. Boolean\n");
const isTrue = true;
const isFalse = false;

console.log("Is True = ", isTrue);
console.log("Is False = ", isFalse);
console.log("Data type = ", typeof isTrue);

console.log("\n5. Undefined\n");
let a;
console.log("Undefined = ", a);
console.log("Data type = ", typeof a);

console.log("\n6. Null\n");
const b = null;
console.log("Null = ", b);
console.log("Data type = ", typeof b);

console.log("\n7. Symbol\n");
const c = Symbol("Hello");
console.log("Symbol = ", c);
console.log("Data type = ", typeof c);

console.log("\n8. Object\n");
const student = {
  name: "Purna",
  age: 21,
  address: "Kathmandu",
  hobbies: ["Coding", "Gaming", "Reading"],
  contact: {
    email: "purnashrestha0310@gmail.com",
  },
};

console.log("Student = ", student);
console.log("Name = ", student.name);
console.log("Data type = ", typeof student);
