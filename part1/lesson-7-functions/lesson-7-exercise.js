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

function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32)* 5/9;
  return `${celsius}C`;
}

let conversion2 = convertToCelsius(86);
console.log(conversion2);