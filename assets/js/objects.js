console.log("JavaScript Objects\n");

// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
// key value pair

//? Note: If you are familiar with other programming languages, JavaScript objects are a bit different. You do not need to create classes in order to create objects.

const introduction = {
  fullName: "Purna Shrestha",
  age: 21,
  address: "Kathmandu",
  contact: {
    email: "purnashrestha0310@gmail.com",
    phone: 9808021753,
  },
};

console.log(introduction);
console.log(typeof introduction);

//* Accessing Object Properties
// 1. Using dot Notation
// Syntax: objectName.propertyName
// 2. Using bracket Notation
// Syntax: objectName["propertyName"]
console.log(introduction.fullName);
console.log(introduction["age"]);
console.log(introduction.age);
console.log(introduction.contact.email);

//* JavaScript Object Methods
// JavaScript objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.

const person = {
  firstName: "Purna",
  lastName: "Shrestha",
  age: 21,
  greet: function () {
    return `Hello ${person.firstName} ${person.lastName}! This is a function inside an object.`;
    // return `Hello ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.greet());
