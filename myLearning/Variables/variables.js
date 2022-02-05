/*  var, let, const
When we use variables like var and let we can reassign the variables
Variables can contain letters, numbers, _, and $.However you CAN NOT start with a number
*/

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

let age = 23;
console.log(age);
age = 24;
console.log(age);

// Initializing a variable
let greeting;
console.log(greeting);
greeting = 'Hello World!';
console.log(greeting);

// Const does not work the same, you cannot reassign
const firstName = 'John';
//firstName = 'Jerry'; // Will not work!
// You cannot initialize a const!

// You can change the items in an object but you cannot reassign it into a new object
const person = {
  name: 'John',
  age: 24
}

person.name = 'Jerry';

console.log(person);