const arr = [5, 12, 8, 20, 15]

let count = 0,
  i = 0
  
while (i < arr.length) {
  if (arr[i] > 10) count++
  i++
}

console.log("Count > 10:", count)

//-----OUTPUT-----//

"Count gt numbers are; 10:", 3
