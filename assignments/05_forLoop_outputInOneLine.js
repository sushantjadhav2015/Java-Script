//  console number from 5 to 15 by incrementing 1
console.log(`\nprint number from 5 to 15`);
var s ="";
for (let number = 5; number <= 15; number++) {
  s += number.toString();
  s += ",";
}
console.log(s);

// console number from 50to 40 by decrementing by 1
console.log(`\n50to 40 by decrementing by 1`);
var str = "";
for (let index = 50; index >= 40; index--) {
  str += index.toString();
  str += ",";
}
console.log(str);

// Find first 15 odd number
console.log(`\nFirst 15 odd number`);
var s = " ";
for (let oddNum = 1; oddNum <= 30; oddNum = oddNum + 2) {
  s += oddNum.toString();
  s += ",";
}
console.log(s);

// Find first 15 even number
console.log(`\nFrist 15 even number`);
var string = " ";
for (let index = 0; index <= 30; index++) {
  string += index.toString();
  string += ",";
}
console.log(string);

// Table for 5
console.log(`\nTable for 5`);
var str = " ";
for (let ind = 5; ind <= 50; ind = ind + 5) {
  str += ind.toString();
  str += ",";
}
console.log(str);

// Table of 10 incremental 10
console.log(`\nTable for 10`);
var str = " ";
for (let indexNumber = 10; indexNumber <= 100; indexNumber = indexNumber + 10) {
  str += indexNumber.toString();
  str += ",";
}
console.log(str);

// Table of 10 in reverse
console.log(`\nTable for 10 reverse`);
var str = " ";
for (let indexnum = 100; indexnum >= 10; indexnum = indexnum - 10) {
  str += indexnum.toString();
  str += ",";
}
console.log(str);
