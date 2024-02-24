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