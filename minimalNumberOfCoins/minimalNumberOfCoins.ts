export const minimalNumberOfCoins = (coins: number[], price: number): number =>
  coins
    .sort((a, b) => b - a)
    .map((c, i, _coins) => Math.floor((price % (_coins?.[i - 1] ?? Infinity)) / c))
    .reduce((a, c) => a + c, 0)
// fix edge case
console.log(minimalNumberOfCoins([1, 2, 10], 29));
console.log(minimalNumberOfCoins([1, 2, 10, 15, 20], 229));
console.log(minimalNumberOfCoins([1, 2, 10, 15, 20], 135));