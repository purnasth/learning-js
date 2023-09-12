console.log("JavaScript ES6; \n");

// => newer version of json
// => introduced in 2015
// => ecmascript 2015 or ecmascript 6

// * arrow function
// normal function expression
const greet = function () {
  console.log("hello there");
};
greet();

// arrow function
const greetArrow = () => {
  console.log("hello there");
};
greetArrow();

// * destructuring
// => extract data from array or object

// // normal way
// const person = {
//   name: "Purna",
//   age: 21,
//   job: "Web developer",
// };
// let name = person.name;
// let age = person.age;
// let job = person.job;

// console.log(name);
// console.log(age);
// console.log(job);

// // destructuring
// let { name, age, job } = person;
// console.log(name);
// console.log(age);
// console.log(job);
