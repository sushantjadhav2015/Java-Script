const personalDetalis = {
  name: "sushant jadhav",
  gender: "male",
  education: "BE mechanical",
  location: "kolhapur",
};

const collegeDetails = {
  collegeName: "D Y patil college, kolhapur",
  collegeLocation: "kolhapur",
  departments: 5,
};

console.log(`Merge two opbects`);
let merge = Object.assign(personalDetalis, collegeDetails);
console.log(personalDetalis);
// console.log(`After merge two objects :`,merge);

const friendName = [
  "ketan",
  "ashitosh",
  "rohit",
  "suraj",
  "shubham",
  "sumit",
  "prhabhajan",
];
Object.freeze(friendName);

for (const iterator of friendName) {
  console.log(iterator);
}


// given string codemind technology in that we should reverse the technology word
function wordsReverser(str){
    return str.split('').reverse().join('');
  }
  console.log(`\nreverse only technology word of given  : codemind`,wordsReverser('technology'));