const arr = [3, -1, 5, 7]

if (arr.some((num) => num < 0))
{
  console.log("The array contains negative numbers.")
} 
else
{
  console.log("The array does not contain negative numbers.")
}

//---------OUTPUT--------//

"The array contains negative numbers."
