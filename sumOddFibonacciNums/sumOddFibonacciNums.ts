const limitedAndOddFibonacciNumbers = (limit: number) => {
  const fibonacciNumbers = [1, 1];
  let n = 1;
  while (n < limit) {
    fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 2] + fibonacciNumbers[fibonacciNumbers.length - 1]);
    n = fibonacciNumbers[fibonacciNumbers.length - 1];
  }
  return fibonacciNumbers.filter(e => e % 2 !== 0 && e < limit);
}

export const sumOddFibonacciNums = (num: number): number => limitedAndOddFibonacciNumbers(num).reduce((a, c) => a + c, 0);

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));