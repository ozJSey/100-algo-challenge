export const confirmEnding = (str: string, target: string): boolean => str.split('').reverse().slice(0, target.length).join('') === target.split('').reverse().join('')

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
