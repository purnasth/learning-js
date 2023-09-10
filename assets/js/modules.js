console.log("Learning modules...");

import { sum, subtract } from "./modules/calc.js";
import { greetPerson } from "./modules/greet.js";

console.log(sum(1, 2));
console.log(subtract(1, 2));

let displayName = greetPerson("Purna");
console.log(displayName);
