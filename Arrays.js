// Array

// An array is a data structure in JavaScript that holds a collection of elements, which can be of any type, including numbers, strings, objects, or even other arrays. Arrays are zero-indexed, meaning the first element is accessed at index 0


// syntax
let arrayName = [element1, element2, element3, ];

// Example

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); 

// accessing individual element

console.log(fruits[0]); 
console.log(fruits[2]); 

// modifying elements

fruits[1] = "blueberry"; 
console.log(fruits); 



// finding array lenght

let colors = ["red", "green", "blue"];
console.log(colors.length); 

// print element of Array using Loop


let fruits = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
