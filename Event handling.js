// Event Handling in JavaScript
// Events are actions or occurrences that happen in the browser, such as clicking a button or submitting a form. JavaScript allows us to handle these events using event listeners.

// Adding an Event Listener
// The `addEventListener` method attaches an event handler to an element.

let button = document.getElementById("myButton");

// Adding a 'click' event listener to the button
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// When the button is clicked, "Button clicked!" will be logged to the console.

// Named Function as Event Handler
// Instead of using an anonymous function, we can define a named function.

function handleClick() {
  console.log("Button was clicked!");
}

// Adding the named function as the event listener
button.addEventListener("click", handleClick);

// Removing Event Listeners
// Event listeners can be removed using the `removeEventListener` method.

function logMessage() {
  console.log("This will only log once.");
}

// Adding the listener
button.addEventListener("click", logMessage);

// Removing the listener
button.removeEventListener("click", logMessage);

// Event Object
// Event handlers receive an event object that provides information about the event.

button.addEventListener("click", function (event) {
  console.log("Event type:", event.type); // Output: "Event type: click"
  console.log("Clicked element:", event.target); // Logs the clicked element
});

// Handling Keyboard Events
// The `keydown` and `keyup` events are used to handle keyboard inputs.

document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key); // Logs the key pressed
});

// Event Delegation
// Event delegation allows us to handle events for multiple child elements using a single parent.

let list = document.getElementById("myList");

// Adding an event listener to the parent
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});

// Clicking on an <li> element inside the list triggers this event.

// Adding Multiple Event Listeners
// Multiple event listeners can be added to the same element.

button.addEventListener("mouseenter", function () {
  console.log("Mouse entered the button!");
});

button.addEventListener("mouseleave", function () {
  console.log("Mouse left the button!");
});

// Summary
// - The `addEventListener` method attaches an event handler to an element.
// - The `removeEventListener` method removes an event listener.
// - The event object provides details about the event.
// - Event delegation efficiently handles events on multiple child elements.
// - Multiple event listeners can be added to a single element.
