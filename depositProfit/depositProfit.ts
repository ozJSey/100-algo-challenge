export const depositProfit = (deposit: number, rate: number, threshold: number, iterationYear = 0): number => deposit < threshold ? depositProfit(deposit * ((100 + rate) / 100), rate, threshold, iterationYear + 1) : iterationYear

console.log(depositProfit(100, 20, 170))