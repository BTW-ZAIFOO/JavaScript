// Scopes Overview

//-------------------------------------------------------

// Global Scope
// A global scope refers to variables or functions that are declared outside of any function or block. These can be accessed from any part of the code.

let globalVar = "I am global!";

function showGlobalVar() {
  console.log(globalVar);
}

showGlobalVar();
console.log(globalVar);

// globalVar is declared in the global scope, so it can be accessed both inside and outside the function showGlobalVar().


//-------------------------------------------------------

// Function Scope (Local Scope)
// Variables declared within a function are in the local scope (also known as function scope). These variables are accessible only within the function where they’re defined.

function myFunction() {
  let localVar = "I am local!";
  console.log(localVar);
}

myFunction();
console.log(localVar); // Error: localVar is not defined

// localVar is only accessible within the function myFunction(). Attempting to access localVar outside the function results in an error.


//-------------------------------------------------------

// Block Scope
// With ES6 (ECMAScript 2015), the keywords let and const were introduced to create block-scoped variables. A block is a section of code within curly braces { }, such as those used in loops or conditionals.

if (true) {
  let blockVar = "I am block-scoped!";
  console.log(blockVar);
}

console.log(blockVar); // Error: blockVar is not defined

// blockVar is only accessible within the if block. Trying to access it outside results in an error.
