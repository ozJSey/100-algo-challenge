export const fermactor = (n: number): number[] => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i ** 2 - j ** 2 === n) {
        return [i, j];
      }
    }
  }
  return [n, 1]
}

console.log(fermactor(15));