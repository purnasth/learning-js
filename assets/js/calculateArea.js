console.log("DAY 15 return keyword\n\n");

let userCalculate = window.prompt(
  'Do you want to calculate the area of a "circle" or a "rectangle"'
);

userCalculate = userCalculate.toLowerCase();

const pi = 3.14;

switch (userCalculate) {
  case "circle": {
    let radius = window.prompt("Enter the radius of a circle: ");
    function calculateCircle() {
      return pi * radius * radius;
      //   return pi * radius ** 2;
    }
    console.log(`Area of a circle = ${calculateCircle()}`);
    break;
  }
  case "rectangle": {
    let length = window.prompt("Enter the length of the rectangle: ");
    let breadth = window.prompt("Enter the breadth of the rectangle: ");
    // asks length and breadth in a single prompt from the user.
    // let dimensions = window.prompt(
    //   "Enter the length and breadth of the rectangle separated by a space: "
    // );
    // let [length, breadth] = dimensions.split(" ").map(Number);
    function calculateRectangle() {
      return length * breadth;
    }
    console.log(`Area of a rectangle = ${calculateRectangle()}`);
    break;
  }
  default: {
    alert("Enter either 'circle' or 'rectangle'.");
  }
}
