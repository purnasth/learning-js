// console.log("Static Import in JavaScript Modules");
// import { sayHi, sayBye } from "./modules/sayHiBye.js";

// sayHi("Purna");

// sayBye("Purna");

// console.log("\n");

// console.log("Dynamic Import in JavaScript Modules");

// const { sayHi, sayBye } = await import("./modules/sayHiBye.js");

// sayHi("Purna");

// sayBye("Purna");

// dynamic import benefits
// in simple language .. if we want to say hi to someone then we will import sayHi function only
// if we want to say bye to someone then we will import sayBye function only
// we will not import both functions at a time
// so we will use dynamic import

console.log("Benefits Dynamic Import");

if (true) {
  (async () => {
    const { sayHi } = await import("./modules/sayHiBye.js");
    sayHi("Purna");
  })();
}
