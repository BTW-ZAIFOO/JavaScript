//----------Solved Problems: Object Destructuring-------//

//--------1. Basic Object Destructuring--------//

const car = { brand: "Toyota", model: "Corolla", year: 2021 };
const { brand, model, year } = car;
console.log(brand); // "Toyota"
console.log(model); // "Corolla"
console.log(year); // 2021

//----------2. Destructuring with Missing Properties---------//

const laptop = { brand: "Dell", processor: "i7" };
const { brand, processor, ram = "16GB" } = laptop;
console.log(brand); // "Dell"
console.log(processor); // "i7"
console.log(ram); // "16GB" (default value)

//-----------3. Destructuring with Renaming Variables---------//

const employee = { empName: "Ali", position: "Manager", salary: 50000 };
const { empName: name, position: jobTitle, salary: income } = employee;
console.log(name); // "Ali"
console.log(jobTitle); // "Manager"
console.log(income); // 50000

//--------------4. Destructuring with Nested Objects---------//

const company = {
    name: "TechCorp",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};
const { name, address: { city, country } } = company;
console.log(name); // "TechCorp"
console.log(city); // "Karachi"
console.log(country); // "Pakistan"

//-------------5. Using Rest Operator with Destructuring--------//

const book = { title: "JavaScript Basics", author: "John Doe", pages: 350, publisher: "XYZ Press" };
const { title, author, ...details } = book;
console.log(title); // "JavaScript Basics"
console.log(author); // "John Doe"
console.log(details); // { pages: 350, publisher: "XYZ Press" }

//--------------6. Destructuring Function Parameters-----------//

function displayUserInfo({ name, age }) {
    return `${name} is ${age} years old.`;
}
const user = { name: "Sarah", age: 25 };
console.log(displayUserInfo(user)); // "Sarah is 25 years old."

//-------------7. Destructuring an Object Passed to a Function-------//

function printProductDetails({ productName, price, stock = "In Stock" }) {
    console.log(`Product: ${productName}`);
    console.log(`Price: $${price}`);
    console.log(`Stock Status: ${stock}`);
}
const product = { productName: "Smartphone", price: 699 };
printProductDetails(product);
// Output:
// Product: Smartphone
// Price: $699
// Stock Status: In Stock

//------  These examples showcase the flexibility and convenience of object destructuring in JavaScript, making code more readable and manageable. ----------//
