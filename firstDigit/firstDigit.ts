export const firstDigit = (inputString: string): string => inputString.split('').find(char => Number.isInteger(+char)) || '';

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
