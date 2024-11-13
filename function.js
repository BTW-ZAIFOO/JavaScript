// All About Functions
// Function to greet everyone
function greetEveryone() {
    console.log("Greetings!");
}
// Call the function
greetEveryone();

// Function to say hi to someone
function sayHi(person) {
    console.log("Hi, " + person + "!");
}

sayHi("Ali");
sayHi("Fatima");

//------------------------------------------------------------

// Function Declarations vs. Function Expressions

// Function Declaration
// Declare a function using 'function', followed by the name and code inside curly braces.
function sayHi() {
    console.log("Hi!");
}
// Call the function
sayHi();

//------------------------------------------------------------

// Function Expression
// A function is assigned to a variable, and can be anonymous or named.
const sayHi = function () {
    console.log("Hi there!");
};
// The function is stored in a variable and can only be used after declaration.
sayHi();

//------------------------------------------------------------

// Function with Arguments and Return Value
function computeAverage(math, literature, history) {
    let result = (math + literature + history) / 3;
    return result;
}
let average = computeAverage(85, 75, 90);
console.log(average);

//------------------------------------------------------------

// Example with Function Declarations and Expressions
function initiateProcess() {
    performTaskA();
    performTaskB();
    console.log("Main task in progress!");
}

// Function expressions for subtasks
const performTaskA = function () {
    console.log("Task A is in progress!");
};

const performTaskB = function () {
    console.log("Task B is in progress!");
};

initiateProcess();

//------------------------------------------------------------

// All functions are declared
function initiateMainProcess() {
    executeTaskC();
    executeTaskD();
    console.log("Main process is in progress!");
}

function executeTaskC() {
    console.log("Task C is running!");
}

function executeTaskD() {
    console.log("Task D is running!");
}

initiateMainProcess(); // Everything works fine

//------------------------------------------------------------

// Function with an object

// Creating an object
const individual = {
    name: "Ayesha",
    age: 30
};

// Function that modifies an object
function modifyIndividual(individual) {
    individual.age += 2;  // Increase age by 2
    individual.name = individual.name.toLowerCase();  // Convert name to lowercase
    return individual;
}

// Passing the object to the function
const modifiedIndividual = modifyIndividual(individual);

console.log(modifiedIndividual);

//------------------------------------------------------------

// Function working with an array

// Function that filters out odd numbers
function getOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

const allNumbersList = [1, 2, 3, 4, 5, 6];
const oddNumbers = getOddNumbers(allNumbersList);

console.log(oddNumbers);
// Output: [1, 3, 5]

//------------------------------------------------------------

// Function to add a new item to an array
function appendItemToList(list, item) {
    list.push(item);
    return list;
}

const numberList = [1, 2, 3];
const updatedList = appendItemToList(numberList, 6);

console.log(updatedList);
// Output: [1, 2, 3, 6]


//------------------------------------------------------------

// Arrow Functions

// Basic arrow function syntax
const exampleFunction = (arg1, arg2) => {
    // body of function
};

// Arrow function to multiply two numbers
const multiplyNumbers = (x, y) => x * y;

// Arrow function to cube a number
const cubeNumber = z => z ** 3;

// Arrow function with no parameters
const helloUniverse = () => "Greetings, universe!";

//---------------------------------------------------------
// Examples with arrow functions

const addTwoNumbers = (x, y) => {
    return x + y;
};
  
console.log(addTwoNumbers(5, 10));

//-------------------------------------------------

const cube = z => {
    return z ** 3;
};
  
console.log(cube(3));  

//-------------------------------------------------

const divideNumbers = (x, y) => x / y;

console.log(divideNumbers(15, 3)); 

//-------------------------------------------------

const helloUniverse = () => {
    console.log("Greetings, universe!");
};
  
helloUniverse();  

//-------------------------------------------------

const greetUser = (user = "Visitor") => {
    console.log(`Hello, ${user}!`);
};
  
greetUser("Omar");  
greetUser();         
