const num = [1,2,3,4,5,6,8]
const newNum = num.map(num => num*10);
console.log("Old Arr")
console.log(num)
console.log("New Arr");
console.log(newNum);
console.log("===================================")
const product = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Tablet", price: 500 }
];
product.map((item)=>{
    // Using map() to extract only the names,prices of products
    console.log(`Product name : ${item.name}\nPrice : ${item.price} $`)
})
