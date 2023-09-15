console.log("Spread Operator\n");

// Spread Operator
// Spread Operator is used to expand an array or object into its elements
// Spread Operator is used to copy an array or object

// Spread Operator with Arrays
const arr1 = ["My", "name", "is", "Purna"];

console.log(arr1);
console.log(...arr1);

// copy an array
const arr2 = [...arr1];
console.log("Copying an array using spread operator");
console.log(arr2);

console.log("Pushing an element to arr1 with copy method");
arr1.push("Shrestha");

console.log(arr1);
console.log(arr2);

console.log("Pushing an element to arr1 with clone method");
const arr3 = arr1;
arr1.push("Shrestha");

console.log(arr1);
console.log(arr3);

// Spread Operator with Objects
console.log("Spread Operator with Objects\n");

const obj1 = {
  name: "Purna",
  age: 21,
  address: "Kathmandu",
};
const obj2 = {
  contact: "9808021753",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// Spread Operator with Functions
console.log("Spread Operator with Functions\n");

const arr4 = [1, 2, 3, 4, 5];

const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

console.log(`sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}`);
console.log(`sum(...arr4) = ${sum(...arr4)}`);
