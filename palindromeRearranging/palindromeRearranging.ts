export const palindromeRearranging = (inputString: string): boolean => inputString.split('').map((char, i, _array) => ({
  char,
  count: _array.filter(e => e === char).length
})).every(({ count }) => count % 2 === 0)

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aabbb'));
console.log(palindromeRearranging('acabcb'));