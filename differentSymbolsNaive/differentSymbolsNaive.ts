export const differentSymbolsNaive = (s: string): number => new Set(s.split('')).size

console.log(differentSymbolsNaive('cabca'));
