// Using while loop
// print 5 to 15 by increment of 1
console.log(`\nPrint 5 to 15 by increment of 1`);
var s = "";
var i = 5;
while (i <= 15) {
  s += i.toString();
  i = i + 5;
  s += ",";
}
console.log(s);

// let s = "";
// for (let i = 0; i<=15; i++) {
//   s += i.toString();
//   if (i != 15) {
//     s += ",";
//   }
// }console.log(s);

// Print number from 50to 40 by decrementing by 1
var s = " ";
var i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}

// Find first 15 odd number
console.log(`\nFirst 15 odd number using while`);
var s = "";
var i = 0;
while (i <= 30) {
  s += i.toString();
  i = i + 1;
  s += ",";
}
console.log(s);

// Find first 10 even number
console.log(`\nFirst 15 even number`);
var i = 0;
while (i <= 30) {
  console.log(i);
  i = i + 2;
}

console.log(`\n\n\nUsing do while loop`);
// print table of 5
var i = 0;
do {
  console.log(i);
  i = i + 5;
} while (i <= 50);

// print table of 10 
var index = 0;
do {
  console.log(index);
  index=index+10
} while (index<=100);


// print table of 10 by reversing 
var i =100;
do {
  console.log(i);
  i = i-10;
} while (i>=10);