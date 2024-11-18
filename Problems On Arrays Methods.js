//----1. push()---//

// Problem 1: Add a new fruit to the fruits array//

let fruits = ["Apple", "Banana"]
fruits.push("Orange")
console.log(fruits)

// Output: //

;["Apple", "Banana", "Orange"]

// Problem 2: Add a number to an empty array//

let numbers = []
numbers.push(5)
console.log(numbers)

// Output:

;[5]

// Problem 3: Add multiple colors to the colors array//

let colors = ["Red"]
colors.push("Green", "Blue")
console.log(colors)

// Output://

;["Red", "Green", "Blue"]

// Problem 4: Add a new city to the cities array//

let cities = ["London", "New York"]
cities.push("Paris")
console.log(cities)

// Output://

;["London", "New York", "Paris"]

// Problem 5: Add a friend's name to the friends array//

let friends = ["Alice"]
friends.push("Bob")
console.log(friends)

// Output://

;["Alice", "Bob"]

// Problem 6: Add a boolean value to the truthy array//

let truthy = [true, false]
truthy.push(true)
console.log(truthy)

// Output://

;[true, false, true]

//---2. pop()----//

// Problem 1: Remove the last fruit from the fruits array//

let fruits = ["Apple", "Banana", "Orange"]
let removedFruit = fruits.pop()
console.log(fruits)

// Output://

;["Apple", "Banana"]

console.log(removedFruit)

// Output://

;("Orange")

// Problem 2: Remove a number from the numbers array//

let numbers = [1, 2, 3]
numbers.pop()
console.log(numbers)

// Output://

;[1, 2]

// Problem 3: Remove the last item from a mixed array//

let mixed = ["Text", 42, true]
mixed.pop()
console.log(mixed)

// Output://

;["Text", 42]

// Problem 4: Keep removing until the array is empty//

let items = [10, 20, 30]
while (items.length > 0) {
  items.pop()
}
console.log(items)

// Output://

;[]

// Problem 5: Use pop in a loop to reverse an array//

let stack = [1, 2, 3, 4]
let reversed = []
while (stack.length > 0) {
  reversed.push(stack.pop())
}
console.log(reversed)

// Output://

;[4, 3, 2, 1]

// Problem 6: Remove the last student from the class//

let students = ["John", "Jane", "Doe"]
students.pop()
console.log(students)

// Output://

;["John", "Jane"]

//---3. unshift()---//

// Problem 1: Add a new fruit at the beginning of the array//

let fruits = ["Banana", "Orange"]
fruits.unshift("Apple")
console.log(fruits)

// Output://

;["Apple", "Banana", "Orange"]

// Problem 2: Add a number at the start of the numbers array//

let numbers = [2, 3]
numbers.unshift(1)
console.log(numbers)

// Output://

;[1, 2, 3]

// Problem 3: Add multiple colors at the beginning//

let colors = ["Blue"]
colors.unshift("Red", "Green")
console.log(colors)

// Output://

;["Red", "Green", "Blue"]

// Problem 4: Add a friend at the start//

let friends = ["Bob"]
friends.unshift("Alice")
console.log(friends)

// Output://

;["Alice", "Bob"]

// Problem 5: Add a new city at the beginning//

let cities = ["Paris", "New York"]
cities.unshift("London")
console.log(cities)

// Output://

;["London", "Paris", "New York"]

// Problem 6: Add an item to an empty array//

let emptyArray = []
emptyArray.unshift("First Item")
console.log(emptyArray)

// Output: //

;["First Item"]

//---4. shift()---//

// Problem 1: Remove the first fruit from the fruits array//

let fruits = ["Apple", "Banana", "Orange"]
let firstFruit = fruits.shift()
console.log(fruits)

// Output://

;["Banana", "Orange"]

console.log(firstFruit)

// Output://

;("Apple")

// Problem 2: Remove the first number from the numbers array//

let numbers = [1, 2, 3]
numbers.shift()
console.log(numbers)

// Output://

;[2, 3]

// Problem 3: Remove the first element of a mixed array//

let mixed = [true, 42, "Text"]
mixed.shift()
console.log(mixed)

// Output://

;[42, "Text"]

// Problem 4: Remove until the array is empty//

let items = [10, 20, 30]
while (items.length > 0) {
  items.shift()
}
console.log(items)

// Output://

;[]

// Problem 5: Remove the first student from the class//

let students = ["John", "Jane", "Doe"]
students.shift()
console.log(students)

// Output://

;["Jane", "Doe"]

// Problem 6: Keep removing elements from a queue//

let queue = [1, 2, 3, 4]
while (queue.length) {
  console.log(queue.shift())
}
// Output: //

1, 2, 3, 4(separately)

//---5. join()---//

// Problem 1: Join fruits with a comma//

let fruits = ["Apple", "Banana", "Orange"]
let fruitString = fruits.join(", ")
console.log(fruitString)

// Output://

;("Apple, Banana, Orange")

// Problem 2: Join numbers with a hyphen//

let numbers = [1, 2, 3]
let numberString = numbers.join("-")
console.log(numberString)

// Output: //

;("1-2-3")

// Problem 3: Join letters without a separator//

let letters = ["A", "B", "C"]
let word = letters.join("")
console.log(word)

// Output://

;("ABC")

// Problem 4: Use join to create an HTML list//

let items = ["Home", "About", "Contact"]
let htmlList = items.join("</li><li>")
console.log(`<ul><li>${htmlList}</li></ul>`)

// Output://

;("<ul><li>Home</li><li>About</li><li>Contact</li></ul>")

// Problem 5: Join a list of names with " & "//

let names = ["Alice", "Bob", "Charlie"]
let nameString = names.join(" & ")
console.log(nameString)

// Output: //

;("Alice & Bob & Charlie")

// Problem 6: Join with emojis as separators//

let emotions = ["Happy", "Excited", "Joyful"]
let emojiString = emotions.join(" 😊 ")
console.log(emojiString)

// Output://

;("Happy 😊 Excited 😊 Joyful")
