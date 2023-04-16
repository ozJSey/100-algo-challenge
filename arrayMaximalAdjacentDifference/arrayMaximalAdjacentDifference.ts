export const arrayMaximalAdjacentDifference = (inputArray: number[]): number => Math.max(...inputArray.map((v, i) => inputArray?.[i + 1] ? Math.abs(v - inputArray?.[i + 1]) : -Infinity))

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 1, 11, 5]));
console.log(arrayMaximalAdjacentDifference([2, 1, 11, 25]));