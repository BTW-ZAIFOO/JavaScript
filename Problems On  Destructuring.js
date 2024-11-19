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
