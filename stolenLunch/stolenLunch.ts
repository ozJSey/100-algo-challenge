const CODE = [
  ['a', 0],
  ['b', 1],
  ['c', 2],
  ['d', 3],
  ['e', 4],
  ['f', 5],
  ['g', 6],
  ['h', 7],
  ['i', 8],
  ['j', 9],
];

export const stolenLunch = (note: string): string => note.split(' ').map(word => word.split('').flatMap(char => CODE.find(_code => _code.toString().includes(char))?.[Number.isInteger(+char) ? 0 : 1] ?? char).join('')).join(' ');

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));