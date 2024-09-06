const color = [
  ["blue", 1],
  ["red", 2],
  ["green", 3],
  ["yellow", 4],
  ["black", 5],
  ["white", 6],
];
// make array 2D to be properpty : key : value
const myObj = Object.fromEntries(color);
console.log(myObj);
