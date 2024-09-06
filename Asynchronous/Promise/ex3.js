// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("I love you too!!");
//   }, 3000);
// });
// myPromise.then(function (value) {
//   console.log("She promise me and She said : " + value);
// });

// const promise = new Promise((resovle, reject) => {
//   setTimeout(function () {
//     resovle("Done !!");
//   }, 2000);
// });
// promise.then(function (value) {
//   console.log(value);
// });

// const promise = new Promise((resovle, reject) => {
//   const num = Math.random(); // it random num auto
//   if (num >= 0.7) {
//     resovle("Promise is fulfilled");
//   } else {
//     reject("Promise failed");
//   }
// });
// promise
//   .then((value) => console.log(value)) // if num >= 0.7 this console will display
//   .catch((error) => console.error(error)); // else num is not >= 0.7 this console will display to

const anotherPromise = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle("Eventual value will return to console!!");
  }, 3000);
});
anotherPromise
  // then and catch is the method able to access value from the promise
  // without this method you cannot access to value of promise
  .then((value) => console.log(value)) // This will run if the Promise is fulfilled
  .catch((error) => console.error(error)); // This will run if the Promise is rejected
