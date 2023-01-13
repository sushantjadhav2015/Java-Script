// Arrow function with no arguments and no value
console.log(`===Arrow function with no arguments and no value===`);
let show = () => {
  console.log("Hello");
};
show();
// => function Syntax
// let fun = ()=>{

// };

// Arrow fuction with argument
console.log(`===Arrow fuction with argument===`);
let sum = (n1, n2) => {
  console.log(n1 + n2);
};
sum(10, 10);

// Arrow Function with argument and return value
console.log(`===Arrow Function with argument and return value===`);
let multiply = (n1, n2) => {
  let mul = n1 * n2;
  return mul;
};
let mulResult = multiply(5, 5);
console.log(mulResult);
