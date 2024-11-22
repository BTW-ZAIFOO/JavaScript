const arr = [1, 2, 3, 4];

const squared = [];

for (const index in arr) {
    squared.push(arr[index] * arr[index]);
}

console.log('Squared Array:', squared);

//-----OUTPUT-----//

"Squared Array:", [1, 4, 9, 16]
