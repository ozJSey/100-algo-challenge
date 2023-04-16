export const alphabetSubsequence = (s: string): boolean => s.split('').map(c => c.charCodeAt(0)).every((c, i, a) => (c < (a?.[i + 1] ?? Infinity)))

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
