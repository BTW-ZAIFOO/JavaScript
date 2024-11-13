// 1. Arithmetic Operators
let num1 = 12;
let num2 = 4;
let num3 = 7;

// Addition
console.log(num1 + num2); // Output: 16
console.log(num2 + num3); // Output: 11

// Subtraction
console.log(num1 - num2); // Output: 8
console.log(num3 - num1); // Output: -5

// Multiplication
console.log(num1 * num2); // Output: 48
console.log(num2 * num3); // Output: 28

// Division
console.log(num1 / num2); // Output: 3
console.log(num1 / num3); // Output: 1.7142857142857142

// Modulus (remainder)
console.log(num1 % num2); // Output: 0
console.log(num2 % num3); // Output: 4

// Exponentiation (raising to power)
console.log(num1 ** num2); // Output: 20736 (12^4)
console.log(num2 ** num3); // Output: 16384 (4^7)

// 2. Comparison Operators
let x = 8;
let y = 15;
let z = 8;

// Equal to
console.log(x == y); // Output: false
console.log(x == z); // Output: true

// Not equal to
console.log(x != y); // Output: true
console.log(x != z); // Output: false

// Strict equal to (checks value and type)
console.log(x === y); // Output: false
console.log(x === z); // Output: true

// Greater than
console.log(x > y); // Output: false
console.log(y > x); // Output: true

// Less than
console.log(x < y); // Output: true
console.log(y < x); // Output: false

// Greater than or equal to
console.log(x >= y); // Output: false
console.log(x >= z); // Output: true

// Less than or equal to
console.log(x <= y); // Output: true
console.log(x <= z); // Output: true

// 3. Logical Operators
let isWeekend = true;
let hasPlans = false;
let isSunny = true;

// AND (&&)
console.log(isWeekend && hasPlans); // Output: false
console.log(isWeekend && isSunny); // Output: true

// OR (||)
console.log(isWeekend || hasPlans); // Output: true
console.log(hasPlans || isSunny); // Output: true

// NOT (!)
console.log(!isWeekend); // Output: false
console.log(!hasPlans);  // Output: true

