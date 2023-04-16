export const sumOfTwo = (a: number[], b: number[], v: number): boolean => a.map(_a => b.flatMap(_b => _a + _b)).flat().includes(v);

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 32));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 15));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 33));