//---------1. Sorting (sort())-------//

// Problem 1: Sort an array of numbers in ascending order//

let numbers = [40, 10, 30, 20];
numbers.sort((a, b) => a - b);
console.log(numbers); 

// Output: //

[10, 20, 30, 40]

// Problem 2: Sort an array of strings alphabetically//

let fruits = ["Banana", "Apple", "Grapes", "Orange"];
fruits.sort();
console.log(fruits); 

// Output://

["Apple", "Banana", "Grapes", "Orange"]

// Problem 3: Sort numbers in descending order//

let nums = [4, 1, 3, 2];
nums.sort((a, b) => b - a);
console.log(nums);

// Output://

[4, 3, 2, 1]

// Problem 4: Sort strings in reverse alphabetical order//

let colors = ["Red", "Blue", "Green", "Yellow"];
colors.sort().reverse();
console.log(colors); 

// Output://

["Yellow", "Red", "Green", "Blue"]

// Problem 5: Sort mixed-case strings (case-insensitive)//

let names = ["alice", "Bob", "Charlie", "david"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); 

// Output://

["alice", "Bob", "Charlie", "david"]

// Problem 6: Sort objects by a numeric property//

let students = [
  { name: "John", age: 22 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 }
];
students.sort((a, b) => a.age - b.age);
console.log(students);

// Output://

[{name: "Alice", age: 20}, {name: "John", age: 22}, {name: "Bob", age: 25}]

// Problem 7: Sort objects by a string property//

let products = [
  { name: "Table", price: 100 },
  { name: "Chair", price: 50 },
  { name: "Lamp", price: 75 }
];
products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);

// Output://

[{name: "Chair", price: 50}, {name: "Lamp", price: 75}, {name: "Table", price: 100}]

// Problem 8: Sort numbers by absolute value//

let values = [3, -1, -4, 2];
values.sort((a, b) => Math.abs(a) - Math.abs(b));
console.log(values);

// Output: //

[-1, 2, 3, -4]

// Problem 9: Sort dates in ascending order//

let dates = [
  new Date("2022-12-01"),
  new Date("2023-01-01"),
  new Date("2021-05-01")
];
dates.sort((a, b) => a - b);
console.log(dates);

// Output://

[2021-05-01, 2022-12-01, 2023-01-01]

// Problem 10: Sort array numerically with default behavior//

let mixed = [10, 1, 100, 2];

// Default sorts as strings//

mixed.sort(); 
console.log(mixed); 

// Output: //

[1, 10, 100, 2] (Incorrect for numeric sorting)

//--------2. Reversing (reverse())--------//

// Problem 1: Reverse an array of numbers//

let nums = [1, 2, 3, 4];
nums.reverse();
console.log(nums); 

// Output://

[4, 3, 2, 1]

// Problem 2: Reverse an array of strings//

let cities = ["New York", "London", "Paris", "Tokyo"];
cities.reverse();
console.log(cities);

// Output://

["Tokyo", "Paris", "London", "New York"]

// Problem 3: Reverse a sorted array//

let letters = ["A", "B", "C", "D"];
letters.sort().reverse();
console.log(letters);

// Output: //

["D", "C", "B", "A"]

// Problem 4: Reverse part of an array using slice//

let items = [1, 2, 3, 4, 5];
let reversedPart = items.slice(1, 4).reverse();
console.log(reversedPart); 

// Output://

[4, 3, 2]

// Problem 5: Combine reverse with sort//

let names = ["Zara", "Mike", "Anna"];
names.sort().reverse();
console.log(names); 

// Output: //

["Zara", "Mike", "Anna"]

// Problem 6: Reverse an array of objects//

let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
people.reverse();
console.log(people);

// Output://

[{name: "Charlie", age: 35}, {name: "Bob", age: 25}, {name: "Alice", age: 30}]

//----------3. Practical Examples-------//

// Problem 1: Sort and reverse an array of numbers//

let scores = [90, 80, 100, 70];
scores.sort((a, b) => a - b).reverse();
console.log(scores);

// Output://

[100, 90, 80, 70]

// Problem 2: Reverse an array and append the original//

let arr = [1, 2, 3];
let combined = arr.concat(arr.slice().reverse());
console.log(combined);

// Output: //

[1, 2, 3, 3, 2, 1]

// Problem 3: Sort by length of strings and reverse//

let words = ["apple", "bat", "carrot", "dog"];
words.sort((a, b) => a.length - b.length).reverse();
console.log(words); 

// Output: //

["carrot", "apple", "dog", "bat"]

// Problem 4: Sort and reverse array of dates//

let birthDates = [
  new Date("1990-01-01"),
  new Date("2000-05-15"),
  new Date("1985-12-31")
];
birthDates.sort((a, b) => a - b).reverse();
console.log(birthDates);

// Output://

[2000-05-15, 1990-01-01, 1985-12-31]

// Problem 5: Sort and reverse based on custom property//

let players = [
  { name: "Player A", score: 50 },
  { name: "Player B", score: 70 },
  { name: "Player C", score: 40 }
];
players.sort((a, b) => b.score - a.score).reverse();
console.log(players);

// Output: //

[{name: "Player C", score: 40}, {name: "Player A", score: 50}, {name: "Player B", score: 70}]
