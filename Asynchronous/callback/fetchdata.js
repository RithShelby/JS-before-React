const fetchData=(callback)=>{
    setTimeout(() => {
        const item = {name : "john", age : 19}
        callback(item);
    },3000);
}
fetchData((data)=>{
    console.log(data)
})
console.log("Data is fetching ...")