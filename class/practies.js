console.log(`*********Voting Eligiblity**********`);
var votingElisiblity = function (age) {
    if (age>=18 && age<=120) {
        console.log(` age ${age} : he is eligible for vote`);   
    }
    if (age<18 && age>0) {
        console.log(` age ${age} : he is not eligible for vote`);
    }
    if (age<0 || age>120)  {
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