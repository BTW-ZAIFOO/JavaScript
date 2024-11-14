// STRINGS

const developerName = "Zara";
const projectCount = 8;

// Concatenation of string and number
console.log(developerName + projectCount + " Projects");

//------Explanantion of above------//

developerName + projectCount: Since developerName is a string and projectCount is a number, JavaScript converts projectCount to a string, then concatenates the two. For example, if developerName = "John" and projectCount = 5, this results in "John5".

"John5" + " Projects": Now, it concatenates "John5" with the string " Projects", resulting in "John5 Projects".
  
//------Explanantion of above Ends here------//

// Template literal for string interpolation
console.log(`Hello, I'm ${developerName} and I've worked on ${projectCount} projects.`);

//------Explanantion of above------//

let developerName = "Huzaifa";
let projectCount = 5;

//-----Output of above------//

Hello, I'm Huzaifa and I've worked on 5 projects.

//------Explanantion of above Ends here------//

// Creating a string object
const websiteName = new String("zara-site");
console.log(websiteName[0]); // Accessing the first character of the string
console.log(websiteName.__proto__); // Inspecting the prototype of the string object

//-------Explanation Of the above-----//

// Creating a String Object:
// Using the String constructor to create a String object
// This is different from a primitive string, as it is now an object
const websiteName = new String("zara-site");

// Accessing the First Character:
// JavaScript strings are indexed like arrays, so we can access the first character using bracket notation
// websiteName[0] retrieves the first character of the string ('z')
console.log(websiteName[0]);

// Inspecting the Prototype:
// __proto__ is a non-standard property that references the prototype of the object
// Since websiteName is a String object, websiteName.__proto__ will provide access to the prototype of String
// The prototype contains methods like toUpperCase(), slice(), indexOf(), and others
console.log(websiteName.__proto__);

//----------Explanation Of above ends here----//


// String length
console.log(websiteName.length);

//------Explanation of above----//

let websiteName = "MyWebsite";
console.log(websiteName.length);  // Output: 9

//-----Explanation of above end here----//

// Converting string to uppercase
console.log(websiteName.toUpperCase());

//------Explanation Of Above-----//

let websiteName = "mywebsite";
console.log(websiteName.toUpperCase()); 

        // Output: MYWEBSITE
//-----Explanation Of Above Ends Here----//

// Accessing a specific character in the string
console.log(websiteName.charAt(3));

//-----Explanation of the above------//

let websiteName = "MyWebsite";
console.log(websiteName.charAt(3)); 

        // Output: 'W'
//---------Explanation of above ends here------//

// Finding the index of a substring
console.log(websiteName.indexOf("s"));

//---------Explanation Of the above---------//

let websiteName = "example.com";
console.log(websiteName.indexOf("a"));  
      
          // Output: 3
//---------Explanation Of the above ends here----//

// Extracting a substring from the string
const subString = websiteName.substring(0, 3);
console.log(subString);

//-------Explanation Of the above-------//

const websiteName = "TechHub";
const subString = websiteName.substring(0, 3);
console.log(subString); 

          // Output: "Tec"
//-----Explanation Of the above ends here-----//

// Using slice with negative indices
const anotherSlice = websiteName.slice(-6, 3);
console.log(anotherSlice);

//----------Explanation Of the above---------//

// Example string
const websiteName = "example.com";

// Using slice with negative indices
const anotherSlice = websiteName.slice(-6, 3);

console.log(anotherSlice); 

        
          // Output: ""
// Correct usage of slice
const correctSlice = websiteName.slice(3, -3);

console.log(correctSlice); // Output: "mple"

//----------Explanation of the above ends------//
// Removing extra spaces from a string
const spaceyString = "   zara   ";
console.log(spaceyString);
console.log(spaceyString.trim()); // Trim spaces

//------------Explanation of the above code-----//

const spaceyString = "   zara   ";
console.log(spaceyString);           
        
            // Output: "   zara   "

console.log(spaceyString.trim());   
        
            // Output: "zara"

//---------Explanation of the above code ends--------//
// Replacing a part of the string
const webUrl = "https://mysite.com/my%20website";
console.log(webUrl.replace("%20", "_")); // Replacing '%20' with '_'

//------Explanation of the above code------------//

//---Output https://mysite.com/my_website ---//

//---------Explanation of the above code ends--------//

// Checking if a string contains a certain substring
console.log(webUrl.includes("admin")); // Returns false, 'admin' is not in the URL

// Splitting the string where the '-' occurs
console.log(websiteName.split("-")); // Splits the string at the hyphen
