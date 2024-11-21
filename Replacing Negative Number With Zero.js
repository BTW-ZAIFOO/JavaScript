let arr = [-3, 5, -1, 8, -7];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = 0;
  }
}

console.log("Modified Array:", arr);

//-------output------//

Modified Array: [0, 5, 0, 8, 0]
