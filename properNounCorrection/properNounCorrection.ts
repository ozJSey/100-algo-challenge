export const properNounCorrection = (noun: string): string => `${noun.charAt(0).toUpperCase()}${noun.slice(1).toLowerCase()}`

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));