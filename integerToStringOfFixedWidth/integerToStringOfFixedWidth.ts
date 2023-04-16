export const integerToStringOfFixedWidth = (number: number, width: number): string =>
  `${width >= number.toString().length ? '0'.repeat(width - number.toString().length) + number.toString() : number.toString().slice(width)}`

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
console.log(integerToStringOfFixedWidth(1234, 50));
