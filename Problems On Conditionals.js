//------Here are 5-7 solved problems using the if statement:-----//

//-----Problem 1: Check if a number is positive------//

let number = 10;
if (number > 0) {
    console.log("The number is positive.");
}

// Output://

"The number is positive."

//---------Problem 2: Check if a person is eligible to vote--------//

let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// Output://

"You are eligible to vote."

//--------Problem 3: Check if a student has passed an exam-------//

let marks = 75;
if (marks >= 40) {
    console.log("The student has passed the exam.");
}

// Output: //

"The student has passed the exam."

//-------Problem 4: Check if a temperature is below freezing------//

let temperature = -5;
if (temperature < 0) {
    console.log("It's freezing outside.");
}

// Output://

"It's freezing outside."

//--------Problem 5: Check if a string is empty-------//

let text = "";
if (text === "") {
    console.log("The string is empty.");
}

// Output://

"The string is empty."

//---------Problem 6: Check if a user is logged in--------//

let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome, User!");
}

// Output://

"Welcome, User!"

//-----------Problem 7: Check if a number is even-------//

let num = 8;
if (num % 2 === 0) {
    console.log("The number is even.");
}

// Output://

"The number is even."

//---------Here are 5-7 solved problems using the if-else statement:----//

//----------Problem 1: Check if a number is odd or even------------//

let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Output://

"The number is odd."

//---------Problem 2: Check if a person can drive based on age-------//

let age = 16;

if (age >= 18) {
    console.log("You are allowed to drive.");
} else {
    console.log("You are not old enough to drive.");
}

// Output://

"You are not old enough to drive."

//----------Problem 3: Determine if a temperature is hot or cold-----//

let temperature = 35;

if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's cold outside.");
}

// Output://

"It's hot outside."

//----------Problem 4: Check if a number is positive or negative------//

let num = -3;

if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// Output://

"The number is negative."

//--------Problem 5: Determine if a user is logged in or not---------//

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}

// Output://

"Please log in."

//------Problem 6: Compare two numbers------//

let num1 = 15;
let num2 = 10;

if (num1 > num2) {
    console.log("The first number is greater.");
} else {
    console.log("The second number is greater.");
}

// Output://

"The first number is greater."

//-------Problem 7: Check if a student has passed or failed--------//

let score = 45;

if (score >= 50) {
    console.log("You have passed the exam.");
} else {
    console.log("You have failed the exam.");
}

// Output://

"You have failed the exam."

//----------------Here are 5-7 solved problems using the if-else statement:-----//

//---------Problem 1: Categorize a number as positive, negative, or zero------//

let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Output: //

"The number is negative."

//-------------Problem 2: Determine the grade of a student based on marks-------//

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Output://

"Grade: A"

//------------Problem 3: Check the weather based on temperature-------//

let temperature = 25;

if (temperature > 35) {
    console.log("It's very hot.");
} else if (temperature >= 25 && temperature <= 35) {
    console.log("The weather is warm.");
} else if (temperature >= 15 && temperature < 25) {
    console.log("The weather is cool.");
} else {
    console.log("It's cold outside.");
}

// Output: //

"The weather is warm."

//-----------Problem 4: Determine the type of triangle based on side lengths------//

let a = 5, b = 5, c = 8;

if (a === b && b === c) {
    console.log("The triangle is equilateral.");
} else if (a === b || b === c || a === c) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}

// Output://

"The triangle is isosceles."

//-----------Problem 5: Check the stage of life based on age---------//

let age = 25;

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// Output://

"You are an adult."

//------------Problem 6: Determine internet speed category-------//

let speed = 50;

if (speed > 100) {
    console.log("High-speed internet.");
} else if (speed >= 50 && speed <= 100) {
    console.log("Moderate-speed internet.");
} else {
    console.log("Low-speed internet.");
}

// Output://

"Moderate-speed internet."

//------------Problem 7: Categorize a vehicle's fuel efficiency--------//

//------// km per liter----//
let fuelEfficiency = 15; 

if (fuelEfficiency > 20) {
    console.log("The vehicle is very fuel efficient.");
} else if (fuelEfficiency >= 10 && fuelEfficiency <= 20) {
    console.log("The vehicle has average fuel efficiency.");
} else {
    console.log("The vehicle is not fuel efficient.");
}

// Output: //

"The vehicle has average fuel efficiency."
