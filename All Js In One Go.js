//--------------------------------------------------->

// Array

// An array is a data structure in JavaScript that stores a collection of elements. These elements can be of any type, such as numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning the first element is at index 0.

// Syntax
let arrayName = [item1, item2, item3];

// Example

let cars = ["Toyota", "Honda", "Ford"];
console.log(cars);

// Accessing individual items

console.log(cars[0]); 
console.log(cars[2]); 

// Updating elements

cars[1] = "BMW"; 
console.log(cars);

// Getting the length of an array

console.log(cars.length);

// Printing each element of an array using a loop

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//--------------------------------------------------->

// Below are the some of the Array Methods

// Adding and Removing Methods

// push()
// Adds an element to the end of the array

cars.push("Mercedes");

// pop()
// Removes the last element from the array

cars.pop();

// unshift()
// Adds an element to the beginning of the array

cars.unshift("Audi");

// shift()
// Removes the first element from the array

cars.shift();

// join()
// Joins elements of the array into a string, separated by a specified character

let joinedCars = cars.join(" | ");
console.log(joinedCars);


//--------------------------------------------------->

// Merging and Slicing Methods

// concat()
// Combines two or more arrays

const moreCars = ["Tesla", "Chevrolet"];
const allCars = cars.concat(moreCars);

// slice()
// Returns a shallow copy of a section of an array

const someCars = cars.slice(1, 3);

// splice()
// Adds or removes elements at a specified position

cars.splice(0, 1, "Nissan");
console.log(cars);


//--------------------------------------------------->

// Searching and Checking Methods

// indexOf()
// Gets the index of the first appearance of an element or -1 if it's not present

const hondaIndex = cars.indexOf("Honda");

// includes()
// Determines if an array has a specified element

const containsToyota = cars.includes("Toyota");


//--------------------------------------------------->

// Sorting and Reversing

// sort()
// Sorts array elements in place and returns the sorted array

const carPrices = [20000, 15000, 30000, 10000];
carPrices.sort((a, b) => a - b);

// reverse()
// Reverses the order of elements in the array

const reversedCars = cars.reverse();


// Transforming Arrays Methods

// map()
// Creates a new array by applying a function to each element

const carNameLengths = cars.map(car => car.length);
