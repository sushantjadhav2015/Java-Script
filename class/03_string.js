var greet="good morning"
console.log("given string is :", greet);

console.log("Total number of greet character", greet.length);
console.log("Character at index 3 is", greet.charAt(3));

var totallenght=greet.length;
console.log("char at last index:",greet.charAt(totallenght-1) );

//contactination is as follows
console.log("======== concat() ==========");
var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
// normalmetod
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
//using concat method
var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);

//INDEX STREM- is used to find index of specific character
var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

//index Substring
var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

//replace character or word
var greet="good evening";
var greetAfterReplace= greet.replace("evening", "morning");
console.log("Replace substring Morning with evening", greetAfterReplace);

console.log(greet.replace("eve", "mor"));

//in one string if we want to write in uppercase or lowercase
console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());


// Is this character is in string to find this use includes and trim
var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();//trim 
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

//slice method
var greet="good evening";
var resultSlice=greet.slice(0,3);
console.log("Slice method:", resultSlice);

console.log( "slice() with start index ",greet.slice(4));

//slice using negative index number
console.log( "slice with - index ",greet.slice(-8));
console.log("slice with negative start index: ", greet.slice(-7));
console.log("slice with negative start and end index: ", greet.slice(-7, -2));

//split method
var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

//sentence
var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log("Total words in sentence string is: ", wordsInSentence.length);

//back tick(` its on left side of 1 key)
console.log(`yes you can do it "sushant"`);

//string template
console.log("======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);


var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName );

console.log(`First name is: ${firstName} and last name is ${lastName}`);

// write content on new line use \n
console.log("hellow","\ngood",'\nmorning');


