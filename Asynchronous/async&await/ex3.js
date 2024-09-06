function fetchData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Data has been fetched..!");
    }, 2000);
  });
}
fetchData().then((data) => {
  console.log(data);
});
