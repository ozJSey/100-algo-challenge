export const seekAndDestroy = (arr1: number[], arr2: number[]): number[] => arr1.filter(v => !arr2.includes(v));

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
