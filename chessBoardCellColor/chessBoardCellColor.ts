export const chessBoardCellColor = (cell1: string, cell2: string) => (cell1.charCodeAt(0) + +cell1.substring(1)) % 2 === (cell2.charCodeAt(0) + +cell2.substring(1)) % 2;

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('A1', 'H4'));
console.log(chessBoardCellColor('E8', 'G3'));
console.log(chessBoardCellColor('F6', 'D2'));
