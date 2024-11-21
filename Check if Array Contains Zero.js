let arr = [1, 2, 3, 0, 5];
let containsZero = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    containsZero = true;
    break;
  }
}

console.log("Contains Zero:", containsZero);
