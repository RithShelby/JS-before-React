const myPromise = new Promise((resovle, reject) => {
  setTimeout(function () {
    const data = true;
    if (data == true) {
      resovle("Data has been fetched!");
    } else {
      reject("Error fetching data!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
