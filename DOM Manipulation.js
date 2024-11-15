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
