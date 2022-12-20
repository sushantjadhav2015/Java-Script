console.log(`*********Voting Eligiblity**********`);
var votingEligiblity = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligiblity(45);
votingEligiblity(17);
votingEligiblity(8);
votingEligiblity(20);
votingEligiblity(-10);
votingEligiblity(200);
votingEligiblity(0);



console.log(`\n\n\n**********Grade Calculation**********`);
function gradeCalculation(marks) {
    if (marks>=90 && marks<100) {
        console.log(`\nFuntastic marks ${marks} : your grade is A+`); 
    }

    if (marks>=75 && marks<90) {
        console.log(`\nExcellent marks ${marks} : your grade is A`);
    }

    if (marks>=50 && marks<75) {
        console.log(`\nGood marks ${marks} : your grade is B`);
    }

    if (marks>=35 && marks<50) {
        console.log(`\nMarks is ${marks} : your grade is C, Need improvement`);
    }

    if (marks<=0 || marks>100) {
        console.log(`\nMarks ${marks} Please provide the valid marks`);
    }   

}
gradeCalculation(98);
gradeCalculation(80);gradeCalculation(90);gradeCalculation(0);gradeCalculation(150);gradeCalculation(-7);gradeCalculation(35);gradeCalculation(29);gradeCalculation(64);gradeCalculation(49);
