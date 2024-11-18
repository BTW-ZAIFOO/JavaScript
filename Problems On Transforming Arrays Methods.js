//------------1. Using map()-------//

// Problem 1: Multiply all numbers in an array by 2//

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

// Output://

[2, 4, 6, 8]

// Problem 2: Extract names from an array of objects//

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
let names = people.map(person => person.name);
console.log(names); 

// Output://

["Alice", "Bob", "Charlie"]

// Problem 3: Convert an array of strings to uppercase//

let fruits = ["apple", "banana", "cherry"];
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); 

// Output://

["APPLE", "BANANA", "CHERRY"]

// Problem 4: Add 5 to each element in an array//

let nums = [10, 20, 30];
let addedFive = nums.map(n => n + 5);
console.log(addedFive);

// Output: //

[15, 25, 35]

// Problem 5: Extract the first character of each string//

let words = ["hello", "world", "JavaScript"];
let firstChars = words.map(word => word[0]);
console.log(firstChars);

// Output://

["h", "w", "J"]

// Problem 6: Format prices with a currency symbol//

let prices = [100, 200, 300];
let formattedPrices = prices.map(price => `$${price}`);
console.log(formattedPrices);

// Output: //

["$100", "$200", "$300"]

//-----------2. Using filter()------------//

// Problem 1: Filter out numbers greater than 10//

let numbers = [5, 10, 15, 20];
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); 

// Output: //

[15, 20]

// Problem 2: Get names of people above 30 years old//

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
let above30 = people.filter(person => person.age > 30).map(person => person.name);
console.log(above30); 

// Output://

["Charlie"]

// Problem 3: Filter even numbers//

let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);

// Output://

[2, 4, 6]

// Problem 4: Filter strings with more than 5 characters//

let words = ["hello", "world", "JavaScript", "is", "awesome"];
let longWords = words.filter(word => word.length > 5);
console.log(longWords); 

// Output: //

["JavaScript", "awesome"]

// Problem 5: Filter objects with a specific property//

let products = [
  { name: "Table", price: 100 },
  { name: "Chair", price: 50 },
  { name: "Lamp", price: 75 }
];
let expensiveProducts = products.filter(product => product.price > 60);
console.log(expensiveProducts);
// Output://

[{name: "Table", price: 100}, {name: "Lamp", price: 75}]

// Problem 6: Filter out falsy values//

let mixed = [0, 1, false, 2, "", 3];
let truthy = mixed.filter(Boolean);
console.log(truthy); 

// Output://

[1, 2, 3]

//-----------3. Using reduce()------//

// Problem 1: Sum all numbers in an array//

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// Output://

10

// Problem 2: Find the product of all elements//

let nums = [2, 3, 4];
let product = nums.reduce((acc, num) => acc * num, 1);
console.log(product); 

// Output: //

24

// Problem 3: Concatenate strings in an array//

let words = ["hello", "world"];
let sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); 

// Output://

"hello world"

// Problem 4: Count occurrences of elements//

let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(counts); 

// Output://

{ apple: 3, banana: 2, orange: 1 }

// Problem 5: Find the maximum value in an array//

let values = [10, 5, 20, 8];
let max = values.reduce((acc, num) => (num > acc ? num : acc), values[0]);
console.log(max); 

// Output: //

20

// Problem 6: Flatten a 2D array//

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
let flatArray = matrix.reduce((acc, row) => acc.concat(row), []);
console.log(flatArray); 

// Output: //

[1, 2, 3, 4, 5, 6]

//-------Practical Examples------//

// Problem 1: Chain map and filter//

let numbers = [1, 2, 3, 4, 5, 6];
let doubledEvens = numbers.filter(n => n % 2 === 0).map(n => n * 2);
console.log(doubledEvens); 

// Output: //

[4, 8, 12]

// Problem 2: Calculate total price of products//

let products = [
  { name: "Table", price: 100 },
  { name: "Chair", price: 50 },
  { name: "Lamp", price: 75 }
];
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

// Output://

225

// Problem 3: Transform objects and calculate total//

let cart = [
  { item: "Apple", price: 10, quantity: 2 },
  { item: "Banana", price: 5, quantity: 3 }
];
let totalCartValue = cart
  .map(product => product.price * product.quantity)
  .reduce((sum, value) => sum + value, 0);
console.log(totalCartValue); 

// Output: //

35
