//console by using string template 

//string by using function expression
var stringHandOn = function(){
    var string = "     Hey you are doing good, keep it up     ";
    //write string as it is
    console.log(`1) Given string :`, string);
    //length of given string
    console.log(`2) Length of string is :`,string.length );
    //trim extra space
    var resultTrim =string.trim();
    console.log(`3) Removed leading and trailing extra space :`, resultTrim);//count trimed space length
    console.log(`4) Total number of extra space :`,string.length-resultTrim.length);// total length of trimed space

    console.log(`5) First and last character after trim is:`, resultTrim.charAt(0), `and last character is`, resultTrim.charAt(resultTrim.length-1));// first and last character after trim is

    var wordsInString=resultTrim.split(" ")// total number of world in sentence
    console.log(`6) Total number of word in string :`, wordsInString.length);

    var indexOf=string.indexOf("good")
    console.log(`7) Index of word 'Good' is :`, indexOf);// Index number of given word

    console.log(`8) substring staring from index 22 :`, resultTrim.substring(22));//substring

    console.log(`9) substing staring from index 22 by using slice :`, resultTrim.slice(22));//concat

    console.log(`10) String ends with word "up" :`, resultTrim.includes("up"));//include for ture or false
    console.log(`11) String strats with word "Hey"`, resultTrim.includes("Hey"));//include for true or false

}
stringHandOn()