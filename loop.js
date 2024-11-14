// For Loop
// The `for` loop repeats a block of code a specified number of times.
for (let i = 1; i <= 5; i++) {
    console.log("Car " + i);
}
// Explanation: This loop runs five times, printing "Car 1" through "Car 5" in the console.

//------------------------------------------------------------

// For Loop with Arrays
// The `for` loop is used to iterate over each element in an array using the index.
let cars = ["Toyota", "Honda", "BMW"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Explanation: This loop iterates through each car in the `cars` array and prints each car brand.

//------------------------------------------------------------

// Reverse Countdown
// This `for` loop counts down from a specified number in reverse.
console.log("Here is the reverse countdown");
for (let i = 10; i >= 0; i -= 2) {
    console.log("Countdown: " + i);
}
// Explanation: This loop starts from 10, decrements by 2 each time, and prints the countdown.

//------------------------------------------------------------

// Break and Continue in For Loop
// `break` and `continue` control the flow within a loop.
console.log("Using BREAK and CONTINUE with cars");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Reached car number 5");
        continue;
    }
    if (i === 8) {
        console.log("Car number 8 found, stopping search");
        break;
    }
    console.log("Searching car number: " + i);
}
// Explanation: `continue` skips the rest of the loop when i is 5; `break` exits the loop entirely when i is 8.

//------------------------------------------------------------

// For...of Loop
// The `for...of` loop iterates over the values in an iterable, like an array or string.
const favoriteCars = ["Audi", "Mercedes", "Ford"];
for (const car of favoriteCars) {
  console.log(car);
}
// Explanation: This loop goes through each car in `favoriteCars` and prints the value directly.

// For...of Loop with a String
const modelName = "Tesla";
for (const char of modelName) {
  console.log(char);
}
// Explanation: It iterates over each character in the string `modelName`, printing each letter.

//------------------------------------------------------------

// For...in Loop
// The `for...in` loop iterates over the keys of an object.
let carDetails = {
    brand: "Tesla",
    year: 2023,
    color: "Red"
};
for (let key in carDetails) {
    console.log(key + ": " + carDetails[key]);
}
// Explanation: This loop iterates over each key in `carDetails`, printing both the key and its associated value.

//------------------------------------------------------------

// While Loop
// The `while` loop executes as long as a specified condition is true.
let i = 1;
while (i <= 5) {
    console.log("Car " + i);
    i++;
}
// Explanation: This loop prints "Car 1" through "Car 5" and stops when `i` becomes greater than 5.

//------------------------------------------------------------

// While Loop with Array
// This `while` loop iterates over an array.
let carBrands = ["Toyota", "Mazda", "Nissan"];
let j = 0;
while (j < carBrands.length) {
    console.log(carBrands[j]);
    j++;
}
// Explanation: This loop prints each car in the `carBrands` array and stops when `j` reaches the array length.

//------------------------------------------------------------

// Break in While Loop
// The `break` keyword exits the loop immediately when a condition is met.
let x = 3;
while (x < 10) {
    if (x === 7) {
        break;
    }
    console.log("Inspecting car number: " + x);
    x++;
}
// Explanation: This loop prints numbers from 3 up to 6. When `x` becomes 7, `break` exits the loop.

//------------------------------------------------------------

// Do...while Loop
// The `do...while` loop executes the code block at least once, then continues as long as the specified condition is true.
let k = 1;
do {
    console.log("Car inspection " + k);
    k++;
} while (k <= 5);
// Explanation: The loop prints "Car inspection" followed by the number `k` from 1 to 5. It runs at least once due to the `do...while` structure.

//------------------------------------------------------------

// Break and Continue in Do...while Loop
// `break` and `continue` can be used in a `do...while` loop to control the flow.
let y = 0;
do {
    if (y === 3) {
        y++;
        continue; // skip the rest of the loop for y == 3
    }
    if (y === 5) {
        break; // exit the loop when y == 5
    }
    console.log("Car check: " + y);
    y++;
} while (y < 10);
// Explanation: `continue` skips the rest of the loop when y is 3, and `break` exits the loop when y is 5. The loop prints "Car check" for other values.
