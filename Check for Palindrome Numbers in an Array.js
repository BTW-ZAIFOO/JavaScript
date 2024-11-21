let arr = [121, 343, 123, 454, 567];
let palindromes = [];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let reversed = parseInt(num.toString().split('').reverse().join(''));
  
  if (num === reversed) {
    palindromes.push(num);
  }
}

console.log("Palindrome Numbers:", palindromes);
