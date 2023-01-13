
// using Normal function ,return square of length of word

console.log(`===Length of given string and square of its length===`);
function squareOfWordLength (word) {
    var wordLength = word.length
    console.log(`\nlength of ${word} is :` , wordLength);
    return `square of word is:`, wordLength * wordLength

}

var givenWord1 = squareOfWordLength("JavaScript");
console.log(`Length Square of " JavaScript" is :`, givenWord1);

var giveWord2 = squareOfWordLength("Google Chrome");
console.log(`Length Square of "Google Chrome" is :`, giveWord2);

var giveWord3 = squareOfWordLength("Developer Smart");
console.log(`Length Square of "Developer Smart" is :`, giveWord3);

console.log(`\n\n===Fuction Expression with no arg. no return value===`);

var givenString = function(){
    var string = "I am Angular Developer"

    var strigLegnth = string.length;
    console.log(`Length of string is :`, strigLegnth);

    var totalNumberOfWord = string.split(" ");
    console.log(`Total number of string word is:`, totalNumberOfWord);

    var num1 = 22;
    var num2 = 4;
    var divResult = num1/num2;
    var multyResult = num1 * num2;

    console.log(`2.1) Divide string length by Total number of string word :`, divResult);
    console.log(`2.2) Multiplication of string length and total number of word :`, multyResult);
}
givenString()











