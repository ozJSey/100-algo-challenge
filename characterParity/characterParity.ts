export const characterParity = (symbol: string): string => !Number.isNaN(+symbol % 2) ? +symbol % 2 === 0 ? "even" : "odd" : "not a digit";

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
