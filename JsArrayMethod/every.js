const number = new Array(100).fill(0).map((num, index) => index + 1);

const allEven = number.every((num, index) => {
  // Check if each number is even
  return num % 2 === 0;
});

console.log(allEven); // This will print 'false' because not all numbers from 1 to 100 are even
