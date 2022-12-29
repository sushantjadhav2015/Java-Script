let arrayOfnumber = [5, 10, 15, 7, 50, 12, 80, 40, 10]; //emty array
console.log(arrayOfnumber);

console.log(`=========Total number of element avalible in array=========`);
let totalElements = arrayOfnumber.length;
console.log(`total number of elements in given arry is : ${totalElements}`);

let typeOfArray = typeof arrayOfnumber;
console.log(`Type of arry - arraynumber ---> ${typeOfArray}`);

console.log(`====Accessing array elements====`);
let elementAtIndex = arrayOfnumber[0];
console.log(`Element ant 0 index is : ${elementAtIndex}`);
console.log(`Element ant 0 index is : ${arrayOfnumber[5]}`);

console.log(`last element is : ${totalElements - 1}`);

console.log(`When provide value is grater than length : ${arrayOfnumber[10]}`);

arrayOfnumber[2] = 100; //Update or modify value using index
console.log(arrayOfnumber);

let indexOf7 = arrayOfnumber.indexOf(7); // if you enter value that not in given array it showes -1 index
console.log(`Index of 4 :${indexOf7}`);
console.log(`Index of 4 :${arrayOfnumber.indexOf(10)}`);

console.log(`\nTraversing array using for loop`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  const element = arrayOfnumber[index];
  console.log(element);
}

console.log(`\naccessing even index position data from array`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  if (index % 2 == 0) {
    const element = arrayOfnumber[index];
    console.log(element);
  }
}

// let arrayOfnumber = [5, 10, 15, 7, 50, 12, 80, 40, 10]; //emty array
console.log(`\n accessing odd index position data from array`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  if (index % 2 == 1) {
    const element = arrayOfnumber[index];
    console.log(element);
  }
}

console.log(`\nTraversing array using for loop in revers order`);
for (let index = arrayOfnumber.length; index > 0; index--) {
  const element = arrayOfnumber[index];
  // console.log(element);
}

// arrays of salaries
console.log(`Accessing salary of each employee`);
let arrayOfsalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;
for (let index = 0; index < arrayOfsalaries.length; index++) {
  const element = arrayOfsalaries[index];
  sumOfSal = sumOfSal + element; // you can also write sumofsal += element
}
console.log(` Total sum of salary of all employee : ${sumOfSal}`);

console.log(`-----push method-----`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3); // Adding element in the last in array
arrayOfNum.push(11, 12, 13);
console.log(arrayOfNum);

console.log(`======== unshift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.unshift(77); // adding number at before the array
arrayOfNum.unshift(99, 111, 333);
console.log(arrayOfNum);

console.log(`======== pop() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum.pop(); // pop used to remove last element from array
console.log(popResult);
console.log(arrayOfNum);

console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift(); // shift used to remove first element
console.log(shiftResult);
console.log(arrayOfNum);

console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3); // to remove first 2 elemnt or midel element
let sliceRes = arrayOfNum.slice(2, 5); // slice (start, end) in that it cant take end element which select in slice
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);// remove all elemnet after index 3
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);// removw elemnent from index 2 , remove 3 elemnet (splice(index, remove elemnt))
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);

console.log(`======inserting elemnet into the array======`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2,0,88);// by using splice you can add any element at index of 2 elemnet, 0 means no change or delete 
console.log(arrayOfNum);
arrayOfNum.splice(2,0,88,55,22,11);//after index of 2, no change , add elements 88,55,22,11 
console.log(arrayOfNum);

console.log(`======replacing elemnet into the array======`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2,2,33);//after index of 2 , remove 2 element , and add 33 elemnet is array
console.log(arrayOfNum);

console.log(`======for of loop =========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const iterator of arrayOfNum) {
  console.log(iterator);// for of loop is shaort cut to iterat value instend of for loop becuase in that we want to use condition
}

console.log(`======include() method`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvalible = arrayOfNum.includes(9);
console.log(isAvalible);

console.log(`========Join ()======`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(", ");
console.log(joinResult);
console.log(typeof joinResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfName= ["moni","jenny","sh"]

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);

console.log(`========Resize of array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 9;
console.log(arrayOfNum);
console.log(arrayOfNum.length);














