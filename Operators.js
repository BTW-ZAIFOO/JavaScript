// Arithmetic Operators

let a = 20;
let b = 4;

console.log(a + b);  // Addition: Adds two values
console.log(a - b);  // Subtraction: Subtracts the second value from the first
console.log(a * b);  // Multiplication: Multiplies two values
console.log(a / b);  // Division: Divides the first value by the second
console.log(a % b);  // Modulus: Returns the remainder of the division
console.log(a ** b); // Exponentiation: Raises the first value to the power of the second

//---------------------------------------------------->

// Assignment Operators

// =    Assignment: Assigns a value to a variable
let c = 10; // c gets the value 10

// +=   Add and assign: Adds the right value to the left variable
c += 5; // c = c + 5; (c becomes 15)

// -=   Subtract and assign: Subtracts the right value from the left variable
c -= 3; // c = c - 3; (c becomes 12)

// *=   Multiply and assign: Multiplies the left variable by the right value
c *= 2; // c = c * 2; (c becomes 24)

// /=   Divide and assign: Divides the left variable by the right value
c /= 4; // c = c / 4; (c becomes 6)

// %=   Modulus and assign: Applies modulus and assigns the result
c %= 4; // c = c % 4; (c becomes 2)

//----------------------------------------------------->

// Comparison Operators

let d = 25;

// ==    Equal to: Compares values for equality (ignores type)
console.log(d == "25"); // true, because value is the same even though types differ

// ===   Strict equal: Compares both value and type for equality
console.log(d === "25"); // false, because types are different (number vs string)

// !=    Not equal: Checks if values are not equal
console.log(d != 20); // true, because 25 is not equal to 20

// !==   Strict not equal: Checks if both value and type are different
console.log(d !== "25"); // true, because type is different (number vs string)

// >     Greater than: Checks if the first value is greater than the second
console.log(d > 10); // true, because 25 is greater than 10

// <     Less than: Checks if the first value is less than the second
console.log(d < 10); // false, because 25 is greater than 10

// >=    Greater than or equal: Checks if the first value is greater than or equal to the second
console.log(d >= 25); // true, because 25 is equal to 25

// <=    Less than or equal: Checks if the first value is less than or equal to the second
console.log(d <= 30); // true, because 25 is less than 30

//----------------------------------------------------->

// Logical Operators

// &&    AND: Returns true if both conditions are true
let hasLicense = true;
let knowsRoadSigns = true;
console.log(hasLicense && knowsRoadSigns); // true, both conditions are true

// ||    OR: Returns true if at least one condition is true
let isOnline = false;
let hasAccess = true;
console.log(isOnline || hasAccess); // true, one condition is true

// !     NOT: Reverses the boolean value
let isAvailable = true;
console.log(!isAvailable); // false, negates the true value

//------------------------------------------------------->

// Spread Operator (...)

let numbers = [3, 7, 9];
let moreNumbers = [2, 6];
console.log(...numbers, ...moreNumbers);  // Expands the arrays into individual elements

//-------------------------------------------------------->

// Rest Operator

// The rest operator collects elements into an array or object, often used in function arguments to capture a variable number of inputs or to gather remaining elements.

const userInfo = { id: 2, name: "Sara", age: 28, profession: "Designer" };
const { name, ...otherData } = userInfo;
console.log(name);          // Output: "Sara"
console.log(otherData);     // Output: { id: 2, age: 28, profession: "Designer" }
