console.log(`**********Check Voting Eligiblity by using If_Else**************`);
var votingEligiblity = function (age) {
  if (typeof age == "number") {
    console.log(`Valid number ${age}`);
  }

  if (age <= 0 || age > 120) {
    console.log(`your age ${age}: Invalid data`);
  } else {
    if (age > 18 && age < 120) {
      console.log(`your age ${age}: you are eligible for vote`);
    } else {
      console.log(`your age ${age}: you are not eligible for vote`);
    }
  }
};
votingEligiblity(45);
votingEligiblity(1117);
votingEligiblity(8);
votingEligiblity(20);
votingEligiblity(-10);
votingEligiblity(200);
votingEligiblity(0);

console.log(`\n\n**********Grade calculation with if_else**************`);
function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100) {
    console.log(`   Marks ${marks} : Invalid Data`);
  } else {
    if (marks >= 90 && marks < 100) {
      console.log(` Funtastic marks ${marks} : your grade is A+`);
    }

    if (marks >= 75 && marks < 90) {
      console.log(` Excellent marks ${marks} : your grade is A`);
    }

    if (marks >= 50 && marks < 75) {
      console.log(` Good marks ${marks} : your grade is B`);
    }

    if (marks >= 35 && marks < 50) {
      console.log(` Marks is ${marks} : your grade is C, Need improvement`);
    }

    if (marks <= 0 || marks > 100) {
      console.log(` Marks ${marks} Please provide the valid marks`);
    }
  }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
