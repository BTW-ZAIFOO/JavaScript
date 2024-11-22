const arr = [10, 20, 30, 40]

const target = 30
let index = -1

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i
    break
  }
}

console.log("Index:", index)

//-----OUTPUT------//

"Index:", 2
