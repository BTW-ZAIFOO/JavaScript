//------1. indexOf()------//

// Problem 1: Find the index of a specific fruit//

let fruits = ["Apple", "Banana", "Orange"];
let index = fruits.indexOf("Banana");
console.log(index); 

// Output://

1

// Problem 2: Search for a non-existent item//

let cars = ["Toyota", "Honda"];
let notFoundIndex = cars.indexOf("BMW");
console.log(notFoundIndex); 

// Output://

-1

// Problem 3: Find the index of a number//

let numbers = [10, 20, 30, 40];
let numIndex = numbers.indexOf(30);
console.log(numIndex);

// Output:// 

2

// Problem 4: Find the first occurrence in a mixed array//

let mixed = ["A", 10, true, "A"];
console.log(mixed.indexOf("A")); 

// Output://

0

// Problem 5: Check if a color exists//

let colors = ["Red", "Blue", "Green"];
if (colors.indexOf("Blue") !== -1) {
  console.log("Blue is in the array"); 
  
  // Output://
  
  Blue is in the array
}

//---------2. lastIndexOf()------------//

// Problem 1: Find the last index of a repeated element//

let fruits = ["Apple", "Banana", "Orange", "Apple"];
let lastIndex = fruits.lastIndexOf("Apple");
console.log(lastIndex); 

// Output: //

3

// Problem 2: Find the last occurrence of a number//

let numbers = [1, 2, 3, 2, 4];
let lastNumIndex = numbers.lastIndexOf(2);
console.log(lastNumIndex);

// Output: //

3

// Problem 3: Find a value that doesn’t exist//

let animals = ["Dog", "Cat"];
console.log(animals.lastIndexOf("Rabbit")); 

// Output://

-1

// Problem 4: Use lastIndexOf with starting position//

let colors = ["Red", "Blue", "Green", "Blue"];
console.log(colors.lastIndexOf("Blue", 2)); 

// Output://

1

//--------3. includes()--------//

// Problem 1: Check if an array includes a specific fruit//

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.includes("Banana")); 

// Output://

true

// Problem 2: Check for a non-existent number//

let numbers = [1, 2, 3];
console.log(numbers.includes(5));

// Output://

false

// Problem 3: Use includes with strings//

let words = ["Hello", "World"];
console.log(words.includes("world"));

// Output: //

false (case-sensitive)

// Problem 4: Check from a specific index//

let items = ["A", "B", "C", "B"];
console.log(items.includes("B", 2));

// Output://

true

//--------4. find()--------------//

// Problem 1: Find the first even number//

let numbers = [1, 3, 5, 6, 8];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// Output://

6

// Problem 2: Find a fruit starting with 'O'

let fruits = ["Apple", "Orange", "Banana"];
let startsWithO = fruits.find(fruit => fruit.startsWith("O"));
console.log(startsWithO);

// Output://

"Orange"

// Problem 3: Find a large number//

let largeNumbers = [10, 25, 50, 100];
let largeNum = largeNumbers.find(num => num > 30);
console.log(largeNum); 

// Output://

50

//--------5. findIndex()--------//

// Problem 1: Find the index of the first even number//

let numbers = [1, 3, 5, 6, 8];
let evenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenIndex); 

// Output://

3

// Problem 2: Find the index of a fruit starting with 'B'//

let fruits = ["Apple", "Banana", "Cherry"];
let fruitIndex = fruits.findIndex(fruit => fruit.startsWith("B"));
console.log(fruitIndex); 

// Output: //

1

// Problem 3: Find index of a negative number//


let nums = [10, 20, -5, 30];
let negativeIndex = nums.findIndex(num => num < 0);
console.log(negativeIndex); 

// Output://

2

//------6. some()----------//

// Problem 1: Check if any number is greater than 50//

let numbers = [10, 20, 30, 60];
let isGreaterThan50 = numbers.some(num => num > 50);
console.log(isGreaterThan50); 

// Output://

true

// Problem 2: Check if there are negative numbers//

let nums = [5, -1, 10];
console.log(nums.some(num => num < 0)); 

// Output://

true

// Problem 3: Check if any fruit starts with 'O'//

let fruits = ["Apple", "Banana", "Orange"];
let hasO = fruits.some(fruit => fruit.startsWith("O"));
console.log(hasO);

// Output:// 

true

//--------7. every()--------//

// Problem 1: Check if all numbers are positive//

let numbers = [10, 20, 30];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); 

// Output://

true

// Problem 2: Check if all elements are strings//

let words = ["Hello", "World"];
console.log(words.every(word => typeof word === "string")); 

// Output://

true

// Problem 3: Check if all ages are above 18//

let ages = [21, 19, 25];
console.log(ages.every(age => age > 18)); 

// Output: //

true

//--------8. Practical Examples--------//

// Problem 1: Check if all items in the cart are above $50//

let prices = [60, 70, 90];
console.log(prices.every(price => price > 50));

// Output//

true

// Problem 2: Find the first student with failing marks//

let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 40 },
  { name: "Charlie", marks: 90 }
];
let failingStudent = students.find(student => student.marks < 50);
console.log(failingStudent); 

// Output://

{ name: "Bob", marks: 40 }

// Problem 3: Check if the product list contains 'Laptop'//

let products = ["Phone", "Tablet", "Laptop"];
console.log(products.includes("Laptop")); 

// Output://

true

// Problem 4: Verify if any item in the cart is below $20

let cart = [25, 30, 15];
console.log(cart.some(price => price < 20)); 

// Output:// 

true

// Problem 5: Check if all words in a sentence are capitalized

let words = ["Hello", "World"];
console.log(words.every(word => word[0] === word[0].toUpperCase())); 

// Output:

true
