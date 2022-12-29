const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

let arrayLen = fruits_seasonal.length;
console.log(
  `1) first and last element is : ${fruits_seasonal[0]} and ${
    fruits_seasonal[arrayLen - 1]
  }`
);
//
fruits_seasonal.unshift("Papaya");
console.log(`\n2) Add element before Banana : ${fruits_seasonal}`);
//
//remove 'Mango' from the array
fruits_seasonal.splice(4, 1);
console.log(`\n3) Mango removed from array : ${fruits_seasonal}`);
//
//add element at last
fruits_seasonal.push("Pineapple");
console.log(`\n4) add pineapple at last : ${fruits_seasonal}`);
//
//insert element Dragan fruit before water melon
fruits_seasonal.splice(fruits_seasonal.length - 2, 0, "Dragan fruit");
console.log(`\n5) Add element before water melon : ${fruits_seasonal}`);
//
// Replace element
fruits_seasonal[2] = "Kiwi";
console.log(`\n6) Replace "orange" to "Kiwi" : ${fruits_seasonal}`);
//
// log the element starting from 1 to 4
console.log(`\n7) Elements starting from 1 to 4`);
for (let index = 1; index < 4; index++) {
  const element = fruits_seasonal[index];
  console.log(element);
}
//
// select last 3 elemnets
console.log(`\n8) Last 3 elements`);
for (
  let index = fruits_seasonal.length - 3;
  index < fruits_seasonal.length;
  index++
) {
  const element = fruits_seasonal[index];
  console.log(element);
}
