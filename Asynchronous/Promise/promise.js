const myPromise = new Promise((resovle, reject) => {
  const success = true;
  if (success != true) {
    resovle("Promise resovle!");
  } else {
    reject("Promise rejected!");
  }
});
myPromise
  .then((result) => {
    // This runs if the promise is resolved successfully
    console.log(result);
  })
  .catch((error) => {
    // This runs if there's an error in the promise
    console.error(error);
  });
