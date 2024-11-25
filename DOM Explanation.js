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
