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
