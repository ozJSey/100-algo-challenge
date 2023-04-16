export const alphabeticShift = (inputString: string): string => inputString.split('').map(char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)).join('')

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('ozgur'));
console.log(alphabeticShift('aaabbbccxxxyyyzz'));