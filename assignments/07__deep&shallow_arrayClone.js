const arrayNum = [20, 3, 4, 56, 90, 400, 49];

console.log(`======shallow clone======`);
console.log(`orignal array is :${arrayNum}`);

let cloneArrayNum = arrayNum; //shallow clone
cloneArrayNum.push(55, 66);
console.log(`Array after cloning and update : ${cloneArrayNum}`);

console.log(`\n=====Deep clone using spread operator=====`);
const arrayNumber = [20, 3, 4, 56, 90, 400, 49];
let array = [...arrayNumber]; //deep cloning in array
array.push(10, 25);
console.log(`Orignal array is :${arrayNumber}`);
console.log(`Array after deep cloning and update : ${array}`);

console.log(`\n=====Merge or concat array using spread operator====`);
const arrayEven = [2, 30, 14, 8];
let concatArray = [...arrayEven, ...arrayNum];
console.log(
  `concating or meareing of two array by using spread oprator : ${concatArray}`
);
