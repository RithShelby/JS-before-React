const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits.entries();

// List the Entries
let text = "";
for (let x of list) {
  text += x;
}
