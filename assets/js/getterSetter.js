console.log("Getter and Setter\n");

// JavaScript Getter and Setter
// In JavaScript, there are two kinds of object properties:

// Data properties
// Accessor properties

// Data Property
// Here's an example of data property that we have been using in the previous tutorials.

// const student = {

//     // data property
//     firstName: 'Monica';
// };

// Accessor Property
// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

//? JavaScript Getter
// In JavaScript, getter methods are used to access the properties of an object. For example,

const student = {
  firstName: "Purna",
  lastName: "Shrestha",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// accessing getter method
console.log(student.fullName); // Purna Shrestha

// trying to access as a method
//! console.log(student.fullName()); // TypeError: student.fullName is not a function

//? JavaScript Setter
// In JavaScript, setter methods are used to change the values of an object. For example,

const student1 = {
  firstName: "Purna1",

  //   setter
  set changeName(newName) {
    this.firstName = newName;
  },
};
console.log(student1.firstName); // Purna1

// change(set) object property using a setter
student1.changeName = "Purna2";
console.log(student1.firstName); // Purna2
