export const missingLetters = (str: string): string => ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].slice(str?.[0].charCodeAt(0) - 97, str?.[str.length - 1].charCodeAt(0) - 97).filter(each => !str.includes(each)).join('')
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));