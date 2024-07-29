const applePrice = 2.50;
const appleQuantity = 2;

const orangePrice = 1.54;
const orangeQuantity = 4;

// Make up a price and quantity for your favourite fruit
const berryPrice = 8.90;
const berryQuantity = 3;

const totalCostApple = applePrice * appleQuantity;

//Calculcate the total cost for oranges and your favourite fruit
const totalCostOrange = orangePrice * orangeQuantity;
const totalCostBerry = (berryPrice * berryQuantity).toFixed(2);

// Calculate the overall total cost
const overallTotalCost = totalCostOrange + totalCostApple + totalCostBerry;

// Display the individual and overall total costs
console.log(`\nTotal cost for apples 🍏: $${totalCostApple}`);
console.log(`Total cost for oranges 🍊: $${totalCostOrange}`);

// Log out the cost for your favourite fruit
console.log(`Total cost for berries 🍓: $${totalCostBerry}`);
console.log("-------------------------------------");
console.log("\x1b[1mOverall total cost: $" + overallTotalCost + "\x1b[0m");

