//How to Remove Duplicates Using the reduce() Method
const num = [1,2,3,4,5,2,4,5,19,4,5]
const noDuplicateItems = num.reduce((accumulator,item)=>{
    if(!accumulator.includes(item)){
        accumulator.push(item);
    }
    return accumulator;
},[]);
console.log(noDuplicateItems)