export const minesweeper = (matrix: boolean[][]): number[][] =>
  matrix.map((row, i) =>
    row.flatMap((col, _i) => (matrix?.[i - 1]?.[_i - 1] ? 1 : 0) +
      (matrix?.[i - 1]?.[_i] ? 1 : 0) +
      (matrix?.[i - 1]?.[_i + 1] ? 1 : 0) +
      (matrix?.[i]?.[_i - 1] ? 1 : 0) +
      (matrix?.[i]?.[_i + 1] ? 1 : 0) +
      (matrix?.[i + 1]?.[_i - 1] ? 1 : 0) +
      (matrix?.[i + 1]?.[_i] ? 1 : 0) +
      (matrix?.[i + 1]?.[_i + 1] ? 1 : 0)
    ) /* ¯\_(ツ)_/¯ */
  )

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));