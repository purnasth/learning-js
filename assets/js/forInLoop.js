console.log("for....in loop\n");

// Syntax
// for (key in object) {
//   // code to be executed
// }

// Example: Iterate Through an Object.

const student = {
  name: "Purna",
  age: 25,
  hobbies: ["reading", "music", "movies"],
  salary: 150000,
};

// using for .. in
for (let key in student) {
  if (key === "salary") {
    console.log(`${key} : $${student[key]}`);
  } else {
    console.log(`${key} : ${student[key]}`);
  }
}

// for...in with Strings
// You can also use for...in loop to iterate over string values. For example,

const string = "code";

// using for...in loop
for (let i in string) {
  console.log(string[i]);
}
