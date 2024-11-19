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

//--------Solved Problems: Renaming Variables in Object Destructuring-------//

//--------1. Renaming Properties----------//

const user = { username: "ali123", email: "ali@example.com" };
const { username: userName, email: userEmail } = user;
console.log(userName); // "ali123"
console.log(userEmail); // "ali@example.com"

//----------2. Renaming with Default Values---------//

const student = { id: 101, marks: 85 };
const { id: studentId, marks: totalMarks, grade = "A" } = student;
console.log(studentId); // 101
console.log(totalMarks); // 85
console.log(grade); // "A" (default value)

//-------------3. Nested Object with Renaming--------//

const employee = { details: { empName: "Usman", age: 40 }, department: "HR" };
const { details: { empName: employeeName, age: employeeAge }, department: dept } = employee;
console.log(employeeName); // "Usman"
console.log(employeeAge); // 40
console.log(dept); // "HR"

//----------4. Renaming Inside a Function Parameter-------//

function displayDetails({ firstName: fName, lastName: lName }) {
    console.log(`First Name: ${fName}`);
    console.log(`Last Name: ${lName}`);
}
const person = { firstName: "Ahmed", lastName: "Khan" };
displayDetails(person);
// Output:
// First Name: Ahmed
// Last Name: Khan

//--------5. Using Rest Operator with Renamed Variables---------//

const car = { brand: "Toyota", model: "Corolla", year: 2021 };
const { brand: carBrand, ...otherDetails } = car;
console.log(carBrand); // "Toyota"
console.log(otherDetails); // { model: "Corolla", year: 2021 }

//---------6. Renaming and Default Value Together----------//

const movie = { title: "Inception", director: "Christopher Nolan" };
const { title: movieTitle, director: movieDirector, rating: movieRating = "9.0" } = movie;
console.log(movieTitle); // "Inception"
console.log(movieDirector); // "Christopher Nolan"
console.log(movieRating); // "9.0" (default value)

//----------7. Renaming for Better Readability-------------//

const product = { id: 202, price: 299.99, stock: 50 };
const { id: productId, price: productPrice, stock: productStock } = product;
console.log(productId); // 202
console.log(productPrice); // 299.99
console.log(productStock); // 50

//------ These examples demonstrate how renaming variables during object destructuring can improve code readability and make variables more meaningful. -------//
