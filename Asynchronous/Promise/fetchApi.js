const fetchData = new Promise((resovle,reject)=>{
    setTimeout(() => {
        fetch("https://dummyjson.com/products/1")
        .then(respone => respone.json())
        .then(data=> {
            
            resovle(data);
        })
        .catch(error=>{
            console.log(error);
            reject(error);
        })
    }, 2000);
})
fetchData
.then(data=>{
    console.log("Data from fetching ",data);
})
.catch(error=>{
    console.log(error);
});