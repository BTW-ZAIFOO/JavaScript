const arr = [1, 2, 2, 3, 4, 4]

const unique = []

for (const num of arr) {
  if (!unique.includes(num)) unique.push(num)
}

console.log("Unique Array:", unique)

//----OUTPUT---//

"Unique Array:", [1, 2, 3, 4]
