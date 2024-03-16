/* const multiply = (num1, num2) => {
  return num1 * num2;
}
console.log(multiply(2, 3));
console.log(multiply(7, 10)); */

//exercise 12k
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 3));
console.log(multiply(7, 10));

//exercise 12l

function countPositive(nums) {
  let count = 0;
  nums.forEach((num) => {
    if (num > 0) {
      count++;
    }
  });
  
  return count;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//exercise 12m
function addNum(array, num) {
  return array.map(value => value + num)
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));