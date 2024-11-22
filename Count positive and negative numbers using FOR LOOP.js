const arr = [-3, 4, -1, 2, -5, 6]

let positive = 0,
  negative = 0
  
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) positive++
  else if (arr[i] < 0) negative++
}

console.log("Positive:", positive, "Negative:", negative)

//------OUTPUT------//

"Positive:", 3, "Negative:", 3
