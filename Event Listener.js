//----Events----//

//---What is an event?
//---Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

//----For example:

//---The user selects, clicks, or hovers the cursor over a certain element.
//---The user chooses a key on the keyboard.
//---The user resizes or closes the browser window.
//---A web page finishes loading.
//---A form is submitted.
//---A video is played, paused, or ends.
//---An error occurs.

//---To react to an event, you attach an event handler to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.

//---When such a block of code is defined to run in response to an event, we say we are registering an event handler.

//---Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together.

//---Syntax

element.addEventListener(event, listener, useCapture);

//---event: Type of event to listen for (e.g., "click").
//---listener: Function to execute when the event occurs.
//---useCapture (optional): Boolean indicating the phase (default is false for bubbling).

//---Example:

//-----THE BELOW EXAMPLE IS ENOUGH FOR EXPLANATION

//---H T M L

<button> Change color </button>

//---C S S 

button {
  margin: 10px;
}

//---J A V A S C R I P T 

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//--- This code is a simple implementation of a feature that changes the background color of a webpage to a random color whenever a button is clicked. 

//--- HTML: The code includes a button element with the text "Change color." This is the user interface element that triggers the functionality.

//--- CSS: The `button` selector applies basic styling by adding a `margin` of 10 pixels, ensuring the button has space around it and appears neatly on the page.

//--- JavaScript: 
//--- The `querySelector` method selects the button element from the HTML and assigns it to the `btn` variable. This allows JavaScript to interact with the button.
//--- A `random` function is defined, which takes a `number` as input and returns a random integer between 0 and the provided number (inclusive). This function is used to generate random RGB values for the red, green, and blue components of a color.
//--- An event listener is attached to the button using `addEventListener`. The event listener listens for a "click" event and executes an arrow function whenever the button is clicked.
//--- Inside the event listener, a new random color is created by calling the `random` function three times to generate random values for red, green, and blue. These values are then combined into a string formatted as `rgb(r, g, b)` (e.g., `rgb(123, 45, 67)`).
//--- Finally, the `backgroundColor` property of the document's `body` is updated with the newly generated random color, changing the background color of the entire webpage dynamically.

//---This feature provides an engaging and interactive experience for users, as the background color changes unpredictably each time they click the button. ---//

//-----MORE EXPLANATION----//

//----Using addEventListener()----//

//----As we saw in the last example, objects that can fire events have an addEventListener() method, and this is the recommended mechanism for adding event handlers.---//

//----- The HTML `<button>` element triggers an event when clicked by the user. This is achieved by using the `addEventListener()` function, which takes two parameters. The first parameter is the string `"click"`, specifying that the event listener should respond to the click event. Buttons can trigger various other events, such as `"mouseover"` when the mouse pointer moves over the button or `"keydown"` when a key is pressed while the button is focused. The second parameter is a function that executes when the event occurs. In this case, the function generates a random RGB color and applies it as the background color of the page's `<body>`. ----//
