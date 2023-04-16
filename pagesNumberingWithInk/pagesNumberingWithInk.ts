export const pagesNumberingWithInk = (current: number, numberOfDigits: number, printed?: number): number => numberOfDigits > current.toString().length ? pagesNumberingWithInk(current++, numberOfDigits - current.toString().length, current) : printed ?? current;

console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
console.log(pagesNumberingWithInk(1, 0));