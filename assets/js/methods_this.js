console.log("JavaScript Methods and this keyword\n");

const person = {};

// adding a property to the object
person.name = "Purna";

// adding a method to the object
person.sayHello = function () {
  console.log("Hello, I'm " + this.name + ".");
};
//? JavaScript "this" Keyword
// To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.

// calling the method
person.sayHello(); // Hello, I'm Purna
