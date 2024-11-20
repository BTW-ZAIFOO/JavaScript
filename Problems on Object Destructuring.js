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

// Output://

Product: Smartphone
Price: $699
Stock Status: In Stock

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

// Output://

First Name: Ahmed
Last Name: Khan

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

//-----------Solved Problems: Default Values in Object Destructuring--------//

//-------1. Providing Default Values for Missing Properties------//

const car = { brand: "Toyota" };
const { brand, model = "Unknown Model" } = car;
console.log(brand); // "Toyota"
console.log(model); // "Unknown Model" (default value)

//--------2. Default Values with Multiple Properties--------//

const user = { username: "ali123" };
const { username, age = 25, country = "Pakistan" } = user;
console.log(username); // "ali123"
console.log(age); // 25 (default value)
console.log(country); // "Pakistan" (default value)

//---------3. Nested Objects with Default Values---------//

const employee = { name: "Ahmed", department: { name: "HR" } };
const { department: { name: departmentName, location = "Head Office" } } = employee;
console.log(departmentName); // "HR"
console.log(location); // "Head Office" (default value)

//-----------4. Default Value in Function Parameters------//

function displayDetails({ name, age = 30 }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
const person = { name: "Sara" };
displayDetails(person);

// Output://

Name: Sara
Age: 30 (default value)

//--------5. Combining Default and Actual Values------//

const product = { id: 101, name: "Laptop" };
const { id, name, price = 500, stock = "In Stock" } = product;
console.log(id); // 101
console.log(name); // "Laptop"
console.log(price); // 500 (default value)
console.log(stock); // "In Stock" (default value)

//-------6. Using Default Values with Renamed Variables------//

const gadget = { type: "Smartphone" };
const { type: gadgetType, brand: gadgetBrand = "Generic" } = gadget;
console.log(gadgetType); // "Smartphone"
console.log(gadgetBrand); // "Generic" (default value)

//---------7. Complex Objects with Defaults--------//

const book = { title: "1984", author: "George Orwell" };
const { title, author, publisher = "Unknown Publisher", year = 1949 } = book;
console.log(title); // "1984"
console.log(author); // "George Orwell"
console.log(publisher); // "Unknown Publisher" (default value)
console.log(year); // 1949 (default value)

//----- These examples demonstrate how default values ensure that destructured variables always have meaningful values even if some properties are missing from the object. -------//

//-------------Solved Problems: Nested Object Destructuring-----------//

//--------1. Destructuring Nested Properties-------//

const car = {
  model: "Corolla",
  specs: {
    engine: "1.8L",
    fuelType: "Petrol"
  }
};
const { specs: { engine, fuelType } } = car;
console.log(engine); // "1.8L"
console.log(fuelType); // "Petrol"

//-------2. Destructuring with Additional Properties-----//

const user = {
  id: 123,
  profile: {
    firstName: "Ali",
    lastName: "Khan"
  }
};
const { profile: { firstName, lastName }, id } = user;
console.log(firstName); // "Ali"
console.log(lastName); // "Khan"
console.log(id); // 123

//--------3. Providing Default Values------//

const product = {
  id: 200,
  specs: {
    weight: "2kg"
  }
};
const { specs: { weight, color = "black" } } = product;
console.log(weight); // "2kg"
console.log(color); // "black" (default value)

//--------4. Nested Object Destructuring with Functions------//

const order = {
  orderId: 5001,
  details: {
    item: "Laptop",
    quantity: 2
  }
};
function displayOrder({ details: { item, quantity } }) {
  console.log(`Item: ${item}`);
  console.log(`Quantity: ${quantity}`);
}
displayOrder(order);

// Output://

Item: Laptop
Quantity: 2

//-------5. Destructuring Multiple Nested Levels------//

const company = {
  name: "TechCorp",
  location: {
    city: "San Francisco",
    address: {
      street: "Market St",
      zip: 94103
    }
  }
};
const { location: { address: { street, zip } } } = company;
console.log(street); // "Market St"
console.log(zip); // 94103

//-------6. Destructuring Arrays Inside Nested Objects------//

const library = {
  section: "Fiction",
  books: {
    titles: ["1984", "Brave New World", "Fahrenheit 451"]
  }
};
const { books: { titles: [firstBook, secondBook] } } = library;
console.log(firstBook); // "1984"
console.log(secondBook); // "Brave New World"

//--------7. Renaming Variables in Nested Objects------//

const student = {
  id: 101,
  info: {
    name: "Hassan",
    grade: "A"
  }
};
const { info: { name: studentName, grade: studentGrade } } = student;
console.log(studentName); // "Hassan"
console.log(studentGrade); // "A"

//----- These examples cover a range of use cases for nested object destructuring, showcasing how to access and manipulate deeply nested properties with ease -----//

//------Solved Problems: Object Destructuring in Function Parameters----//

//---------------1. Extracting Properties--------//

function displayCar({ brand, model }) {
  console.log(`This car is a ${brand} ${model}.`);
}

const car = { brand: "Toyota", model: "Corolla" };
displayCar(car);

// Output://

This car is a Toyota Corolla.

//----------2. Using Default Values---------//

function greetUser({ name, age = 25 }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

const user = { name: "Ali" };
greetUser(user);

// Output: //

Hello, Ali. You are 25 years old.

//------------3. Nested Destructuring---------//

function displayStudent({ name, subjects: { major, minor } }) {
  console.log(`${name} is majoring in ${major} and minoring in ${minor}.`);
}

const student = { name: "Hassan", subjects: { major: "Physics", minor: "Math" } };
displayStudent(student);

// Output://

Hassan is majoring in Physics and minoring in Math.

//-----------4. Destructuring with Renamed Variables-------//

function getEmployeeDetails({ id: empId, department: dept }) {
  console.log(`Employee ID: ${empId}, Department: ${dept}`);
}

const employee = { id: 101, department: "HR" };
getEmployeeDetails(employee);

// Output: //

Employee ID: 101, Department: HR

//-----------5. Passing Objects with Extra Properties-----//

function printProductDetails({ name, price }) {
  console.log(`Product: ${name}, Price: $${price}`);
}

const product = { name: "Laptop", price: 1200, manufacturer: "Dell" };
printProductDetails(product);

// Output://

Product: Laptop, Price: $1200

//----------6. Using Rest Operator-----------//

function showPersonInfo({ name, ...otherDetails }) {
  console.log(`Name: ${name}`);
  console.log("Other Details:", otherDetails);
}

const person = { name: "Ahmed", age: 30, city: "Karachi" };
showPersonInfo(person);

// Output://

Name: Ahmed
Other Details: { age: 30, city: 'Karachi' }

//-----------------7. Combining Default Values and Nested Destructuring------//

function describePet({ type, details: { breed = "unknown", age = 1 } }) {
  console.log(`This is a ${type}, breed: ${breed}, age: ${age} year(s).`);
}

const pet = { type: "dog", details: { breed: "Labrador" } };
describePet(pet);

// Output://

This is a dog, breed: Labrador, age: 1 year(s).

//----- These examples showcase various ways to use object destructuring in function parameters, including default values, nested properties, renaming, and handling extra data.  --------//
