export const addTwoDigits = (n: any): number =>
  n.toString().split('')?.map(_n => +_n).reduce((a, c) => a + c, 0) ?? 0

console.log(addTwoDigits(29));
console.log(addTwoDigits(99));
console.log(addTwoDigits(0));
console.log(addTwoDigits(11));