/*
Objective: Let’s convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.
*/
// Project says I need to make an immutable variable named kelvin which stores the number 293
const kelvin = 293;
// Project says in order to convert kelvin to celsius I need to subtract 273 from the kelvin variable
const celsius = kelvin - 273;
// Next I need to create an equation to calculate fahrenheit. I then need to store the answer in a variable named fahrenheit.
let fahreneheit = celsius * (9 / 5) + 32;
// Next it wants me to round down fahrenheit using a built in Math object
fahreneheit = Math.floor(fahreneheit);
// Now I will console log the results
console.log(`The temperature is ${fahreneheit} degrees in Fahrenheit.`);
// BONUS: convert celsius to the Newton scale
let newton = celsius * (33 / 100);
// I know I can just skip the step and add it on top when I first create the newton variable but codecademy wanted it that way
newton = Math.floor(newton);
// Now I will console log the results
console.log(`The temperature is ${newton} degrees Newton.`);