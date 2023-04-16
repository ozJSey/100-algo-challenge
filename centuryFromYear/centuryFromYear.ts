export const centuryFromYear = (year: number): any => Number(year.toString().substring(2, 4)) > 0 ? Number(year.toString().substring(0, 2)) + 1 : Number(year.toString().substring(0, 2));

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));