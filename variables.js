// variables are used to store data values..
// var
// let
// const

// 1- var

var name= "Aqib";
console.log(name);

// we can reassign the values

name="sam";
console.log(name);

// 2- let

let age=15;
console.log(age);
// we can reassign the values
age=20;
console.log(age);



// 3- const

const UserId= "aqib123"
console.log(UserId);

// we cannot reassign values in const

// UserId= "sam123";
// console.log(UserId); //give error


//  EXAMPLES

var country = "PAKISTAN";
let population = 330000000;
const city = "ISLAMABAD";

console.log(country);     
console.log(population);  
console.log(city);   

population = 881000000;   
console.log(population);  

//  EXAMPLES

let score = 100;
console.log(score); 

score = 150; 
console.log(score); 

const maxScore = 200;
console.log(maxScore); 

// maxScore = 250; // Error

// EXAMPLE

console.log(a); // Output: undefined 
var a = 5;

console.log(b); // Error! Cannot access 'b' before initialization
let b = 10;

console.log(c); // Error! Cannot access 'c' before initialization
const c = 15;
