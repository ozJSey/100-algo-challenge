export const adjacentElementsProduct = (inputArray: number[]): number => Math.max(...inputArray.map((num, i, _inputArray) => num * (_inputArray[i + 1] ?? 0)))

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));