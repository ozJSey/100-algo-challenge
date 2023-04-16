export const isCaseInsensitivePalindrome = (inputString: string): boolean => inputString.split('').every((char, i, inputArray) => char?.toLowerCase() === inputArray?.[inputString.length - i - 1]?.toLowerCase());

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('Aaaa'));
console.log(isCaseInsensitivePalindrome('abac'));