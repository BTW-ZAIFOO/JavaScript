/* Data-Types */

// numbers => 2 power raise to 53
// bigInt
// string => ""
// boolean => true/flase
// null =>standalone value
// undefined
// symbol => unique

// object

  //------------------------------------------------------------

//Data -Types conversion

let score = 33;

console.log(typeof score); //number

let NewScore = "33";

console.log(typeof NewScore); // string

// // convert 'typeof' from string into number

let ValueInNumber = Number(NewScore);
console.log(typeof ValueInNumber); // now it convert into number

// if we have mixture of number and string like "333abc" and try to convert into number it shows type
// into number but when we print is shows value into NaN means Not a Number


  //------------------------------------------------------------

// if we have boolen in our NewScore and convert into number it shows 1 for true and 0 for false

// conersion from number to boolean

let IsLoggedIn = 1;
let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(typeof IsLoggedIn); // change number into boolean
console.log(IsLoggedIn); // vlaue is True

  //------------------------------------------------------------
  
//  // conersion from number to string

let someNumber = 55;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // chnage into string
console.log(stringNumber); // value is 55 which is in string

console.log(anotherNumber);
let anotherNumber = 500;
console.log(anotherNumber);
console.log(typeof anotherNumber);
let strringNumber = String(anotherNumber);
console.log(typeof strringNumber);
