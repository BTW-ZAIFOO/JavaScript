const arr = [42, "hello", true]

switch (typeof arr[0])
{
  case "number":
    console.log("The first element is a number.")
    break
  case "string":
    console.log("The first element is a string.")
    break
  case "boolean":
    console.log("The first element is a boolean.")
    break
  default:
    console.log("The type of the first element is unknown.")
}

//------OUTPUT------//

"The first element is a number."
