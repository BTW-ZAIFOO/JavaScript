// Array

// An array is a data structure in JavaScript that stores a collection of elements. These elements can be of any type, such as numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning the first element is at index 0.

// Syntax
let arrayName = [item1, item2, item3];

// Example

let animals = ["lion", "tiger", "elephant"];
console.log(animals);

// Accessing individual items

console.log(animals[0]); 
console.log(animals[2]); 

// Updating elements

animals[1] = "giraffe"; 
console.log(animals);

// Getting the length of an array

let colors = ["yellow", "purple", "orange"];
console.log(colors.length);

// Printing each element of an array using a loop

let cities = ["Paris", "London", "Tokyo", "Sydney"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
