const arr = [1, 2, 3, 4, 5]

switch (arr.length)
{
  case 0:
    console.log("The array is empty.")
    break
  case 1:
    console.log("The array has one element.")
    break
  case 5:
    console.log("The array has five elements.")
    break
  default:
    console.log("The array has a different number of elements.")
}

//------OUTPUT--------//

"The array has five elements."
