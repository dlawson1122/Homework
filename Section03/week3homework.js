// Week 3 Homework - Dream Weaver's Pizza Palace
// available toppings
const pizzaToppings = [
  "pepperoni",
  "peppers",
  "onions",
  "black olives",
  "sausage"
];

// greet guest and loop through toppings
function greetCustomer() {
  let message = "Welcome to Dream Weaver's Pizza Palace, our toppings are: ";
  for (let i = 0; i < pizzaToppings.length; i++) {
    message += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) message += ", ";
  }
  console.log(message);
}

greetCustomer();

// Params: size, crust, and number of toppings - uses rest param
// Get Order
function getPizzaOrder(size, crust, ...toppings) {
  let message = `One ${size} ${crust} crust `;

  if (toppings.length > 0) {
    message += "pizza with ";
    for (let i = 0; i < toppings.length; i++) {
      message += toppings[i];
      if (i < toppings.length - 1) message += ", ";
    }
  } else {
    // (bonus-friendly but harmless) handle plain cheese nicely
    message += "cheese pizza";
  }

  message += " coming up!";
  console.log(message);

  // Return list
  return [size, crust, toppings];
}

// Prepare Pizza
function preparePizza(pizzaOrder) {
  console.log("...Cooking pizza...");
  const [size, crust, toppings] = pizzaOrder; // turn array into variable
  const finishedPizza = { size, crust, toppings };
  return finishedPizza;
}

// Serve Pizza
function servePizza(finishedPizza) {
  let message = `Order up!! Here is your ${finishedPizza.size} ${finishedPizza.crust} crust `;

  if (finishedPizza.toppings.length === 0) {
    message += "cheese pizza. Enjoy, and come back soon!";
  } else {
    message += "pizza with ";
    for (let i = 0; i < finishedPizza.toppings.length; i++) {
      message += finishedPizza.toppings[i];
      if (i < finishedPizza.toppings.length - 1) {
        message += ", ";
      }
    }
    message += ". Enjoy, and come back soon!";
  }

  console.log(message);
  return finishedPizza;
}

// Quick Tests
const order1 = getPizzaOrder("large", "thin", "sausage", "onions", "peppers");
const pizza1 = preparePizza(order1);
servePizza(pizza1);

const order2 = getPizzaOrder("small", "regular");
const cheesePizza = preparePizza(order2);
servePizza(cheesePizza);
