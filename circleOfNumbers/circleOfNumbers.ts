export const circleOfNumbers = (n: number, firstNumber: number): number => firstNumber + n / 2 < n ? firstNumber + n / 2 : firstNumber - n / 2

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(14, 2));
console.log(circleOfNumbers(20, 1));