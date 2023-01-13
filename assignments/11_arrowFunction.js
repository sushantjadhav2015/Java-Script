console.log(`1) log given sentence`);
let arrow = () => {
  console.log("Good morning, Today is Monday");
};
arrow();

// multiplication of 3 number
console.log(`  `);
let multiply = (n1, n2, n3 = 1) => {
  console.log(`2) Multiplication of given value :`, n1 * n2 * n3);
};
multiply(5, 5, 2);
console.log(`* Multiplication of defualt value n3=1`);
multiply(10, 4);

// multiplication of 5 numbers using arrow fuction
let addition = (n1,n2,n3,n4,n5) => {
    let add = n1+n2+n3+n4+n5
    return add ;
};

let additionOfNum = addition(100,100,200,349,756)
console.log(`\n3) Addition of given numbers : ${additionOfNum}`);

let additionOfString = addition("I am", "learning","ES6","features","in depth")
console.log(`3) Addition of string is : ${additionOfString}`);
