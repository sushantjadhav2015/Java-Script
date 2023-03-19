// const array =['sushant', 'sambhaji','jadhav']
// let [array1, array2,array3]=array
// console.log(array1,array3);

// let mul = (x,y,z=1)=>{
//     console.log(x*y*z);
// }
// mul(2,5,6)
// mul(2,3)

// const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
// const updattArray = array.map((element, index) => {
//   return element * 10;
// });
// console.log(updattArray);

// const squreArray = array.map(element => element * element);
// console.log(squreArray);

// const addArray = array.map((element, index) => {
//   return element + index;
// });
// console.log(addArray);

// const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// const newArray = arrayNumbers.filter((element) => {
//   return element % 2 == 0;
// });
// console.log(newArray);

// const sumEvenElement = newArray.reduce((runingElement, value) => {
//   return runingElement + value;
// }, 0);
// console.log(sumEvenElement);

// const arrayNum = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// arrayNum.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(arrayNum);
// arrayNum.reverse();// desending array element using reverse method
// console.log(arrayNum);

// // Reverse the array element using sort method
// const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19, 0];
// array.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(array);

// // reverse method
// const reverseArray = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19, 0];
// reverseArray.reverse();
// console.log(reverseArray);

// // use split on string
// var set="1,2,3,4,5,6,"
// console.log(set.split(" ,"));

// // squre of word of sentence
// function suareOfWord(str) {
//   var strLength = str.length;
//   var squre = strLength*strLength;
//   return squre
// }
// var ret = suareOfWord("CodeMind");
// console.log(ret);

// var givenString =function(str) {
//   let newStr=str.length/(str.split(" ").join("")).length;
//   console.log(newStr.toFixed(4));

// }
// givenString("sushant jadhav")

// // ternary oprater
// let gretestNumber=function(n1,n2){
//   var number = n1>n2 ? n1:n2
//   console.log(`Grater number is ${number}`);
// }
// gretestNumber(-20,-10)


// // Find the largest number by using if else
// function graterNum(n1, n2, n3) {
//   if (n1 > n2 && n1 > n3) {
//     largest = n1;
//   } else if (n2>n3 && n2>n1) {
//     largest=n2
//   }else{
//     largest=n3
//   }
//   console.log(largest);
// }
// graterNum(10,20,30)


// // object 
// const student={
// name:"sushant jadhav",
// age:25,
// city:"kolhapur",
// education: "engineer"

// }

// console.log(student.city);
// for (const key in student) {
//   if (Object.hasOwnProperty.call(student, key)) {
//     const element = student[key];
//     console.log(`${key} : `,element);
//   }
// }

// // callback() method
// function doHomework(callback) {
//     console.log('solving tricky quation please wait bro');
//     console.log("homework done please copy it");
//     callback();
// }
// function copyHomework() {
//     console.log('copyed all homework');
    
// }

// doHomework(copyHomework);

// promise
// let notes_sharing_status =true;
// let promiseOfNotesProvide=new Promise((resolve, reject) => {
//     if (notes_sharing_status) {
//         resolve('guys take your notes')
//     }else{
//         reject('sorray guys manage from anyware')
//     }
// });

// promiseOfNotesProvide.then(function (onSuccess) {
//     console.log(onSuccess);
// }).catch(function(onReject){
//     console.log(onReject);
// }).finally(function(){
//     console.log("do your self ");
// })


// // primose with arrow fuction
// let notes_sharing_status =false;
// let promiseOfNotesProvide=new Promise((resolve, reject) => {
//     if (notes_sharing_status) {
//         resolve('guys take your notes')
//     }else{
//         reject('sorray guys manage from anyware')
//     }
// });

// promiseOfNotesProvide
// .then(onsuccess=>console.log(onsuccess))
// .catch(onreject=>console.log(onreject))
// .finally(()=>console.log('do your self'))

// // access properties of object by using destructuring 
// const person={
//     name:"sushant jadhav",
//     age:"28"
// }

// let {name,age}=person;
// console.log(name,age);

// // using arrow function
// let arrow=(n1,n2,n3=1)=>{
//     let mult=n1*n2*n3;
//     console.log(mult);
// }
// arrow(10,10,10);
// arrow(20,20)

// // addition of array element by using reduce method
// const array=[20,30,5,0,80,90]
// let arr=array.reduce((runingTotal,value)=>{
//     return runingTotal+value
// },0)
// console.log(arr);


// // map method ----allows loops, access each element, store value in new array
// const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
// const array =array_numbers.map((element)=>{
//     return element+10
// })
// console.log(array);

// const suareArray=array_numbers.map((element,index)=>{
//     return (element*element)+index
// })
// console.log(suareArray);


// // fillter method
// const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// const numArray =arrayNumbers.filter((element)=>{
//     // return element>50
//     // return element%2==0
//     // return element%2==1
//     // return element%5==0
//     return (element>20 && element<50)
// })
// console.log(numArray);

// // reduce method
// const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// const arrayNum =array_numbers.reduce((runingTotal,value)=>{
//     return runingTotal+value;
// })
// console.log(arrayNum);

// const arr = array_numbers.filter(number=>number%2==0);
// const newArr=arr.reduce((runingTotal,value)=>{
//     return runingTotal+value
// },0);
// console.log(newArr);

// const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
// array_roll_numbers.reverse()
// console.log(array_roll_numbers);

// const asecendingArr=array_roll_numbers.sort((a,b)=>{
//     return a>b? 1:-1;
// })
// console.log(asecendingArr[asecendingArr.length-1]);

// const array= [...new Set(array_roll_numbers)]
// console.log(array);

// // swap number
// function swap(a,b) {
//     var temp =a;
//     var a =b;
//     var b=temp;
//     console.log(a,b); 
// }
// swap(10,20)




