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

