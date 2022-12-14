console.log("***1) Two function with no arguments and no return***")
function sentence() {
    console.log("time is money")
}
function time(){
    console.log("save water save life")
}
sentence()
time()

console.log("***********2) WAF perdonal details***********")
function personalDetails(firstName, lastName, collegeName){
    console.log("Sushant")
    console.log("Jadhav")
    console.log("D Y Patil college of engineerig")
}
personalDetails()

console.log("***********3) Swap value***********")
function swapValueDude(value1, value2){
    console.log("Before swaping", value1, value2)
    var temp=value1
    value1=value2
    value2=temp
    console.log("After swaping", value1, value2)    
}
swapValueDude("virat", "Anushka")
swapValueDude(1000, 2000)

console.log("********4) Three parameters*********")
function addThreeValues(val1, val2, val3){
    console.log(val1+val2+val3)
}
addThreeValues(10.23, 600, 40)
addThreeValues("Hello","Good","Morning")

