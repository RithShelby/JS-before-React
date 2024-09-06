// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  let isDone = true; // This is a condition that determines whether the promise is fulfilled or not
  if (isDone == false) {
    resolve("Task is done"); // If the task is done, we resolve the promise
  } else {
    reject("Task is not done"); // If the task is not done, we reject the promise
  }
});

// Use the Promise
myPromise
  .then((message) => {
    console.log(message); // This will log 'Task is done' if the promise is resolved
  })
  .catch((message) => {
    console.log(message); // This will log 'Task is not done' if the promise is rejected
  });
