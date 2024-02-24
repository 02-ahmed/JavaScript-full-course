//3a. Create the text 'My name is: ' as a string.
let text = "My name is: ";
console.log(text);

//3b. Create your name as a string (for example: 'Simon').
let name1 = "Ahmed";
console.log(name1);

//3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: ___' (replace ___ with your name).
let newText = text + name1;
console.log(newText);

//3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text:'Total cost: $__' (replace ___ with the total you calculated).
let coffee = 5;
let bagel = 3;
let total = coffee + bagel;
console.log('Total cost: $' + total); 

//3e. Do the same thing as 3d, but use a template string and interpolation.
let tempString = `Total cost: $${total}`
console.log(tempString); 

//3f. Display the text from 3e in a popup using alert()
alert(tempString);
console.log(`
.
.
challenge exercises`)
//=============challenge exercises=============
/*Setup: in the Amazon project
update the cart to 2 basketballs ($20.95 each) with $4.99 shipping,
and 2 t-shirts($7.99 each) with $4.99 shipping.*/

//3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).
let items = 4;
let price = ((2*2095) + (2*799))/100;
let shipping = (499 * 2)/100;
let orderTotal = (price + shipping);
let tax = (10/100 * orderTotal).toFixed(2);
let msg = `Items(${items}): $${price}`
console.log(msg)


//3l. Create second line of text: 'Shipping & handling: $9.98' (use math).
let msg2 = `Shipping & handling: $${shipping}`;
console.log(msg2);

//3m. Create third line: 'Total before tax: $67.86' (use math).
let msg3 = `Total before tax: $${orderTotal}`;
console.log(msg3);

//3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round...); to calculate the exact number).
let msg4 = `Estimated tax (10%): $${tax}`;
console.log(msg4);