export const findEmailDomain = (address: string): string => address.slice(address.lastIndexOf('@') + 1)

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
