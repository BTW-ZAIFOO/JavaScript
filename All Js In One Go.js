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
