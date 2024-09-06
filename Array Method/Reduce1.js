// /How to Group Similar Items Together
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];
const groupedItems = items.reduce((accumulator, item) => {
  const SameCategory = item.category;
  if (!accumulator[SameCategory]) {
    accumulator[SameCategory] = [];
  }
  accumulator[SameCategory].push(item.name);
  return accumulator;
}, {});
console.log(groupedItems);
