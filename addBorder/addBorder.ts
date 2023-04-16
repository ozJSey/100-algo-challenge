export const addBorder = (picture: string[]): string[] => [Array((picture?.[0].length ?? 0) + 2).fill('*').join(''),
...picture.map(p => `*${p}*`),
Array((picture?.[0].length ?? 0) + 2).fill('*').join('')]

console.log(addBorder(["abc", "ded"]));