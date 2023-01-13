array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
array_roll_numbers.reverse();
console.log(`1) array of roll number after reverse : ${array_roll_numbers}`);

array_roll_numbers.sort();
console.log(`2) sort the array : ${array_roll_numbers}`);

array_roll_numbers.sort((n1, n2) => {
  return n1 > n2 ? 1 : -1;
});
console.log(`3) sorted array in ascending array : ${array_roll_numbers}`);
console.log(`---------------------------------------------------------`);

console.log(array_roll_numbers);

console.log(
  `4) Bigest number is :${array_roll_numbers[array_roll_numbers.length - 1]}`
);

console.log(`5) smallest number is :${array_roll_numbers[0]}`);

// remove duplicate element from array buy using set method.
const removeDuplicat = [...new Set(array_roll_numbers)]
console.log(`6) Removed duplicate number from array : ${removeDuplicat}`);
