// Find the grates number
console.log(`1) ======Greater Number using ternary oprator=====`);
function greatestNumber(num1, num2) {
    var greResult = num1>num2 ? num1 : num2;
    console.log(`Greater number is ${greResult}`);
}
greatestNumber(10, -10);
greatestNumber(800, 899);

console.log(`\n2) ======even Or odd number=====`);
var evenOrOdd = function(num3){
    var numResult = num3%2==0 ? "True" : "False";
    return numResult;
}
var givenNumber = evenOrOdd(29);
console.log(`number 29 is ${givenNumber}`);

var givenNumber = evenOrOdd(44);
console.log(`Number 44 is ${givenNumber}`);

var givenNumber = evenOrOdd(0);
console.log(`Number 0 is ${givenNumber}`);

var givenNumber = evenOrOdd(101);
console.log(`Number 101 is ${givenNumber}`);

console.log(`\n3) ======Find Length and check its even or odd=====`);
var evenOrOddWord = function(word){
    var len = word.length;
    var wordResult = len%2==0 ? "EVEN" : "ODD";
    return wordResult;
}
var res = evenOrOddWord("JavaScript");
console.log(`Length of "JavaScript" is :`, res);

// console.log(`Length of "JavaScript is :`, evenOrOddWord("JavaScript"));

var res =  evenOrOddWord("Developer");
console.log(`Length of "Developer" is :`, res);

var res = evenOrOddWord("Google");
console.log(`Length of "Google" is : `,res);







