const arr = [5, 10, 15]

const sum = arr.reduce((a, b) => a + b, 0)

if (sum > 20) 
{
  console.log("The sum of array elements is greater than 20.")
} 
else 
{
  console.log("The sum of array elements is 20 or less.")
}

//-------OUTPUT-------//

"The sum of array elements is greater than 20."
