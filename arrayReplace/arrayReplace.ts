export const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number): number[] => inputArray.map(value => value === elemToReplace ? substitutionElem : value)

console.log(arrayReplace([1, 2, 1], 1, 3));