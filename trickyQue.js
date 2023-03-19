// TODO 1) question on hosting of variable
//* var (global verial) can asign before its decleration
// function fruit() {
//     console.log(name);
//     console.log(price);

//     var name= "apple";
//     let price =20
// }
// fruit()

// TODO 2) write 3 word with same value on console upto 3 time
//* var is a global scope so it contain same value
// for (var index = 0; index < 3; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, 1);
// }

// TODO 3) out put should be in 1 2 3 in that form
// * let is a block scope so it works in block only that why it print value in 1 2 3 form
// for (let index = 0; index < 4; index++) {
//   setTimeout(() => console.log(index), 5);
// }

// TODO 4) two more console. log in which check type of +true OR true/false is a boolean type but how to convert in number data type
// * if we write + before true or string value it converts into a number data type
// console.log(+true);
// console.log(typeof +true);

// console.log(+`sushant`);
// console.log(typeof -`sushant`);

// TODO 5) i have string value and if i write ! before string value than what is the output ?
// *when we use ! (nagestion) before string value it gives false(boolen type) value and if write !! then it gives true value
// console.log(!"jadhav");
// console.log(typeof "jadhav");

// TODO 6) what will be the output of following code
// let data ="size"
// const bird ={
//     size :"small"
// }

// console.warn(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);
// //*we can access data veriable by using object name so for that we want to use [] backet and add that veriable

// TODO 7) what is the output of following code
// let c = { name: "peter" };
// let b;
// b = c;
// c.name = "sushant";
// console.log(b.name);

// TODO 8) what is the output of following code
// var x;
// var x = 20;
// console.log(x);

// TODO 9) what is the output of following code
// //* once variable delclare by name that name cant use to decleare another variable name with let
// var s;
// let s=20
// console.log(s);

// TODO 10) what is the output of following code
// //* == its compare only value but === it compare value and data type
// let a=3;
// let b= new Number(3);

// console.log(a==b);//true
// console.log(a===b);//false

// TODO 11) what is the output of following code
// let name;
// let anme = {};
// console.log(name);

// TODO 12) what is the output of following code
// //*if you add any property name aand value its cant change in function
// function fruit() {
//   console.log("woof !");
// }
// fruit.name = "apple";
// fruit();

// TODO 13) what is the output of following code
// //* concat or addition
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

// TODO 14) what is the output of following code
// let number = 0;
// console.log(number++); //print 0 than increment
// console.log(++number); // first increment and than print
// console.log(number); // no increment

// TODO 15) what is the output of following code
// function getAge(...arg) {
//     console.log(typeof arg);
// }
// getAge(21);

// TODO 16) what is the output of following code
// function getage() {
//     'use strict'
//     age = 22;
//     console.log(age);
// }
// getage();

// TODO 17) what is the output of following code
// //* eval can contain string with numberic value
// const sum = eval(`10*10+5`);
// console.log(sum);

// TODO 18) how long is cool secret accessible?
// sessionStorage.getItem(coo_secret,123); //upto close the browser

// TODO 19) what is the output of following code
// const obj = {1:"a", 2:"b", 3:"c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// TODO 20) what is the output of following code
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);

// TODO 21) what is the output of following code
// for (let index = 1; index < 5; index++) {
//   if (index === 3) continue;
//   console.log(index);
// }

// TODO 22) what is the output of following code
// const foo = ()=> console.log(`First`);
// const bar =() => setTimeout(() => console.log(`second`));
// const baz = ()=> console.log(`Third`);

// bar()
// foo()
// baz()

// TODO 23) what is the output of following code
{
  /* <div onclick="console.log(`frist div`)">
<div onclick="console.log(`second div`)">
    <button onclick="console.log(`button`)">
        CLICK
    </button>
</div>
</div> */
}

// TODO 24) what is the output of following code

// TODO 25) log number upto 10 only
// for (let i = 0; i <= 20; i++) {
//   if (i <= 10) {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 20 && i <= 10; i++) {
//   console.log(i);
// }

// TODO 26) reverse string
("hello how are you");
//  Output should be -  'you are how hello'

let str = "hello how are you";
let inArray = str.split(" ");
let reverseArr = [];
for (let i = inArray.length - 1; i >= 0; i--) {
  reverseArr.push(inArray[i]);
}
console.log(reverseArr.join(" ")); 
console.log(inArray); //for refrance

inArray.forEach(element => {
  
});


