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

let userScore = 45;
console.log(typeof userScore); // "number"

let stringScore = "45";
console.log(typeof stringScore); // "string"

// Convert 'stringScore' from string to number
let numericValue = Number(stringScore);
console.log(typeof numericValue); // now it's converted to "number"

// When converting a string containing non-numeric characters (like "45abc") to a number,
// it will return NaN (Not a Number)

//------------------------------------------------------------

// Converting boolean values to numbers: 
// - true converts to 1
// - false converts to 0

let isActive = 0;
let booleanIsActive = Boolean(isActive);
console.log(typeof booleanIsActive); // "boolean"
console.log(booleanIsActive); // false

//------------------------------------------------------------

// Converting numbers to strings

let integerNumber = 99;
let stringifiedNumber = String(integerNumber);
console.log(typeof stringifiedNumber); // "string"
console.log(stringifiedNumber); // "99" as a string

//------------------------------------------------------------

// Example to show variable hoisting with 'let'

console.log(hoistedNumber); // This will throw an error as 'let' variables are not hoisted
let hoistedNumber = 100;
console.log(hoistedNumber); // Outputs: 100
console.log(typeof hoistedNumber); // "number"

let stringHoistedNumber = String(hoistedNumber);
console.log(typeof stringHoistedNumber); // "string"
