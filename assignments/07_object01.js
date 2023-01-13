const profssor = {
  name: "ajit ladgaonkar",
  college: "DYPTC",
  experiance: 10,
  degree: {
    engineering: "CSC",
    postGraduation: " Computer programing",
    PHD: " Adv computing",
    add: function () {
      return this.engineering + this.postGraduation + this.PHD;
    },
  },
  certificate: {
    participation: `Hacker ranck participation`,
    course: `Certificate in IFE course`,
    Programming: `Certificate in Adv Programming`,
  },
};

console.log(profssor);

const totalDegree = profssor.degree.add();
console.log(`\nTeachers degrees are :`, totalDegree);

profssor.adress = "warnanager, kolhapur";
profssor.age = 32;
profssor.gender = "male";
console.log(`\nAdding few more properties :`, profssor);

profssor.experiance = 15;
console.log(`\nexperiance updated :`, profssor);

delete profssor.college;
console.log(`\ncollege property deleted :`, profssor);

profssor.certificate.certificates= "certificates";
console.log(`\n Added new certificate :`, profssor);

const resultCertificate = profssor.certificate
console.log(`\nlog nested function : `,resultCertificate);