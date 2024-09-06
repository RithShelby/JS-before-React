//Define the API URL
const apiUrl = "https://dummyjson.com/products";
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error", error);
  });
// It's important to handle errors properly when using Fetch API.
// This includes handling network errors and server responses.
// You can check if the response was successful using the ok property of the Response object. If the request was unsuccessful, you can throw an error and catch it
