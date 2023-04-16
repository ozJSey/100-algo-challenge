export const houseOfCats = (legs: number): number[] => {
  const possibilities: number[] = [];
  let n = 0;
  while (n < (legs / 2)) {
    possibilities.push(legs - (4 * n));
    n++;
  }
  return possibilities.filter(x => x > 0).sort((a, b) => a - b).map(x => x / 2);
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));