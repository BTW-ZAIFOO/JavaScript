//----1. setTimeout--//

console.log("Start");
setTimeout(() => console.log("Timeout"), 1000);
console.log("End");

//---OUTPUT---//

Start
End
Timeout

//-----2. Promise Example-----//

let promise = new Promise((resolve) => resolve("Resolved!"));
promise.then((message) => console.log(message));

//-----OUTPUT---//

Resolved!

//-----3. Chained Promises-----//

new Promise((resolve) => resolve(10))
    .then((num) => num * 2)
    .then((result) => console.log(result));

//----OUTPUT-------//

20

//----4. Async/Await Basics----//

async function fetchData() {
    return "Data received";
}
(async () => {
    let data = await fetchData();
    console.log(data);
})();

//------OUTPUT------//

Data received

//-------5. Error Handling in Promises------//

new Promise((_, reject) => reject("Error occurred"))
    .catch((err) => console.log("Caught:", err));

//------OUTPUT-------//

Caught: Error occurred

//-----6. Promise.all-----//

Promise.all([
    Promise.resolve("One"),
    Promise.resolve("Two"),
]).then((results) => console.log(results));

//------OUTPUT------//

["One", "Two"]

//-------7. Promise.race-----//

Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("First"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Second"), 1000)),
]).then((result) => console.log(result));

//-----OUTPUT-----//

First

//-------8. setInterval-----//

let count = 0;
let interval = setInterval(() => {
    console.log("Interval:", ++count);
    if (count === 3) clearInterval(interval);
}, 1000);

//----OUTPUT----//

Interval: 1
Interval: 2
Interval: 3

//------9. Async/Await with Fetch-----//

async function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Fetched!"), 1000));
}
(async () => {
    let data = await fetchData();
    console.log(data);
})();

//-----OUTPUT-----//

Fetched!

//-----10. Nested setTimeouts----//

setTimeout(() => {
    console.log("First");
    setTimeout(() => console.log("Second"), 1000);
}, 1000);

//----OUTPUT-----//

First
Second

//----11. Async Error Handling----//

async function riskyTask() {
    throw new Error("Oops!");
}
(async () => {
    try {
        await riskyTask();
    } catch (err) {
        console.log("Error caught:", err.message);
    }
})();

//-----OUTPUT---//

Error caught: Oops!

//-----12. Parallel Execution----//

async function task(name, delay) {
    return new Promise((resolve) => setTimeout(() => resolve(name), delay));
}
(async () => {
    let results = await Promise.all([
        task("A", 500),
        task("B", 1000),
    ]);
    console.log(results);
})();

//-----OUTPUT----//

["A", "B"]
