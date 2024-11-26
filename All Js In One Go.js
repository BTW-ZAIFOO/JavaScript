//--------------------------------------------------->

// Array

// An array is a data structure in JavaScript that stores a collection of elements. These elements can be of any type, such as numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning the first element is at index 0.

// Syntax
let arrayName = [item1, item2, item3];

// Example

let cars = ["Toyota", "Honda", "Ford"];
console.log(cars);

// Accessing individual items

console.log(cars[0]); 
console.log(cars[2]); 

// Updating elements

cars[1] = "BMW"; 
console.log(cars);

// Getting the length of an array

console.log(cars.length);

// Printing each element of an array using a loop

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//--------------------------------------------------->

// Below are the some of the Array Methods

// Adding and Removing Methods

// push()
// Adds an element to the end of the array

cars.push("Mercedes");

// pop()
// Removes the last element from the array

cars.pop();

// unshift()
// Adds an element to the beginning of the array

cars.unshift("Audi");

// shift()
// Removes the first element from the array

cars.shift();

// join()
// Joins elements of the array into a string, separated by a specified character

let joinedCars = cars.join(" | ");
console.log(joinedCars);


//--------------------------------------------------->

// Merging and Slicing Methods

// concat()
// Combines two or more arrays

const moreCars = ["Tesla", "Chevrolet"];
const allCars = cars.concat(moreCars);

// slice()
// Returns a shallow copy of a section of an array

const someCars = cars.slice(1, 3);

// splice()
// Adds or removes elements at a specified position

cars.splice(0, 1, "Nissan");
console.log(cars);


//--------------------------------------------------->

// Searching and Checking Methods

// indexOf()
// Gets the index of the first appearance of an element or -1 if it's not present

const hondaIndex = cars.indexOf("Honda");

// includes()
// Determines if an array has a specified element

const containsToyota = cars.includes("Toyota");


//--------------------------------------------------->

// Sorting and Reversing

// sort()
// Sorts array elements in place and returns the sorted array

const carPrices = [20000, 15000, 30000, 10000];
carPrices.sort((a, b) => a - b);

// reverse()
// Reverses the order of elements in the array

const reversedCars = cars.reverse();


// Transforming Arrays Methods

// map()
// Creates a new array by applying a function to each element

const carNameLengths = cars.map(car => car.length);



//------------------------------------------------------------------------///--------------------------///


// Asynchronous JavaScript
// JavaScript can handle tasks asynchronously, allowing certain operations to run in the background without blocking the main thread.

// Synchronous vs Asynchronous Code
// Synchronous code is executed line by line, blocking the next operation until the current one finishes.

console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Simulating a delay
console.log("End"); 
// Output: "Start" -> [delay] -> "End"

// Asynchronous code doesn't block; it allows other operations to continue.

console.log("Start");
setTimeout(() => {
  console.log("Async Task Complete");
}, 2000); // Runs after 2 seconds
console.log("End");
// Output: "Start" -> "End" -> [2-second delay] -> "Async Task Complete"

// Callbacks
// Functions passed as arguments to other functions are called callbacks and are often used in asynchronous tasks.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Output after 1 second: "Data fetched!"
});

// Promises
// Promises represent a value that may be available now, in the future, or never.

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

// Handling the promise
promise
  .then((result) => {
    console.log(result); // Output: "Promise resolved!"
  })
  .catch((error) => {
    console.log(error);
  });

// Async/Await
// Async/Await provides a cleaner way to handle asynchronous code, making it appear more like synchronous code.

function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async/Await Task Complete");
    }, 1000);
  });
}

async function runTask() {
  console.log("Task Started");
  let result = await asyncTask(); // Waits for the promise to resolve
  console.log(result);
  console.log("Task Finished");
}

runTask();
// Output:
// "Task Started"
// [1-second delay]
// "Async/Await Task Complete"
// "Task Finished"

