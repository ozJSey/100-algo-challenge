export const alternatingSums = (a: number[]): number[] =>
  [
    a.filter((_a, i) => i % 2 === 0).reduce((a, c) => a + (c ?? 0), 0),
    a.filter((_a, i) => i % 2 !== 0).reduce((a, c) => a + (c ?? 0), 0)
  ];

console.log(alternatingSums([50, 60, 60, 45, 70]));