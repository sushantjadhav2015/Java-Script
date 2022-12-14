
var fullName="sushant";

//fuction expression
var showResult= function (){
    console.log("show...");
};
showResult()

// we can store a function as value is JS
var substraction=function(val1,val2){
    var result= val1-val2;
    console.log("substraction...", result);
    return result;
}
var myresult= substraction (20,10)
console.log(myresult);