// Using Fetch API
// Fetch API is used to make HTTP requests, and it returns a Promise.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Parsing JSON from the response
  .then((data) => {
    console.log(data); // Output: Data from the API
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Using Async/Await with Fetch
async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data); // Output: Data from the API
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();

// Summary
// - Asynchronous code allows JavaScript to handle tasks in the background.
// - Callbacks are functions passed to handle async results.
// - Promises simplify asynchronous flow with `then` and `catch`.
// - Async/Await provides a more readable way to work with Promises.
// - Fetch API is commonly used for HTTP requests in modern JavaScript.




//-----------------------------------------------------------------------//------------------------//

// IF Statement (executes code if the condition is true)
let speed = 80;
if (speed <= 60) {
    console.log("The car is going at a safe speed.");
}

let fuelLevel = 50;

if (fuelLevel > 0) {
    console.log("The car has fuel.");
}

// ------------------------------------------------------------

// IF-ELSE Statement (executes IF block if condition is true; otherwise, executes ELSE block)
let tirePressure = 25;

if (tirePressure > 30) {
    console.log("The tire pressure is high.");
} else {
    console.log("The tire pressure is low.");
}

// ------------------------------------------------------------

// ELSE-IF Statement (checks IF condition first; if false, checks ELSE-IF conditions, then executes ELSE if no conditions are true)
let engineTemperature = 90;

if (engineTemperature > 100) {
    console.log("The engine is overheating.");
} else if (engineTemperature < 50) {
    console.log("The engine temperature is low.");
} else {
    console.log("The engine temperature is normal.");
}

// ------------------------------------------------------------

// SWITCH Statement (executes code based on matching case; defaults to other code if no match is found)
let carBrand = "Toyota";

switch (carBrand) {
    case "Honda":
        console.log("Honda cars are reliable!");
        break;
    case "Toyota":
        console.log("Toyota cars are popular for durability!");
        break;
    case "BMW":
        console.log("BMW cars are known for luxury!");
        break;
    default:
        console.log("That's a different car brand.");
}

// ------------------------------------------------------------

let gearLevel = 2;
switch (gearLevel) {
    case 1:
        console.log("Car is in first gear.");
        break;
    case 2:
        console.log("Car is in second gear.");
        break;
    case 3:
        console.log("Car is in third gear.");
        break;
    default:
        console.log("Unknown gear level.");
        break;
}


//--------------------------------------------------------->

// Falsy Values

// The following are falsy values in JavaScript:
// false, 0 (and -0), "" (empty string), null, undefined, NaN (Not-a-Number)

// Truthy Values

// Any value that isn’t falsy is considered truthy.

// Example

let carModel = "Camry";

if (carModel) {
  console.log("The car model is truthy, meaning it exists."); 
}

// More Examples

if ("Sedan") {
    console.log("This car type is truthy!");  
}

if (200) {
    console.log("Any number other than 0 is truthy!");  
}

if ({ make: "Toyota" }) {
    console.log("An object representing a car is truthy!");  
}

if (["Corolla", "Camry"]) {
    console.log("An array of car models is truthy!");  
}

if (function() { return "Drive"; }) {
    console.log("Functions are also truthy!"); 
}

//--------------------------------------------//-----------------------------------------//



//------------------ DOM (Document Object Model) ----------------------//
// The DOM is a programming interface that lets us interact with HTML and XML documents. 
// It represents a document as a tree structure, where each node in the tree corresponds to a part of the document. 
// JavaScript utilizes the DOM to read, modify, or delete elements on a webpage.

// ------------------- Key Highlights -------------------------//

// ->  The DOM provides an object-oriented representation of the HTML structure.
// ->  Nodes: Every part of the document (such as elements, text, or attributes) is represented as a node.
// ->  Tree Structure: The DOM follows a tree-like hierarchy where elements are branches, and each piece of content or element is a node in the hierarchy.

// Example
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

----------------DOM structure------------------

Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1
         └── p
*/

//------------------ Accessing Elements in the DOM---------------//

// document.getElementById("id"): Retrieves an element by its ID.

const header = document.getElementById("header");

// document.getElementsByClassName("class"): Retrieves elements by their class name and returns a collection.

const items = document.getElementsByClassName("item");

// document.getElementsByTagName("tag"): Retrieves elements by their tag name (like div, p, etc.).

const paragraphs = document.getElementsByTagName("p");

// document.querySelector("selector"): Selects the first element that matches a CSS selector (e.g., #id, .class, tag).

const mainDiv = document.querySelector("#main");

// document.querySelectorAll("selector"): Retrieves all elements that match a CSS selector.

const divs = document.querySelectorAll("div");



//------------------------Modifying the DOM--------------------------------//

// Updating Text
// textContent: Modifies or retrieves the text inside an element.

header.textContent = "Welcome to the Page!";

// Updating HTML
// innerHTML: Modifies or retrieves the HTML content inside an element.

mainDiv.innerHTML = "<p>New paragraph!</p>";

// Updating Attributes
// setAttribute and getAttribute: Add or retrieve attributes of an element.

header.setAttribute("class", "newClass");
const className = header.getAttribute("class");

// Updating Styles

header.style.color = "blue";
header.style.fontSize = "24px";



//---------------- Creating and Adding New Elements----------------------//

// document.createElement("tag"): Creates a new element.

const newDiv = document.createElement("div");

// Adding text content:

newDiv.textContent = "This is a new div!";

// To make this element visible, we must attach it to the DOM.

// Adding the element to the DOM:

document.body.appendChild(newDiv);


//----------------Removing Elements----------------------//

// Remove an element using the removeChild method.

const parent = document.querySelector("#parentElement");
const child = document.querySelector("#childElement");
parent.removeChild(child);

// Remove an element directly

child.remove();

//---------------------------------------------///--------------------------------///


// DOM Manipulation in JavaScript
// JavaScript allows us to interact with and modify the Document Object Model (DOM) to change elements, styles, and structure dynamically on a web page.

//---Accessing Elements---//
// We can select elements using methods like getElementById, getElementsByClassName, getElementsByTagName, or querySelector.

// Selecting an element by ID
let header = document.getElementById("header");
console.log(header); // Logs the element with ID "header"

// Selecting elements by class name
let items = document.getElementsByClassName("item");
console.log(items); // Logs a collection of elements with the class "item"

// Selecting an element using querySelector
let firstItem = document.querySelector(".item");
console.log(firstItem); // Logs the first element with class "item"


//-----Changing Content-----//

// We can modify the content of an element using properties like innerHTML, textContent, or innerText.

let message = document.getElementById("message");
message.innerHTML = "Hello, World!"; // Changes the content of the element

//-----Modifying Attributes----//

// Attributes like src, href, and alt can be changed using the setAttribute and getAttribute methods.

let image = document.querySelector("img");
image.setAttribute("src", "new-image.jpg"); // Changes the source of the image

//----Changing Styles----//

// We can modify CSS styles directly on elements using the style property.

let box = document.getElementById("box");
box.style.backgroundColor = "lightblue"; // Changes the background color of the box

//------Adding and Removing Classes-----//

// Classes can be added, removed, or toggled using classList methods like add, remove, and toggle.

let button = document.querySelector(".button");
button.classList.add("active"); // Adds the "active" class
button.classList.remove("active"); // Removes the "active" class
button.classList.toggle("active"); // Toggles the "active" class

//---------Creating and Appending Elements------//

// New elements can be created using document.createElement and added to the DOM using appendChild or append.

let newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv); // Adds the new div to the end of the body

