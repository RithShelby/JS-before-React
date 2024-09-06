const dataToUpdate = {
  id: 1,
  title: "Updated blog post",
  body: "This is the updated content of the blog post.",
  author: "John Doe",
  array: [12, 15, "Hello bro"],
};
const jsonString = JSON.stringify(dataToUpdate);
const url = "https://jsonplaceholder.typicode.com/posts/1"; // Replace this with the real API endpoint

const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: jsonString,
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then((updatedData) => {
    console.log("Data updated:", updatedData);
  })
  .catch((error) => {
    console.error("Error updating data:", error);
  });
