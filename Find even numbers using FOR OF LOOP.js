const arr = [1, 2, 3, 4, 5, 6]

const evenNumbers = []

for (const num of arr) {
  if (num % 2 === 0) evenNumbers.push(num)
}

console.log("Even Numbers:", evenNumbers)

//----OUTPUT----//

"Even Numbers:", [2, 4, 6]
