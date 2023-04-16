export const factorializeANumber = (num: number, carriedNum: number = 1): number => num === 0 ? carriedNum : factorializeANumber(num - 1, num * carriedNum)

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));