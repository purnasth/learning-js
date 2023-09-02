console.log("\n\n");
console.log("DAY 8 Switch Case\n\n");
let day = window.prompt("Enter a day of the week: ");

day = day.toLowerCase();

switch (day) {
  case "sunday":
    console.log("Today is Sunday.");
    break;
  case "monday":
    console.log("Today is Monday.");
    break;
  case "tuesday":
    console.log("Today is Tuesday.");
    break;
  case "wednesday":
    console.log("Today is Wednesday.");
    break;
  case "thursday":
    console.log("Today is Thursday.");
    break;
  case "friday":
    console.log("Today is Friday.");
    break;
  case "saturday":
    console.log("Today is Saturday.");
    break;
  default:
    console.log("Invalid day.");
    break;
}

console.log("\n\n");
