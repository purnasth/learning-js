console.log("Constructor Function\n");

//? Constructor Function
// A constructor function is used to create an object. Let's see an example.

// constructor function
function Person(name) {
  //   this.name = "Purna";
  this.name = name;
  this.sayHello = function () {
    console.log("Hello, I'm " + this.name + ".");
  };
}

// creating objects
// const person1 = new Person();
// const person2 = new Person();
const person1 = new Person("Purna1");
const person2 = new Person("Purna2");

// calling the method
person1.sayHello(); // Hello, I'm Purna
person2.sayHello(); // Hello, I'm Purna

//! Note: It is considered a good practice to capitalize the first letter of your constructor function.

// Create Objects: Constructor Function Vs Object Literal
// Object Literal is generally used to create a single object. The constructor function is useful if you want to create multiple objects. For example,

// using object literal
// let person = {
//   name: "Sam",
// };
// // using constructor function
// function Person() {
//   this.name = "Sam";
// }

// let person1 = new Person();
// let person2 = new Person();

// // using constructor function
// function Person() {
//   this.name = "Sam";
// }

// let person1 = new Person();
// let person2 = new Person();

// // adding new property to person1
// person1.age = 20;

// // using object lateral
// let person = {
//   name: "Purna",
// };

// console.log(person.name); // Purna

// let student = person;

// // changes the property of an object
// student.name = "Purna1";

// // changes the origins object property
// console.log(person.name); // Purna1
