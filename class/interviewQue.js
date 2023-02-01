const response = {
  maran: {count: 1},
  gas: {count: 2},
  prelude: {count: 5},
  keys: ["maran", "gas", "prelude"],
};

let add = 0;
response.keys.forEach(value => {
    add+=response[value].count
});
console.log(add);

console.log(response.gas.count);
