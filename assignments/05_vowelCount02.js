function countChar(sentence) {
  var string = sentence;
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    var charCopy = char.toLowerCase();
    if (charCopy == "a") {
      console.log(char);
      count = count + 1;
    }
  }
  return count;
}
var result = countChar("I AM Learning JavaScript,The Language of internet");
console.log(`Total number of a & A is : ${result}`);

console.log(`------------------------------------------------------------`);

var result = countChar("My favourite movie is LAggAn");
console.log(`Total number of a & A is : ${result}`);
