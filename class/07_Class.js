class Employee {
  constructor(name, ID, age, city) {
    this.name = name;
    this.ID = ID;
    this.age = age;
    this.city = city;
  }
  details() {
    console.log(this.name, this.ID, this.age, this.cityh);
  }
}
let empSmith = new Employee("smith", 33, 26, "kolhapur");
let empsush = new Employee("sushant", 25, 27, "pune");
let empketan = new Employee("ketan", 13, 35, "mumbai");
console.log(empSmith);
console.log(empsush);
console.log(empketan);
console.log(empSmith.name, empSmith.age, empSmith.ID, empSmith.city);

// name,  this are the properties inisilize with the help of constructor
// ID,
// age,
// city
empsush.details();
// 
// 
// 
// student blue print
