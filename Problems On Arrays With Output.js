//---Example 1: Correct Array Name--//

const cars = ["Toyota", "Honda", "Ford"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//---OUTPUT----//

Toyota
Honda
Ford

//---Example 2: Typo in Array Name----//

const cars = ["Toyota", "Honda", "Ford"];

for (let i = 0; i < carz.length; i++) { // Typo: "carz" instead of "cars"
    console.log(cars[i]);
}


//----OUTPUT-----//

ReferenceError: carz is not defined

//-----Example 3: Handling the Typo with a Corrected Name------//
//-----Correct the typo to ensure the code works as intended---//

const carz = ["BMW", "Mercedes", "Audi"];

for (let i = 0; i < carz.length; i++) {
    console.log(carz[i]); // Adjust to match the array name
}

//-----OUTPUT------//

BMW
Mercedes
Audi

//----Example 4: Debugging the Typo-------------//
//-Use debugging techniques to catch such errors//

const cars = ["Kia", "Tesla", "Hyundai"];

try {
    for (let i = 0; i < carz.length; i++) { // Typo here
        console.log(cars[i]);
    }
} catch (error) {
    console.error("Error:", error.message);
}

//--OUTPUT----//

Error: carz is not defined

//----Example 5: Fixed Array Name---//

const carz = ["BMW", "Audi", "Mercedes"];
for (let i = 0; i < carz.length; i++) {
    console.log(carz[i]);
}

//-----OUTPUT------//

BMW
Audi
Mercedes

//-----Example 6: Debugging with a try...catch Block---//

const cars = ["Hyundai", "Tesla", "Kia"];
try {
    for (let i = 0; i < carz.length; i++) { // Typo: "carz"
        console.log(cars[i]);
    }
} catch (error) {
    console.error("Error:", error.message);
}

//----OUTPUT----//

Error: carz is not defined

//---Example 7: Fixing the Typo and Matching Variable Names--//

const cars = ["Honda", "Chevrolet", "Mazda"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//----OUTPUT---//

Honda
Chevrolet
Mazda

//----Example 8: Using if Condition to Avoid Typo----//

const cars = ["Jaguar", "Porsche", "Subaru"];
if (typeof carz !== "undefined") { // Check for existence
    for (let i = 0; i < carz.length; i++) {
        console.log(carz[i]);
    }
} else {
    console.error("Array 'carz' is not defined.");
}

//----OUTPUT---//

Array 'carz' is not defined.

//---Example 9: Typo with Empty carz Variable--//

const carz = [];
for (let i = 0; i < carz.length; i++) {
    console.log(carz[i]);
}

//---OUTPUT---//

(No output as carz is empty)

//----Example 10: carz Defined but Different Data---//

const carz = [1, 2, 3]; // Array with numbers instead of strings
for (let i = 0; i < carz.length; i++) {
    console.log(carz[i]);
}

//----OUTPUT---//

1
2
3

//----Example 11: Fixing Typo Using Case-Sensitivity---//

const Cars = ["Volkswagen", "Volvo", "Peugeot"]; // Case-sensitive variable
for (let i = 0; i < Cars.length; i++) {
    console.log(Cars[i]);
}

//---OUTPUT---//

Volkswagen
Volvo
Peugeot

//---Example 12: Simulating Real Debugging Scenario---//

let cars = ["Lamborghini", "Ferrari", "McLaren"];
let carz; // Intentionally undefined
for (let i = 0; i < carz?.length || 0; i++) { // Safeguard with optional chaining
    console.log(carz[i]);
}

//-----OUTPUT---//

 (No output as carz is undefined)
