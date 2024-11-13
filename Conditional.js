// IF Statement (executes code if the condition is true)
let temperature = 15;
if (temperature <= 15) {
    console.log("It's a cold day.");
}

let score = 8;

if (score > 0) {
    console.log("The score is positive.");
}

// ------------------------------------------------------------

// IF-ELSE Statement (executes IF block if condition is true; otherwise, executes ELSE block)
let balance = -20;

if (balance > 0) {
    console.log("The balance is positive.");
} else {
    console.log("The balance is negative.");
}

// ------------------------------------------------------------

// ELSE-IF Statement (checks IF condition first; if false, checks ELSE-IF conditions, then executes ELSE if no conditions are true)
let stock = 0;

if (stock > 0) {
    console.log("The stock is available.");
} else if (stock < 0) {
    console.log("The stock is negative.");
} else {
    console.log("The stock is empty.");
}

// ------------------------------------------------------------

// SWITCH Statement (executes code based on matching case; defaults to other code if no match is found)
let fruit = "Apple";

switch (fruit) {
    case "Banana":
        console.log("Bananas are rich in potassium!");
        break;
    case "Apple":
        console.log("An apple a day keeps the doctor away!");
        break;
    case "Orange":
        console.log("Oranges are full of Vitamin C!");
        break;
    default:
        console.log("That's a different fruit.");
}

// ------------------------------------------------------------

let level = 3;
switch (level) {
    case 1:
        console.log("Beginner level.");
        break;
    case 2:
        console.log("Intermediate level.");
        break;
    case 3:
        console.log("Advanced level.");
        break;
    default:
        console.log("Level not recognized.");
        break;
}
