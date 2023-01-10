// Set: Allow unique elements
const setNumbers = new Set(); // Creating Set
// const setNumbers = new set(0,1,2,3,4,5,6,7,8,9); we can write set in this format also.
console.log("Adding elements in set");
setNumbers.add(0); // Add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3); // Adding duplicate element - 3
setNumbers.add(5);
setNumbers.add(6);
console.log(setNumbers);

console.log(`\nTotal available elements in Set`);
const totalElements = setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);

console.log(`\nAfter deletion`);
const isDeleted3 = setNumbers.delete(3); // 3 is in the set
const isDeleted99 = setNumbers.delete(99); // 99 is not in set
console.log(setNumbers);
console.log(`Is 3 Deleted ? ${isDeleted3}, Is 99 Deleted: ${isDeleted99}`);

console.log(`\nCheck element is available or not using has()`);
const isAvailable4 = setNumbers.has(4);
const isAvailable77 = setNumbers.has(77);
console.log(
  `Is 4 Available - ${isAvailable4}, Is 77 available - ${isAvailable77}`
);

// let array =[1,2,3,5,6,8,9,4];
// array.length =0;
// console.log(array);

console.log(`\nClearing set using clear() `);
// setNumbers.clear(5);
console.log(setNumbers);

console.log(`Type of set is : ${typeof setNumbers}`);

console.log(`\nUsing for of loop to travese set`);
for (const element of setNumbers) {
  console.log(element);
}

console.log(`\nRemoving duplicate elements`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);

const myArray = [...new Set(arrayOfNumbers)];
console.log(myArray);


class Employee {
  constructor(empId, empName, empAge, empCity) {
    this.empId = empId;
    this.empName = empName;
    this.empAge = empAge;
    this.empCity = empCity;
  }
}
const empSup = new Employee(11, "Supriya", 23, "PUNE");
const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
const empSachin = new Employee(33, "Sachin", 22, "Surat");
const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");

// Collection - Collection of elements
// Elements of Datatypes - Primitive and Non primitive (Reference)
const arrayOfEmployees = [empSup, empDhir, empGayatri, empSachin];
for (const employee of arrayOfEmployees) {
  console.log(
    `Employee details are: ${employee.empId}  ${employee.empName} ${employee.empCity}`
  );
}

const setOfEmployees = new Set();
setOfEmployees.add(empSup);
setOfEmployees.add(empDhir);
setOfEmployees.add(empSachin);
setOfEmployees.add(empGayatri);
console.log(setOfEmployees);