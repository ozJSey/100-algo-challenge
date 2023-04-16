export const matrixElementsSum = (matrix: any[][]): number =>
  matrix.map((row, i) =>
    row.flatMap((col, _i) => matrix?.[i - 1]?.[_i] === 0 ? 0 : col))
    .flat(2)
    .reduce((a, c) => a + c, 0);

console.log(matrixElementsSum(
  [[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]
));
