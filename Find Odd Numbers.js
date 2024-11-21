let arr = [1, 2, 3, 4, 5, 6];
let oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddNumbers.push(arr[i]);
  }
}

console.log("Odd Numbers:", oddNumbers);
