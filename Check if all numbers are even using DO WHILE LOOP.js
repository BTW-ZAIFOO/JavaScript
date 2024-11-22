const arr = [2, 4, 6, 8]

let allEven = true,
  i = 0
  
do {
  if (arr[i] % 2 !== 0) {
    allEven = false
    break
  }
  
  i++
} while (i < arr.length)

console.log("All Even:", allEven)

//------OUTPUT-----//

"All Even:", true
