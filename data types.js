/* Data Types in JavaScript */

// Basic Data Types
// - number: holds numeric values up to 2^53 - 1
// - bigInt: for larger integers
// - string: text values enclosed in quotes ("")
// - boolean: true or false
// - null: represents an intentional absence of value
// - undefined: a variable declared but not assigned
// - symbol: unique values, useful for creating unique keys

// Composite Type
// - object: collections of key-value pairs, useful for storing complex data

//------------------------------------------------------------

// Data Type Conversion Examples

let score = 33;
console.log(typeof score); // "number"

let newScore = "33";
console.log(typeof newScore); // "string"

// Convert 'newScore' from string to number
let valueInNumber = Number(newScore);
console.log(typeof valueInNumber); // now it's converted to "number"

// When converting a string containing non-numeric characters (like "333abc") to a number,
// it will return NaN (Not a Number)

//------------------------------------------------------------

// Converting boolean values to numbers: 
// - true converts to 1
// - false converts to 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // "boolean"
console.log(booleanIsLoggedIn); // true

//------------------------------------------------------------

// Converting numbers to strings

let someNumber = 55;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // "string"
console.log(stringNumber); // "55" as a string

//------------------------------------------------------------

// Example to show variable hoisting with 'let'

console.log(anotherNumber); // This will throw an error as 'let' variables are not hoisted
let anotherNumber = 500;
console.log(anotherNumber); // Outputs: 500
console.log(typeof anotherNumber); // "number"

let stringAnotherNumber = String(anotherNumber);
console.log(typeof stringAnotherNumber); // "string"
