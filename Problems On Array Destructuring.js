//-----------Solved Problems: Array Destructuring-------//

//----------1. Destructuring an Array of Strings--------//

const names = ["Ali", "Hassan", "Sara"];
const [firstName, secondName, thirdName] = names;
console.log(firstName); // "Ali"
console.log(secondName); // "Hassan"
console.log(thirdName); // "Sara"

//------------2. Destructuring with Extra Elements--------//

const fruits = ["Apple", "Banana"];
const [fruit1, fruit2, fruit3 = "Orange"] = fruits; // Assigning default value
console.log(fruit1); // "Apple"
console.log(fruit2); // "Banana"
console.log(fruit3); // "Orange"

//----------------3. Skipping Elements During Destructuring------//

const scores = [85, 90, 78, 88];
const [firstScore, , thirdScore] = scores; // Skipping second score
console.log(firstScore); // 85
console.log(thirdScore); // 78

//----------------4. Nested Array Destructuring-----------//

const nested = [1, [2, 3], 4];
const [outer1, [inner1, inner2], outer2] = nested;
console.log(outer1); // 1
console.log(inner1); // 2
console.log(inner2); // 3
console.log(outer2); // 4

//--------------5. Using the Rest Operator---------//

const animals = ["Lion", "Tiger", "Elephant", "Deer"];
const [wild1, wild2, ...others] = animals;
console.log(wild1); // "Lion"
console.log(wild2); // "Tiger"
console.log(others); // ["Elephant", "Deer"]

//-----------------6. Destructuring in Function Parameters--------//

function calculateSum([a, b, c]) {
    return a + b + c;
}
const numbers = [5, 10, 15];
console.log(calculateSum(numbers)); // 30

//-----------7. Swapping Variables-----------//

let x = 1, y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

//---------------------------These examples demonstrate various applications of array destructuring, such as assigning variables, skipping elements, using default values, working with nested arrays, leveraging the rest operator, and even applying destructuring in functions.----------------------------------//

//------------Solved Problems: Skipping Elements in Array Destructuring--------//

//-------------1. Skipping a Single Element---------//

const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first); // 10
console.log(third); // 30

//------------2. Skipping Multiple Elements------//

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
const [primary, , secondary, , tertiary] = colors;
console.log(primary); // "Red"
console.log(secondary); // "Green"
console.log(tertiary); // "Purple"

//-----------3. Skipping Elements with Default Values-----//

const fruits = ["Apple", "Banana", "Cherry"];
const [fruit1, , fruit3 = "Orange"] = fruits;
console.log(fruit1); // "Apple"
console.log(fruit3); // "Cherry"

//------------4. Skipping While Using Rest Operator--------//

const animals = ["Lion", "Tiger", "Elephant", "Deer", "Zebra"];
const [firstAnimal, , , ...remainingAnimals] = animals;
console.log(firstAnimal); // "Lion"
console.log(remainingAnimals); // ["Deer", "Zebra"]

//-------------5. Skipping Nested Elements---------//

const nestedArray = [1, [2, 3], 4, 5];
const [, [, thirdValue], fourthValue] = nestedArray;
console.log(thirdValue); // 3
console.log(fourthValue); // 4

//--------------6. Skipping in Function Parameters--------//

function getMiddleValue([, second, , fourth]) {
    return `Second: ${second}, Fourth: ${fourth}`;
}
const values = [10, 20, 30, 40];
console.log(getMiddleValue(values)); // "Second: 20, Fourth: 40"

//-------------7. Skipping While Swapping---------------//

let arr = [1, 2, 3, 4];
[arr[0], , arr[2]] = [arr[2], , arr[0]];
console.log(arr); // [3, 2, 1, 4]

//--------These examples showcase how to skip elements while destructuring arrays, ranging from basic skipping to incorporating nested arrays, rest operators, and function parameter use cases. --------//

//----------Solved Problems: Default Values in Array Destructuring------//

//-----------1. Assigning Default Values--------//

const numbers = [5, 10];
const [first = 1, second = 2, third = 3] = numbers;
console.log(first); // 5
console.log(second); // 10
console.log(third); // 3 (default value)

//-------------2. Using Default Values for Missing Elements--------//

const fruits = ["Apple"];
const [fruit1 = "Banana", fruit2 = "Cherry"] = fruits;
console.log(fruit1); // "Apple"
console.log(fruit2); // "Cherry" (default value)

//-------------3. Default Values with Skipping Elements---------//

