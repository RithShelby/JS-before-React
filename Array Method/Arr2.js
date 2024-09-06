// for each 
const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "UK" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "CAM" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "SG" }
  ];
  
//   staffsDetails.forEach(({name,age,salary,currency},item)=>{
//     // within destructuring
//     let data = `I am ${name}. I'm ${age}. My salary is ${salary}. I'm from ${currency}.` 
        
//     console.log(data)
//   })
staffsDetails.forEach((item,index,array)=>{
//    use with cuurentelement agument
    // let data = `I am ${item.name}.I'm ${item.age} years old. My salary is ${item.salary} $ `
    // console.log(data)
    // use with index agument
    // let data = `index : ${index} : ${item.name} I'm ${item.age} years old. My salary is ${item.salary} $`
    // console.log(data)
    // use with array agument
    console.log(array);
})