// Selecting Elements in JavaScript
// JavaScript provides various methods to select and manipulate HTML elements in the DOM (Document Object Model).

// Using getElementById
// This method selects an element by its unique `id`.

let title = document.getElementById("main-title");
console.log(title); // Output: <h1 id="main-title">Hello, World!</h1>

// You can manipulate the selected element.
title.textContent = "Welcome, Huzaifa!";
console.log(title.textContent); // Output: "Welcome, Huzaifa!"

// Using querySelector
// This method selects the first element that matches a CSS selector.

let firstParagraph = document.querySelector(".intro");
console.log(firstParagraph); // Output: <p class="intro">This is the first paragraph.</p>

// Manipulating the content of the selected element.
firstParagraph.style.color = "blue";

// Selecting Multiple Elements
// querySelectorAll selects all elements that match a CSS selector.

let listItems = document.querySelectorAll("li");
console.log(listItems); 
// Output: NodeList of <li> elements, e.g., [<li>Item 1</li>, <li>Item 2</li>]

// Looping through the selected elements
listItems.forEach((item) => {
  console.log(item.textContent);
});
// Output:
// Item 1
// Item 2

// Selecting by Class Name
// getElementsByClassName selects all elements with a specific class.

let boxes = document.getElementsByClassName("box");
console.log(boxes); 
// Output: HTMLCollection of elements with the class "box"

// Looping through the collection
for (let box of boxes) {
  box.style.border = "2px solid black";
}

// Selecting by Tag Name
// getElementsByTagName selects all elements with a specific tag.

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
// Output: HTMLCollection of <p> elements

// Manipulating all paragraphs
for (let para of allParagraphs) {
  para.style.fontFamily = "Arial";
}

// Selecting Nested Elements
// Combine methods or use querySelector to navigate through nested elements.

let nestedElement = document.querySelector("#container .item");
console.log(nestedElement);
// Output: The first element with the class "item" inside an element with the id "container"

// Using querySelector for Attribute Selectors
// You can use CSS attribute selectors to find elements.

let inputField = document.querySelector("input[type='text']");
console.log(inputField); 
// Output: The first <input> element with type="text"

// Dynamic Selection
// Selection methods work dynamically, reflecting updates in the DOM.

let newItem = document.createElement("li");
newItem.textContent = "New Item";
document.querySelector("ul").appendChild(newItem);

let updatedListItems = document.querySelectorAll("li");
console.log(updatedListItems.length); // Updated count

// Summary
// - `getElementById`: Selects a single element by `id`.
// - `querySelector`: Selects the first element matching a CSS selector.
// - `querySelectorAll`: Selects all elements matching a CSS selector.
// - `getElementsByClassName`: Selects all elements with a specific class (live collection).
// - `getElementsByTagName`: Selects all elements with a specific tag (live collection).
// - Use querySelector for flexible and precise selections with CSS-like syntax.
