export const longestDigitsPrefix = (inputString: string): string => inputString.match(/\d*/g)?.sort((a, b) => b.length - a.length)?.[0].toString() ?? '';

console.log(longestDigitsPrefix('123aa1'));