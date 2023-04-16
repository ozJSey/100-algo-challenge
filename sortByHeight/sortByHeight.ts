export const sortByHeight = (a: number[]): number[] => a.map((_a, i) => _a === -1 ? _a : [...a].sort((a, b) => a - b).filter(a => a !== -1)[i - a.slice(0, i).filter(a => a === -1).length]);

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));