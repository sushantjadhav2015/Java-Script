console.log(`*********Voting Eligiblity**********`);
var votingElisiblity = function (age) {
    if (age>=18) {
        console.log(` age ${age} : he is eligible for vote`);   
    }
    if (age=1 && age<17) {
        console.log(` age ${age} : he is not eligible for vote`);
    }
    if (age<=0 || age>120) {
        console.log(` age ${age} : invalid data`);
    }
}
votingElisiblity(45);
votingElisiblity(17);
votingElisiblity(8);
votingElisiblity(20);
votingElisiblity(-10);
votingElisiblity(200);
votingElisiblity(0);



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
