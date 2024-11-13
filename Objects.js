// Objects 
// Vehicles are objects that store related information about various modes of transportation, structured into key-value pairs. Each key represents a characteristic, and each value stores relevant details about that characteristic.

let vehicle = {
    type: "Car",
    brand: "Toyota",
    year: 2020
};

// Here's an example where an object named 'vehicle' is defined with three properties: type, brand, and year.
let vehicle = {
    type: "Car",
    brand: "Toyota",
    year: 2020
};
console.log(vehicle);

// Dot notation can be used to access specific properties of the object, such as the type or brand of the vehicle.
console.log(vehicle.type);  // Accesses the value of the 'type' property
console.log(vehicle.year);  // Accesses the value of the 'year' property

// Object properties can be directly modified. Here we update the year of the vehicle and add a new property for color.
vehicle.year = 2022;            // Updates the 'year' property to 2022
vehicle.color = "Red";          // Adds a new property 'color' with the value "Red"
console.log(vehicle);           // Outputs the updated object

// Use the `delete` operator to remove a specific property from the object, such as the 'brand' property.
delete vehicle.brand;          // Removes the 'brand' property
console.log(vehicle);           // Outputs the object after the property has been deleted

// The `in` operator checks if a particular property exists within the object. It returns true if the property is found.
console.log("year" in vehicle);      // Checks if 'year' is a property of 'vehicle'
console.log("model" in vehicle);     // Checks if 'model' is a property of 'vehicle'

// The `hasOwnProperty()` method ensures that the property belongs directly to the object, excluding inherited properties.
console.log(vehicle.hasOwnProperty("color"));   // Checks if 'color' is a direct property of 'vehicle'
console.log(vehicle.hasOwnProperty("model"));   // Checks if 'model' is a direct property of 'vehicle'

// A `for...in` loop can be used to iterate over all properties of the object. This helps in accessing both the keys and their associated values.
for (let key in vehicle) {
    console.log(key + ": " + vehicle[key]);  // Logs each property and its corresponding value
}
