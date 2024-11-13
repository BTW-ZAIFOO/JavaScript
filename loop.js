// Basic For Loop

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

  //------------------------------------------------------------

// Looping through a list of colors

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

  //------------------------------------------------------------

// Countdown with even numbers

console.log("Countdown with even numbers:");
for (let i = 12; i >= 0; i -= 2) {
    console.log(i);
}

  //------------------------------------------------------------

// Using Break and Continue

console.log("Using BREAK and CONTINUE with numbers:");

for (let i = 1; i <= 7; i++) {
    if (i === 3) {
        console.log("We reached 3");
        continue;
    }
    if (i === 6) {
        console.log("Found number 6");
        break; 
    }
    console.log(i);
}

  //------------------------------------------------------------

// Iterating Through an Animal Object (For-in loop)

let animal = {
    species: "Lion",
    age: 5,
    habitat: "Savannah"
};

for (let key in animal) {
    console.log(key + ": " + animal[key]);
}

  //------------------------------------------------------------

// Using a While Loop for counting

let i = 1;

while (i <= 4) {
    console.log(i);
    i++;  
}

  //------------------------------------------------------------

// Iterating Through an Array of Vehicles with While

let vehicles = ["car", "bike", "bus"];
let j = 0;

while (j < vehicles.length) {
    console.log(vehicles[j]);
    j++;
}

  //------------------------------------------------------------

// Break and Continue with While (numbers)

let x = 2;

while (x < 8) {
    if (x === 5) {
        break;  // exit the loop when x reaches 5
    }

    console.log(x);
    x++;
}

  //------------------------------------------------------------

// Do-While Loop for counting odd numbers

let k = 1;

do {
    console.log(k);
    k += 2;  
} while (k <= 5); // loop runs as long as k is less than or equal to 5

  //------------------------------------------------------------

// Break and Continue with Do-While (counting)

let y = 0;

do {
    if (y === 2) {
        y++;
        continue;  // skip the rest of the loop when y is 2
    }

    if (y === 4) {
        break;  // stop the loop when y reaches 4
    }

    console.log(y);
    y++;
} while (y < 6); 
