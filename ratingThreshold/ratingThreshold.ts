export const ratingThreshold = (threshold: number, ratings: number[][]): number[] => [ratings.filter((rating) => (rating.reduce((a, c) => a + c, 0)) / rating.length < threshold).length]

console.log(ratingThreshold(3.5,
  [[3, 4],
  [3, 3, 3, 4],
  [4]]));