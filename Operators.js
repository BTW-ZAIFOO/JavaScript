//Scopes

//-------------------------------------------------------

// Global scope
//Global scope refers to variables or functions that are declared outside any function or block. They are accessible from anywhere in your code.

let globalVar = "I am global!";  

function showGlobalVar() {
  console.log(globalVar);  
}

showGlobalVar();  
console.log(globalVar);  

//globalVar is declared in the global scope, so it is accessible both inside and outside the function showGlobalVar().


//-------------------------------------------------------

// Functional Scope (Local Scope)

// Variables declared inside a function are said to be in the local scope (also called function scope). These variables are only accessible within the function they are declared in.

function myFunction() {
    let localVar = "I am local!";  
    console.log(localVar);  
  }
  
  myFunction();
  console.log(localVar);  // Error: localVar is not defined

  // localVar is accessible only within the function myFunction() and cannot be accessed outside of it. If you try to access localVar outside, you'll get an error.

  //-------------------------------------------------------

  // Block Scope

 //  With the introduction of ES6 (ECMAScript 2015), two new keywords, let and const, were introduced to provide block-scoped variables. A block is defined by curly braces { } (e.g., inside loops or conditionals).

 if (true) {
    let blockVar = "I am block-scoped!";
    console.log(blockVar);  
  }
  
  console.log(blockVar);  // Error: blockVar is not defined
  
  
