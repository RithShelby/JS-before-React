// array in json
let employee = [
  {
    name: "Alice",
    age: 28,
    position: "Developer",
    skills: ["JavaScript", "HTML", "CSS"],
  },
];
// convert json to string
let employeeJSON = JSON.stringify(employee);
console.log(employeeJSON);
try {
  // convert string to json
  let parsedEmployee = JSON.parse(employeeJSON);
  console.log(parsedEmployee);
} catch (error) {
  // Handle the error if parsing fails
  console.error("Error parsing JSON: ", error);
}
