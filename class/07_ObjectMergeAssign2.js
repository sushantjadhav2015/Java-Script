const car = {
  carName: "Creta SX",
  company: "Hundai",
  launchYear: 2017,
};

const carEngine = {
  eninePower: "1499CC",
  maxPower: "113 BHP",
};

console.log(`=====merge or concat using Object.assign()=====`);
let mergeObj = Object.assign(car, carEngine);
console.log(`concat car and car engine :`, mergeObj);

console.log(`\n====merge or concat using spread oprator====`);
const newObject={...car,...carEngine};
console.log(newObject);
