export const isLucky = (n: number): boolean =>
  [
    n.toString().slice(0, Math.floor(n.toString().length / 2)).split('').reduce((a, c) => a + +c, 0),
    n.toString().slice(Math.floor(n.toString().length / 2)).split('').reduce((a, c) => a + +c, 0)
  ].reduce((a, c) => a ^ +c, 0) === 0

console.log(isLucky(1230));
console.log(isLucky(239017));