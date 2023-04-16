export const crossingSum = (matrix: number[][], a: number, b: number): number => [...matrix[a], ...matrix.map((row, i) => i === a ? 0 : row[b])].reduce((a, c) => a + c, 0)

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));