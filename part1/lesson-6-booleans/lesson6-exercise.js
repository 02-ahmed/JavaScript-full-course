//lesson 6 exercise a-c
let hour = 11;
const name = 'Ahmed';

/* if (hour >= 6 && hour <= 12) {
  console.log(`Good morning ${name}!`)
}else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon ${name}!`)
}else{
  console.log(`Good night ${name}!`)
} */

let hourMsg = hour >= 6 && hour <= 12 ? `Good morning ${name}!`: hour >=13 && hour <=17? `Good afternoon ${name}!`: `Good night ${name}!`;
console.log(hourMsg);
//======================================================

//lesson 6 exercise d-e
const age = 66;
const isHoliday = true;
/* if ((age <=6 || age >=65) && !isHoliday) {
  console.log('Discount');
}else {
  console.log('No discount');
} */

let discountMsg = (age <=6 || age >= 65) && !isHoliday ? 'Discount' : 'No discount';
console.log(discountMsg);
//==========================================================

//lesson 6 exercise f-i
let randomNumber = Math.random();
let result = '';
let guess = 'tails';
/* if (randomNumber < 0.5) {
  result = 'heads';
}else {
  result = 'tails';
} */

randomNumber < 0.5 ? result = 'heads':result = 'tails';

/* if (guess === result) {
  console.log('You win!');
}else {
  console.log('You lose!')
} */

let resultMsg = guess === result ? 'You win!': 'You lose';
console.log(resultMsg);