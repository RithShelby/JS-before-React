async function fetchData() {
  // Simulating a delay, like fetching data from a server
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Data fetched!";
}
async function myAsyncFunction() {
  console.log("Start");
  const data = await fetchData(); // Pauses here until fetchData is done
  console.log(data);
  console.log("End");
}
myAsyncFunction();
