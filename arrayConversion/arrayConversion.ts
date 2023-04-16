export const arrayConversion = (inputArray: number[], operation: 'multiply' | 'sum' = 'sum'): number =>
  inputArray.length === 1 ? inputArray?.[0] : arrayConversion(inputArray.map((e, i, _inputArray) => i % 2 === 0 ? operation === 'multiply' ? e * _inputArray[i + 1] : e + _inputArray[i + 1] : 0).filter(e => e), operation === 'multiply' ? 'sum' : 'multiply');

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
