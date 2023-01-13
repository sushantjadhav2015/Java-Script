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

const array_emps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`----Employee from Wipro company----`);
const WiproEmp = array_emps.filter((employee) => {
  return employee.emp_company == "Wipro";
});
WiproEmp.forEach((element) => {
  console.log(element);
});

console.log(`-----Employee from IT And HR dept.-----`);
const arrayOfITOrHR = array_emps.filter((employee) => {
  return employee.emp_dept == "HR" || employee.emp_dept == "IT";
});
arrayOfITOrHR.forEach((element) => {
  console.log(element);
});

console.log(`-----employee whoes ID is grater than 50-----`);
const arrayOfID = array_emps.filter((employee) => employee.emp_ID > 50);
arrayOfID.forEach((element) => {
  console.log(element);
});

console.log(`----employee name start with A,V,M---`);
array_emps.filter((employee) => {
  if (
    employee.emp_name.startsWith("A") ||
    employee.emp_name.startsWith("V") ||
    employee.emp_name.startsWith("M")
  ) {
    console.log(employee);
  }
});

console.log(`----Find the avrage salary---`);
const arrayOfSalary = array_emps.reduce((runningTotal, value) => {
  return runningTotal + value.emp_salary;
}, 0);
console.log(arrayOfSalary / array_emps.length, `INR`);

console.log(`----Average salary for IT department----`);
const arrayOfIT = array_emps.filter((employee) => {
  return employee.emp_dept == "IT";
});
const arrayOfSal = arrayOfIT.reduce((runingTotal, value) => {
  return runingTotal + value.emp_salary;
}, 0);
console.log(arrayOfSal / arrayOfIT.length, ` INR`);
