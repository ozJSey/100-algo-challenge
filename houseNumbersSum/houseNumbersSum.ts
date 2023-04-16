export const houseNumbersSum = (inputArray: number[]): number => inputArray.slice(0, inputArray.findIndex(num => num === 0)).reduce((a, c) => a + c, 0);

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));