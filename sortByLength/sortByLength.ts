export const sortByLength = (inputArray: string[]): string[] => inputArray.sort((a, b) => a.length - b.length);

console.log(sortByLength(["abc",
  "",
  "aaa",
  "a",
  "zz"]));