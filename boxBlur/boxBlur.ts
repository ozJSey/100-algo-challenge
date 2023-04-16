export const boxBlur = (image: number[][]): number[][] => image.map((row, i) => row.flatMap((col, _i) =>
  /* find average */
  Math.floor((
    image?.[i - 1]?.[_i - 1] +
    image?.[i - 1]?.[_i] +
    image?.[i - 1]?.[_i + 1] +
    image?.[i]?.[_i - 1] +
    image?.[i]?.[_i] +
    image?.[i]?.[_i + 1] +
    image?.[i + 1]?.[_i - 1] +
    image?.[i + 1]?.[_i] +
    image?.[i + 1]?.[_i + 1]
  )
    / image.length ** 2)))
  /* cut edges */
  .filter((picture, index, array) => !(index === 0 || index === array.length - 1))
  .map(array => array.slice(1, array.length - 1));

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));

console.log(boxBlur([[1, 1, 1, 2],
[1, 7, 99, 5],
[1, 20, 1, 4],
[1, 2, 95, 4]]));