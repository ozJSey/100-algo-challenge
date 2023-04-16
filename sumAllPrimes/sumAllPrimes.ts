const allPrimesUntilValue = (value: number) => {
  const primes: number[] = [];
  for (let number = 3; number <= value; number += 2) {
    let flag = 0;
    for (let divider = 2; divider < number; divider++) {
      if (number % divider == 0) {
        flag = 1;
        break;
      }
    }
    if (number > 1 && flag == 0) {
      primes.push(number);
    }
  }
  return value >= 2 ? [2, ...primes] : [0];
}

export const sumAllPrimes = (num: number): number => allPrimesUntilValue(num).reduce((a, c) => a + c, 0);

console.log(sumAllPrimes(2));
console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));