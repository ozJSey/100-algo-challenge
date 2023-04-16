export const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number[] => inputArray.map((v, _i) => {
  let sum = 0;
  if (inputArray.slice(_i, _i + k).length < k) return 0;
  for (let i = 0; i < k; i++) {
    sum += inputArray?.[i + _i] ?? 0;
  }
  return sum;
});

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))