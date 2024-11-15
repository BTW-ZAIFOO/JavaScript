// Modifying Elements in JavaScript
// JavaScript allows us to modify HTML elements dynamically by changing their content, style, and attributes.

// Modifying innerHTML
// innerHTML allows us to get or set the HTML content of an element.

let heading = document.getElementById("title");
heading.innerHTML = "Welcome to My Page!"; // Changes the content of the element with id "title"

// Modifying Style
// We can change the CSS styles of an element using the `style` property.

let button = document.getElementById("myButton");
button.style.backgroundColor = "blue"; // Changes the button's background color to blue
button.style.color = "white";          // Changes the button's text color to white
button.style.fontSize = "20px";        // Changes the button's font size to 20px

//Modifying Attributes
// We can get, set, or remove HTML attributes of an element using JavaScript methods.

let image = document.getElementById("myImage");
image.setAttribute("src", "image.jpg");    // Sets the `src` attribute of the image element
image.setAttribute("alt", "Beautiful view"); // Sets the `alt` attribute for accessibility

// Checking if an attribute exists
if (image.hasAttribute("src")) {
  console.log("Image source is set."); // Output: "Image source is set."
}

// Removing an attribute
image.removeAttribute("alt"); // Removes the `alt` attribute from the image element

// Using innerHTML and style in combination
// We can use these properties together to fully customize elements.

let message = document.getElementById("message");
message.innerHTML = "Thank you for visiting!";
message.style.color = "green";          // Changes the text color to green
message.style.fontWeight = "bold";       // Makes the text bold

// Summary
// - `innerHTML` lets us modify the HTML content inside an element.
// - The `style` property allows us to apply or change CSS directly on elements.
// - Methods like `setAttribute`, `hasAttribute`, and `removeAttribute` help in modifying, checking, and removing attributes on elements.
