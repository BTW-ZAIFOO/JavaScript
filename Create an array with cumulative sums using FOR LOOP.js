const arr = [1, 2, 3, 4]

const cumulativeSum = []

let sum = 0

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
  cumulativeSum.push(sum)
}

console.log("Cumulative Sum:", cumulativeSum)

//-----OUTPUT-----//

"Cumulative Sum:", [1, 3, 6, 10].
