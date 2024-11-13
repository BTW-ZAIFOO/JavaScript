// STRINGS

const developerName = "Zara";
const projectCount = 8;

// Concatenation of string and number
console.log(developerName + projectCount + " Projects");

// Template literal for string interpolation
console.log(`Hello, I'm ${developerName} and I've worked on ${projectCount} projects.`);

// Creating a string object
const websiteName = new String("zara-site");
console.log(websiteName[0]); // Accessing the first character of the string
console.log(websiteName.__proto__); // Inspecting the prototype of the string object

// String length
console.log(websiteName.length);

// Converting string to uppercase
console.log(websiteName.toUpperCase());

// Accessing a specific character in the string
console.log(websiteName.charAt(3));

// Finding the index of a substring
console.log(websiteName.indexOf("s"));

// Extracting a substring from the string
const subString = websiteName.substring(0, 3);
console.log(subString);

// Using slice with negative indices
const anotherSlice = websiteName.slice(-6, 3);
console.log(anotherSlice);

// Removing extra spaces from a string
const spaceyString = "   zara   ";
console.log(spaceyString);
console.log(spaceyString.trim()); // Trim spaces

// Replacing a part of the string
const webUrl = "https://mysite.com/my%20website";
console.log(webUrl.replace("%20", "_")); // Replacing '%20' with '_'

// Checking if a string contains a certain substring
console.log(webUrl.includes("admin")); // Returns false, 'admin' is not in the URL

// Splitting the string where the '-' occurs
console.log(websiteName.split("-")); // Splits the string at the hyphen
