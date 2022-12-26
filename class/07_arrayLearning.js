let arrayOfnumber = [5, 10, 15, 7, 50, 12, 80, 40, 10]; //emty array
console.log(arrayOfnumber);

console.log(`=========Total number of element avalible in array=========`);
let totalElements = arrayOfnumber.length;
console.log(`total number of elements in given arry is : ${totalElements}`);

let typeOfArray = typeof arrayOfnumber;
console.log(`Type of arry - arraynumber ---> ${typeOfArray}`);

console.log(`====Accessing array elements====`);
let elementAtIndex = arrayOfnumber[0];
console.log(`Element ant 0 index is : ${elementAtIndex}`);
console.log(`Element ant 0 index is : ${arrayOfnumber[5]}`);

console.log(`last element is : ${totalElements - 1}`);

console.log(`When provide value is grater than length : ${arrayOfnumber[10]}`);

arrayOfnumber[2] = 100; //Update or modify value using index
console.log(arrayOfnumber);

let indexOf7 = arrayOfnumber.indexOf(7); // if you enter value that not in given array it showes -1 index
console.log(`Index of 4 :${indexOf7}`);
console.log(`Index of 4 :${arrayOfnumber.indexOf(10)}`);

console.log(`\nTraversing array using for loop`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  const element = arrayOfnumber[index];
  console.log(element);
}

console.log(`\naccessing even index position data from array`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  if (index%2==0) {
    const element = arrayOfnumber[index];
    console.log(element);    
  }
}


// let arrayOfnumber = [5, 10, 15, 7, 50, 12, 80, 40, 10]; //emty array

console.log(`\n accessing odd index position data from array`);
for (let index = 0; index < arrayOfnumber.length; index++) {
  // index = 0 1 2 3 4 5 6 7 8
  if (index%2==1) {
    const element = arrayOfnumber[index];
    console.log(element);    
  }
}
