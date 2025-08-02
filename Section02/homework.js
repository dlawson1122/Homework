console.log("This is the homework for Week 2.");

// Assign the Variables
let pizzaPlace = "Dream Waver's Pizza Palace";
let numberOfToppings = 9;

// Print the Variables and Types
console.log("Pizza Place:", pizzaPlace, "Type:", typeof pizzaPlace);
console.log(
  "Number of Toppings:",
  numberOfToppings,
  "Type:",
  typeof numberOfToppings
);

// Template literal: uses backticks (`) to embed variables directly in a string.
// This avoids using + signs to concatenate, and it's easier to read.
console.log(
  `At ${pizzaPlace}, we serve ${numberOfToppings} toppings to unlock flavor and frequency.`
);

// If statement
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
