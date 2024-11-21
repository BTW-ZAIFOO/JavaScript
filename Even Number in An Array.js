let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  }
}

console.log("Even Numbers:", evenNumbers);

//------output------//

"Even Numbers:", [2, 4, 6]
