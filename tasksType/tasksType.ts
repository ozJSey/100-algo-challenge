export const tasksTypes = (deadlines: number[], day: number): number[] =>
  [
    deadlines.filter(deadline => deadline - day <= 0).length,
    deadlines.filter(deadline => 0 < deadline - day && deadline - day <= 7).length,
    deadlines.filter(deadline => deadline - day > 7).length
  ];

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
