
var num1=20;
var num2=10;
console.log(`===========Arithmatic Operater===========`);
var addResult=num1+num2

console.log(`Addition is ${addResult}`);

var substraction=num1-num2
console.log(`Subtraction is ${substraction}`);
//it also write as
console.log(`subtraction is ${num1-num2}`);

var multResult=num1*num2
console.log(`multyplication is ${multResult}`);

var divResult=num1/num2
console.log(`Division is ${divResult}`);

var moduloResult=num1 % 3;
console.log(`Modules is ${moduloResult}`);
//modules operater used to find the giev number is odd or even (baki kiti ahe sangte)

console.log(`==========Unary Operater==========`);
var num3=10
var result=num3++// This can also write as [num3=num + 1]
//When u write ++ after value is call post prifix and write before value is calles prifix this is post prifix example.
console.log(`incremant oprater result ${result}`);

var num4=100;
var decrimateResult=--num4;// this is prifix example
console.log(`decremant oprater result ${decrimateResult}`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`)
console.log(`> Operator - Greater than ${num1>num3}`)

var result = num1 < num2;
console.log(`< Operator - Less than ${result}`)

var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`)

var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);

console.log(`Check even or ODD: ${11%2}`);


console.log(`=======Assignment Operater=======`);
var moduloResult=num1 % 5;
console.log(`Modules is ${moduloResult}`);

var num1=20;
var num2=10;
num1 += num2
console.log(`Compound Addition ${num1}`);

var num1=20;
var num2=10;
console.log(`Compound Subtraction ${num1-+num2}`);