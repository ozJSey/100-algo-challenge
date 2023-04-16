export const stringsConstruction = (a: string, b: string, times = 0): number =>
  Math.min(...b.split('').map(c => a.split('').some(_c => _c === c) ? Math.floor((b.split('').filter(_c => _c === c).length / a.split('').filter(_c => _c === c).length)) : 0));

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('abc', 'abccbas'));