export const lateRide = (n: number): any =>
  +(n / 60).toFixed(0).toString().split('').reduce((a, c) => a + +c, 0) +
  Math.floor(+(n / 60).toFixed(2).toString().split('.')?.[1] * 0.6).toString().split('').reduce((a, c) => a + +c, 0) ?? 0;
// could be wihtin an array to make it proper one liner as well, just would be hard to follow
console.log(lateRide(240));
console.log(lateRide(808));
