const arr = [10, 20, 30, 40]

const reversed = []

let i = arr.length - 1
while (i >= 0) {
  reversed.push(arr[i])
  i--
}

console.log("Reversed Array:", reversed)

//-----OUTPUT----//

"Reversed Array:", [40, 30, 20, 10]
