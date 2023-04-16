export const arrayChange = (inputArray: number[]): number =>
  inputArray.map((num, i, _inputArray) => num >= (_inputArray?.[i + 1] ?? 0) && _inputArray?.[i + 1] ? num - _inputArray[i + 1] + 1 : 0)
    .filter(a => a)
    .reduce((a, c, i) => a + c + i, 0);

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 5, 6, 6, 6]));
console.log(arrayChange([1, 2, 4, 6, 10, 14, 12]));
console.log(arrayChange([7, 7, 7, 7, 7, 7, 7]));
console.log(1 + 2 + 3 + 4 + 5 + 6);