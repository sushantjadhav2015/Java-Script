// ``

const fullName = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";

let details = "Details ".concat(fullName).concat("  "). concat(age).concat(" ").concat(city); //this code is correct but it is not to good 
let detailsUsingPlus ="Details " +fullName+"  " + age + "  " + city;
console.log(details);
console.log(detailsUsingPlus);

let detailsUsingTemplate =`Details are ${fullName}  ${age}  ${city}`; //string template used to simplyfiy the code
console.log(detailsUsingTemplate);
