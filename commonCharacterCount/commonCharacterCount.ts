export const commonCharacterCount = (s1: string, s2: string): number => [...new Set(s1.split(''))]?.map(c =>
  Math.min(s1.split('').filter(_c => _c === c).length, s2.split('').filter(_c => _c === c).length),
).reduce((acc, curr) => acc + curr ?? 0, 0); // Doesn't know what repeats but knows repeating character count!

console.log(commonCharacterCount('aabcc', 'adcaa'));