// Parameters and Return Values in JavaScript
// Functions in JavaScript can take input values, called parameters, and return an output using the return statement.

// Parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function with "Huzaifa" as the parameter
greet("Huzaifa"); 

        // Output: "Hello, Huzaifa!"

// Multiple parameters can be added to a function.
function add(a, b) {
  console.log(a + b);
}

// Calling the function with 5 and 3 as parameters
add(5, 3); 

          // Output: 8

// Return Values
// Functions can also return values that can be used elsewhere in the code.

function multiply(x, y) {
  return x * y;
}

// The returned value can be stored in a variable
let result = multiply(4, 5);
console.log(result);

        // Output: 20

// The return keyword immediately stops function execution and sends the value back to where the function was called.

function checkEven(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(checkEven(10)); 

        // Output: "Even"

console.log(checkEven(7)); 

        // Output: "Odd"

// Default Parameters
// We can assign default values to parameters in case they are not provided.

function welcome(user = "Guest") {
  return "Welcome, " + user + "!";
}

// If no argument is passed, the default value "Guest" is used
console.log(welcome());       

          // Output: "Welcome, Guest!"

console.log(welcome("John")); 

          // Output: "Welcome, John!"

// Using Return Values in Expressions
// Return values can be used directly in expressions or passed as parameters to other functions.

function square(num) {
  return num * num;
}

let total = square(4) + square(3);
console.log(total); 

        // Output: 25 (16 + 9)

// Returning Objects
// Functions can also return objects.

function createUser(name, age) {
  return {
    name: name,
    age: age,
    isActive: true
  };
}

let user = createUser("Alice", 25);
console.log(user); 

          // Output: { name: "Alice", age: 25, isActive: true }

// Summary
// - Parameters allow us to pass values into functions.
// - The return keyword sends back a value from a function.
// - Default parameters provide fallback values if no arguments are given.
// - Return values can be stored, used in expressions, or passed to other functions.
