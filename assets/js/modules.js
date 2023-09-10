console.log("Learning modules...");

import { sum, subtract } from "./modules/calc.js";
import { greetPerson } from "./modules/greet.js";
// import { default as sayName } from "./modules/sayName.js";
// another method of importing default export
import sayName from "./modules/sayName.js";

console.log(sum(1, 2));
console.log(subtract(1, 2));

let displayName = greetPerson("Purna");
console.log(displayName);

let name = sayName("Purna");
console.log(name);
