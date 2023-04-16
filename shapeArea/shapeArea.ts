export const shapeArea = (n: number, carry: number = 1, iteration: number = 1): number => iteration === n ? carry : shapeArea(n, carry + (4 * iteration), iteration += 1)

// 1 5 13 25 41 61...
console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));
console.log(shapeArea(6));