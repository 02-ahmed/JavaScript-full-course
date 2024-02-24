//2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.
let soup = 10;
let burger = (8) * 3;
let iceCream = 5;

total = soup + burger + iceCream;
console.log(`total is $${total}`);
//====================================================================================================================

//2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.
let people = 3;
let eachPerson = total / people;
console.log(`each person pays $${eachPerson}`)

//====================================================================================================================
//2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
let toaster = 18.5;
let shirt = 7.50 * 2;
let cost = Math.round(toaster + shirt);
console.log(`cost of toaster and 2 shirts is $${cost}`);

//2d. Calculate a 10% tax for the total in exercise 2c.
let tax_10 = Math.round(10/100 * cost);
console.log(`10% tax is $${tax_10}`);

//2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100,so 20% = 20 / 100 = 0.2).
let tax_20 = Math.round(20/100 * cost);
console.log(`20% tax is $${tax_20}`);

//===========================challenge exercises==================================

/* We'll use JavaScript to convert temperatures from Celsius (°C) to Fahrenheit (°F). The formula is:
Fahrenheit = (Celsius * 9 / 5) + 32
Celsius = (Fahrenheit - 32) * 5 / 9 */

// 2l. The temperature is 25°C. Calculate the temperature in Fahrenheit. (77)
let temp1 = (25 * 9/5) + 32;
console.log(`25 degrees celsius  to fahrenheit is ${temp1} fahrenheit`)

// 2m. The temperature is 86°F. Calculate the temperature in Celsius. (30)
let temp2 = (86 - 32) * 5/9;
console.log(`86 fahrenheit to celsius is ${temp2} celsius`)

// 2n. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23)
let temp3 = (-5 * 9/5) + 32;
console.log(`-5 celsius in fahrenheit is ${temp3} fahrenheit`)
