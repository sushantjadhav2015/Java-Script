//String template
function stringtemplateAssig(){
    console.log(`1) My dream company is "Siemens"`);
}
stringtemplateAssig();

//console on same line by using variable substitusion
var hobby1="To learn new things"
var hobby2="Bike riding"
var hobby3="reading books"
console.log(`2) My hobbies are: ${hobby1}, ${hobby2}, ${hobby3}`);

//console hobbies by using concat
var hobby=hobby1.concat(", ", hobby2,", ", hobby3)
console.log("3) My hobbies by using concat:", hobby);
