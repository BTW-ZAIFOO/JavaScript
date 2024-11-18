//--------1. concat()--------//

// Problem 1: Merge two arrays of fruits//

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Grapes"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); 

// Output: //

["Apple", "Banana", "Orange", "Grapes"]

// Problem 2: Merge three arrays of numbers//

let nums1 = [1, 2];
let nums2 = [3, 4];
let nums3 = [5, 6];
let allNumbers = nums1.concat(nums2, nums3);
console.log(allNumbers); 

// Output://

[1, 2, 3, 4, 5, 6]

// Problem 3: Merge arrays with additional elements//

let colors1 = ["Red", "Blue"];
let mergedColors = colors1.concat("Green", ["Yellow", "Purple"]);
console.log(mergedColors); 

// Output://

["Red", "Blue", "Green", "Yellow", "Purple"]

// Problem 4: Merge an array with an empty array//

let emptyArray = [];
let animals = ["Dog", "Cat"];
let mergedArray = animals.concat(emptyArray);
console.log(mergedArray); 

// Output://

["Dog", "Cat"]

// Problem 5: Concatenate strings into a new array//

let words1 = ["Hello"];
let words2 = ["World"];
let sentence = words1.concat(words2, "!");
console.log(sentence); 

// Output://

["Hello", "World", "!"]

// Problem 6: Merge arrays with duplicate values//

let arr1 = [1, 2];
let arr2 = [2, 3];
let merged = arr1.concat(arr2);
console.log(merged);

// Output: //

[1, 2, 2, 3]

//-----------2. slice()----------//

// Problem 1: Extract the first two fruits//

let fruits = ["Apple", "Banana", "Orange", "Grapes"];
let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits); 

// Output: //

["Apple", "Banana"]

// Problem 2: Extract the last two numbers//

let numbers = [10, 20, 30, 40];
let lastTwo = numbers.slice(-2);
console.log(lastTwo); 

// Output://

[30, 40]

// Problem 3: Extract a middle section of an array//

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
let middleColors = colors.slice(1, 4);
console.log(middleColors); 

// Output://

["Blue", "Green", "Yellow"]

// Problem 4: Copy an array using slice//

let items = [1, 2, 3, 4];
let copiedItems = items.slice();
console.log(copiedItems); 

// Output://

[1, 2, 3, 4]

// Problem 5: Extract elements from a mixed array//

let mixed = [true, "Text", 42, "More Text"];
let slicedMixed = mixed.slice(1, 3);
console.log(slicedMixed); 

// Output: //

["Text", 42]

// Problem 6: Handle out-of-bound indices//

let letters = ["A", "B", "C", "D"];
let outOfBounds = letters.slice(2, 10);
console.log(outOfBounds); 

// Output://

["C", "D"]

// Problem 7: Extract elements using negative indices//

let nums = [5, 10, 15, 20, 25];
let negativeSlice = nums.slice(-4, -2);
console.log(negativeSlice); 

// Output://

[10, 15]

//---------3. splice()--------//

// Problem 1: Remove elements//

let fruits = ["Apple", "Banana", "Orange", "Grapes"];
let removedFruits = fruits.splice(1, 2);
console.log(fruits); 

// Output://

["Apple", "Grapes"]

console.log(removedFruits); 

// Output://

["Banana", "Orange"]

// Problem 2: Add elements//

let numbers = [10, 20, 30];

// Add 15 and 17 at index 1//

numbers.splice(1, 0, 15, 17);

console.log(numbers);

// Output://

[10, 15, 17, 20, 30]

// Problem 3: Replace elements//

let colors = ["Red", "Blue", "Green"];
colors.splice(1, 1, "Yellow");
console.log(colors); 

// Output: //

["Red", "Yellow", "Green"]

// Problem 4: Remove from the end//

let items = [1, 2, 3, 4, 5];
let lastItemRemoved = items.splice(-1, 1);
console.log(items); 

// Output: //

[1, 2, 3, 4]
console.log(lastItemRemoved);

// Output: //

[5]

// Problem 5: Remove and add simultaneously//

let arr = ["A", "B", "C", "D"];
let modified = arr.splice(1, 2, "X", "Y");
console.log(arr); 

// Output://

["A", "X", "Y", "D"]

console.log(modified);

// Output: //

["B", "C"]

// Problem 6: Remove all elements from an index//

let nums = [10, 20, 30, 40];

// Remove all elements from index 2//

nums.splice(2);
console.log(nums); 

// Output://

[10, 20]

// Problem 7: Add at the beginning//

let letters = ["B", "C"];
letters.splice(0, 0, "A");
console.log(letters);

// Output: //

["A", "B", "C"]

//---------4. Practical Examples----------//

// Problem 1: Merge two arrays and extract the first three elements//

let arr1 = ["A", "B"];
let arr2 = ["C", "D", "E"];
let merged = arr1.concat(arr2);
let firstThree = merged.slice(0, 3);
console.log(firstThree); 

// Output://

["A", "B", "C"]

// Problem 2: Replace a section of an array//

let nums = [1, 2, 3, 4];
nums.splice(1, 2, 10, 20);
console.log(nums); 

// Output: //

[1, 10, 20, 4]

// Problem 3: Remove duplicates during merging//

let arrayA = [1, 2];
let arrayB = [2, 3];
let mergedUnique = [...new Set(arrayA.concat(arrayB))];
console.log(mergedUnique); 

// Output: //

[1, 2, 3]

// Problem 4: Slice and merge to reorder elements//

let items = [1, 2, 3, 4];
let reordered = items.slice(2).concat(items.slice(0, 2));
console.log(reordered); 

// Output://

[3, 4, 1, 2]

// Problem 5: Add and remove elements for list management//

let tasks = ["Task 1", "Task 2", "Task 3"];
tasks.splice(1, 1, "New Task 2");
console.log(tasks);

// Output: //

["Task 1", "New Task 2", "Task 3"]

// Problem 6: Clear an array using splice//

let data = [1, 2, 3, 4];

// Remove all elements//

data.splice(0, data.length); 
console.log(data);

// Output://

[]
