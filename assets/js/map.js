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

// Map size
// The size property returns the number of elements in a Map object. For example,

const map2 = new Map();
map2.set("name", "Purna");
map2.set("age", 30);

console.log(map2.size); // 2

// Iterating over a Map
// You can use the for...of loop to iterate over a Map object. For example,

const map3 = new Map();
map3.set("name", "Purna");
map3.set("age", 30);
map3.set("contact", 9808021753);

for (let [key, value] of map3) {
  console.log(`${key} = ${value}`);
}

// using forEach() method
map3.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Converting a Map to an Array
// You can convert a Map object to an Array using the spread operator (...). For example,

const map4 = new Map();
map4.set("name", "Purna");
map4.set("age", 30);
map4.set("contact", 9808021753);

const arr = [...map4];

console.log(arr); // [ [ 'name', 'Purna' ], [ 'age', 30 ], [ 'contact', 9808021753 ] ]

// Converting an Array to a Map
// You can convert an Array to a Map object using the Map constructor. For example,

const arr1 = [
    ["name", "Purna"],
    ["age", 30],
    ["contact", 9808021753],
  ],
  map5 = new Map(arr1);

console.log(map5); // Map(3) { 'name' => 'Purna', 'age' => 30, 'contact' => 9808021753 }

// Get key/value pairs from a Map
// You can get key/value pairs from a Map object using the entries() method. For example,

const map6 = new Map();
map6.set("name", "Purna");
map6.set("age", 30);
map6.set("contact", 9808021753);

const entries = map6.entries();

for (let entry of entries) {
  console.log(entry);
}
