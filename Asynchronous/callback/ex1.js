// Callbacks are functions that are passed as arguments to other functions and are invoked after the parent function has completed.

// Function to simulate mixing ingredients
function mixGredient(callback) {
  setTimeout(function () {
    console.log("Mix the ingredients...");
    callback();
  }, 1000);
}

// Function to simulate cooking time
function cookTime(callback) {
  setTimeout(function () {
    console.log("Cake is cooking!!");
    callback();
  }, 2000);
}

// Function to simulate waiting time
function waiting(callback) {
  setTimeout(function () {
    console.log("Customers are waiting!!");
    callback();
  }, 3000);
}

// Using the callback functions in sequence to simulate the cooking process
mixGredient(function () {
  cookTime(function () {
    waiting(function () {
      console.log("Cake is Ready!!!");
    });
  });
});
