// Step 1: Create a promise that fetches the joke
function fetchJoke() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
      const joke =
        "Why don't scientists trust atoms? Because they make up everything!";
      resolve(joke); // Resolve the promise with the joke
    }, 3000);
  });
}

// Step 2: Define a callback function to display the joke
function displayJoke(joke) {
  console.log(joke);
}

// Step 3: Use the promise and callback function
fetchJoke()
  .then((joke) => {
    // Callback function to handle the resolved promise
    displayJoke(joke);
  })
  .catch((error) => {
    // Callback function to handle any errors
    console.error(error);
  });
