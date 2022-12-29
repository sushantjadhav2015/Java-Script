var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

//  Print the vowels only aeiou or AEIOU
// Optimized code convert setence word into smallcase
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

var sentence = "Yes Just do it man, I know you can";
// initi   cond  update
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  // console.log(char);
}
console.log(reverseString);

// print 5  1000

var count = 1;
while (count <= 1000) {
  console.log(5);
  count = count + 1;
}


//
//
//
//

// assignment que 3.1
var s1 = "hard work always pays back";
var s2 = "Soon i will be Angular IT devloper";

var string = s1 + s2;
var stringLength = string.length;
console.log(`String length is `, stringLength);

var stringWithNoSpace = stringLength - string.split(" ").length;
console.log(`Split length of string`, stringWithNoSpace);

function oddPositionedChar(string) {
  var str = "";
  var sumn = 0;
  for (let i = 1; i <= stringWithNoSpace; i = i + 2) {
    var index = s1.charAt(i);
    str += i.toString();
    str += ",";
    sumn = sumn + 1;
  }
  console.log(sumn);
  console.log(str);
}
oddPositionedChar();
