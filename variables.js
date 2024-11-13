// Variables are used to store data values in JavaScript.
// There are three ways to declare variables: var, let, and const.

// 1. var
var pet = "Dog";
console.log(pet);

// We can reassign values to variables declared with var.
pet = "Cat";
console.log(pet);

// 2. let
let temperature = 30;
console.log(temperature);

// Values can also be reassigned to variables declared with let.
temperature = 25;
console.log(temperature);

// 3. const
const userEmail = "user@example.com";
console.log(userEmail);

// Reassigning values to const variables is not allowed.
// The following line would cause an error:
// userEmail = "newuser@example.com"; 
// console.log(userEmail); // This would throw an error.

// EXAMPLES

var countryName = "Japan";
let areaPopulation = 126000000;
const capitalCity = "Tokyo";

console.log(countryName);     // Output: "Japan"
console.log(areaPopulation);  // Output: 126000000
console.log(capitalCity);     // Output: "Tokyo"

// Variables declared with let can be reassigned.
areaPopulation = 130000000;
console.log(areaPopulation);  // Output: 130000000

// EXAMPLES

let playerScore = 500;
console.log(playerScore);     // Output: 500

playerScore = 700;
console.log(playerScore);     // Output: 700

const highestScore = 1000;
console.log(highestScore);    // Output: 1000

// Reassigning values to const variables causes an error.
// highestScore = 1200; // Error

// EXAMPLE: Hoisting behavior

console.log(x); // Output: undefined (var is hoisted but uninitialized)
var x = 20;

console.log(y); // Error! Cannot access 'y' before initialization
let y = 40;

console.log(z); // Error! Cannot access 'z' before initialization
const z = 60;
