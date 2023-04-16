export const squareDigitsSequence = (a0: number, sequence: number[] = []): number => sequence.includes(a0) ? sequence.length + 1 : squareDigitsSequence(a0.toString().split('').reduce((acc, c) => acc + (Number(c) ** 2), 0), sequence?.concat(a0))

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));