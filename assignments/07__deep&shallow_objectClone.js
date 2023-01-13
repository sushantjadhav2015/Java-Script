const arrayNum = [20, 3, 4, 56, 90, 400, 49];

console.log(`======shallow clone======`);
console.log(`orignal array is :${arrayNum}`);

let cloneArrayNum = arrayNum; //shallow clone
cloneArrayNum.push(55, 66);
console.log(`Array after cloning and update : ${cloneArrayNum}`);

console.log(`\n=====Deep clone using spread operator=====`);
const arrayNumber = [20, 3, 4, 56, 90, 400, 49];
let array = [...arrayNumber]; //deep cloning in array
array.push(10, 25);
console.log(`Orignal array is :${arrayNumber}`);
console.log(`Array after deep cloning and update : ${array}`);

console.log(`\n=====Merge or concat array using spread operator====`);
const arrayEven = [2, 30, 14, 8];
let concatArray = [...arrayEven, ...arrayNum];
console.log(
  `concating or meareing of two array by using spread oprator : ${concatArray}`
);

const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindhavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567-32", "+91 9096 5678 77"],
};

console.log(
  `\na) Address of employee ${employee_info.emp_name} is: \ncolony: ${employee_info.address.locality.colony},\nstreet:${employee_info.address.locality.street},\nCity : ${employee_info.address.city}, State : ${employee_info.address.state}, Country : ${employee_info.address.state}`
);

console.log(
  `\nb) Mobile numbers of ${employee_info.emp_name} are :${employee_info.mobiles}`
);

console.log(`\n=====Deep clone using JSON.stringfy()====`);
let newEmp =JSON.parse(JSON.stringify(employee_info))// clone nested object using JSON 
newEmp.salary.july_month = "80k"; //update salary
console.log(
  `6a) Updated "Julay month" salary is: ${newEmp.salary.july_month}`
);

newEmp.address.country = "United Kingdom";
console.log(`6b) Updated "country" is : ${newEmp.address.country}`);

console.log(`\n=====Updated values for orignal & cloned object=====`);
// console.log(
//   `${employee_info.emp_id},${employee_info.emp_name},${employee_info.salary},${employee_info.address},${employee_info.mobiles}`
// );
console.log(employee_info.emp_id, employee_info.emp_name);
console.log(employee_info.salary);
console.log(employee_info.address.locality, employee_info.address.city,employee_info.address.state,employee_info.address.country);


console.log(newEmp.emp_id, newEmp.emp_name);
console.log(newEmp.salary);
console.log(newEmp.address.locality, newEmp.address.city, newEmp.address.state, newEmp.address.country);