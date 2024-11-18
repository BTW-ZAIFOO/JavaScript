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

//------------Here are 5-7 solved problems using the switch statement:-----//

//---------Problem 1: Determine the day of the week-------//

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
        break;
}
// Output://

"Wednesday"

//----------Problem 2: Identify a fruit by its name----------//

let fruit = "Mango";

switch (fruit) {
    case "Apple":
        console.log("Apples are sweet and crunchy.");
        break;
    case "Banana":
        console.log("Bananas are a great source of potassium.");
        break;
    case "Mango":
        console.log("Mangoes are tropical and juicy.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}

// Output://

"Mangoes are tropical and juicy."

//----------Problem 3: Traffic light instructions--------//

let trafficLight = "Red";

switch (trafficLight) {
    case "Red":
        console.log("Stop!");
        break;
    case "Yellow":
        console.log("Get ready to move.");
        break;
    case "Green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid traffic light color.");
        break;
}

// Output: //

"Stop!"

//----------Problem 4: Identify the season by month number-------//

let month = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("It's winter.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("It's spring.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("It's summer.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("It's autumn.");
        break;
    default:
        console.log("Invalid month.");
        break;
}

// Output://

"It's spring."

//----------Problem 5: Determine the grade based on score------//

let score = 85;

switch (true) {
    case score >= 90:
        console.log("Grade: A+");
        break;
    case score >= 80:
        console.log("Grade: A");
        break;
    case score >= 70:
        console.log("Grade: B");
        break;
    case score >= 60:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
        break;
}

// Output://

"Grade: A"

//-----------Problem 6: Select a beverage---------//

let beverage = "Tea";

switch (beverage) {
    case "Coffee":
        console.log("You selected Coffee.");
        break;
    case "Tea":
        console.log("You selected Tea.");
        break;
    case "Juice":
        console.log("You selected Juice.");
        break;
    default:
        console.log("Unknown beverage.");
        break;
}

// Output: //

"You selected Tea."

//-----------Problem 7: Identify the continent based on country------//

let country = "Japan";

switch (country) {
    case "USA":
    case "Canada":
    case "Mexico":
        console.log("The country is in North America.");
        break;
    case "France":
    case "Germany":
    case "Italy":
        console.log("The country is in Europe.");
        break;
    case "Japan":
    case "China":
    case "India":
        console.log("The country is in Asia.");
        break;
    default:
        console.log("Unknown continent.");
        break;
}

// Output: //

"The country is in Asia."

//-----------Here are 5-7 solved examples using truthy and falsy values in JavaScript:--------//

//--------Problem 1: Check if a value is truthy-------//

let value = "Hello";

if (value) {
    console.log("The value is truthy.");
} else {
    console.log("The value is falsy.");
}

// Output: //

"The value is truthy."

//----------Problem 2: Check for falsy values in user input------//

let userInput = "";

if (userInput) {
    console.log("User input is valid.");
} else {
    console.log("User input is empty or invalid.");
}

// Output://

"User input is empty or invalid."

//----------Problem 3: Default a value using a falsy check------//

let userName = null;
let defaultName = userName || "Guest";

console.log("Welcome, " + defaultName + "!");

// Output: //

"Welcome, Guest!"

//------Problem 4: Check if a number is valid----//

let num = 0;

if (num) {
    console.log("The number is valid.");
} else {
    console.log("The number is invalid or zero.");
}

// Output: //

"The number is invalid or zero."

//-------Problem 5: Use a truthy value in a conditional--------//

let hasAccess = true;

if (hasAccess) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// Output://

"Access granted."

//---------Problem 6: Handle falsy values in data-------//

let userAge = undefined;

if (userAge) {
    console.log("The user age is " + userAge + ".");
} else {
    console.log("User age is not provided.");
}

// Output://

"User age is not provided."

//---------Problem 7: Check for truthy and falsy in a list--------//

let items = [0, "Apple", null, undefined, "Banana", false];

for (let item of items) {
    if (item) {
        console.log(item + " is truthy.");
    } else {
        console.log(item + " is falsy.");
    }
}

// Output:
// "0 is falsy."
// "Apple is truthy."
// "null is falsy."
// "undefined is falsy."
// "Banana is truthy."
// "false is falsy."
