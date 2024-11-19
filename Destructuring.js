// --------------------------- Array Destructuring ----------------------------

// Array destructuring in JavaScript is a concise syntax that allows you to unpack values from an array and assign them to variables.
const numbersArray = [10, 20, 30];
const [num1, num2, num3] = numbersArray;
console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // 30

// ------------------------- Skipping Elements ------------------------
// Sometimes, we may want to skip certain elements when destructuring an array. This can be achieved by using empty commas.
const values = [1, 2, 3, 4, 5];
const [firstValue, , thirdValue] = values;
console.log(firstValue); // 1
console.log(thirdValue); // 3

// -------------------------- Default Values --------------------------
// If there are fewer elements in the array than variables being assigned, we can set default values to ensure variables always have a value.
const colorsArray = ["red", "blue"];
const [primaryColor, secondaryColor, tertiaryColor = "green"] = colorsArray;
console.log(tertiaryColor); // "green" (default value)

// ------------------------- Swapping Values ------------------------
// Array destructuring makes it easy to swap the values of two variables in a single line of code.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// --------------------- Rest Operator with Destructuring ----------------
// We can use the rest operator (`...`) to collect the remaining elements of an array into a new array.
const vegetables = ["carrot", "broccoli", "spinach", "potato"];
const [firstVeg, secondVeg, ...otherVeggies] = vegetables;
console.log(firstVeg); // "carrot"
console.log(secondVeg); // "broccoli"
console.log(otherVeggies); // ["spinach", "potato"]

// --------------------------- Nested Array Destructuring ----------------------------
// We can also unpack values from nested arrays with destructuring.
const nestedArray = [100, [200, 300], 400];
const [firstNum, [secondNum, thirdNum], fourthNum] = nestedArray;
console.log(firstNum); // 100
console.log(secondNum); // 200
console.log(thirdNum); // 300
console.log(fourthNum); // 400

// ---------------------------- Destructuring in Function Parameters -----------------------
// Array destructuring is particularly useful when working with functions that accept arrays as arguments.
function add([x, y, z]) {
  return x + y + z;
}
const numbersToAdd = [1, 2, 3];
console.log(add(numbersToAdd)); // 6


// ----------------------------- Object Destructuring ----------------------------

// Object destructuring allows you to unpack properties from an object and assign them to variables.
const user = { username: "ahmed123", age: 28 };
const { username, age } = user;
console.log(username); // "ahmed123"
console.log(age); // 28

// --------------------------- Renaming Variables ---------------------------
// You can assign values from an object to new variables by specifying a different name.
const individual = { name: "Bilal", years: 30 };
const { name: fullName, years: age } = individual;
console.log(fullName); // "Bilal"
console.log(age); // 30

// -------------------------- Default Values in Objects --------------------------
// You can also provide default values for properties in case they are missing from the object.
const person = { name: "Hassan" };
const { name, gender = "unknown" } = person;
console.log(name); // "Hassan"
console.log(gender); // "unknown" (since `gender` is not in `person`)

// -------------------------- Nested Object Destructuring --------------------------
// You can destructure properties from nested objects directly.
const employee = {
  id: 101,
  details: {
    name: "Usman",
    department: "IT"
  }
};
const { details: { name, department } } = employee;
console.log(name); // "Usman"
console.log(department); // "IT"

// ----------------------------- Object Destructuring in Function Parameters -----------------------
// Destructuring is commonly used in function parameters, especially when dealing with objects.
function introduce({ name, job }) {
  console.log(`Hi, my name is ${name} and I am a ${job}.`);
}

const personInfo = { name: "Nashit", job: "developer" };
introduce(personInfo); // Hi, my name is Nashit and I am a developer.


// ------------------------- Key Operators in Destructuring ------------------------

// 1. "Array Destructuring:"
//    - "Syntax:" [a, b] = array
//    - "Unpacks values" from an array into variables.

const arr = [1, 2, 3];
const [val1, val2] = arr;
console.log(val1); // 1
console.log(val2); // 2

// 2. "Rest Operator (`...`):"
//    - Used to "collect the remaining elements" into an array.
const arr2 = [1, 2, 3, 4];
const [first, second, ...rest] = arr2;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]

// 3. "Default Values:"
//    - If a value is missing during destructuring, you can assign a "default value".
const arr3 = [1];
const [x = 0, y = 2] = arr3;
console.log(x); // 1
console.log(y); // 2 (default)

// 4. "Swapping Variables:"
//    - Allows you to "swap values" between variables using destructuring.
let p = 5;
let q = 10;
[p, q] = [q, p];
console.log(p); // 10
console.log(q); // 5

// 5. "Nested Destructuring:"
//    - You can destructure "nested arrays" or "objects" directly by referencing their properties or indices.
const nestedObject = { name: "Ali", address: { city: "Karachi", zip: "75000" } };
const { address: { city, zip } } = nestedObject;
console.log(city); // "Karachi"
console.log(zip); // "75000"

// 6. "Renaming Variables:"
//    - You can rename destructured properties using the syntax "propertyName: newName".
const person2 = { name: "Ahmed", age: 26 };
const { name: personName, age: personAge } = person2;
console.log(personName); // "Ahmed"
console.log(personAge); // 26
