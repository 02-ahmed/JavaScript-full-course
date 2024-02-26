function greet(name) {
  !name? console.log('Hi there'): console.log(`Hello ${name}!`);
}

greet();

//======================================================================
 function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return `${fahrenheit}F`;
 }

let conversion1 = convertToFahrenheit(25);
console.log(conversion1)