//The find() method returns the value of the first element or object that passes a test.
const food = [
  { name: "donut", price: 1 },
  { name: "burger", price: 3 },
  { name: "pizza", price: 4 },
  { name: "noodle", price: 2 },
  { name: "soup", price: 5 },
  { name: "pasta", price: 2 },
  { name: "steak", price: 10 },
];
const findPrice = food.find((item) => item.price > 5);
console.log(findPrice, "=================");
const ages = [3, 10, 18, 20];
const findIndex = ages.findIndex((ages) => ages > 0);
console.log(findIndex, "=================");
