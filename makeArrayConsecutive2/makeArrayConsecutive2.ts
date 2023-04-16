export const makeArrayConsecutive2 = (statues: number[]): number =>
  Array(Math.max(...statues) - Math.min(...statues) + 1).fill(Math.max(...statues))
    .map((d, i) => d - i)
    .filter(d => !statues.includes(d)).length

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1]));
console.log(makeArrayConsecutive2([1, 2, 4]));