//----EXAMPLE: Event Listeners-----//

// We can add interactivity by attaching event listeners to elements using addEventListener.

let button = document.querySelector("#clickMe");
button.addEventListener("click", function() {
  alert("Button was clicked!");
});

//------EXAMPLE: Removing Elements-----//

// Elements can be removed from the DOM using removeChild or remove.

let itemToRemove = document.getElementById("removeThis");
itemToRemove.remove(); // Removes the element from the DOM

// --- Summary-----//
// --- Selecting Elements: Use methods like getElementById, querySelector, and getElementsByClassName.------//
// --- Changing Content and Attributes: Use innerHTML, textContent, and setAttribute.
// --- Styling: Modify styles using the style property.-----//
// --- Managing Classes: Use classList methods to add, remove, or toggle classes.
// --- Creating Elements: Use createElement and append to the DOM.----//
// --- Event Handling: Use addEventListener to respond to user actions.------//
// --- Removing Elements: Use remove or removeChild to delete elements from the DOM.--//


//-------------------------//-------------------------------------------//----------------------------------------//


// --------------------------- Array Destructuring ----------------------------

// Array destructuring in JavaScript is a concise syntax that allows you to unpack values from an array and assign them to variables.
const numbersArray = [10, 20, 30];
const [num1, num2, num3] = numbersArray;
console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // 30

// ------------------------- Skipping Elements ------------------------
// Sometimes, we may want to skip certain elements when destructuring an array. This can be achieved by using empty commas.
const values = [1, 2, 3, 4, 5];
const [firstValue, , thirdValue] = values;
console.log(firstValue); // 1
console.log(thirdValue); // 3

// -------------------------- Default Values --------------------------
// If there are fewer elements in the array than variables being assigned, we can set default values to ensure variables always have a value.
const colorsArray = ["red", "blue"];
const [primaryColor, secondaryColor, tertiaryColor = "green"] = colorsArray;
console.log(tertiaryColor); // "green" (default value)

