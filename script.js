// The forecast today is 293 Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius by subtracting 273
const celsius = kelvin - 273;

// Calculate Fahrenheit using the provided formula
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice: Convert Celsius to Newton
const newton = Math.floor(celsius * (33 / 100));

// Log the temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`);
