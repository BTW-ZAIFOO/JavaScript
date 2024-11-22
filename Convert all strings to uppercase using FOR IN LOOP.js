const arr = ["hello", "world"]

const uppercased = []

for (const index in arr) {
  uppercased.push(arr[index].toUpperCase())
}

console.log("Uppercased:", uppercased)

//------OUTPUT----//

"Uppercased:", ["HELLO", "WORLD"]
