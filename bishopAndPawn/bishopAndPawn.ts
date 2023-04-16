export const bishopAndPawn = (bishop: string, pawn: string): boolean =>
  Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ===
  Math.abs(Number(bishop.substring(1, 2)) - Number(pawn.substring(1, 2)));

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('b1', 'g6'));
console.log(bishopAndPawn('c3', 'a1'));
console.log(bishopAndPawn('c2', 'a5'));
console.log(bishopAndPawn('c2', 'a4'));