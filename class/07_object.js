const person = {
  height: 6,
  weight: 70,
  age: 23,
  name: "Billgates",
  speck: function () {
    console.log("hey i can speck english");
  },
};
console.log(typeof person);
console.log(person);

console.log(`1) accessing object properties using dot notation`);
const personAge = person.age; // access object properties
console.log(`Person age is: ${personAge}`);

console.log(`=== Accessing an function from an object====`);
person.speck();

console.log(` accessing object properties using sqaure bracket notation`);
const personName = person["name"]; //access object properties with bracket
console.log(personName);

console.log(`====Adding an property into an object====`);
person.company = "marman plastic work";
console.log(person);

console.log(`====Deleting an property into an object====`);
delete person.weight;
console.log(person);

console.log(`====creating Empty object ====`);
const mobile = {};
console.log(mobile);
mobile.company = "Micromax";
mobile.camera = "20px";
console.log(mobile);

console.log(`====How to add member function in object ====`);
let walk = function () {
  console.log(`Hey i can run and walk`);
};
console.log(person);

console.log(`=====Nested object=====`);
const student = {
  name: "Stew Jobs",
  age: 50,
  city: "pune",
  marks: {
    science: 70,
    math: 90,
    english: 87,
    add: function () {
      return this.science + this.math + this.english;
    },
  },
  familyMemberNames: ["Tony", "Lonny", "Jenny", "Watigton"],
};

console.log(`Accessing an Nested object property`);
const scienceMark = student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`accessing an nested object function`);
const totalMarks = student.marks.add();
console.log(`Total marks: ${totalMarks}`);

console.log(`Deleting an Nested object property`);
delete student.marks.english;
console.log(student);

console.log(`Accessing an array`);
console.log(student.familyMemberNames);

console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));
