const arr = [1, 2, 3, 4, 5]

const oddNumbers = []

for (const num of arr) {
  if (num % 2 !== 0) oddNumbers.push(num)
}

console.log("Odd Numbers:", oddNumbers)

//-----OUTPUT-----//

"Odd Numbers:", [1, 3, 5]
