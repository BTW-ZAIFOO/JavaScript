const arr = [1, 2, 2, 3, 4]

const hasDuplicates = arr.some((num, index) => arr.indexOf(num) !== index)

if (hasDuplicates) {
  console.log("The array contains duplicate elements.")
}

//-------OUTPUT------//

"The array contains duplicate elements."
