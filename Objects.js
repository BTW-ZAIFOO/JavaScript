// Objects
// An object is a data structure that stores collections of related data and allows for more complex data entities. Objects store data in key-value pairs, where each key (or property) is associated with a corresponding value.

// Syntax
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};

// Example

let car = {
    make: "Ford",
    model: "Mustang",
    year: 2022
};
console.log(car);

//-------------------------------------------------------->

// Accessing Individual Property

console.log(car.make); 
console.log(car.model);  

//-------------------------------------------------------->

// Modifying Object Properties

car.year = 2023;            
car.color = "blue";  
console.log(car);

//---------------------------------------------------------->

// Deleting Properties

delete car.model;
console.log(car);

//--------------------------------------------------------->

// Checking Existence

// by using in operator

console.log("year" in car); 
console.log("mileage" in car);

// by using hasOwnProperty()

console.log(car.hasOwnProperty("make")); 
console.log(car.hasOwnProperty("color")); 

//------------------------------------------------------------>

// Using Loop in 

for (let key in car) {
    console.log(key + ": " + car[key]);
}

//------------------------------------------------------------>

// Using Object Methods

// Object.keys()
// Returns an array of an object’s property names.

console.log(Object.keys(car));

// Object.values()
// Returns an array of the property values.

console.log(Object.values(car));

// Object.entries()
// Returns an array of key-value pairs.

console.log(Object.entries(car));

//---------------------------------------------------------------->

// Example 

let vehicle = {
    brand: "Honda",
    type: "SUV",
    year: 2021,
    drive: function() {
      console.log("Driving a " + this.brand);
    }
};

// Manipulating the object
vehicle.color = "white";       // Add new property
vehicle.year = 2022;           // Update property
delete vehicle.type;           // Delete property

// Access and invoke method
console.log(vehicle.brand);    // "Honda"
vehicle.drive();               // "Driving a Honda"

// Example

let autoShop = {
    addOil: function(amount) {
      return `Added ${amount} liters of oil`;
    },
    changeTires: function(count) {
      return `${count} tires changed`;
    },
    calculateMileage: function(distance, fuel) {
      return distance / fuel;
    },
    checkBattery: function() {
      return "Battery status: OK";
    }
};

console.log(autoShop.addOil(5));             // Output: "Added 5 liters of oil"
console.log(autoShop.calculateMileage(500, 50)); // Output: 10
console.log(autoShop.checkBattery());        // Output: "Battery status: OK"

//--------------------------------------------------------------->

// Nested Objects

let dealership = {
    name: "AutoMax",
    staff: {
      manager: { name: "saad", experience: 10 },
      mechanic: { name: "ehsaan", experience: 5 },
      salesperson: { name: "Sara", experience: 3 }
    },
    location: "Downtown"
};

// Accessing nested properties
console.log(dealership.staff.manager.name);

// Modifying nested properties
dealership.staff.mechanic.experience = 6;
console.log(dealership.staff.mechanic.experience);

// Adding new nested properties
dealership.staff.assistant = { name: "Leo", experience: 1 };
console.log(dealership.staff.assistant.name);

//----------------------------------------------------------->

// Merge / Combine Objects
let defaultSettings = { fuelType: "gasoline", transmission: "manual" };
let userPreferences = { transmission: "automatic", navigation: true };
let carSettings = { ...defaultSettings, ...userPreferences };

console.log(carSettings);
// Output: { fuelType: "gasoline", transmission: "automatic", navigation: true }

// --------------------------------------------------------------->

// object.freeze()
// Object.freeze() is used to make an object immutable (non-editable)

//---------------------------------------------------------------->

// object.seal()
// Object.seal() is used to prevent adding or removing properties but still allows changes to existing ones.

let tire = { brand: "Goodyear", size: "17 inch" };

// Freezing the object
Object.freeze(tire);
tire.size = "18 inch";         // Attempt to change size
tire.type = "All-Season";      // Attempt to add new property
console.log(tire);

let engine = { type: "V6", horsepower: 300 };
Object.seal(engine);
engine.horsepower = 320;       // Allowed modification
delete engine.type;            // Attempt to delete property
console.log(engine);
