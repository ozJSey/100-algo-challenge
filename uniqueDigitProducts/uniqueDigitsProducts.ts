export const uniqueDigitProducts = (a: number[]): number => new Set(a.map(_a => _a.toString().split('').reduce((acc, c) => acc * +c, 1))).size

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));