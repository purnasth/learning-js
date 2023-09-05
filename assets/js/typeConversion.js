console.log("Type Conversion \n");

// implicit type conversion - automatic type conversion
// explicit type conversion - manual type conversion

// implicit type conversion
console.log("Implicit type conversion\n");
console.log("1.Implicit Conversion to String :\n");
let result;
result = 3 + "3";
console.log("3 + '3' = ", result); //33

result = 3 + 3 + "3";
console.log("3 + 3 + '3' = ", result); //63

result = "3" + 3 + 3;
console.log("'3' + 3 + 3 = ", result); //333

result = "3" + (3 + 3);
console.log("'3' + (3 + 3) = ", result); //36

result = 3 + 3 + Number("3");
console.log("3 + 3 + Number('3') = ", result); //9

result = "3" + true;
console.log("'3' + true = ", result); //3true

console.log("typeof result = ", typeof result); //string

console.log("\n2.Implicit Conversion to Number :\n");
result = 3 + Number("3");
console.log("3 + Number('3') = ", result); //6

result = "3" - "2";
console.log("'3' - '2' = ", result); //1

console.log("typeof result = ", typeof result); //number

console.log("Explicit type conversion\n");

let value;

// string to number
value = Number("3");
console.log("Number('3') = ", value); //3
console.log("typeof value = ", typeof value); //number

// boolean to number
value = Number(true);
console.log("Number(true) = ", value); //1
console.log("typeof value = ", typeof value); //number

//? Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

// let result;
// result = parseInt('20.01');
// console.log(result); // 20

// result = parseFloat('20.01');
// console.log(result); // 20.01

// result = +'20.01';
// console.log(result); // 20.01

// result = Math.floor('20.01');
// console.log(result); // 20

// //! similarly to convert to the string.
// use String() function or toString() method.
// //! similarly to convert to the boolean.
// use Boolean() function or !!(double negation) operator.
