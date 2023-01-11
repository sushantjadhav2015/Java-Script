class Employee {
  constructor(emp_ID, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_ID = emp_ID;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

//TCS employee details
console.log(`1)--------------------------------------------------`);
array.forEach((Employee) => {
  if (Employee.emp_company == "TCS") {
    console.log(
      `Name :${Employee.emp_name} and company: ${Employee.emp_company}`
    );
  }
});

console.log(`\n2)--------------------------------------------------`);
array.forEach((Employee) => {
  if (Employee.emp_salary >= 50000) {
    console.log(Employee);
  }
});

console.log(``);
var sum = 0;
array.forEach((Employee) => {
  sum = sum + Employee.emp_salary;
});
console.log(`4) Sum of all employee salary: ${sum}`);

console.log(` `);
let averageOfSalary = sum / array.length;
console.log(`5) Average salary : ${averageOfSalary}`);

console.log(`\n6)------------------------------------------`);
array.forEach((Employee) => {
  if ((Employee.emp_dept == "HR" || Employee.emp_dept == "IT") && Employee.emp_salary >= 75000) {
    console.log(Employee);
  }
});
