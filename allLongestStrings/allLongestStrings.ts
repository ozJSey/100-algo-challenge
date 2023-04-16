export const allLongestStrings = (inputArray: string[]): string[] => inputArray.filter(arr => arr.length === Math.max(...inputArray.map(s => s.length ?? 0)));
// I didn't't care about the performance here we are tryna be fancy overall the challenge normally we save largest number to a variable and filter with that
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));