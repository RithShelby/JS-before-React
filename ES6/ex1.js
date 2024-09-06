// regular function
function math() {
  let x = 4,
    y = 5;
  return x - y;
}
console.log(math());

function greet() {
  console.log("Hello world");
}
greet();
// ES6
let sum = () => {
  let a = 5,
    b = 5;
  return a + b;
};
console.log(sum());
const greeting = () => {
  console.log("Hello crush");
};
greeting();
