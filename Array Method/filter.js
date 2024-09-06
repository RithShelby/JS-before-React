const product = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
  { id: 4, name: "Iphone", price: 500 },
  { id: 5, name: "Samsung", price: 700 },
  { id: 6, name: "ipad", price: 1200 },
  { id: 7, name: "Macbook", price: 1600 },
  { id: 8, name: "Ice watch", price: 1000 },
];
const filterProduct = product.filter((item) => item.price > 500);
console.log(filterProduct);
const nameProduct = filterProduct.map((item) => item.name);
console.log(nameProduct);
