export const arrayPreviousLess = (items: number[]): number[] => items.map((item, i) => (items?.[i - 1] && items?.[i - 1] < item) ? items?.[i - 1] : -1);

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));