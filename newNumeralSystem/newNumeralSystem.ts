export const newNumeralSystem = (number: string): any => Array(Math.floor((number.charCodeAt(0) - 'A'.charCodeAt(0)) / 2) + 1).fill(number).map((char, index) => [String.fromCharCode(65 + index), String.fromCharCode(number.charCodeAt(0) - index)])

console.log(newNumeralSystem('G'));
console.log(newNumeralSystem('F'));
console.log(newNumeralSystem('B'));
console.log(newNumeralSystem('A'));