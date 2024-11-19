//---------15-20 solved examples focused on DOM manipulation using JavaScript.------//

//-------Problem 1: Change the text content of an element---------//

document.getElementById("title").textContent = "New Title!";

// Changes the text inside the element with id="title".

//-----------Problem 2: Change the style of an element----------//

document.getElementById("title").style.color = "blue";

// Changes the text color of the element with id="title" to blue.

//-------------Problem 3: Add a new class to an element--------//

document.querySelector(".box").classList.add("highlight");

// Adds the "highlight" class to the element with class="box".

//-------------Problem 4: Remove a class from an element--------//

document.querySelector(".box").classList.remove("highlight");

// Removes the "highlight" class from the element with class="box".

//--------------Problem 5: Toggle a class on an element---------//

document.querySelector(".box").classList.toggle("hidden");

// Toggles the "hidden" class on the element with class="box".

//--------------Problem 6: Get the value of an input field--------//

let inputValue = document.getElementById("input-box").value;
console.log("Input Value: " + inputValue);

// Logs the value entered in the input field with id="input-box".

//---------------Problem 7: Set the value of an input field--------//

document.getElementById("input-box").value = "Default Text";

// Sets the value of the input field with id="input-box" to "Default Text".

//-----------------Problem 8: Add a new element to the DOM---------//

let newItem = document.createElement("li");
newItem.textContent = "New List Item";
document.getElementById("list").appendChild(newItem);

// Creates a new <li> element and appends it to the element with id="list".

//---------------Problem 9: Remove an element from the DOM------------//

let itemToRemove = document.getElementById("old-item");
itemToRemove.remove();

// Removes the element with id="old-item" from the DOM.

//--------------Problem 10: Change the attribute of an element-------//

document.getElementById("image").setAttribute("src", "new-image.jpg");

// Changes the "src" attribute of the element with id="image" to "new-image.jpg".

//---------------Problem 11: Add an event listener to a button----------//

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Displays an alert when the button with id="myButton" is clicked.

//-------------Problem 12: Change innerHTML of an element------------//

document.getElementById("container").innerHTML = "<p>New Paragraph</p>";

// Replaces the content of the element with id="container" with a new paragraph.

//------------Problem 13: Get all elements with a specific class--------//

let items = document.getElementsByClassName("item");
console.log(items.length + " items found.");

// Logs the count of elements with class="item".

//-----------Problem 14: Change the text of multiple elements----------//

let elements = document.querySelectorAll(".item");
elements.forEach((element) => {
    element.textContent = "Updated Text";
});

// Changes the text of all elements with class="item".

//------------Problem 15: Disable a button--------------//

document.getElementById("submit-button").disabled = true;

// Disables the button with id="submit-button".

//-------------Problem 16: Scroll to the top of the page-------//

document.getElementById("top").scrollIntoView({ behavior: "smooth" });

// Scrolls smoothly to the element with id="top".

//--------------Problem 17: Change the background color of an element-----//

document.querySelector(".box").style.backgroundColor = "lightgray";

// Changes the background color of the element with class="box" to light gray.

//---------------Problem 18: Add a hover effect using JavaScript----------//

let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});

// Changes the background color of the element with class="box" on hover.

//----------------Problem 19: Hide and show an element----------//

let toggleButton = document.getElementById("toggle-button");
let content = document.getElementById("content");

toggleButton.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});

// Toggles the visibility of the element with id="content" when the button is clicked.

//------------Problem 20: Get the computed style of an element----------//

let box = document.querySelector(".box");
let style = window.getComputedStyle(box);
console.log("Box width: " + style.width);

// Logs the computed width of the element with class="box".
