const product = [
  { name: "laptop", price: 200 },
  { name: "ipad", price: 1000 },
  { name: "macbook", price: 1500 },
];
const totalPrice = product.reduce((acc, item) => {
  console.log(acc);
  return (acc += item.price);
}, 0);
console.log(`sum of product : ${totalPrice}`);

// accumulator parameter is the single value that will be returned by the reduce() method.
//It will contain the value returned by the callback function in each iteration.
//The item parameter is simply the item from the array, which will change in each iteration just like in the forEach() method.
