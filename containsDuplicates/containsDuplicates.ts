export const containsDuplicates = (a: number[]): boolean => a.length !== new Set(a).size

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
