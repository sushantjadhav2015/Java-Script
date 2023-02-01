// const array =['sushant', 'sambhaji','jadhav']
// let [array1, array2,array3]=array
// console.log(array1,array3);

// let mul = (x,y,z=1)=>{
//     console.log(x*y*z);
// }
// mul(2,5,6)
// mul(2,3)

// const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
// const updattArray = array.map((element, index) => {
//   return element * 10;
// });
// console.log(updattArray);

// const suareArray = array.map((element, index) => {
//   return element * element;
// });
// console.log(suareArray);

// const addArray = array.map((element, index) => {
//   return element + index;
// });
// console.log(addArray);

// const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// const newArray = arrayNumbers.filter((element) => {
//   return element % 2 == 0;
// });
// console.log(newArray);

// const sumEvenElement = newArray.reduce((runingElement, value) => {
//   return runingElement + value;
// }, 0);
// console.log(sumEvenElement);

const arrayNum = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

arrayNum.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arrayNum);
arrayNum.reverse();// desending array element using reverse method
console.log(arrayNum);

// Reverse the array element using sort method
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19, 0];
array.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(array);

// reverse method
const reverseArray = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19, 0];
reverseArray.reverse();
console.log(reverseArray);
