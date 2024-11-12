// Objects
// An object is a data structure used to store collections of data and more complex entities. Objects allow you to store data in key-value pairs, where each key (also called a property or attribute) is associated with a specific value.

// Syntax 
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};

// Example 

let person = {
    name: "Ali",
    age: 25,
    isStudent: true
};
console.log(person);

//-------------------------------------------------------->

// Accessing Individual element 

console.log(person.name); 
console.log(person.age);  

//-------------------------------------------------------->

// Modifying Object Properties

person.age = 30;            
person.city = "Lahore";   
console.log(person);

//---------------------------------------------------------->

// Deleting Properties

delete person.isStudent;
console.log(person);

//--------------------------------------------------------->

// Checking Existance 

// by in operator

console.log("age" in person); 
console.log("gender" in person);

// by hasownproperty()

console.log(person.hasOwnProperty("name")); 
console.log(person.hasOwnProperty("city")); 

//------------------------------------------------------------>

//Using Loop in 

for (let key in person) {
    console.log(key + ": " + person[key]);
}
