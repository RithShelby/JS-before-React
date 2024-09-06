async function getData() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products"
    );
    const data = await response.json();
    console.log("Data is fetcing ...",data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();
