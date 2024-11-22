const arr = [1, 2, 2, 3, 3, 3]

const occurrences = {}

for (const index in arr) {
  const num = arr[index]
  occurrences[num] = (occurrences[num] || 0) + 1
}

console.log("Occurrences:", occurrences)

//---------OUTPUT------//

"Occurrences:", {
  1: 1,
  2: 2,
  3: 3
}
