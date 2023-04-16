export const digitDegree = (n: number, degree: number = 0): number => n.toString().length !== 1 ? digitDegree(n.toString().split('').reduce((a, c) => a + +c, 0), degree += 1) : degree;

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));