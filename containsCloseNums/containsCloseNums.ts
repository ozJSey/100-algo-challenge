export const containsCloseNums = (nums: number[], k: number): boolean => Math.abs(nums.indexOf(nums.find(num => nums.indexOf(num) !== nums.lastIndexOf(num)) ?? 0) - nums.lastIndexOf(nums.find(num => nums.indexOf(num) !== nums.lastIndexOf(num)) ?? nums.length)) <= k
// fallbacks to false because if no repetition meaning no 2 numbers to see num

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));