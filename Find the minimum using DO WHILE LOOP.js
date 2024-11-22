const arr = [8, 4, 7, 2, 9]

let min = arr[0],
  i = 1
do {
  if (arr[i] < min) min = arr[i]
  i++
} while (i < arr.length)

console.log("Minimum:", min)

//------OUTPUT------//

"Minimum:", 2
