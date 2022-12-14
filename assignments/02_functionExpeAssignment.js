
//Square of all values using function expression
var square=function(num){
    console.log("Square of",num,"is",num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log(typeof square);

console.log("----------------------------------------------");

// area of rectangle using function expression
var area=function(length,width){
    console.log("Area of rectangle is", length*width);
}
area(499,917)

console.log("----------------------------------------------");

// swaping of two values using function expression
var swapValues=function(val1,val2){
    console.log("Before swap=", val1, val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After swap=", val1, val2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

console.log("-----------------------------------------------");



var language=function(){
var string="JS the most popular language"
console.log("1) Total character in string is=", string.length);
console.log("2) Character at index 6 is", string.charAt(6));
console.log("3) Character at index 11 is", string.charAt(11));

var totallenght=string.length;
console.log("4) Last character is", string.charAt(totallenght-1));
console.log("5) First character is", string.charAt(0));
console.log("6) Total length of string =", string.length);
console.log("7) square of length of string =", string.length*string.length);

}
language()



