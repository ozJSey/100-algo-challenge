export const checkPalindrome = (inputString: string): boolean => inputString.split('').every((char, i, inputArray) => char === inputArray?.[inputString.length - i - 1]);

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
