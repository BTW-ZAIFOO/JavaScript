
function wel() {
    console.log("Hello!");
}
// call the function
wel();


function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Ali");
greet("sam");

//------------------------------------------------------------


// Function Declaration And Function Expression

// Function Declaration 

//write the word function, give it a name, and write the (code) inside curly braces { }.


function greet() {
    console.log("Hello!");
}
// call the function
greet();

//------------------------------------------------------------

// Function Expression 
// Instead of giving the function a name directly, you store it inside a variable. This function can be anonymous (no name) or named, but most often it’s anonymous.

const greet = function () {
    console.log("Hello!");
};

//greet is now a variable that stores the function. Since it's stored in a variable, it acts like a regular variable, so you can only use it after it’s defined in the code.
greet();


//------------------------------------------------------------
//Return and Parameter 


function sum(math,eng,sc){
let total=(math+eng+sc)/300*100;
return total
}
let marks= sum(90,80,85)
console.log(marks);




//------------------------------------------------------------


// Example

// Function Declaration
function main() {
    helper1();
    helper2();
    console.log("Main function running!");
}

// Function Expressions 
const helper1 = function () {
    console.log("Helper 1 function running!");
};

const helper2 = function () {
    console.log("Helper 2 function running!");
};

main();

//------------------------------------------------------------

// All are function declarations
function main() {
    helper3();
    helper4();
    console.log("Main function running!");
}

function helper3() {
    console.log("Helper 3 function running!");
}

function helper4() {
    console.log("Helper 4 function running!");
}

main(); // Works fine

//------------------------------------------------------------

// Function with object

// Creating an object
const person = {
    name: "Ali",
    age: 25
};

function updatePerson(person) {
    person.age += 1;  // Increase age by 1
    person.name = person.name.toUpperCase();  // Convert name to uppercase
    return person;
}

// Passing the object to the function
const updatedPerson = updatePerson(person);

console.log(updatedPerson);

//------------------------------------------------------------

// Function with array

// Function that filters an array and returns a new one
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const allNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(allNumbers);

console.log(evenNumbers);
// Output: [2, 4, 6]

//------------------------------------------------------------

// Function to add an item to an array
function addItem(arr, item) {
    arr.push(item);
    return arr;
}

const numbers = [1, 2, 3];
const updatedNumbers = addItem(numbers, 4);

console.log(updatedNumbers);
// Output: [1, 2, 3, 4]


//------------------------------------------------------------

// Arrow Function

// Syntax
const functionName = (parameter1, parameter2) => {
    // function body
};

// Arrow function with parameters
const sum = (a, b) => a + b;

// Arrow function with a single parameter (no parentheses needed)
const square = x => x * x;

// Arrow function with no parameters
const greet = () => "Hello, world!";


//---------------------------------------------------------

// Examples

const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3));  

  
//-------------------------------------------------


  const sq = x => {
    return x * x;
  };
  
  console.log(sq(4));  
  
  
  //-------------------------------------------------

  const multiply = (a, b) => a * b;

console.log(multiply(3, 5)); 


//-------------------------------------------------

const greet = () => {
    console.log("Hello, world!");
  };
  
  greet();  

  

//-------------------------------------------------

const greet = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
  };
  
  greet("Ali");  
  greet();         

  
