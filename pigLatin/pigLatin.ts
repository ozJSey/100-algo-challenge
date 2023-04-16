const isVowel = (str: string) => /\b([^aeiou\si]+)\b/ig.test(str);

export const pigLatin = (str: string): any => isVowel(str?.substring(0, 1)) ? `${str.slice(str.split('').findIndex(s => !isVowel(s)))}${str.slice(0, str.split('').findIndex(s => !isVowel(s)))}ay` : `${str}way`

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
