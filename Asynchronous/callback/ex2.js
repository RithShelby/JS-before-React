function fetchData(callback) {
  setTimeout(function () {
    console.log("Data fetched!");
    callback();
  }, 2000);
}
console.log("Start");
fetchData(function () {
  console.log("CallBack Done!!");
});
