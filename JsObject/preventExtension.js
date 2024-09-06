// Create Object
const person = { firstName: "John", lastName: "Doe" };

// Prevent Extensions
const hello = Object.isExtensible(person);

// This will throw an error
person.nationality = "English";
console.log(hello);
console.log(person);
