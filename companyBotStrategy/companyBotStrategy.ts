export const companyBotStrategy = (trainingData: number[][]): number => trainingData
  .filter(([, correctness]) => correctness === 1)
  .reduce((acc, [time]) => acc + time, 0)
  / (trainingData.filter(([, correctness]) => correctness === 1).length || 0) || 0;

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
