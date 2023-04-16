export const incrementalBackups = (lastBackupTime: number, changes: number[][]): number[] => [...new Set(changes.filter(change => change[0] > lastBackupTime).map(change => change[1]).sort((a, b) => a - b))];

console.log(incrementalBackups(461620205, [[461620203, 1],
[461620204, 2],
[461620205, 6],
[461620206, 5],
[461620207, 3],
[461620207, 5],
[461620208, 1]]));
