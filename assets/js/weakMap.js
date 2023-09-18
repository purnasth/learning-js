console.log("WeakMap");

// Weakmap
// The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,

const weakMap1 = new WeakMap();
console.log(weakMap1); // WeakMap {}

// Adding elements to a WeakMap
// You can add elements to a WeakMap using the set() method. For example,

const obj1 = {};

weakMap1.set(obj1, "Purna");

console.log(weakMap1); // WeakMap { {} => 'Purna', {} => 'Purna' }

// weakMap1.set("Name", "Purna");
// console.log(weakMap1); // TypeError: Invalid value used as weak map key
// When you try to add other data types besides objects, WeakMap throws an error.

console.log("WeakMap Methods");
console.log("get()");
console.log("set()");
console.log("delete()");
console.log("has()");

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, "hello");

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(obj)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(obj)); // true

// delete the element of WeakMap
console.log(weakMap.delete(obj)); // true

console.log(weakMap); // WeakMap {}

//! WeakMaps Are Not iterable
// Unlike Maps, WeakMaps are not iterable. For example,
// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {}

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, "hello");

// // looping through WeakMap
// for (let i of weakMap) {
//   console.log(i); // TypeError
// }
