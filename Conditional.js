// IF Statement (executes code if the condition is true)
let speed = 80;
if (speed <= 60) {
    console.log("The car is going at a safe speed.");
}

let fuelLevel = 50;

if (fuelLevel > 0) {
    console.log("The car has fuel.");
}

// ------------------------------------------------------------

// IF-ELSE Statement (executes IF block if condition is true; otherwise, executes ELSE block)
let tirePressure = 25;

if (tirePressure > 30) {
    console.log("The tire pressure is high.");
} else {
    console.log("The tire pressure is low.");
}

// ------------------------------------------------------------

// ELSE-IF Statement (checks IF condition first; if false, checks ELSE-IF conditions, then executes ELSE if no conditions are true)
let engineTemperature = 90;

if (engineTemperature > 100) {
    console.log("The engine is overheating.");
} else if (engineTemperature < 50) {
    console.log("The engine temperature is low.");
} else {
    console.log("The engine temperature is normal.");
}

// ------------------------------------------------------------

// SWITCH Statement (executes code based on matching case; defaults to other code if no match is found)
let carBrand = "Toyota";

switch (carBrand) {
    case "Honda":
        console.log("Honda cars are reliable!");
        break;
    case "Toyota":
        console.log("Toyota cars are popular for durability!");
        break;
    case "BMW":
        console.log("BMW cars are known for luxury!");
        break;
    default:
        console.log("That's a different car brand.");
}

// ------------------------------------------------------------

let gearLevel = 2;
switch (gearLevel) {
    case 1:
        console.log("Car is in first gear.");
        break;
    case 2:
        console.log("Car is in second gear.");
        break;
    case 3:
        console.log("Car is in third gear.");
        break;
    default:
        console.log("Unknown gear level.");
        break;
}


//--------------------------------------------------------->

// Falsy Values

// The following are falsy values in JavaScript:
// false, 0 (and -0), "" (empty string), null, undefined, NaN (Not-a-Number)

// Truthy Values

// Any value that isn’t falsy is considered truthy.

// Example

let carModel = "Camry";

if (carModel) {
  console.log("The car model is truthy, meaning it exists."); 
}

// More Examples

if ("Sedan") {
    console.log("This car type is truthy!");  
}

if (200) {
    console.log("Any number other than 0 is truthy!");  
}

if ({ make: "Toyota" }) {
    console.log("An object representing a car is truthy!");  
}

if (["Corolla", "Camry"]) {
    console.log("An array of car models is truthy!");  
}

if (function() { return "Drive"; }) {
    console.log("Functions are also truthy!"); 
}
