export const firstDuplicate = (a: number[]): any => a
  .map((v, i, arr) =>
  ({
    value: v,
    index: i,
    nextDuplicate: arr.findIndex((_v, _i) => v === _v && i !== _i)
  })).sort((a, b) => a.nextDuplicate - b.nextDuplicate).find(e => e.nextDuplicate !== -1 && e.index < a.length / 2)?.value ?? -1;

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
