//------1. indexOf()------//

// Problem 1: Find the index of a specific fruit
let fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Problem 2: Search for a non-existent item
let cars = ["Toyota", "Honda"];
let notFoundIndex = cars.indexOf("BMW");
console.log(notFoundIndex); // Output: -1

// Problem 3: Find the index of a number
let numbers = [10, 20, 30, 40];
let numIndex = numbers.indexOf(30);
console.log(numIndex); // Output: 2

// Problem 4: Find the first occurrence in a mixed array
let mixed = ["A", 10, true, "A"];
console.log(mixed.indexOf("A")); // Output: 0

// Problem 5: Check if a color exists
let colors = ["Red", "Blue", "Green"];
if (colors.indexOf("Blue") !== -1) {
  console.log("Blue is in the array"); // Output: Blue is in the array
}
