// type of
let namE = 'rith'
let numm = 343434
console.log(typeof(namE))
console.log(typeof(numm))
//last in , first out (LIFO)
let arr = [1, 2, 3, 4];
arr.push(5,6,7,8);// add new element to the last
console.log(arr); // delete last element
arr.pop();
console.log(arr);
// first in , first out  (FIFO)
let num = [1,2,3,4]
num.unshift(0) // add new element to beginning
num.shift() // delete first element
console.log(num)
// splice method
//Changes the contents of an array by removing or replacing existing elements
let fruit = ['Apple','Banana','Orange','Kiwi']
//array.splice(start, deleteCount, item1, item2, ...)
fruit.splice(1,0,'Mango','Grape','lemon');
console.log(fruit)
// slicing and splicing
// create a new array from the old array 
let car = ['bmw','volvo','mazda','Toyota','Cherolet','Gmc','Jeep']
let newCar = car.slice(0,5)// .slice(startIndex, endIndex)
console.log(newCar)
// concat is combie of 2 or more Array
let comBine = [1,2,3,4,5,6]
let comBine1 = ['I love you']
let comBine2 = ['Every universe']
let mix = comBine.concat(comBine1,comBine2)
console.log(mix)
//for each 
let number = [1,2,3,4,5,5,6,7]
number.forEach((element) =>  {
    console.log(element*10)
});
// filter creates a new array with all elements that pass the test implemented by the provided function
let mathScore = [20,30,40,50,60,70,80,90,100]
let filterScore = mathScore.filter(element => element >=50)
console.log(filterScore)
// map use to create new array with the results of calling a provided function on every element in the array
let array = [10,20,30,40]
let dollarToRiel = array.map(element => element * 4100)
console.log(dollarToRiel)
// reduce in js method in JavaScript is used to reduce an array to a single value!!
const numbers = [1,2,3,4,5,"Rith",19,"yearOld"];
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log(sum); // Output: 15
