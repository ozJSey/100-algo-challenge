export const almostIncreasingSequence = (sequence: number[]): boolean =>
  sequence.reduce((acc, curr, index, _sequence) =>
    curr > _sequence[index + 1] || curr >= _sequence[index + 2] ? acc += 1 : acc, 0
  ) <= 1;

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 3, 4]))
console.log(almostIncreasingSequence([1, 3, 9, 2, 3])) 