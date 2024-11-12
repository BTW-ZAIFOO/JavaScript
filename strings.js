// // STRINGS

const name = "AQiB";
const repoCount = 5;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("aqib-com");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

// // divide strig depends on number of letters

const newString = gameName.substring(0, 4);
console.log(newString);

// // in slice we can give negative values

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// // trim remove extra spaces

const newStringOne = "   aqib    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// // replace

const url = "https://myweb.com/my%20web";

console.log(url.replace("%20", "-"));

//check  datatype
console.log(url.includes("sundar"));

// split gamename where is - occur

console.log(gameName.split("-"));
