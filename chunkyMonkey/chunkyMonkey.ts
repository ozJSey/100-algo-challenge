export const chunkyMonkey = (arr: any[], size: number): any[][] => Array(Math.ceil(arr.length / (size ?? 1))).fill([]).map((__notUsed, index) => index * size).map(startingPoint => arr.slice(startingPoint, (startingPoint || 1) * size));

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7], 4));
console.log(chunkyMonkey([0, 1, 2, 3, 4], 5));