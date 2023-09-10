console.log("Learning modules...");

import { sum, subtract } from "./modules/calc.js";

// ? using alias
// import { sum as add, subtract } from "./modules/calc.js";
// it is done when we same name of function in different files

// ? namespaced import
// import * as calc from "./modules/calc.js";
// it is done when we have multiple exports in a file

import { greetPerson } from "./modules/greet.js";
// import { default as sayName } from "./modules/sayName.js";
// another method of importing default export
import sayName from "./modules/sayName.js";

// combined export
// import * as combine from "./modules/combine.js";

// console.log(combine.calc.sum(1, 2));

console.log(sum(1, 2));
console.log(subtract(1, 2));

let displayName = greetPerson("Purna");
console.log(displayName);

let name = sayName("Purna");
console.log(name);