const colors = ["Red"];
const [, secondColor = "Blue", thirdColor = "Green"] = colors;
console.log(secondColor); // "Blue" (default value)
console.log(thirdColor); // "Green" (default value)

//----------4. Nested Arrays with Default Values-------//

const nestedArray = [10, [20]];
const [firstNum = 1, [secondNum = 2, thirdNum = 3]] = nestedArray;
console.log(firstNum); // 10
console.log(secondNum); // 20
console.log(thirdNum); // 3 (default value)

//-------------5. Default Values with Rest Operator------//

const items = ["Pen"];
const [item1 = "Pencil", ...otherItems] = items;
console.log(item1); // "Pen"
console.log(otherItems); // []

//-------------6. Default Values in Function Parameters-----//

function sum([a = 0, b = 0, c = 0]) {
    return a + b + c;
}
const numbers = [4, 5];
console.log(sum(numbers)); // 9 (4 + 5 + 0)

//-------------7. Combining Default Values and Swapping------//

let x = 3, y;
[x = 5, y = 7] = [undefined, undefined]; // Assigning default values
console.log(x); // 5
console.log(y); // 7

//-------These examples demonstrate different scenarios of applying default values in array destructuring, including nested arrays, skipping elements, and rest operators. --------//

//---------Solved Problems: Swapping Values with Array Destructuring------//

//--------1. Swapping Numbers--------//

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

//--------2. Swapping Strings--------//

let firstName = "Ali";
let lastName = "Khan";
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // "Khan"
console.log(lastName); // "Ali"

//---------3. Swapping Boolean Values-------//

let isDay = true;
let isNight = false;
[isDay, isNight] = [isNight, isDay];
console.log(isDay); // false
console.log(isNight); // true

//----------4. Swapping Array Elements---------//

let numbers = [10, 20];
[numbers[0], numbers[1]] = [numbers[1], numbers[0]];
console.log(numbers); // [20, 10]

//----------5. Swapping Nested Array Elements------//

let nested = [[1, 2], [3, 4]];
[nested[0], nested[1]] = [nested[1], nested[0]];
console.log(nested); // [[3, 4], [1, 2]]

//----------6. Swapping Variables in a Function--------//

function swap(a, b) {
    return [a, b] = [b, a];
}
let p = 7, q = 14;
[p, q] = swap(p, q);
console.log(p); // 14
console.log(q); // 7

//----------7. Swapping Default Values----------------//

let m = 5, n = 10;
[m = 0, n = 0] = [n, m];
console.log(m); // 10
console.log(n); // 5

//------These examples illustrate how swapping can be used across various scenarios, including numbers, strings, booleans, array elements, nested arrays, and within functions.------//

//------Solved Problems: Rest Operator with Destructuring------//

//-------1. Collecting Remaining Elements-------//

const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit); // "apple"
console.log(otherFruits); // ["banana", "cherry", "date"]

//----------2. Skipping and Using Rest---------//

const numbers = [1, 2, 3, 4, 5, 6];
const [num1, , num3, ...remainingNumbers] = numbers;
console.log(num1); // 1
console.log(num3); // 3
console.log(remainingNumbers); // [4, 5, 6]

//-----------3. Rest with Default Values--------//

const colors = ["red", "blue"];
const [primaryColor, secondaryColor, ...otherColors] = colors;
console.log(primaryColor); // "red"
console.log(secondaryColor); // "blue"
console.log(otherColors); // [] (no remaining elements)

//-----------4. Rest Operator in Nested Arrays----------//

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const [[a, b], ...remainingPairs] = nestedArray;
console.log(a); // 1
console.log(b); // 2
console.log(remainingPairs); // [[3, 4], [5, 6]]

//-----------5. Rest Operator in Functions----------//

function addNumbers(first, second, ...rest) {
    const sumOfRest = rest.reduce((acc, num) => acc + num, 0);
    return first + second + sumOfRest;
}
console.log(addNumbers(10, 20, 30, 40)); // 100

//------------6. Combining Rest with Strings--------//

const letters = ["a", "b", "c", "d", "e"];
const [firstLetter, ...remainingLetters] = letters;
console.log(firstLetter); // "a"
console.log(remainingLetters.join("-")); // "b-c-d-e"

//------------7. Rest Operator with Object Destructuring------//

const student = { name: "Ali", age: 21, grade: "A", subject: "Math" };
const { name, ...details } = student;
console.log(name); // "Ali"
console.log(details); // { age: 21, grade: "A", subject: "Math" }

