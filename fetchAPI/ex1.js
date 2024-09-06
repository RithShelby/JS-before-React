fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    // Handle the response
    return response.json(); // assuming the response is in JSON format
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
