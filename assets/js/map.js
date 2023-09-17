console.log("Map\n");
// Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

// Creating a Map
const map1 = new Map();
console.log(map1); // Map(0) {}

// Adding elements to a Map
map1.set("name", "Purna");

console.log(map1);

// Getting elements from a Map
// You can access Map elements using the get() method. For example,
console.log(map1.get("name")); // Purna

// Check map element
console.log(map1.has("name")); // true

// Delete map element
map1.delete("name");
console.log(map1); // Map(0) {}

// Clear map
// The clear() method removes all key/value pairs from a Map object. For example,
map1.clear();
console.log(map1); // Map(0) {}


