function fetchDataFromAPI() {
  return new Promise((resovle) => {
    setTimeout(function () {
      resovle("Data fetched...!");
    }, 2000);
  });
}
// Async function using await
async function fetchData() {
  console.log("Fetching Data...");
  const result = await fetchDataFromAPI(); // Pauses here until fetchDataFromAPI is done
  console.log(result);
}
// Calling the async function
fetchData();
