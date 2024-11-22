const arr = [10, 20, 30, 40]

let sum = 0

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}

const average = sum / arr.length

console.log("Average:", average)

//------OUTPUT------//

"Average:", 25
