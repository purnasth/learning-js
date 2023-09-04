console.log("DAY 15 return keyword\n\n");

function calculateSavings(amount, months) {
  let result = amount * months;
  return result;
}
let result = calculateSavings(60, 15);

if (result >= 500) {
  console.log("You can go on a vacation.");
} else {
  console.log("You need more money.");
}