//---- These examples show how the rest operator can be used with arrays, nested arrays, strings, and even functions or objects to handle remaining elements or properties effectively. ------//

//------Solved Problems: Nested Array Destructuring----------//

//----- 1. Nested Arrays with Skipping Elements ------//

const data = [1, [2, 3, 4], 5];
const [a, [, b, c], d] = data;
console.log(a); // 1
console.log(b); // 3
console.log(c); // 4
console.log(d); // 5

//---------2. Unpacking Deeply Nested Arrays--------//

const nestedNumbers = [10, [20, [30, 40]], 50];
const [x, [y, [z, w]], u] = nestedNumbers;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
console.log(w); // 40
console.log(u); // 50

//----------3. Nested Arrays with Default Values-------//

const arrayWithDefaults = [1, [2]];
const [p, [q, r = 3], s = 4] = arrayWithDefaults;
console.log(p); // 1
console.log(q); // 2
console.log(r); // 3 (default value)
console.log(s); // 4 (default value)

//----------4. Extracting Elements from Mixed Nested Arrays------//

const mixedArray = [[10, 20], "text", [30, 40]];
const [[num1, num2], text, [num3, num4]] = mixedArray;
console.log(num1); // 10
console.log(num2); // 20
console.log(text); // "text"
console.log(num3); // 30
console.log(num4); // 40

//--------------5. Partial Destructuring---------//

const data = [1, [2, 3, [4, 5]]];
const [m, [, n, [o]]] = data;
console.log(m); // 1
console.log(n); // 3
console.log(o); // 4

//--------------6. Destructuring Nested Arrays in a Function-------//

function getCoordinates([x, [y, z]]) {
    console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}
getCoordinates([100, [200, 300]]); // X: 100, Y: 200, Z: 300

//------------7. Using Nested Destructuring in Loops---------//

const points = [
    [1, [2, 3]],
    [4, [5, 6]],
    [7, [8, 9]]
];
for (const [a, [b, c]] of points) {
    console.log(`A: ${a}, B: ${b}, C: ${c}`);
}
// Output:
// A: 1, B: 2, C: 3
// A: 4, B: 5, C: 6
// A: 7, B: 8, C: 9

//----- These problems demonstrate how nested array destructuring can simplify the process of unpacking complex, multi-level arrays.  ----//

//-------Solved Problems: Destructuring in Function Parameters-------//

//--------1. Passing Arrays to Functions--------//

function multiply([a, b, c]) {
    return a * b * c;
}
const nums = [2, 3, 4];
console.log(multiply(nums)); // 24

//---------2. Using Default Values in Destructuring-------//

function divide([a, b, c = 1]) {
    return a / b / c;
}
const numbers = [100, 10];
console.log(divide(numbers)); // 10 (c defaults to 1)

//-------3. Nested Array Destructuring in Function Parameters------//

function getCoordinates([[x, y], [z, w]]) {
    return `Coordinates: (${x}, ${y}) and (${z}, ${w})`;
}
const coords = [[1, 2], [3, 4]];
console.log(getCoordinates(coords)); // "Coordinates: (1, 2) and (3, 4)"

//-------4. Rest Operator in Function Parameters-------//

function sum([first, second, ...rest]) {
    return first + second + rest.reduce((acc, num) => acc + num, 0);
}
const numbersList = [5, 10, 15, 20, 25];
console.log(sum(numbersList)); // 75

//------5. Skipping Elements in Function Parameters-----//

function extractThird([, , third]) {
    return third;
}
const values = [10, 20, 30, 40];
console.log(extractThird(values)); // 30

//--------6. Combining Arrays with Destructuring------//

function mergeAndDouble([a, b], [c, d]) {
    return [a * 2, b * 2, c * 2, d * 2];
}
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(mergeAndDouble(arr1, arr2)); // [2, 4, 6, 8]

//--------7. Destructuring with Mixed Parameters------//

function describe([name, age], { job, city }) {
    return `${name}, ${age} years old, works as a ${job} in ${city}.`;
}
const person = ["Ahmed", 30];
const details = { job: "developer", city: "Karachi" };
console.log(describe(person, details)); // "Ahmed, 30 years old, works as a developer in Karachi."

//---- These examples highlight the versatility of destructuring in function parameters, whether you're working with simple arrays, nested arrays, or combining arrays with objects.  ----//
