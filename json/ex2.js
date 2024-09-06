// a "nested object"
// is just an object that is stored inside another object.
// It's like having layers of information.
let car = {
  model: "Toyota",
  year: 2022,
  owner: {
    name: "John",
    age: 25,
    gender: "Male",
  },
};
console.log(car.model);
console.log(car.year);
console.log(car.owner.name);
console.log(car.owner.age);
console.log(car.owner.gender);
