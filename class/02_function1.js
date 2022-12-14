function display() {
    //fuction is block of code is used to perform task
    console.log("may name: sushant")
    console.log("my last name:jadhav")
}
display()

function show(){
    console.log("college name: D Y patil college")
}
show()

function swapValue(value1, value2){
    console.log("before swaping", value1, value2)
    var temp=value1
    value1=value2
    value2=temp
    console.log("after swaping", value1, value2)
}

swapValue(100,200)
swapValue(2,4)
swapValue("kishor","hitesh");
swapValue("you","me")

function display( ) {
    console.log("My name: Mohit");
    console.log("My sir name is: Sharma");
    
  }
  
  display(); // Function call or function invocation
  
  // Write a function show which should log you college name
  
  function showDetails(myName){
      console.log("Details", myName);
  }
  showDetails("Mohit Sharma");
  
  
  
  function swapValues(value1, value2){
      console.log("Before Swap", value1, value2);
      var temp = value1;
      value1 = value2;
      value2 = temp;
      console.log("After Swap", value1, value2);
  }
  swapValues(100, 200);
  swapValues(2, 4);
  swapValues("Kishor", "Hitesh");
  swapValues("You", "Me");
  
  function hello(myName){
      console.log(myName);
  }
  hello("Sachin");
  
  console.log("Function with arguments and return value");
  function rajuBhaiya(paisa){
    console.log("Going in market", paisa);
    console.log("Purchased fresh vegetables", paisa);
    console.log("Come back");
    return "Bag of vegetables";
    
  }
   var bagOfVegetables= rajuBhaiya(100);
   console.log(bagOfVegetables);
   
  
   function add(val1, val2){
      console.log(val1 + val2);
   }
   add(10, 20);