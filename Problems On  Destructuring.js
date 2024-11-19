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

//-------- These examples showcase how to skip elements while destructuring arrays, ranging from basic skipping to incorporating nested arrays, rest operators, and function parameter use cases. --------//

