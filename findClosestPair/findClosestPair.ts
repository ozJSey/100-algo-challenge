export const findClosestPair = (numbers: number[], sum: number): number => numbers.flatMap((number, i) => numbers.flatMap((_number, _i) => ({
  numberDif: Math.abs(i - _i),
  summation: number + _number,
}))).filter(pair => pair.summation === sum).sort((a, b) => a.numberDif - b.numberDif)?.[0]?.numberDif ?? -1

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));