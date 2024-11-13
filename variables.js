// Variables are used to store data values in JavaScript.
// There are three ways to declare variables: var, let, and const.

// 1. var
var name = "Huzaifa";
console.log(name);

// We can reassign values to variables declared with var.
name = "Sam";
console.log(name);

// 2. let
let age = 15;
console.log(age);

// Values can also be reassigned to variables declared with let.
age = 20;
console.log(age);

// 3. const
const userId = "aqib123";
console.log(userId);

// Reassigning values to const variables is not allowed.
// The following line would cause an error:
// userId = "sam123"; 
// console.log(userId); // This would throw an error.

// EXAMPLES

var country = "INDIA";
let population = 5780000000;
const city = "BEGALURU";

console.log(country);     // Output: "INDIA"
console.log(population);  // Output: 5780000000
console.log(city);        // Output: "BENGALURU"

// Variables declared with let can be reassigned.
population = 81813000000;
console.log(population);  // Output: 81813000000

// EXAMPLES

let score = 100;
console.log(score);       // Output: 100

score = 150;
console.log(score);       // Output: 150

const maxScore = 200;
console.log(maxScore);    // Output: 200

// Reassigning values to const variables causes an error.
// maxScore = 250; // Error

// EXAMPLE: Hoisting behavior

console.log(a); // Output: undefined (var is hoisted but uninitialized)
var a = 5;

console.log(b); // Error! Cannot access 'b' before initialization
let b = 10;

console.log(c); // Error! Cannot access 'c' before initialization
const c = 15;
