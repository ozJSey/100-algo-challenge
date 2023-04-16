export const evenDigitsOnly = (n: number): boolean => n.toString().split('').every(digit => +digit % 2 === 0)

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));