// ------------------------- Swapping Values ------------------------
// Array destructuring makes it easy to swap the values of two variables in a single line of code.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// --------------------- Rest Operator with Destructuring ----------------
// We can use the rest operator (`...`) to collect the remaining elements of an array into a new array.
const vegetables = ["carrot", "broccoli", "spinach", "potato"];
const [firstVeg, secondVeg, ...otherVeggies] = vegetables;
console.log(firstVeg); // "carrot"
console.log(secondVeg); // "broccoli"
console.log(otherVeggies); // ["spinach", "potato"]

// --------------------------- Nested Array Destructuring ----------------------------
// We can also unpack values from nested arrays with destructuring.
const nestedArray = [100, [200, 300], 400];
const [firstNum, [secondNum, thirdNum], fourthNum] = nestedArray;
console.log(firstNum); // 100
console.log(secondNum); // 200
console.log(thirdNum); // 300
console.log(fourthNum); // 400

// ---------------------------- Destructuring in Function Parameters -----------------------
// Array destructuring is particularly useful when working with functions that accept arrays as arguments.
function add([x, y, z]) {
  return x + y + z;
}
const numbersToAdd = [1, 2, 3];
console.log(add(numbersToAdd)); // 6


// ----------------------------- Object Destructuring ----------------------------

// Object destructuring allows you to unpack properties from an object and assign them to variables.
const user = { username: "ahmed123", age: 28 };
const { username, age } = user;
console.log(username); // "ahmed123"
console.log(age); // 28

// --------------------------- Renaming Variables ---------------------------
// You can assign values from an object to new variables by specifying a different name.
const individual = { name: "Bilal", years: 30 };
const { name: fullName, years: age } = individual;
console.log(fullName); // "Bilal"
console.log(age); // 30

// -------------------------- Default Values in Objects --------------------------
// You can also provide default values for properties in case they are missing from the object.
const person = { name: "Hassan" };
const { name, gender = "unknown" } = person;
console.log(name); // "Hassan"
console.log(gender); // "unknown" (since `gender` is not in `person`)

// -------------------------- Nested Object Destructuring --------------------------
// You can destructure properties from nested objects directly.
const employee = {
  id: 101,
  details: {
    name: "Usman",
    department: "IT"
  }
};
const { details: { name, department } } = employee;
console.log(name); // "Usman"
console.log(department); // "IT"

// ----------------------------- Object Destructuring in Function Parameters -----------------------
// Destructuring is commonly used in function parameters, especially when dealing with objects.
function introduce({ name, job }) {
  console.log(`Hi, my name is ${name} and I am a ${job}.`);
}

const personInfo = { name: "Nashit", job: "developer" };
introduce(personInfo); // Hi, my name is Nashit and I am a developer.


// ------------------------- Key Operators in Destructuring ------------------------

// 1. "Array Destructuring:"
//    - "Syntax:" [a, b] = array
//    - "Unpacks values" from an array into variables.

const arr = [1, 2, 3];
const [val1, val2] = arr;
console.log(val1); // 1
console.log(val2); // 2

// 2. "Rest Operator (`...`):"
//    - Used to "collect the remaining elements" into an array.
const arr2 = [1, 2, 3, 4];
const [first, second, ...rest] = arr2;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]

// 3. "Default Values:"
//    - If a value is missing during destructuring, you can assign a "default value".
const arr3 = [1];
const [x = 0, y = 2] = arr3;
console.log(x); // 1
console.log(y); // 2 (default)

// 4. "Swapping Variables:"
//    - Allows you to "swap values" between variables using destructuring.
let p = 5;
let q = 10;
[p, q] = [q, p];
console.log(p); // 10
console.log(q); // 5

// 5. "Nested Destructuring:"
//    - You can destructure "nested arrays" or "objects" directly by referencing their properties or indices.
const nestedObject = { name: "Ali", address: { city: "Karachi", zip: "75000" } };
const { address: { city, zip } } = nestedObject;
console.log(city); // "Karachi"
console.log(zip); // "75000"

// 6. "Renaming Variables:"
//    - You can rename destructured properties using the syntax "propertyName: newName".
const person2 = { name: "Ahmed", age: 26 };
const { name: personName, age: personAge } = person2;
console.log(personName); // "Ahmed"
console.log(personAge); // 26



//------------------------------------------//--------------------------------------//
