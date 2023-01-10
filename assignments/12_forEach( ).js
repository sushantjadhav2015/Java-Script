const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`1)----log elements with its index using forEach----`);
arrayNumbers.forEach((currentValue, index) => {
  console.log("Index of", currentValue, "is:", index);
});

console.log(`\n2)----positive number in one array----`);
const arrayOfPositive = [];
arrayNumbers.forEach((currentValue) => {
  if (currentValue >= 0) {
    arrayOfPositive.push(currentValue);
  }
});
console.log(`Positive numbers in one array:`, arrayOfPositive);

console.log(`\n3)----Negative Numbers in one array----`);
const arrayOfNegative = [];
arrayNumbers.forEach((number) => {
  if (number < 0) {
    arrayOfNegative.push(number);
  }
});
console.log(`Negative numbers in one array:`, arrayOfNegative);

console.log(`\n4)----Even numbers----`);
arrayOfEven = [];
arrayNumbers.forEach((currentValue) => {
  if (currentValue % 2 == 0) {
    arrayOfEven.push(currentValue);
  }
});
console.log(`Even numbers in one array:`, arrayOfEven);

sum = 0;
arrayNumbers.forEach((currentValue) => {
  sum = sum + currentValue;
});
console.log(`\n5) Sum of all elemets of array :${sum}`);

console.log(`\n6)----Even positioned array----`);
const array =[];
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        array.push(currentValue);
    }
})
console.log(array);