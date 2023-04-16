export const maxMultiple = (divisor: number, bound: number): number => Math.floor(bound / divisor) * divisor;

console.log(maxMultiple(3, 10));