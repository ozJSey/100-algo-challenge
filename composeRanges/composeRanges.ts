export const composeRanges = (nums: number[]): any[] =>
  nums.filter(e => !nums.includes(e + 1) || !nums.includes(e - 1))
    .map((e, _i, _a) => nums.includes(e + 1) ? `${e}->${_a[_i + 1]}` : e)
    .filter((__e, __i, __a) => !__a.some(member => member.toString().split('->')?.[1] === __e.toString()));

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-5, -4, -1, 0, 1, 2, 3, 4, 5, 6, 7, 9, 15, 16, 29, 32, 33]));