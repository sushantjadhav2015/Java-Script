const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`1) Total element in array  : `, arrayNumber.length);

console.log(
  `\n2) first and last element is:`,
  arrayNumber[0],
  `and`,
  arrayNumber[arrayNumber.length - 1]
);

console.log(
  `\n3) Thirst last element : ${arrayNumber[arrayNumber.length - 3]}`
);

console.log(`\n4) all even number form array`);
let evenNumArray = [];
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(evenNumArray);

console.log(`\n5) all odd number from array`);
let oddArray = [];
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 2 == 1) {
    oddArray = oddArray.concat(element);
  }
}
console.log(oddArray);

console.log(`\n6) All even position array`);
let evenArray = [];
for (let index = 0; index < arrayNumber.length; index = index + 2) {
  const element = arrayNumber[index];
  evenArray = evenArray.concat(element);
}
console.log(evenArray);

console.log(`\n7) All odd position array`);
let oddPostion = [];
for (let index = 0; index < arrayNumber.length; index++) {
  if (index % 2 == 1) {
    const element = arrayNumber[index];
    oddPostion = oddPostion.concat(element);
  }
}
console.log(oddPostion);

//sum of all element of array using for of
let sum = 0;
for (const iterator of arrayNumber) {
  sum = sum + iterator;
}
console.log(`\n8) sum of all element number is :  ${sum}`);

console.log(`\n9) Number which are multiple of 5`);
let fiveMultiple = [];
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 5 == 0) {
    fiveMultiple = fiveMultiple.concat(element);
  }
}
console.log(fiveMultiple);

let number = arrayNumber.includes(115);
console.log(`\n10) Number 115 is in arrayNumber: ${number}`);

let num = arrayNumber.includes(23);
console.log(`11) Number 23 is in arrayNumber: ${num}`);

console.log(`\n11) Insert number before index 3 of array`);
arrayNumber.splice(3, 0, 55, 33);
console.log(arrayNumber);

console.log(`\n12) Delete 3 element after index 4 `);
arrayNumber.splice(4, 3);
console.log(arrayNumber);
