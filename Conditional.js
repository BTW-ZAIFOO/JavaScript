// IF (code run if the condition is true)


let age=17;
if (age<=17) {
    console.log("You are not adult");
}

let number = 5;

if (number > 0) {
    console.log("The number is positive.");
}

  //------------------------------------------------------------

// IF ELSE (conditionis true then IF code run otherwise run else code )
let num = -3;

if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

  //------------------------------------------------------------

// ELSE-IF (IF conditon is not true then check ELSE-IF then print else)
let AnOtherNum = 0;

if (AnOtherNum > 0) {
    console.log("The number is positive.");
} else if (AnOtherNum < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

  //------------------------------------------------------------

// SWITCH SATATEMENT
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Wednesday":
        console.log("It's middle  of week!");
        break;
    case "Friday":
        console.log("The weekend is near!");
        break;
    default:
        console.log("It's a regular day.");
}

  //------------------------------------------------------------
  
let cups=14;
switch (cups) {
    case 10:
        console.log("this is not the matching value")
        break;
    case 11:
        console.log("this is not the matching value")
        break;
    case 13:
        console.log("this is not the matching value")
        break;   

    default:
        console.log("No matching values found");
        
        break;
}
