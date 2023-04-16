export const convertString = (s: string, t: string): boolean => t.length !== 1 || !t.length ? convertString(s.split('').filter((a, i) => s.split('').findIndex(c => t?.[0]) !== i).join(''), t.substring(1)) : s.includes(t);

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
