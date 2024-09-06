function API() {
  return new Promise((resolve) => {
    // delay 3s before display
    setTimeout(resolve, 3000);
  });
}
async function fetchData() {
  console.log("Data is fetching ...!");

  // call function api
  await API();

  // Make an api call from jsonPlanholder
  const result = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  const data = await result.json();
  console.log(data);
  console.log("Data has been fetched!!");
}
fetchData();
