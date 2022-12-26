// console.log(`\nFind vowel number `);
let sentence = "I am very good IT Developer";
let counter = 0;
for (let index = 0; index < sentence.length; index++) {
  let char = sentence.charAt(index);
  let charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
  ) {
    // console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

//
//
//
console.log(`---------------------------------------`);
//  print sum of cuble of number from 1 to 5
function sum_Of_Cubes(N) {
  var sumN = 0;
  for (let i = 0; i <= N; i++) {
    sumN += i ** 3;
  }
  return sumN;
}

console.log(`Sum of cube of 1 to 5 is :`, sum_Of_Cubes(5));
//
//
//
//
console.log(`---------------------------------------------`);
//
//
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
var numResult = factorial(5);
console.log(`Factorial of 5 is :`, numResult);

var numResult = factorial(7);
console.log(`Factorial of 7 is :`, numResult);

var numResult = factorial(8);
console.log(`Factorial of 8 is :`, numResult);

var numResult = factorial(12);
console.log(`Factorial of 12 is :`, numResult);
// 
// 
// 
// 
console.log(`----------------------------------`);


function charAtOdd(sentence) {
  var newSent = "";
  let countOfOddChar = 0;
  for (let index = 0; index <= sentence.length; index++) {
    if (index%2==1) {
      newSent = newSent.split(" ").join("");
      oddChar = sentence.charAt(index);
      newSent = newSent.concat(oddChar)
      countOfOddChar = countOfOddChar+1;
    }
  }
  console.log(`Given sentence is : "${sentence}"`);
  console.log(`odd positioned char witout space is :${newSent} and its count is ${countOfOddChar}`); 
}
charAtOdd("Hard work always pays back")
console.log(` `);
charAtOdd("Soon I will be IT Angular Champ")
// 
// 
// 
// 
// Same program for find word at odd number of index of string 
function charAtOdd(sentence) {
  let oddChar = "";
  let count = 0;
  let newStr = sentence.split(" ").join("");
  for (let index = 1; index <= newStr.length; index = index + 2) {
    oddChar += newStr.charAt(index);
    count = count+1
  }
  console.log(`Given sentence is : "${sentence}"`);
  console.log(`odd positioned char witout space is :${oddChar} and is total count is ${count}`);
}
charAtOdd("Hard work always pays back");

