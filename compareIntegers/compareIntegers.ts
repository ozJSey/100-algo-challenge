export const compareIntegers = (a: string, b: string): string => +a > +b ? "greater" : a === b ? "equal" : "less";

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));