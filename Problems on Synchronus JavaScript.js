//----1. Basic Sequence---//

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

//---OUTPUT---//

Step 1
Step 2
Step 3

//----2. Blocking Code----//

console.log("Start");
for (let i = 0; i < 1e9; i++) {} // Simulates blocking code
console.log("End");

//----OUTPUT------//

Start
End (after delay)

//------3. Function Execution Order----//

function first() {
    console.log("First function");
}
function second() {
    console.log("Second function");
}
first();
second();

//----OUTPUT----//

First function
Second function

//-----4. Synchronous Error Handling-----//

try {
    let result = 10 / 0;
    console.log(result);
    throw new Error("An intentional error occurred!");
} catch (error) {
    console.log("Error caught:", error.message);
}

//---OUTPUT----//

Infinity
Error caught: An intentional error occurred!

//-----5. Nested Function Calls----//

function outer() {
    console.log("Outer function");
    function inner() {
        console.log("Inner function");
    }
    inner();
}
outer();

//-----OUTPUT----//

Outer function
Inner function

//----6. Object Update---//

let user = { name: "SAAD", age: 30 };
console.log(user);

user.age = 31;
console.log(user);

//------OUTPUT-----//

{ name: 'SAAD', age: 30 }
{ name: 'SAAD', age: 31 }

//----7. Simple Loop---//

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//---OUTPUT----//

1
2
3
4
5

//-----8. Factorial Calculation----//

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//---OUTPUT---//

120

//-----9. DOM Manipulation---//

document.body.innerHTML = "<h1>Title</h1>";
console.log(document.body.innerHTML);

//----OUTPUT----//

<h1>Title</h1>

//---10. Sequential Operations---//

let a = 5;
let b = a * 2;
let c = b + 3;
console.log(c);

//----OUTPUT-----//

13

//----11. Array Processing----//

let numbers = [1, 2, 3];
let doubled = numbers.map((n) => n * 2);
console.log(doubled);

//----OUTPUT----//

[2, 4, 6]

//----12. Function with Callbacks----//

function executeCallback(callback) {
    callback();
}
executeCallback(() => console.log("Callback executed"));

//----OUTPUT-----//

Callback executed

